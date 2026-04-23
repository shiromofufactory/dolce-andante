# GitHub Pages デプロイ手順

## 1. GitHub リポジトリ作成

```bash
cd /Users/shiromofufactory/Documents/dolce-andante

# まだなら git 初期化
git init
git add .
git commit -m "Initial commit: Dolce andante"

# GitHub で新規リポジトリを作成（Web上で。public でOK）
# 仮にリポジトリ名を dolce-andante とします

git branch -M main
git remote add origin git@github.com:shiromofufactory/dolce-andante.git
git push -u origin main
```

## 2. GitHub Pages 有効化

1. GitHub のリポジトリページ → **Settings** → **Pages**
2. **Source** で **Deploy from a branch** を選択
3. **Branch** を `main` / `/ (root)` に設定 → **Save**
4. 1〜2分待つと `https://shiromofufactory.github.io/dolce-andante/` でアクセス可能になります

## 3. スマホで PWA インストール

### iPhone (Safari)
1. Safari で `https://shiromofufactory.github.io/dolce-andante/` を開く
2. 横画面でゲームを開始（初回タップで全画面＋横画面ロック）
3. 共有ボタン（⬆️）→「ホーム画面に追加」

### Android (Chrome)
1. Chrome で同URLを開く
2. メニュー（︙）→「ホーム画面に追加」または自動的に「インストール」プロンプト

インストール後は**ホーム画面のアイコンから起動**でき、**オフラインでも遊べます**。

## 4. 動作確認

- ✅ タイトル画面が表示される
- ✅ 「はじめから」でゲーム開始
- ✅ BGMが鳴る（ユーザーの最初のタップ後）
- ✅ 縦画面にすると「横画面でプレイしてください」が表示
- ✅ 一度ロードすればオフラインでも動く

## 5. 更新時

ローカルで変更したら、普通に push するだけで反映されます：

```bash
git add .
git commit -m "Fix: scenario update"
git push
```

数分以内に本番へ反映。  
※ Service Worker のキャッシュがあるため、ユーザー側でハードリロード（Ctrl+Shift+R / iOS は設定→Safari→履歴クリア）が必要な場合があります。大幅な変更時は `service-worker.js` の `CACHE_VERSION` を `dolce-v1` → `dolce-v2` のように更新してください。

## 6. カスタムドメイン（任意）

独自ドメインを使いたい場合：
1. `CNAME` ファイルを作成してドメイン名を書く
2. ドメインのDNS設定で CNAME レコードを `shiromofufactory.github.io` に向ける
3. GitHub Pages 設定で「Custom domain」を入力・HTTPS Enforced

## よくある問題

### 「画像が出ない」「BGMが鳴らない」
→ ファイル名の大文字小文字が合ってない可能性。GitHub Pages はLinux なので厳密。`corridor.JPEG` と `corridor.jpeg` は別物扱い。

### 「PWA インストールが表示されない」
→ HTTPS必須。`http://` ではなく `https://` でアクセス。manifest.json がルートにあるか確認。

### 「Service Worker が更新されない」
→ `CACHE_VERSION` を上げる。または DevTools の Application タブでキャッシュをクリア。

### 「スマホで横画面ロックが効かない」
→ Safari iOS は `screen.orientation.lock()` をサポートしていません。ホーム画面に追加（PWAインストール）すると manifest の `orientation: landscape` が効いて強制横画面になります。ブラウザタブで開いている限りは縦にもなれます。

## リポジトリのサイズ確認

```bash
du -sh assets/
```

1GB 以下なら GitHub Pages の制限内です。
