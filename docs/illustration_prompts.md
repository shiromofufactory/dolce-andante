# Dolce andante イラスト発注プロンプト集

## 画風の基本方針（全カット共通プレフィックス）

**英語プロンプト（Nano Banana など向け）**
```
soft watercolor illustration, gentle pastel palette with warm cream and muted indigo, slight paper grain, delicate ink outlines, nostalgic early-2000s Japanese college atmosphere (2005 era), cinematic composition with soft bokeh, slightly melancholic but warm mood, avoid anime-glossy style, avoid harsh shadows, avoid vivid saturation
```

**日本語の補足**
- 時代感：2005年。折りたたみ携帯、iPod、紙の譜面、mixi時代。和製ギャルゲーほど濃くない、淡い水彩。
- 色調：くすんだパステル。生成り・セピア・淡い藍・秋の黄色を多用。
- 線：細い鉛筆線または淡いインク。アニメ調の強いセル塗りは避ける。
- 人物：写実とイラストの中間。やや儚げ。

---

## 1. 立ち絵（キャラクター）

### 🚨 立ち絵で最重要①：**同一キャラの服装は全表情で必ず同じにする** 🚨

ゲーム中では、同じシーンで立ち絵が何度も切り替わります（ミオが `smile` → `surprise` → `shy` と変化するなど）。
そのとき**服装が変わると「いつ着替えたの？」という違和感**が出てしまうため、**1キャラ＝1服装で統一**してください。

**推奨ワークフロー（参照画像方式）**
1. まず各キャラの **`_default`（素の表情）** を1枚生成する
2. その画像を **「参照画像（reference image）」として次の表情を生成**
3. 表情だけ変えて、服装・髪型・体格・塗りを完全に一致させる

Nano Banana 2（Gemini 2.5 Flash Image など）は reference image に対応しているので、以下の指示で服装を固定できます：

```
This is a reference image of the character. 
Generate a NEW illustration of the SAME character with the SAME outfit, 
SAME hairstyle, SAME body shape, SAME art style, 
but change the FACIAL EXPRESSION to: [新しい表情キーワード]
```

### キャラ別・固定服装リファレンス（全表情共通の基本服装）

生成時のプロンプト本文の服装記述は、必ず下記の**固定服装**で統一してください。

| キャラ | 固定服装（英語プロンプト用） |
|---|---|
| **ミオ**       | `a frilled cream-colored blouse with delicate lace collar, 3/4 sleeves, and a knee-length blue-indigo patterned skirt, loose light-brown hair tied up in a casual bun with side bangs` |
| **薫**         | `a loose pale grey button-up shirt with rolled-up sleeves, slim dark jeans, short black bob hairstyle` |
| **ヒマリちゃん** | `a white blouse with round collar under a beige cardigan vest, long pleated beige skirt, long black ponytail tied with a small ribbon` |
| **加藤さん**   | `a navy-blue linen dress with a small white cross pendant necklace, half-updo black semi-long hair` |
| **シェリー**   | `a white blouse under black suspender skirt (monochrome palette), long straight black hair with straight-cut bangs` |
| **ミヤコさん** | `a pale pink floral-print blouse under a cream cardigan, ankle-length soft beige skirt, wavy light-brown long hair half tied up` |
| **ユタカ**     | `a plain white button-up shirt with rolled-up sleeves, navy chinos, silver-framed glasses, black hair tied loosely at the nape` |

**サブキャラ**（渡部・姫・まーちゃん・中野・愛ちゃん・平野・長友・東山・たえやん・ヨコノ）は立ち絵が1表情だけなので、服装統一の問題は発生しません。好みの服装で生成してOKです。

**例外：ステージ衣装・特別シーン**
- 演奏会のシーンは CG（`concert_summer.jpg` `concert_winter.jpg`）として描くので、立ち絵にはステージ衣装バージョンは不要です
- 加藤さんのカフェ姿（エプロン）は立ち絵に含めず、背景・CG内で描写します
- クリスマスED などの衣装は CG で表現するので、立ち絵は年間通じて同じ服装で問題ありません

### 🚨 立ち絵で最重要②：**背景は純粋なグリーンバック（#00FF00）で生成する** 🚨

イラストAIに「transparent background」と指示しても、実際には**透明にならず、代わりに「透過を装った市松模様」を絵として描き込んでしまう**ケースが頻発します。また、装飾的な背景（廊下・居酒屋など）を勝手に描く問題もあります。

