# Dolce andante

2005年、銀杏並木の、やわらかい日々。大学オーケストラのノベルゲーム。

## 概要

- 舞台：2005年6月〜12月、大学3年生のふれんちを主人公としたノベルゲーム
- プレイ時間：約2時間（ルートによる）
- **エンディング14種類**（ハッピー／ビタースイート／フレンド／ノーマル／バッド）

## 動作環境

- モダンブラウザ（Chrome / Safari / Firefox / Edge 最新版）
- **推奨：横画面・PCまたはスマホ横向き**
- スマホはPWAとしてインストール可能

## ローカルでの起動

静的ファイルなので、ローカルHTTPサーバーで起動してください：

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve
```

ブラウザで `http://localhost:8000` を開く。

※ `file://` 直接開きでもゲームは動きますが、Service Worker（PWAオフライン対応）は HTTPS/localhost 環境が必要です。

## 制作

- 企画・シナリオ：shiromofufactory
- 実装協力：Claude (Anthropic)
- イラスト：Nano Banana 2 (Gemini 2.5 Flash Image)
- BGM：[甘茶の音楽工房](https://amachamusic.chagasi.com/)

## ライセンス

シナリオ・コード：私的作品
BGM・イラストは各配布元のライセンスに従う
