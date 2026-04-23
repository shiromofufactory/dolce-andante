#!/usr/bin/env python3
"""
chroma_key.py ― グリーンバック／マゼンタバック画像を透過PNGに変換

使い方：
    python3 tools/chroma_key.py assets/characters/mio_shy.png
    python3 tools/chroma_key.py assets/characters/*.png
    python3 tools/chroma_key.py --color magenta assets/characters/kaoru_default.png
    python3 tools/chroma_key.py --tolerance 110 --softness 24 ...

動作：
  - RGB 入力 → chroma key で背景を除去して RGBA 出力 + despill（緑の色かぶり除去）
  - RGBA 入力 → 既存の alpha を維持したまま despill のみ実行（縁の緑フリンジ除去）

依存：
    pip install pillow numpy
"""
import argparse
import os
from PIL import Image
import numpy as np

COLORS = {
    "green":   (0, 255, 0),
    "magenta": (255, 0, 255),
    "auto":    None,   # 画像四隅の平均色を背景色とする
}

def detect_bg_color(img_path, sample=20):
    """画像の四隅の平均色を背景色として推定"""
    im = Image.open(img_path).convert("RGB")
    arr = np.array(im)
    h, w = arr.shape[:2]
    corners = np.concatenate([
        arr[:sample, :sample].reshape(-1, 3),
        arr[:sample, -sample:].reshape(-1, 3),
        arr[-sample:, :sample].reshape(-1, 3),
        arr[-sample:, -sample:].reshape(-1, 3),
    ])
    return tuple(corners.mean(axis=0).astype(int))

def process(img_path, target_color=(0, 255, 0), tolerance=110, edge_softness=24,
            despill_strength=1.0):
    """
    target_color:    除去対象の RGB
    tolerance:       色距離の閾値（0=完全一致のみ、255=すべて除去）
    edge_softness:   境界のグラデーション幅（ピクセル）
    despill_strength: 緑の色かぶり除去の強度（0=なし、1=完全）
    """
    im = Image.open(img_path)
    has_alpha = im.mode == "RGBA"
    im = im.convert("RGBA")
    arr = np.array(im).astype(np.float32)
    rgb = arr[..., :3]
    alpha_orig = arr[..., 3]
    target = np.array(target_color, dtype=np.float32)

    # 色距離
    dist = np.sqrt(np.sum((rgb - target) ** 2, axis=-1))

    # --- 1. chroma-key alpha の計算 ---
    t_in = tolerance
    t_out = tolerance + edge_softness
    alpha_chroma = np.clip((dist - t_in) / max(t_out - t_in, 1) * 255, 0, 255)

    # RGB 入力の場合は chroma alpha を採用
    # RGBA 入力の場合は既存 alpha と min を取る（透明部分を勝手に不透明化しない）
    if has_alpha:
        final_alpha = np.minimum(alpha_orig, alpha_chroma)
    else:
        final_alpha = alpha_chroma

    # --- 2. Despill（色かぶり除去）---
    # 縁のピクセル（alphaが中間的な部分）にだけ強めに適用し、
    # 中央部（alpha=255）は元の色を極力保持する
    if target[1] > target[0] and target[1] > target[2]:
        # 緑系：G > max(R,B) のピクセルで G を減らす
        rb_max = np.maximum(rgb[..., 0], rgb[..., 2])
        excess = np.maximum(rgb[..., 1] - rb_max, 0)
        # edge_factor: 完全不透明(alpha=255)は 0、中間(alpha=128)は 0.6、完全透明(alpha=0)は 1.0
        alpha_norm = final_alpha / 255.0
        edge_factor = (1.0 - alpha_norm) ** 1.5  # 中央は despill しない
        edge_factor *= despill_strength
        rgb[..., 1] -= excess * edge_factor
        # 除去分のごく一部だけ R/B に配分
        rgb[..., 0] += excess * edge_factor * 0.1
        rgb[..., 2] += excess * edge_factor * 0.1
    elif target[0] > target[1] and target[2] > target[1]:
        # マゼンタ系
        g = rgb[..., 1]
        r_excess = np.maximum(rgb[..., 0] - g, 0)
        b_excess = np.maximum(rgb[..., 2] - g, 0)
        alpha_norm = final_alpha / 255.0
        edge_factor = (1.0 - alpha_norm) ** 1.5
        edge_factor *= despill_strength
        rgb[..., 0] -= r_excess * edge_factor
        rgb[..., 2] -= b_excess * edge_factor

    rgb = np.clip(rgb, 0, 255)
    arr[..., :3] = rgb
    arr[..., 3] = final_alpha

    out = Image.fromarray(arr.astype(np.uint8), mode="RGBA")
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="+", help="処理する画像ファイル")
    ap.add_argument("--color", choices=list(COLORS.keys()), default="green")
    ap.add_argument("--tolerance", type=int, default=100, help="色距離の閾値（デフォルト100）")
    ap.add_argument("--softness", type=int, default=20, help="境界のぼかし幅（デフォルト20）")
    ap.add_argument("--despill", type=float, default=0.8, help="色かぶり除去強度（0〜1.5、デフォルト0.8）")
    args = ap.parse_args()

    for p in args.paths:
        if not os.path.exists(p):
            print(f"  NOT FOUND: {p}")
            continue
        if args.color == "auto":
            target = detect_bg_color(p)
            print(f"  [auto] detected background: RGB{target}")
        else:
            target = COLORS[args.color]
        out = process(p, target_color=target,
                      tolerance=args.tolerance,
                      edge_softness=args.softness,
                      despill_strength=args.despill)
        out.save(p)
        alpha = np.array(out)[..., 3]
        transparent = (alpha == 0).mean() * 100
        opaque = (alpha == 255).mean() * 100
        print(f"{p} → RGBA {out.size} 透明={transparent:.1f}% 不透明={opaque:.1f}%")

if __name__ == "__main__":
    main()