**解決策：グリーンバック方式**
背景を**純粋な緑一色（#00FF00 の鮮やかな緑）**にして生成してもらい、こちら側で自動的にグリーンを除去して透過PNGに変換します（TV映像のグリーンバック合成と同じ原理）。こうすることで：

- 透過指示の曖昧さがなくなる（AIにとって「緑で塗れ」は明確なタスク）
- 余計な装飾（家具・背景等）が描かれない（緑で埋めろと言われたから緑で埋める）
- 透過処理の成功率がほぼ100%になる

**必須：立ち絵プロンプトの末尾に毎回コピペする指示ブロック**
```
IMPORTANT: the background MUST be PURE SOLID GREEN color (#00FF00, vivid pure green, chroma key green screen).
The entire background must be filled with this uniform solid green color.
NO environment, NO furniture, NO scenery, NO decorations, NO other people,
NO gradient, NO texture, NO pattern in the background — just a flat solid green screen.
The character should be clearly separated from the green background with clean edges.
```

**なぜ #00FF00 純粋緑なのか**
- 水彩調のキャラパレットに存在しない色なので、キャラの一部が誤って除去される事故が起きにくい
- TV・映画業界で標準の色（AIも「green screen」で必ず理解する）
- こちら側の除去処理（`rembg` や chroma key）の精度が最高になる

**代替：もしキャラに緑の服・小物が出る場合**
- 薫、ユタカ、平野などで緑系の服を着せる場合のみ、**マゼンタ（#FF00FF）背景**を指定してください（その時はプロンプトの "green" を "pure magenta (#FF00FF)" に置換）。
- ただし本作のキャラで緑が必須の人物はいないので、**基本は全員グリーンバックでOK**です。

### 1-A. 主要キャラ（複数表情）

立ち絵は **胸から上（バストアップ）か、膝上まで** の2パターン試していいです。透過PNG想定。

#### ミオ（クラリネット、同期）
- 身体特徴：160cm前後、中肉中背。明るい茶髪（ロング〜セミロング）を軽くまとめている。切れ長の目、笑うと目尻が下がる。
- 服装の基本：オーケストラの黒ステージ衣装（白ブラウス＋黒スカート）／カジュアル（オーバーサイズパーカー＋デニムスカート）／私服（2005年ガーリー、フリル袖のブラウス＋膝丈スカート）
- 小物：譜面、クラリネット、携帯（折りたたみ、ストラップは音符モチーフ）
- 必要な表情：
  1. 素の笑顔
  2. 照れ・頬赤
  3. 少し困り顔・眉を下げた
  4. 驚き・口元に手
  5. 酔ってふにゃっとした笑顔

**英語プロンプト（例：ミオ・素の笑顔 `mio_smile.png`）**
```
a 20-year-old Japanese university girl, narrow eyes that turn down slightly when smiling,
soft natural smile, looking at viewer,

OUTFIT (must be identical across all Mio illustrations):
a frilled cream-colored blouse with delicate lace collar, 3/4 sleeves,
and a knee-length blue-indigo patterned skirt,
loose light-brown hair tied up in a casual bun with side bangs,

holding a small clarinet reed case at chest level,
waist-up portrait (portrait orientation, taller than wide, approx 3:4 ratio),
2005 Japanese college student vibe,

soft watercolor illustration, gentle pastel palette, slight paper grain,
delicate ink outlines, slightly melancholic but warm mood,
avoid anime-glossy style, avoid harsh shadows, avoid vivid saturation,

IMPORTANT: the background MUST be PURE SOLID GREEN color (#00FF00, vivid pure green, chroma key green screen).
The entire background must be filled with this uniform solid green color.
NO environment, NO furniture, NO scenery, NO decorations, NO other people,
NO gradient, NO texture, NO pattern in the background — just a flat solid green screen.
The character should be clearly separated from the green background with clean edges.
```

**2枚目以降（`mio_shy.png` など）の生成時：**
上記の OUTFIT ブロックはそのまま残し、1枚目を参照画像として指定の上、**変更するのは「soft natural smile, looking at viewer」の部分だけ**にしてください。Nano Banana 2 なら下記のような指示が効きます：

