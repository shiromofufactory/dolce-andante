# ファイル命名ルール

ゲームが読み込むファイル名は**この表の通り固定**です。
イラストAIから生成された画像を、この名前にリネームして `assets/` 配下に置けば、自動でゲームに反映されます。

---

## 📁 立ち絵（assets/characters/ に .png で配置・透過PNG）

| ファイル名 | キャラクター | 表情／雰囲気 | プロンプト補足（英語での追加キーワード） |
|---|---|---|---|
| **mio_default.png**  | ミオ     | 素の真顔／落ち着いた表情 | `calm neutral expression, slight smile` |
| **mio_smile.png**    | ミオ     | 素の笑顔 ← **今回生成済み** | `soft natural smile` |
| **mio_shy.png**      | ミオ     | 照れ・頬赤 | `blushing with shy smile, cheeks flushed` |
| **mio_trouble.png**  | ミオ     | 少し困り顔 | `slightly troubled, eyebrows lowered, small frown` |
| **mio_surprise.png** | ミオ     | 驚き（口元に手） | `surprised expression, hand to mouth, wide eyes` |
| **mio_drunk.png**    | ミオ     | 酔ってふにゃっとした笑顔 | `tipsy soft smile, flushed cheeks, droopy eyes` |
| **kaoru_default.png**| 薫       | 真顔（デフォルト） | `calm neutral expression, composed` |
| **kaoru_smile.png**  | 薫       | 小さく微笑む | `subtle gentle smile` |
| **kaoru_trouble.png**| 薫       | 呆れた半目／困惑 | `exasperated half-lidded eyes` |
| **kaoru_shy.png**    | 薫       | 珍しく頬を染めた困惑 | `rare blush, looking away, slightly embarrassed` |
| **himari_default.png** | ヒマリちゃん | 控えめな落ち着いた顔 | `calm gentle expression` |
| **himari_smile.png**   | ヒマリちゃん | 控えめな微笑み | `shy modest smile` |
| **himari_shy.png**     | ヒマリちゃん | 恥じらい・頬赤 | `blushing shy, looking down, small smile` |
| **himari_trouble.png** | ヒマリちゃん | 不安げ・俯き | `anxious, looking down, lowered brows` |
| **himari_sad.png**     | ヒマリちゃん | 泣きそう | `about to cry, glistening eyes` |
| **himari_surprise.png**| ヒマリちゃん | 驚き | `surprised, wide eyes, lips parted` |
| **kato_default.png** | 加藤さん | 穏やかな落ち着いた顔 | `serene calm expression` |
| **kato_smile.png**   | 加藤さん | 穏やかな微笑み | `gentle warm smile` |
| **kato_trouble.png** | 加藤さん | 申し訳なさそうな微笑み／儚げ | `apologetic small smile, eyes lowered, slightly fragile` |
| **sherry_default.png** | シェリー | クールな真顔 | `cool composed expression, slight reserve` |
| **sherry_shy.png**     | シェリー | 恥じらい（頬に手） | `bashful, hand near cheek, slight blush` |
| **sherry_sad.png**     | シェリー | 寂しげに目を伏せる | `lonely look, eyes downcast` |
| **yutaka_default.png** | ユタカ   | 穏やかな真顔 | `calm thoughtful expression` |
| **yutaka_smile.png**   | ユタカ   | 小さく微笑む | `quiet subtle smile` |
| **yutaka_trouble.png** | ユタカ   | 呆れてメガネを押し上げる | `adjusting glasses, slightly exasperated` |
| **yutaka_sad.png**     | ユタカ   | 珍しく悲しげ | `uncharacteristically sad, eyes downcast` |
| **miyako_default.png** | ミヤコさん | 無邪気な穏やかさ | `gentle cheerful expression` |
| **miyako_sad.png**     | ミヤコさん | 泣きそう・眉を下げる | `about to cry, eyebrows lowered` |
| **heino_default.png**  | 平野     | 誠実な真顔 | `earnest sincere expression` |
| **heino_smile.png**    | 平野     | 少し照れた笑顔 | `slightly bashful smile` |
| **heino_trouble.png**  | 平野     | 困り顔 | `troubled worried expression` |
| **watabe_default.png** | 渡部     | 歯を見せた笑顔 | `wide toothy grin, upbeat` |
| **nakano_default.png** | 中野さん | 目を伏せた真顔 | `reserved expression, eyes slightly averted` |
| **nakano_shy.png**     | 中野さん | 小さな頬赤 | `subtle blush, still reserved` |
| **nakano_smile.png**   | 中野さん | 珍しく小さな微笑み | `rare shy smile, corner of mouth slightly raised` |
| **nagatomo_default.png** | 長友   | へらっとした曖昧な笑顔 | `vague lazy smirk` |
| **hime_default.png**   | 姫       | 気の強い落ち着いた表情 | `strong-willed calm expression` |
| **maachan_default.png** | まーちゃん | ほんわかした笑顔 | `soft airy smile` |
| **ai_default.png**     | 愛ちゃん | 勝ち気な笑顔 | `competitive spirited smile with red-framed glasses` |
| **taeyan_default.png** | たえやん | 無表情気味のポーカーフェース | `flat poker face, subtle` |
| **yokono_default.png** | ヨコノ   | ニコッと笑う（ちょっとズレた感じ） | `earnest cheerful grin with slightly off-kilter vibe` |
| **higashiyama_default.png** | 東山 | やや皮肉な笑み | `slightly sardonic smirk, confident` |