```
Using the provided reference image of Mio as a strict guide, 
generate a new illustration with the SAME outfit (frilled cream blouse and blue-indigo patterned skirt),
SAME hairstyle (casual bun with side bangs), SAME body, SAME art style, SAME green background,
but change ONLY the facial expression to: [例] blushing with shy smile, cheeks flushed pink, eyes slightly lowered, one hand near cheek.
```

**表情バリエーションの差し替えキーワード**

プロンプト本文の「soft natural smile」部分だけを以下のキーワードに差し替えればOKです。背景指示（グリーンバック）はそのまま全ファイル共通で使えます。

| ファイル名 | 差し替え表情キーワード | 差し替え小物 |
|---|---|---|
| `mio_default.png`  | calm neutral expression with slight smile | clarinet reed case or empty hands |
| `mio_smile.png`    | soft natural smile (生成済み) | clarinet reed case |
| `mio_shy.png`      | blushing with shy smile, cheeks flushed pink, eyes slightly lowered, one hand near cheek | empty hands |
| `mio_trouble.png`  | slightly troubled, eyebrows lowered, small frown | empty hands |
| `mio_surprise.png` | surprised expression, hand to mouth, wide eyes | empty hands |
| `mio_drunk.png`    | tipsy soft smile, flushed cheeks, droopy half-closed eyes, holding a small sake cup | a single small sake cup only (no table, no other objects) |

**画像サイズの指定**
可能なら **縦長の3:4〜2:3 比**（例：896×1200、900×1350 など）を指定してください。
横長だとゲーム内で小さく表示されます（立ち絵枠は縦長前提）。

#### 薫（ファゴット、同期）
- 身体特徴：170cm、背が高い。黒髪ショートボブ。凛とした目つき。男まさりで、姿勢が良い。
- 服装の基本：パンツスタイル多め。ゆったりシャツ＋ジーンズ／ステージ衣装（黒スーツパンツ）／カーディガン羽織り
- 小物：ファゴット、スコア、ウーロン茶のグラス
- 必要な表情：
  1. 真顔（デフォルト）
  2. 呆れた半目
  3. 小さく微笑む
  4. 怒り（眉を吊り上げる）
  5. 困惑・珍しく頬を染める

#### ヒマリちゃん（コントラバス、1年）
- 身体特徴：150cm前後、小柄。黒髪ポニーテール（長め）。丸みのある大きな瞳、眉が下がりがち。
- 服装：清楚系。ブラウス＋ロングスカート／ベスト＋白シャツ／ステージ衣装
- 小物：大きすぎるコントラバス、楽譜ファイル、お弁当箱
- 必要な表情：
  1. 控えめな微笑み
  2. 不安げ・俯き
  3. 驚き・目を見開く
  4. 泣きそう
  5. 少し大人の顔（覚悟を決めた顔）

#### 加藤さん（バイト先の先輩、25歳）
- 身体特徴：165cm、細身。色白で、透明感がある。黒髪セミロングを内巻きに。少しだけ病的な印象、でも優しい顔立ち。
- 服装：カフェの白エプロン＋紺ワンピース／私服（きれいめブラウス＋パンツ）／教会の白ワンピース
- 小物：コーヒーカップ、聖書、小さな十字架のネックレス
- 必要な表情：
  1. 穏やかな微笑み（デフォルト）
  2. 申し訳なさそうな微笑み
  3. 少し儚い、目を伏せる
  4. 楽しそうに笑う
  5. 真剣（頬に手を当てて考える）

#### シェリー（チェロ、同期）
- 身体特徴：165cm、細身で姿勢がいい。黒髪ストレートロング、前髪ぱっつん。目が切れ長で、ややクール。
- 服装：やや古風で上品。ブラウス＋サスペンダースカート／ステージ衣装／私服（モノトーン）
- 小物：チェロ、ブログを書く用のスパイラルノート、ペン
- 必要な表情：
  1. 真顔・やや無表情
  2. 微笑み（少し控えめ）
  3. 演奏中の集中顔
  4. 恥じらい（頬に手）
  5. 寂しげ・目を伏せる

#### ミヤコさん（トランペット、4年・ユタカの彼女）
- 身体特徴：160cm、ふわっとした体型。明るい栗色ゆるふわロング。垂れ目。
- 服装：ガーリー。花柄ワンピース／カーディガン＋スカート／ステージ衣装
- 小物：トランペット、大きな紙袋、ハートのストラップ
- 必要な表情：
  1. 無邪気な笑顔
  2. 泣きそう・眉を下げる
  3. 寂しげな微笑み
  4. 甘えた顔
  5. 決意の顔（口を結ぶ）

#### ユタカ（トロンボーン、同期・親友）
- 身体特徴：175cm、細身。黒髪をやや長めに後ろでまとめている（時期によってはほどいている）。銀フレームのメガネ。知的で落ち着いた雰囲気。
- 服装：シンプル。白シャツ＋パンツ／黒セーター／ステージ衣装／ドルチェのエプロン
- 小物：トロンボーン、メガネ、コーヒー
- 必要な表情：
  1. 穏やかな真顔
  2. 小さく微笑む
  3. 呆れる（半目でメガネを押し上げる）
  4. 真剣な顔
  5. 珍しく悲しげ

### 1-B. サブキャラ（単一表情）

各キャラ、**落ち着いた表情 1枚**でOK。バストアップ。

- **ふれんち（主人公）**：170cm普通体型、黒髪、清潔だが少しやぼったい。白シャツ＋ジーンズ。※ 基本は立ち絵を出さず、選択肢画面や特殊シーンでのみ登場。
- **渡部**：175cm、明るめ茶髪ショート、パーカー＋デニム。陽キャ、口角上がり気味、歯を見せた笑顔。
- **姫**：167cm、ダークブラウンのきれいなウェーブ、気の強そうな切れ長目、キレイめワンピースorブラウス。
- **ヨコノ**：158cm、黒髪ボブ、丸顔で前髪長め、ニコッと笑う（ちょっとズレた感じ）。
- **まーちゃん**：155cm、ゆるくカールした栗色髪、ふんわりワンピース、お弁当持ち、ほんわか笑顔。
- **中野さん**：162cm、黒髪肩口ストレート、前髪重め、目を伏せ気味、色白、ライブラリーファッション（カーディガン＋ロンスカ）。
- **愛ちゃん**：158cm、黒髪セミロング、赤いフレームのメガネ、丸顔、少し勝ち気な目、ポップな私服。
- **平野**：165cm、やや筋肉質で小柄、坊主に近い短髪、黒セーター、誠実な目、少し照れた表情。
- **長友**：172cm、茶色いくせ毛、無精ひげが少し、ゆるいニット、へらっとした曖昧な笑顔。
- **東山**：178cm、黒髪短髪、サッカー部兼部らしい日焼け、シャツの袖まくり、やや皮肉な笑み。
- **たえやん**：160cm、黒髪ミディアムボブ、切れ長目、無表情気味、地味めのカーディガン。
- **シェリー**はメインなので上記済み。

---

## 2. 背景

### 2-01. 大学構内・渡り廊下（雨上がり）
```
a covered corridor of a Japanese university, wet concrete after rain, grey sky, notice boards on the wall, late spring, soft watercolor, muted palette
```

### 2-02. オーケストラ部室（昼）
```
interior of a Japanese university orchestra club room, old wooden floor, music stands, scattered scores, cello and bass cases, afternoon light through curtain, soft watercolor
```

### 2-03. オーケストラ部室（夕）
```
same orchestra club room at dusk, warm orange light through windows, long shadows, music stands, empty chairs, nostalgic mood, soft watercolor
```

### 2-04. オーケストラ部室（夜）
```
same club room at night, single desk lamp lighting music stands, darkness outside the windows, lonely practice atmosphere, soft watercolor
```

### 2-05. カフェ「ドルチェ」・店内
```
interior of a small cozy Japanese cafe named Dolce, wooden counter, vintage coffee grinder, bookshelf with worn books, brass pendant lights, warm amber atmosphere, a rainy afternoon, soft watercolor
```

### 2-06. カフェ「ドルチェ」・カウンター視点
```
view from behind the counter of a small cafe, coffee siphon and cups, an empty seat by the window with a paperback book left, soft watercolor
```

### 2-07. 居酒屋「わいわい」・座敷
```
interior of a modest Japanese izakaya named Waiwai, tatami seating, low wooden tables with beer mugs and edamame plates, warm yellow lanterns, slightly worn atmosphere, early-2000s style, soft watercolor
```

### 2-08. 大学の銀杏並木（初夏・緑）
```
a long ginkgo tree avenue on a Japanese university campus, lush green leaves, early summer sunlight filtering through branches, few students walking, soft watercolor
```