**合計：42枚**（主要7キャラ × 3〜5表情 ＋ サブ11キャラ × 1表情）

---

## 📁 背景（assets/backgrounds/ に .png で配置）

| ファイル名 | シーン |
|---|---|
| **corridor.png**        | 大学構内・渡り廊下（雨上がり） ← **今回生成済み** |
| **room_day.png**        | オーケストラ部室（昼） |
| **room_eve.png**        | オーケストラ部室（夕） |
| **room_night.png**      | オーケストラ部室（夜） |
| **dolce.png**           | カフェ「ドルチェ」店内 |
| **waiwai.png**          | 居酒屋「わいわい」座敷 |
| **ginkgo_green.png**    | 銀杏並木（初夏・緑） |
| **ginkgo_yellow.png**   | 銀杏並木（秋・黄色） |
| **ginkgo_bare.png**     | 銀杏並木（初冬・散った） |
| **street_night.png**    | 夜の住宅街・帰り道 |
| **hall_stage.png**      | 演奏会ホールの舞台 |
| **apartment.png**       | ふれんちのアパート一室 |
| **camp.png**            | 教習所の合宿所周辺（長野） |
| **riverbank_night.png** | 長野の河原・星空 |
| **church_court.png**    | 教会の中庭（夏祭り） |
| **kyoto_night.png**     | 京都・祇園の夜道 |
| **matsumoto.png**       | 松本の中町通り |
| **festival.png**        | 学園祭「あんだんて」の出店 |
| **hospital.png**        | 病院の病室 |
| **church_mass.png**     | 教会・ミサの内部 |
| **illumination.png**    | イルミネーションの街路 |

**合計：21枚**

---

## 📁 CG（assets/cg/ に .png で配置）

| ファイル名 | シーン |
|---|---|
| **title.png**            | タイトル画面 |
| **mio_riverbank.png**    | 合宿の夜・河原でミオと |
| **mio_confession.png**   | 銀杏並木の下・ミオへの告白（ミオED） |
| **kato_festival.png**    | 教会の夏祭り・加藤さんと |
| **kato_church.png**      | 加藤さんとのクリスマスミサ（加藤ED） |
| **kaoru_snow.png**       | 薫との静かな告白（薫ED） |
| **himari_illumination.png** | ヒマリちゃんとイルミネーション（ヒマリED） |
| **sherry_cello.png**     | 学園祭でシェリーがチェロを弾く |
| **sherry_room.png**      | シェリーの部屋でCDを聞くシーン（シェリーED） |
| **miyako_embrace.png**   | ミヤコさんとの抱擁（ミヤコED） |
| **concert_summer.png**   | 夏の演奏会本番 |
| **concert_winter.png**   | 冬の定期演奏会本番 |
| **alone_christmas.png**  | 孤独なクリスマス（孤独END） |

**合計：13枚**

---

## 発注時の判定フロー

1. 生成したいキャラを決める（例：ミオ）
2. この表で、どの**表情名**を作りたいか選ぶ（例：`shy`＝照れ顔）
3. イラストAIへのプロンプトは、**ミオの基本プロンプト＋その表情のキーワード**（上の表の右列）で指定
4. 生成された画像を **`mio_shy.png`** という名前で保存
5. 保存先は **`assets/characters/mio_shy.png`**

---

## まだ迷ったときは

- **「とりあえず default を全キャラ分」作るのが、一番コスパがいい** です（主要キャラの別表情は後回しでもゲームは回る）
- `default` が無く `smile` しかなくても、ゲームは自動でプレースホルダー色を表示するので、ゲームは止まりません
- 作業優先順：**主要7キャラの default → 主要背景（部室・ドルチェ・銀杏各種・わいわい） → タイトルCG → 各ヒロインED CG → 表情バリエーション**