### 2-09. 大学の銀杏並木（秋・黄色）
```
the same ginkgo avenue in mid-autumn, leaves turned golden yellow, a few leaves falling, soft afternoon light, nostalgic, soft watercolor
```

### 2-10. 大学の銀杏並木（初冬・散った）
```
the same ginkgo avenue in early December, bare branches, golden leaves covering the ground, cold crisp air, low winter sun, soft watercolor, very nostalgic
```

### 2-11. 演奏会ホールの舞台（本番）
```
view from the stage of a classical concert hall, orchestra setup with empty chairs and music stands, warm stage lights, audience silhouettes, slight dust in the air, soft watercolor
```

### 2-12. ふれんちのアパート一室
```
a small Japanese studio apartment for a male college student, futon folded in the corner, a double bass leaning on the wall, a cluttered desk with an iPod and a flip phone, posters of classical albums, evening light through a small window, soft watercolor
```

### 2-13. 夜の住宅街（帰り道）
```
a quiet residential street in Tokyo suburbs at night, vending machines glowing, cherry trees in summer foliage, a single streetlight, reflection on wet asphalt, soft watercolor, lonely nostalgic mood
```

### 2-14. 教習所の合宿所周辺（長野）
```
exterior of a driving school dormitory in Nagano mountains, summer evening, cicadas, modest concrete building, distant mountains in mist, soft watercolor
```

### 2-15. 長野の河原・星空
```
a riverbank in Nagano at night, many visible stars, a winding river reflecting starlight, grassy bank, mid-summer atmosphere, very nostalgic, soft watercolor
```

### 2-16. 教会の中庭（夏祭り）
```
courtyard of a small Japanese protestant church during a summer festival, paper lanterns strung overhead, a table with yakisoba grills, a few children running, warm late-afternoon light, soft watercolor
```

### 2-17. 京都・祇園の夜道
```
a narrow stone-paved alley in Gion, Kyoto, at night, wooden shopfronts with lanterns, a single figure of a girl in yukata walking away, drizzling rain, soft watercolor
```

### 2-18. 松本の中町通り
```
exterior of Matsumoto Nakamachi Street, white-walled traditional shops, summer afternoon, soft watercolor
```

### 2-19. 学園祭「あんだんて」の出店
```
a small pop-up cafe in a Japanese university festival, hand-painted wooden sign reading "Andante", students in matching aprons serving coffee, string lights, a cellist performing in the corner, warm autumn daytime, soft watercolor
```

### 2-20. 病院の病室
```
a quiet single hospital room, a window looking out to late autumn sky, a small table with a paperback book and a vase with a single flower, soft watercolor
```

### 2-21. 教会・ミサの内部
```
interior of a small Japanese protestant church during Christmas Eve mass, candles lit, cross on the far wall, warm amber light, rows of wooden pews with a few worshippers, soft watercolor, holy and quiet atmosphere
```

### 2-22. イルミネーションの街路
```
a Japanese urban street at Christmas Eve, trees wrapped in warm yellow fairy lights, a few couples passing, a thin layer of fresh snow on the sidewalk, soft watercolor
```

---

## 3. イベントCG（全13枚）

各CGのファイル名は、そのまま `assets/cg/{ファイル名}` として配置してください。

### 3-01. `title.jpg` — タイトル画面
```
a nostalgic composition: a bare ginkgo avenue in early December covered with golden leaves, stage lights in the distance like a ghostly concert hall, the silhouette of a double bass standing alone in the foreground, the title "Dolce andante" hand-written in a subtle serif typeface, soft watercolor, very nostalgic melancholy
```

### 3-02. `concert_summer.jpg` — 夏の演奏会本番（第1章）
```
a Japanese university orchestra during a summer live concert, warm stage lights, the main character playing double bass on the right side of the string section, other players beside him, audience in blur, soft watercolor, focused intense mood, summer evening, Berlioz-style repertoire
```

### 3-03. `concert_winter.jpg` — 冬の定期演奏会本番（各ルート第5章で共通利用）
```
a Japanese university orchestra during a winter 50th anniversary concert, cool stage lights, full string section, the main character playing double bass with confidence, the audience silhouettes in blur, soft watercolor, grand emotional mood, late December, Tchaikovsky Symphony No.5 energy
```

### 3-04. `mio_riverbank.jpg` — 合宿の夜・河原でミオと（ミオルート／Path A）
```
two young people sitting on a riverbank at night under a starry Nagano sky, a boy and a girl with light brown hair, sharing a convenience-store rice ball, intimate but not touching, very nostalgic, soft watercolor
```

### 3-05. `mio_confession.jpg` — 銀杏並木の下・ミオへの告白（ミオED）
```
a boy and a light-brown-haired girl standing under a bare ginkgo tree avenue in early December, golden leaves covering the ground, the boy speaking earnestly, the girl looking up, very nostalgic, soft watercolor
```

### 3-06. `kato_festival.jpg` — 教会の夏祭り・加藤さんと並ぶ（加藤さんルート／Path B）
```
a male university student and a slender young woman in aprons manning a yakisoba stall at a small church summer festival, late afternoon, warm light, paper lanterns overhead, soft watercolor
```

### 3-07. `kato_church.jpg` — 加藤さんとのクリスマスミサ後（加藤さんED）
```
a young woman in a white dress holding a boy's hand after a Christmas Eve mass outside a small Japanese protestant church, warm candlelight from within the doorway, a small cross necklace visible, soft watercolor, bittersweet and reverent
```

### 3-08. `kaoru_snow.jpg` — 薫との静かな告白（薫ED）
```
a tall short-haired girl in a cardigan and a rare skirt, standing with a boy outside a family restaurant at night, snow flurries in the air, both looking down shyly, soft watercolor
```

### 3-09. `himari_illumination.jpg` — ヒマリちゃんとイルミネーション（ヒマリED）
```
a small first-year girl with ponytail and a slightly taller senior boy walking together under warm Christmas fairy lights wrapping street trees, light snow on sidewalk, soft watercolor
```

### 3-10. `sherry_cello.jpg` — 学園祭でシェリーがチェロを弾くシーン（共通）
```
a Japanese university girl with long black straight hair playing cello at a small pop-up festival cafe, other students listening in, autumn daylight filtering through windows, soft watercolor, serene focused atmosphere
```

### 3-11. `sherry_room.jpg` — シェリーの部屋でCDを聞くシーン（シェリーED）
```
interior of a very clean minimalist apartment, a girl with black straight hair and a boy sitting on the floor in front of a CD player, a single dusty CD cover (Glenn Gould Bach) on display, Christmas Eve night, soft watercolor
```

### 3-12. `miyako_embrace.jpg` — ミヤコさんとの抱擁（ミヤコルートA END）
```
a young woman with light brown wavy hair crying softly in a boy's arms in a dimly lit apartment, Christmas Eve night, very bittersweet atmosphere, soft watercolor (※ 抱擁のみ。キスや肌の露出はなし。シリアスで切ないトーン)
```

### 3-13. `alone_christmas.jpg` — 孤独なクリスマス（孤独END／真・ノーマル）
```
a boy walking alone down a bare ginkgo avenue at night, golden leaves underfoot, his breath visible, a single streetlight, very nostalgic and quiet, soft watercolor, contemplative
```

---

## 4. 発注時の注意事項

1. **透過PNG**での納品が理想。立ち絵は背景を完全に透過させる（キャラだけ切り抜き）。
2. **サイズ**：立ち絵は縦1200px前後、背景は1920×1080想定。モバイル縮小でも潰れない解像度。
3. **顔の一貫性**：同じキャラの別表情を作るとき、顔の輪郭・目の形・髪型は極力そろえる。同じキャラの最初の1枚を生成してから、それを**参照画像**として後続の表情バリエーションを作成するのが一番安全です。
4. **2005年感**：スマホではなく**折りたたみ携帯**、AirPodsではなく**iPod＋白いイヤホン**、ランドセル型リュックではなく**ナイロントート**など、時代ディテールを意識してください。
5. **R-15の範囲**：ミヤコさんルートの抱擁CG以外、性的な描写は入れません。居酒屋での酔ったシーン、合宿の部屋戻しシーンなども、キスや肌の露出はなし。
6. **イラストの総量**：立ち絵計 約40枚、背景 21枚、CG 13枚、合計 **約74枚**。
   - 発注コストがかさむ場合、優先順位は：①主要ヒロイン立ち絵＞②背景（部室・銀杏・ドルチェ）＞③タイトル画面＞④各ルートED CG＞⑤サブキャラ立ち絵、の順で削ってください。


