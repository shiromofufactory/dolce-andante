/* ==========================================================
   scenario_common.js  ― プロローグ〜第4章（共通部分）
   シーンID規則：
     P-xx    : プロローグ
     1-xx    : 第1章
     2A-xx〜2D-xx : 第2章 4系統
     3-xx    : 第3章
     4-xx    : 第4章（学園祭）
     5-xxx-  : 第5章以降ルート別（scenario_routes.js）
   ========================================================== */
const SCENARIO = {

/* ========== プロローグ ========== */
"P-01": {
  bg: "corridor",
  date: "2005年 6月 ／ 月曜日の昼下がり",
  nodes: [
    { text: "６月。梅雨入り。" },
    { text: "空は鉛色で、さっきまで降っていた雨の名残が、渡り廊下のコンクリートに斑点を作っている。湿気で爪先が少しだけ重い。" },
    { text: "――クリスマスまで、あと２０３日。" },
    { text: "別に、数えたわけじゃない。ただ、掲示板に貼られた学園祭実行委員会のポスターに「冬本番まで、あと半年！」と書いてあっただけだ。" },
    { text: "誰も俺に「クリスマスまであと何日？」なんて聞いたりはしない。聞く相手もいない。" },
    { text: "２年生の冬、俺は１回だけ告白して、１回だけフラれた。相手はミオ。同じオーケストラの、クラリネットの子。" },
    { text: "それ以降、変な空気のまま春休みを挟み、気づいたら元通りになっていた。いや、元通りってのは嘘だ。俺の中にだけ、どうしても消せない線みたいなものが、残っている。" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "……何してんの、ふれんち" },
    { speaker: "ふれんち", text: "いや、別に。学園祭のポスターがもう貼ってあるなーって" },
    { speaker: "ユタカ", text: "まだ６月だぞ" },
    { text: "ユタカ。親友。オーケストラでトロンボーン。メガネがよく似合って、頭が切れて、楽器も上手い。一つ年上の彼女・ミヤコさんと長く付き合っている。" },
    { text: "――俺の隣に立つと、だいたい俺が「人間の不良品」みたいに見える男。" },
    { speaker: "ユタカ", text: "コマ空いた？" },
    { speaker: "ふれんち", text: "４限までない" },
    { speaker: "ユタカ", text: "じゃあ部室行こう。譜面、配られてるらしい" },
    { type: "clearChara", pos: "all" }
  ],
  next: "P-02"
},

"P-02": {
  bg: "corridor",
  nodes: [
    { text: "古い校舎の３階。突き当たり。扉の前に立つと、中からクラリネットの音が漏れていた。" },
    { text: "――クラリネットの音には、少しだけ、体が反応する。" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "……ミオが来てるな" },
    { speaker: "ふれんち", text: "……うん" },
    { speaker: "ユタカ", text: "気まずい？" },
    { speaker: "ふれんち", text: "まさか" },
    { speaker: "ユタカ", text: "嘘つけ" },
    { type: "choice", choices: [
      { label: "「ユタカに嘘はつかない主義だ」と言い返す",
        effects: [{ param: "yutaka", delta: 1 }],
        goto: "P-02a" },
      { label: "「ミオが気まずがってないなら、俺も気まずくない」と言う",
        effects: [{ flag: "mio_status_quo", value: true }],
        goto: "P-02b" },
      { label: "黙って部室のドアを開ける",
        goto: "P-02c" }
    ]}
  ]
},
"P-02c": {
  bg: "corridor",
  nodes: [
    { type: "chara", pos: "right", chara: "yutaka", expr: "trouble" },
    { speaker: "ユタカ", text: "おい、無視すんなよ" },
    { text: "ユタカの呆れた声を背中に聞きながら、俺は部室のドアノブに手をかけた。" }
  ],
  next: "P-03"
},
"P-02a": {
  bg: "corridor",
  nodes: [
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "お前はほんと、強がりが下手だな" }
  ],
  next: "P-03"
},
"P-02b": {
  bg: "corridor",
  nodes: [
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "……まあ、そういうことにしておくか" }
  ],
  next: "P-03"
},

"P-03": {
  bg: "room_day",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "部室は、世界で一番好きな場所と、世界で一番居づらい場所の、両方を兼ねている。" },
    { text: "窓際にミオが座っていた。クラリネットを膝に乗せて、薫と何か話している。目が合う。空気が、０．５秒だけ止まった。" },
    { type: "chara", pos: "left", chara: "mio", expr: "smile" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "ミオ", text: "あ。ふれんち、おはよー！" },
    { text: "……いつも通りだ。いつも通り、明るい。いつも通り、ちょっとだけ声の角度が違う。" },
    { speaker: "ミオ", text: "譜面、あそこの棚に積んであるよ。メイン、ごっついから覚悟して" },
    { speaker: "薫", text: "……今年の夏の演奏会、コントラバス死ぬんじゃない？" },
    { speaker: "ふれんち", text: "薫、もうちょっと言い方あるだろ" },
    { speaker: "薫", text: "事実は事実" },
    { text: "薫。ミオの親友。ファゴット担当。背が高くて男まさりで、周りからは「ミオの彼氏」なんて揶揄される。この２人と向き合うと、だいたい俺は形無しだ。" },
    { type: "chara", pos: "center", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "メインはカサドシュの交響曲第７番。聞いたことないだろ？" },
    { speaker: "ふれんち", text: "……まったく" },
    { speaker: "ミオ", text: "ロベール・カサドシュ。ピアニストとして有名な人ね。フランスの作曲家" },
    { speaker: "薫", text: "《イスラエル》って副題付いてる" },
    { speaker: "ユタカ", text: "ピアノ協奏曲２番も、サン＝サーンスだからな。ピアノを食わないように、伴奏陣がしっかりしないと" },
    { text: "……早くも頭が痛い。俺、コントラバス、大学から始めたんですけど。" }
  ],
  next: "P-04"
},

"P-04": {
  bg: "room_day",
  nodes: [
    { text: "譜面棚の前に行くと、コントラバスのフォルダはちょうど３部残っていた。俺、渡部、中野さん。それだけだ。今年のコントラバスパート。" },
    { text: "――そう、「中野さん」。" },
    { type: "choice", choices: [
      { label: "中野さんの譜面をついでに取って、後で渡そうとする",
        effects: [{ param: "nakano", delta: 1 }, { param: "mio", delta: 1 }],
        goto: "P-04a" },
      { label: "自分と渡部の分だけ取る",
        goto: "P-04b" }
    ]}
  ]
},
"P-04a": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "left", chara: "mio", expr: "default" },
    { speaker: "ふれんち", text: "中野さんの分、机に置いとこうかな" },
    { speaker: "ミオ", text: "……え？" },
    { speaker: "ふれんち", text: "いや、どうせ今日来るだろうし" },
    { speaker: "ミオ", text: "……ふーん。優しいじゃん" },
    { text: "その「ふーん」は何だ。何のふーんだ。" }
  ],
  next: "P-05"
},
"P-04b": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "中野さんの分は？" },
    { speaker: "ふれんち", text: "……本人が取るだろ" },
    { speaker: "薫", text: "ふーん。冷たいな" },
    { text: "別に、冷たくしたわけじゃない。中野さんと俺、１年の頃は普通に話してたのに、いつの間にか口をきかなくなった。" },
    { text: "あれが「冷たい」にカウントされるなら、もう、俺はどうすればいいんだろう。" }
  ],
  next: "P-05"
},

"P-05": {
  bg: "corridor",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "４限までにはまだ時間がある。バイトは１７時から。部室を出ると、ユタカが思い出したように言った。" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "そうだ。今日、シフト一緒だっけ" },
    { speaker: "ふれんち", text: "うん" },
    { speaker: "ユタカ", text: "じゃあ、ドルチェで" },
    { speaker: "ふれんち", text: "ドルチェで" }
  ],
  next: "P-06"
},

"P-06": {
  bg: "dolce",
  date: "17:00 ／ カフェ「ドルチェ」",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "カフェ「ドルチェ」。大学から徒歩１０分、裏通りにある、小さな店。コーヒーの匂いと、古い本の匂いが混ざった、いい店だ。" },
    { text: "店長は無口なおじいちゃんで、バイトはほとんど大学生。――そして、ここには、加藤さんがいる。" },
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "あ、ふれんち君。ユタカ君。お疲れさま" },
    { text: "加藤さん。２５歳。バイトの先輩。色白で、透明感があって、ちょっとだけ病弱な印象の人。" },
    { text: "クリスチャンで、去年のクリスマス、予定がなかった俺を「じゃあ一緒にミサ行きませんか？」と誘ってくれた人。あれは、俺の人生で唯一、まともだったクリスマスだ。" },
    { speaker: "加藤さん", text: "今日、あとで雨強くなるらしいから、テラスの椅子、しまっちゃったの。手伝ってもらっていい？" },
    { speaker: "ふれんち", text: "了解です" }
  ],
  next: "P-07"
},

"P-07": {
  bg: "dolce",
  nodes: [
    { text: "平日のドルチェは、だいたい暇だ。カウンターを拭きながら、ユタカが突然言った。" },
    { type: "chara", pos: "left", chara: "kato", expr: "default" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "ふれんち。今年さ、どうするつもり？" },
    { speaker: "ふれんち", text: "何が" },
    { speaker: "ユタカ", text: "クリスマス" },
    { text: "コーヒーが鼻から出そうになった。" },
    { speaker: "ふれんち", text: "……藪から棒に何だ" },
    { speaker: "ユタカ", text: "いや、銀杏並木のジンクス" },
    { speaker: "ふれんち", text: "あれ、半分都市伝説だろ" },
    { speaker: "ユタカ", text: "半分は本当ってことだろ" },
    { speaker: "加藤さん", text: "銀杏のジンクス、いいですよね。毎年聞くたびに、ちょっと切なくなっちゃう" },
    { speaker: "ユタカ", text: "加藤さん、今年のクリスマスは？" },
    { speaker: "加藤さん", text: "私は、ミサに行くつもり。……誰か誘おうかな？" },
    { text: "――その冗談は、やめてほしい。本気で受け取ってしまう。" },
    { type: "choice", choices: [
      { label: "「去年、お世話になりました」と素直に言う",
        effects: [{ param: "kato", delta: 1 }],
        goto: "P-07a" },
      { label: "「俺でよければ」と冗談めかして返す",
        effects: [{ param: "kato", delta: 2 }, { param: "yutaka", delta: -1 }],
        goto: "P-07b" },
      { label: "聞こえなかったフリをする",
        goto: "P-07c" }
    ]}
  ]
},
"P-07a": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふふ。また一緒に行きますか？" },
    { speaker: "ふれんち", text: "……考えておきます" }
  ],
  next: "P-08"
},
"P-07b": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "left", chara: "kato", expr: "smile" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "trouble" },
    { speaker: "加藤さん", text: "あら、意外と積極的" },
    { speaker: "ユタカ", text: "……おい、ふれんち" },
    { text: "ユタカの視線が、少しだけ冷たくなった気がした。「お前、ミオはどうした」と言いたいんだろう。……俺も、ちょっと、何を言ってるんだ、俺は。" }
  ],
  next: "P-08"
},
"P-07c": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "left", chara: "kato", expr: "default" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "加藤さん", text: "聞こえてないみたいね。あらら" },
    { speaker: "ユタカ", text: "ふれんち、耳遠いな" }
  ],
  next: "P-08"
},

"P-08": {
  bg: "street_night",
  date: "21:00頃 ／ バイトの帰り道",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "バイトが終わったのは２１時過ぎ。雨は上がっていて、アスファルトが街灯を映していた。ユタカが、帰り道の途中で足を止めた。" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "ふれんち" },
    { speaker: "ふれんち", text: "何" },
    { speaker: "ユタカ", text: "お前、まだミオのこと、好きだろ" },
    { type: "choice", choices: [
      { label: "「……まあな」と素直に認める",
        effects: [{ flag: "mio_honmei", value: "true" }, { param: "yutaka", delta: 1 }],
        goto: "P-08a" },
      { label: "「もう終わった話だ」と否定する",
        effects: [{ flag: "mio_honmei", value: "false" }],
        goto: "P-08b" },
      { label: "「わからない」と答える",
        effects: [{ flag: "mio_honmei", value: "unclear" }],
        goto: "P-08c" }
    ]}
  ]
},
"P-08a": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "……素直だな、今日は" },
    { speaker: "ふれんち", text: "気分だよ" },
    { speaker: "ユタカ", text: "あのさ。俺、ミオに一回ちゃんと言った方がいいと思うんだ。お前が、本気だってこと" },
    { speaker: "ふれんち", text: "……余計なお世話だ" },
    { speaker: "ユタカ", text: "わかった。言わない。でも、俺は応援してる" }
  ],
  next: "P-09"
},
"P-08b": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "……そうかよ" },
    { text: "ユタカはそれ以上何も言わなかった。きっと、見抜かれている。でも、見抜かれてるってわかってる相手に嘘をつくのが、俺の精一杯のプライドだ。" }
  ],
  next: "P-09"
},
"P-08c": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "わからない、ねぇ" },
    { speaker: "ふれんち", text: "悪いかよ" },
    { speaker: "ユタカ", text: "悪くない。わからないうちに、答えを出されることもあるから、気をつけろ" },
    { text: "答えを、出される？――嫌な言い回しだった。" }
  ],
  next: "P-09"
},

"P-09": {
  bg: "apartment",
  date: "23:00過ぎ ／ 自宅",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "６畳一間。ロフトなし。壁際にコントラバスが立てかけてあって、机の上には iPod。" },
    { text: "携帯をパカリと開くと、メール一件。" },
    { speaker: "ミオ（メール）", text: "今日の譜面、コントラバスのソロ、ちょっとやばいから、早めに見といたほうがいいよ。がんばれー" },
    { text: "たった二行。でも、俺はこの二行を、たぶん１０回は読み返した。" },
    { text: "――そして、俺は思った。今年は、逃げるのをやめよう、と。勝ち負けは置いといて、少なくとも、逃げるのは、やめよう。" },
    { text: "クリスマスまで、あと２０３日。銀杏並木が葉を落とすまで、あと１６０日。そこまでに、俺は、何かを変えられるだろうか。" }
  ],
  next: "1-01"
},

/* ========== 第1章 夏の序曲 ========== */
"1-01": {
  bg: "room_eve",
  date: "2005年 6月中旬",
  nodes: [
    { text: "梅雨本番。じっとりと湿気た部室で、弦楽器は機嫌が悪い。俺のコントラバスは、湿度が高いとすぐ音がぼやける。" },
    { text: "――俺と違って、正直なやつだ。" },
    { type: "chara", pos: "right", chara: "watabe", expr: "default" },
    { speaker: "渡部", text: "ふれんち先輩、お疲れっすー！" },
    { speaker: "ふれんち", text: "おう、渡部" },
    { text: "渡部。２年。俺の直属の後輩。コントラバス担当、大学から始めた仲間。いわゆる陽キャで、はしゃぐ時はめちゃくちゃはしゃぐ。大人しい人間が多いオーケストラの中では、若干浮いている。でも、俺はこいつのこと、嫌いじゃない。" },
    { speaker: "渡部", text: "カサドシュ、やばくないすか？ 楽譜真っ黒なんすけど" },
    { speaker: "ふれんち", text: "真っ黒だな" },
    { speaker: "渡部", text: "先輩、これ弾けます？" },
    { speaker: "ふれんち", text: "……半分くらい" },
    { speaker: "渡部", text: "残り半分どうするんすか" },
    { speaker: "ふれんち", text: "……気合" },
    { type: "chara", pos: "left", chara: "himari", expr: "shy" },
    { speaker: "ヒマリちゃん", text: "……ふれんちさん、渡部さん、おはようございます" },
    { text: "ヒマリちゃん。１年生。隣の女子大から参加している、コントラバスの後輩。小柄で、真面目で、不器用。弟がいるからか、妙に母性が強くて、先輩の俺が逆に面倒を見られている感すらある。" },
    { text: "そして――渡部のことを、めちゃくちゃ苦手にしている。" },
    { speaker: "渡部", text: "お、ヒマリちゃん！ 今日もかわいいねー" },
    { speaker: "ヒマリちゃん", text: "……えっと、あの、練習、します" },
    { speaker: "渡部", text: "つれないなぁ" },
    { text: "渡部。お前、そういうところだぞ。" },
    { type: "choice", choices: [
      { label: "ヒマリちゃんに「気にしないで、渡部はそういうやつだから」とフォローする",
        effects: [{ param: "himari", delta: 1 }],
        goto: "1-01a" },
      { label: "渡部に「少し距離感考えろ」と釘を刺す",
        effects: [{ param: "watabe", delta: 1 }],
        goto: "1-01b" },
      { label: "放っておいて、自分の練習を始める",
        goto: "1-01c" }
    ]}
  ]
},
"1-01a": {
  bg: "room_eve",
  nodes: [
    { type: "chara", pos: "left", chara: "himari", expr: "shy" },
    { type: "chara", pos: "right", chara: "watabe", expr: "default" },
    { speaker: "ヒマリちゃん", text: "……ふれんちさん、ありがとうございます" },
    { speaker: "渡部", text: "えー、なんで先輩が間に入るんすか〜！" },
    { text: "ヒマリちゃんは、ほんの少しだけ、安心したような顔をした。" }
  ],
  next: "1-02"
},
"1-01b": {
  bg: "room_eve",
  nodes: [
    { type: "chara", pos: "right", chara: "watabe", expr: "default" },
    { speaker: "渡部", text: "ええ〜、マジっすか〜。俺、嫌われてます？" },
    { speaker: "ふれんち", text: "嫌われてはない。距離が近すぎるって話だ" },
    { speaker: "渡部", text: "了解っす。気をつけまーす" },
    { text: "本当に分かったのかは、怪しい。" }
  ],
  next: "1-02"
},
"1-01c": {
  bg: "room_eve",
  nodes: [
    { text: "俺は二人のやり取りを見ないフリをして、コントラバスの弓を取った。" },
    { text: "――他人のことを気にしてる場合じゃない。俺の譜面の方が、よっぽどヤバい。" }
  ],
  next: "1-02"
},

"1-02": {
  bg: "room_day",
  date: "6月下旬 ／ 弦分奏",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "週末の弦分奏。指揮はコンマスがやることが多い。今日はバイオリンの姫ちゃんが振るらしい。" },
    { text: "――姫。苦手だ。美人で、気が強くて、留学経験があって、俺のような冴えない男には興味がなさそう。いや、実際ないと思う。" },
    { type: "chara", pos: "center", chara: "hime", expr: "default" },
    { speaker: "姫", text: "コントラバス、そこのピッチ低いわよ" },
    { speaker: "ふれんち", text: "……すみません" },
    { speaker: "姫", text: "渡部、音が濁ってる。ヒマリ、もっと押さえて" },
    { text: "姫ちゃんの指揮は、容赦がない。隣のビオラから、誰かが小声でぼやいた。" },
    { type: "chara", pos: "right", chara: "yokono", expr: "default" },
    { speaker: "ヨコノ", text: "姫ちゃん、厳しいよねぇ" },
    { text: "ヨコノ。ビオラ。姫ちゃんと同じ女子大から。空気が読めないことで定評がある。――その発言、今、読めてない。" },
    { speaker: "姫", text: "聞こえてるわよ、ヨコノ" },
    { speaker: "ヨコノ", text: "あ、ごめーん！" },
    { text: "俺は、この空気が嫌いじゃない。みんなそれぞれおかしくて、それぞれが場所を占めていて、それなりにバランスがとれている。" },
    { text: "……いや、バランスがとれてないところが、いいのかもしれない。" }
  ],
  next: "1-03"
},

"1-03": {
  bg: "dolce",
  date: "6月末 ／ ドルチェ",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "ドルチェのバイト中。加藤さんが、今日はちょっと元気がなかった。" },
    { type: "chara", pos: "center", chara: "kato", expr: "trouble" },
    { speaker: "ふれんち", text: "……加藤さん、顔色、良くないですか？" },
    { speaker: "加藤さん", text: "ん、ちょっと寝不足。大丈夫" },
    { speaker: "ふれんち", text: "無理しないでくださいね" },
    { speaker: "加藤さん", text: "ふれんち君、優しいね" },
    { text: "……優しいわけじゃない。ただ、心配なだけだ。加藤さんは、ほっとくと、全部一人で抱え込むタイプだから。" },
    { speaker: "加藤さん", text: "ねえ、ふれんち君" },
    { speaker: "ふれんち", text: "はい" },
    { speaker: "加藤さん", text: "今度のお休み、よかったら、一緒に教会の夏祭りに行かない？ お手伝い、人手足りなくて" },
    { text: "……加藤さんのお誘い。２年のクリスマス以来、久しぶりだ。" },
    { type: "choice", choices: [
      { label: "「……行きます」と即答する",
        effects: [{ param: "kato", delta: 2 }, { flag: "church_festival", value: true }],
        goto: "1-03a" },
      { label: "「バイトのシフト次第で」と濁す",
        effects: [{ param: "kato", delta: 1 }],
        goto: "1-03b" },
      { label: "「教会、あんまり得意じゃなくて」と断る",
        effects: [{ param: "kato", delta: -1 }],
        goto: "1-03c" }
    ]}
  ]
},
"1-03a": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ほんと？ よかった、助かる" },
    { text: "加藤さんが、安心したように、ふっと肩の力を抜いた。" }
  ],
  next: "1-04"
},
"1-03b": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "default" },
    { speaker: "加藤さん", text: "ふふ、わかった。決まったら教えてね" },
    { text: "断る含みも残した返事に、加藤さんは何も詰めずに、ただ穏やかに笑った。" }
  ],
  next: "1-04"
},
"1-03c": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "trouble" },
    { speaker: "加藤さん", text: "あ、そうだよね。急にごめんなさい" },
    { text: "加藤さんは、申し訳なさそうに、軽く頭を下げた。――俺は、なぜか、すごく悪いことをした気分になった。" }
  ],
  next: "1-04"
},

"1-04": {
  bg: "room_day",
  date: "7月初旬 ／ パート練",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "コントラバスのパート練習。俺、渡部、ヒマリちゃん、中野さん。４人いるはずだけど、練習に揃ったことは、今年、まだ１回もない。今日も、中野さんは来なかった。" },
    { type: "chara", pos: "right", chara: "watabe", expr: "default" },
    { type: "chara", pos: "left", chara: "himari", expr: "default" },
    { speaker: "渡部", text: "中野先輩、また来ないっすね" },
    { speaker: "ヒマリちゃん", text: "……中野さん、体調、悪いんでしょうか" },
    { speaker: "ふれんち", text: "……どうだろう" },
    { speaker: "渡部", text: "ふれんち先輩、中野先輩と仲悪いんすか？" },
    { speaker: "ふれんち", text: "……悪くはない" },
    { speaker: "渡部", text: "でも、良くもないっすよね" },
    { text: "……痛いところを突いてくる。" },
    { type: "choice", choices: [
      { label: "「１年の時は普通に話してたんだけどな」と事実を話す",
        effects: [{ param: "nakano", delta: 1 }, { flag: "nakano_concern", value: true }],
        goto: "1-04a" },
      { label: "「大人の事情だ」と流す",
        goto: "1-04b" },
      { label: "「お前が突っ込むことじゃない」と切り上げる",
        effects: [{ param: "watabe", delta: -1 }],
        goto: "1-04c" }
    ]}
  ]
},
"1-04a": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "right", chara: "watabe", expr: "default" },
    { type: "chara", pos: "left", chara: "himari", expr: "default" },
    { speaker: "渡部", text: "へぇ……何があったんすかね" },
    { speaker: "ヒマリちゃん", text: "……あの、聞いちゃ、悪い気がします" },
    { text: "ヒマリちゃんは、いつもそうだ。一歩引いて、人の心の境目を、ちゃんと見ている。" }
  ],
  next: "1-05"
},
"1-04b": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "right", chara: "watabe", expr: "default" },
    { speaker: "渡部", text: "うわー、出ました先輩の『大人の事情』。一番ズルいやつっす" },
    { speaker: "ふれんち", text: "ズルくていいんだよ、こういうのは" }
  ],
  next: "1-05"
},
"1-04c": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "right", chara: "watabe", expr: "trouble" },
    { speaker: "渡部", text: "……っす。すんません" },
    { text: "渡部は、珍しく素直に引いた。少しだけ、言いすぎた、かもしれない。" }
  ],
  next: "1-05"
},

"1-05": {
  bg: "ginkgo_green",
  date: "7月初旬 ／ 銀杏並木のベンチ",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "暑い。梅雨が明けた。銀杏並木の下のベンチで、昼飯を食っていると、見慣れない組み合わせが通りかかった。" },
    { type: "chara", pos: "center", chara: "maachan", expr: "default" },
    { speaker: "まーちゃん", text: "あ、ふれんちさん……お昼ですか？" },
    { text: "まーちゃん。２年。バイオリン担当。経験者が多い中、大学から始めた子。ほんわかした性格で、渡部と仲良しで、よく一緒にご飯を食べているらしい。――……それは知ってる。" },
    { speaker: "ふれんち", text: "おう、まーちゃん" },
    { speaker: "まーちゃん", text: "一人で食べてるんですか？" },
    { speaker: "ふれんち", text: "まあ" },
    { speaker: "まーちゃん", text: "……いっしょに、食べてもいいですか？" },
    { type: "choice", choices: [
      { label: "「いいよ」と笑顔で受け入れる",
        effects: [{ param: "maachan", delta: 2 }, { flag: "maachan_secret_lunch", value: true }],
        goto: "1-05a" },
      { label: "「もうすぐ食べ終わるけど、どうぞ」とやや素っ気なく",
        effects: [{ param: "maachan", delta: 1 }],
        goto: "1-05b" },
      { label: "「ごめん、この後すぐ練習なんだ」と断る",
        goto: "1-05c" }
    ]}
  ]
},
"1-05b": {
  bg: "ginkgo_green",
  nodes: [
    { type: "chara", pos: "center", chara: "maachan", expr: "default" },
    { speaker: "まーちゃん", text: "あ、そう、ですか……じゃあ、また今度、ですね" },
    { text: "まーちゃんは、笑顔のままだったけど、ベンチの端にちょこんと座って、お弁当の包みを膝に置いた。" },
    { text: "悪い顔は、していない。でも、ちょっと、寂しそうにも見えた。" }
  ],
  next: "1-06"
},
"1-05c": {
  bg: "ginkgo_green",
  nodes: [
    { type: "chara", pos: "center", chara: "maachan", expr: "trouble" },
    { speaker: "まーちゃん", text: "あ、お忙しいんですね……すみません、お引き止めしちゃって" },
    { text: "まーちゃんは、ぺこりと頭を下げて、お弁当の包みを抱え直した。" },
    { text: "――俺は、なんとなく、彼女の背中を見送れずに、すぐに視線を逸らした。" }
  ],
  next: "1-06"
},
"1-05a": {
  bg: "ginkgo_green",
  nodes: [
    { type: "chara", pos: "center", chara: "maachan", expr: "default" },
    { speaker: "まーちゃん", text: "ありがとうございます。嬉しい、です" },
    { text: "ほんわかした子だ。傍にいると、湿度が下がる気がする。――でも。" },
    { speaker: "まーちゃん", text: "あの、ふれんちさん。ひとつだけ、お願いがあるんですけど" },
    { speaker: "ふれんち", text: "なに？" },
    { speaker: "まーちゃん", text: "……渡部君には、一緒にお昼食べたこと、内緒にしてもらえますか？" },
    { text: "――……空気が、動いた。内緒。何で？" },
    { speaker: "ふれんち", text: "……いいけど、何で？" },
    { speaker: "まーちゃん", text: "なんとなく、です。渡部君、心配症だから" },
    { text: "心配症。そう、言うのか。……なんか、俺の中で、まーちゃんへの見方が、ほんの少しだけ変わった気がした。" }
  ],
  next: "1-06"
},

"1-06": {
  bg: "waiwai",
  date: "7月中旬 ／ 居酒屋「わいわい」",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "居酒屋「わいわい」。オーケストラの連中がよく集まる、大学近くの大衆居酒屋。ビールがぬるくて、唐揚げが無駄にデカくて、座敷は畳が擦り切れている。俺たちにとっての、もう一つの部室だ。" },
    { type: "chara", pos: "center", chara: "nagatomo", expr: "default" },
    { speaker: "長友", text: "かんぱーい！" },
    { text: "長友。チューバ。ふらふらといい加減な奴に見えるが、なぜか女子と仲が良い。気づけば飲み会で、女子と２人でどこかへ消えている。……それはそれで才能なのかもしれない。" },
    { type: "clearChara", pos: "center" },
    { type: "chara", pos: "left", chara: "mio", expr: "drunk" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "ミオ", text: "ふれんちー、久しぶりに飲もうよー" },
    { text: "ミオは今日、もう顔が赤い。いつもより楽しそうで、いつもより隙があって、いつもより距離が近い。……お酒の神様は、意地悪だ。" },
    { speaker: "薫", text: "ミオ、飲みすぎ" },
    { speaker: "ミオ", text: "まだ３杯だよー" },
    { speaker: "薫", text: "３杯で十分だろ" },
    { type: "chara", pos: "center", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "薫、お前、飲まないの？" },
    { speaker: "薫", text: "飲めない。お前、それ何回聞くの" },
    { speaker: "ユタカ", text: "……覚えた" },
    { text: "薫は下戸だ。ウーロン茶のグラスを持ったまま、酔っ払いたちの面倒をみる役回りを、自然と引き受けている。……頼りになる。" }
  ],
  next: "1-07"
},

"1-07": {
  bg: "waiwai",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "席替わりのタイミングで、俺の隣がミオになった。偶然、のはずだ。" },
    { text: "――薫が俺をチラッと見て、何かに納得したように頷いた気がした。" },
    { type: "chara", pos: "center", chara: "mio", expr: "drunk" },
    { speaker: "ミオ", text: "ふれんちー、最近、どう？" },
    { speaker: "ふれんち", text: "どう、って" },
    { speaker: "ミオ", text: "いや、なんか、元気ないように見えるときあるよね" },
    { text: "元気ない。……見えるのか。" },
    { type: "choice", choices: [
      { label: "「元気だよ」と笑って返す",
        goto: "1-07-r1" },
      { label: "「そう見える？ ……ちょっと色々ある」と正直に答える",
        effects: [{ param: "mio", delta: 2 }, { flag: "mio_honest_once", value: true }],
        goto: "1-07a" },
      { label: "「ミオこそ、どうなんだよ」と話題を戻す",
        effects: [{ param: "mio", delta: 1 }],
        goto: "1-07-r2" }
    ]}
  ]
},
"1-07-r1": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "drunk" },
    { speaker: "ミオ", text: "ほんとー？ ならいいけどー" },
    { text: "ミオは、酔いの混じった視線で、ちょっとだけ俺の顔を覗き込んできた。" }
  ],
  next: "1-08"
},
"1-07-r2": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "私？ 私はねー、最近、酔いやすくなった、それくらいかなー" },
    { text: "ミオは、ふっと笑って、ビールジョッキを傾けた。話題はうまく逸らされた、らしい。" }
  ],
  next: "1-08"
},
"1-07a": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "色々って、何？" },
    { speaker: "ふれんち", text: "……大したことじゃない" },
    { speaker: "ミオ", text: "……ふうん。言いたくなったら、言ってね" },
    { speaker: "ミオ", text: "私も、……色々あるけどね" },
    { text: "ミオの目が、一瞬、ユタカのいる席に流れた。俺は、それを、見ないフリをした。" }
  ],
  next: "1-08"
},

"1-08": {
  bg: "waiwai",
  nodes: [
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "watabe", expr: "default" },
    { type: "chara", pos: "right", chara: "himari", expr: "shy" },
    { text: "宴もたけなわ。渡部が何かで盛り上がって、ヒマリちゃんがすみっこで小さくなっている。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "yutaka", expr: "default" },
    { type: "chara", pos: "right", chara: "miyako", expr: "default" },
    { text: "ミヤコさんがユタカに寄りかかっていて、彼女をあやすように、ユタカはビールを飲んでいる。４年生のおおらかさで、宴会の中心ではないのに、なぜか視線を集めている。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "heino", expr: "trouble" },
    { type: "chara", pos: "right", chara: "ai", expr: "default" },
    { text: "平野団長が、何度か立ち上がっては、何かを言いかけてはやめている。愛ちゃんは隣のテーブルで、誰かと海外旅行の話で盛り上がっている――手にはオレンジジュース。お酒は飲まない、らしい。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "hime", expr: "default" },
    { type: "chara", pos: "right", chara: "nagatomo", expr: "default" },
    { text: "――そして、姫ちゃんの隣には、長友がいた。" },
    { text: "……長友。またお前か。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "taeyan", expr: "default" },
    { type: "chara", pos: "right", chara: "yokono", expr: "default" },
    { text: "隅のテーブルでは、たえやんが黙々と唐揚げを食べている。ヨコノがその隣で、身振り手振り交えて話しかけているが、たえやんは首だけ縦に振っていた。" },
    { text: "――相変わらずの組み合わせだ。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "mio", expr: "default" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "ミオ", text: "あ、長友くん、姫ちゃんにロックオンしてる" },
    { speaker: "薫", text: "あいつ、ほんと、ずるい" },
    { speaker: "ふれんち", text: "ずるい？" },
    { speaker: "薫", text: "女子の警戒心解くのうますぎ。あとで首絞めたい" },
    { speaker: "ふれんち", text: "……物騒だな" },
    { type: "choice", choices: [
      { label: "「姫ちゃんは、平気だろ。気、強いし」と気楽に返す",
        goto: "1-08-r1" },
      { label: "「助けに行くか？」と冗談めかして言う",
        effects: [{ param: "hime", delta: 1 }],
        goto: "1-08a" },
      { label: "「誰かが行かないと、姫ちゃん怒るかもな」と独り言ちる",
        goto: "1-08-r2" }
    ]}
  ]
},
"1-08-r1": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "まあな。長友のほうが何かやらかしそうだけど" },
    { text: "薫は、ウーロン茶のグラスをカランと鳴らして、視線を長友の方へ細めた。" }
  ],
  next: "1-09"
},
"1-08-r2": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "……それ、お前が行ってもいいんだぞ" },
    { speaker: "ふれんち", text: "俺は、ね。やめとく" },
    { speaker: "薫", text: "ふん" }
  ],
  next: "1-09"
},
"1-08a": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "right", chara: "kaoru", expr: "smile" },
    { speaker: "薫", text: "おまえが行けよ" },
    { speaker: "ふれんち", text: "俺が行ったら逆効果だろ" },
    { speaker: "薫", text: "でも、行く勇気があるのはいいと思う" },
    { text: "薫に褒められた。……薫に褒められると、なんかドキッとする俺は、やばいのか。" },
    { type: "effect", effects: [{ param: "kaoru", delta: 1 }] }
  ],
  next: "1-09"
},

"1-09": {
  bg: "waiwai",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "気づけば、時刻は２３時過ぎ。お開きの声がかかって、会計と、そして――問題。" },
    { type: "chara", pos: "left", chara: "mio", expr: "drunk" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "ミオ、これ、帰れる状態じゃないな" },
    { speaker: "ミオ", text: "帰れるよー、帰るよー、ふれんち、手、引いてー" },
    { text: "……手、引いてー。ドキッとしたけど、薫の視線が冷たいので、深呼吸して、ドキドキを抑え込む。" },
    { speaker: "薫", text: "ふれんち。送る。私の家、ミオの家と近いし" },
    { speaker: "ふれんち", text: "あ、うん。じゃあ――" },
    { speaker: "薫", text: "……お前も、一緒に来い" },
    { type: "choice", choices: [
      { label: "「じゃあ、３人で行くか」と薫の提案に乗る",
        effects: [{ param: "kaoru", delta: 1 }],
        goto: "1-09-r1" },
      { label: "「……俺、いらなくない？」と遠慮する",
        effects: [{ param: "kaoru", delta: 2 }],
        goto: "1-09-r2" },
      { label: "「俺、一人でミオを送る」と申し出る",
        effects: [{ param: "kaoru", delta: -2 }, { flag: "overconfidence", value: true }],
        goto: "1-10c" }
    ]}
  ]
},
"1-09-r1": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "そうしよう。早く出るぞ" },
    { text: "薫は、伝票をひったくるように受け取って、立ち上がった。" }
  ],
  next: "1-10a"
},
"1-09-r2": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "right", chara: "kaoru", expr: "smile" },
    { speaker: "薫", text: "馬鹿。お前が一緒のほうが、ミオは安心するんだよ" },
    { text: "薫の言葉は、いつも、俺が思ってもみない角度から飛んでくる。" }
  ],
  next: "1-10a"
},
"1-10a": {
  bg: "street_night",
  date: "夜道 ／ ミオの帰り道",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "結局、薫が同行してくれた。この夜道に、薫がいるのは、俺にとってもミオにとっても、正しい。" },
    { type: "chara", pos: "left", chara: "mio", expr: "drunk" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "ミオ、そんなに体、預けるな。ふれんちが困るだろ" },
    { speaker: "ミオ", text: "だってー、酔っちゃったんだもーん" },
    { text: "薫は、頼りになる。" }
  ],
  next: "1-11"
},
"1-10c": {
  bg: "street_night",
  date: "夜道 ／ ミオの帰り道",
  nodes: [
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "……ふれんち" },
    { speaker: "ふれんち", text: "なに" },
    { speaker: "ミオ", text: "……ごめんね" },
    { speaker: "ふれんち", text: "何が？" },
    { speaker: "ミオ", text: "……なんでだろ、ごめんねって言いたくなった" },
    { text: "酔っ払いの言葉は、半分は戯言で、半分は本音だ。問題は、どっちがどっちか、わからないことだ。" },
    { speaker: "ミオ", text: "……ふれんち、今でも私のこと、好きだったりする？" },
    { type: "choice", choices: [
      { label: "「好きだよ」と答える",
        effects: [{ param: "mio", delta: 2 }, { flag: "mio_second_confession_attempt", value: true }, { param: "mio", delta: -2 }],
        goto: "1-10c-a" },
      { label: "「……わからない」と答える",
        effects: [{ param: "mio", delta: 1 }],
        goto: "1-10c-b" },
      { label: "「酔った勢いで、そういうの、聞くなよ」と流す",
        effects: [{ param: "confidence", delta: 1 }],
        goto: "1-10c-c" }
    ]}
  ]
},
"1-10c-a": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "surprise" },
    { speaker: "ミオ", text: "……そっか" },
    { text: "ミオは、そのまま、黙った。翌朝からしばらく、ミオは俺と目を合わせなかった。" },
    { text: "――急ぎすぎた、のかもしれない。" }
  ],
  next: "1-11"
},
"1-10c-b": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "……うん。わからないのが、正しいのかもね" }
  ],
  next: "1-11"
},
"1-10c-c": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "……ふれんち、意外と、大人になった？" },
    { speaker: "ふれんち", text: "そうかもな" },
    { speaker: "ミオ", text: "……いい男ぶらないでよ" }
  ],
  next: "1-11"
},

"1-11": {
  bg: "hall_stage",
  date: "7月下旬 ／ 演奏会当日・ゲネプロ",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "演奏会当日。ゲネプロ。ホールの舞台に上がると、緊張で指先が冷たい。" },
    { text: "俺の前の席は、姫ちゃん。背中越しに、彼女の髪からシャンプーの匂いがする。――余計なこと、考えるな。" },
    { type: "chara", pos: "center", chara: "heino", expr: "default" },
    { speaker: "平野", text: "みんな、いい演奏にしよう" },
    { text: "平野団長。元野球少年。小柄だが、筋肉質で、誠実で、楽器も確か。去年から団長を務めているが、俺は、密かに尊敬している。" },
    { speaker: "ふれんち", text: "平野、今日、緊張してる？" },
    { speaker: "平野", text: "……緊張してる。でも、平気だ" },
    { speaker: "ふれんち", text: "頼もしいな" },
    { speaker: "平野", text: "ふれんちも、ちゃんと弾け。……お前のコントラバスの音、好きだぞ" },
    { text: "――平野に、そんなこと言われると、弱い。" },
    { type: "effect", effects: [{ param: "hirano", delta: 1 }, { param: "confidence", delta: 1 }] }
  ],
  next: "1-12"
},

"1-12": {
  bg: "hall_stage",
  date: "演奏会 本番",
  nodes: [
    { type: "clearChara", pos: "all" },
    { type: "cg", cg: "concert_summer" },
    { text: "開演。" },
    { text: "ベルリオーズ《ローマの謝肉祭》。冒頭、サクソルン（この楽団ではアルトサックスで代用）のソロ。歯切れのいいリズム。" },
    { text: "サン＝サーンス《ピアノ協奏曲第２番》。ピアノの客演は、音大から来た大学院生。繊細で、重量感があって、この楽団には似合いすぎている。" },
    { text: "――そして、メイン。" },
    { text: "カサドシュ《交響曲第７番「イスラエル」》。俺のコントラバスは、譜面の黒い部分で、半分は誤魔化し、半分はギリギリで食らいついた。" },
    { text: "ヒマリちゃんは、自分のパートを丁寧に弾いていた。渡部は、勢いで何とかしていた。中野さんは、当然、俺たちの隣にはいなかった。――彼女は、本番だけは、絶対に来る。でも、本番前後の打ち上げや打ち合わせには、一切顔を出さない。それが、中野さんだ。" },
    { text: "終演。客席の拍手。俺の頬を、汗とも涙ともつかない何かが伝う。" },
    { text: "――悪くない。今年の夏の序曲は、悪くなかった。" }
  ],
  next: "1-13"
},

"1-13": {
  bg: "waiwai",
  date: "演奏会後 ／ 打ち上げ",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "演奏会終了後の打ち上げ。ミオは今日、絶好調で、早くから顔が赤い。加藤さんは、今日は客として来てくれていた。" },
    { type: "chara", pos: "left", chara: "yutaka", expr: "smile" },
    { type: "chara", pos: "right", chara: "miyako", expr: "default" },
    { text: "ユタカはミヤコさんと並んで、穏やかに話している。ミヤコさんはいつもの花柄ワンピースで、ユタカの肩にそっと頭を預けていた。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "watabe", expr: "default" },
    { type: "chara", pos: "center", chara: "kaoru", expr: "default" },
    { type: "chara", pos: "right", chara: "himari", expr: "trouble" },
    { text: "薫はいつも通りウーロン茶で、目を光らせている。渡部はヒマリちゃんに絡んで、ヒマリちゃんが困っている。中野さんは――いない。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "taeyan", expr: "default" },
    { type: "chara", pos: "right", chara: "yokono", expr: "default" },
    { text: "奥のテーブルでは、たえやんとヨコノがなぜか並んで座って、枝豆を黙々と食べていた。ヨコノが何か話しかけ、たえやんが無言で頷いている。――いつもの光景。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "sherry", expr: "default" },
    { text: "店の奥のテーブルでは、シェリーが一人で静かに、ウーロン茶のグラスを傾けていた。" },
    { text: "シェリー。チェロ。音楽センスが人並み外れていて、潔癖で、ブログを書いている、同期の女子。２年生のときに、一度だけデートしたことがあるけど、以来、どうも避けられている――気がする。" },
    { text: "彼女は、誰とも目を合わさず、それでいて、誰よりもこの場の音を聞いている、ような顔をしていた。" },
    { type: "clearChara", pos: "left" },
    { type: "chara", pos: "center", chara: "yutaka", expr: "smile" },
    { speaker: "ユタカ", text: "ふれんち、お疲れ" },
    { speaker: "ふれんち", text: "お疲れ" },
    { speaker: "ユタカ", text: "お前の音、意外と聞こえてたぞ" },
    { speaker: "ふれんち", text: "お世辞だろ" },
    { speaker: "ユタカ", text: "お世辞のときは、そう言う" },
    { text: "ユタカはお世辞を言わない男だ。だから、たまに本当のことを言われると、逃げ場がない。" },
    { type: "choice", choices: [
      { label: "加藤さんのところに行って挨拶する",
        effects: [{ param: "kato", delta: 1 }],
        goto: "1-14" },
      { label: "ミオの隣に行って飲む",
        effects: [{ param: "mio", delta: 1 }],
        goto: "1-15" },
      { label: "薫や平野と演奏会の反省会をする",
        effects: [{ param: "kaoru", delta: 1 }, { param: "hirano", delta: 1 }],
        goto: "1-16" },
      { label: "渡部に絡まれているヒマリちゃんを救出する",
        effects: [{ param: "himari", delta: 2 }, { param: "watabe", delta: -1 }],
        goto: "1-17" }
    ]}
  ]
},

"1-14": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふれんち君、カッコよかったよ" },
    { speaker: "ふれんち", text: "……からかわないでください" },
    { speaker: "加藤さん", text: "ほんとだよ？ ちゃんと、音楽に向き合ってる顔してた" },
    { text: "……この人に、こういう風に褒められると、俺はたぶん、けっこう嬉しい。" },
    { speaker: "加藤さん", text: "教会の夏祭り、来週なんだけど、ふれんち君、来てくれる？" },
    { type: "choice", choices: [
      { label: "「行きます」と約束する",
        effects: [{ param: "kato", delta: 2 }, { flag: "church_festival", value: true }],
        goto: "1-14-r1" },
      { label: "「……ちょっと、考えさせてください」と保留する",
        goto: "1-14-r2" }
    ]}
  ]
},
"1-14-r1": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふふ、よかった。じゃあ、シフト調整するね" },
    { text: "加藤さんは、いつもよりほんの少しだけ、嬉しそうに笑った。" }
  ],
  next: "1-18"
},
"1-14-r2": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "default" },
    { speaker: "加藤さん", text: "うん、無理しないでね。決まったら、いつでも教えて" },
    { text: "加藤さんは、軽く頷いて、グラスをふっと両手で包んだ。" }
  ],
  next: "1-18"
},

"1-15": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "drunk" },
    { speaker: "ミオ", text: "ふれんち、今日、ちゃんと弾けてた？" },
    { speaker: "ふれんち", text: "……半分くらい" },
    { speaker: "ミオ", text: "正直だねー" },
    { speaker: "ミオ", text: "ねえ、ふれんち。夏休み、予定ある？" },
    { type: "choice", choices: [
      { label: "「特にない」と答える",
        goto: "1-15-r1" },
      { label: "「免許合宿、行こうと思ってる」と答える",
        effects: [{ flag: "license_camp", value: true }],
        goto: "1-15a" },
      { label: "「バイト入れるつもり」と答える",
        effects: [{ flag: "stay_city", value: true }],
        goto: "1-15-r2" }
    ]}
  ]
},
"1-15-r1": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "へえ。なら、私が誘ったら来てくれる？" },
    { speaker: "ふれんち", text: "……どこに" },
    { speaker: "ミオ", text: "ふふ、それは、決めてからね" },
    { text: "酔った笑顔のままミオが投げてくる「決めてから」は、たぶん本気じゃない。たぶん、本気じゃない。" }
  ],
  next: "1-18"
},
"1-15-r2": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "あー、加藤さんとこ？ ふれんちって意外と働き者だよね" },
    { text: "ミオは、ちょっとだけ、つまらなそうな顔をした。気のせいかもしれないけど。" }
  ],
  next: "1-18"
},
"1-15a": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "surprise" },
    { speaker: "ミオ", text: "え、マジで？ 私も免許合宿いく予定なんだけど……" },
    { text: "――何か、今、世界のどこかで、運命の歯車が１つ、噛み合った気がする。" },
    { type: "effect", effects: [{ param: "mio", delta: 2 }, { flag: "mio_camp_hint", value: true }] }
  ],
  next: "1-18"
},

"1-16": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "left", chara: "kaoru", expr: "default" },
    { type: "chara", pos: "right", chara: "heino", expr: "default" },
    { speaker: "薫", text: "ふれんち、あのカサドシュの４楽章、ピッチ下がってたよ" },
    { speaker: "ふれんち", text: "……はい" },
    { speaker: "平野", text: "でも、悪くなかったぞ" },
    { speaker: "薫", text: "慰めるなよ、平野" },
    { speaker: "平野", text: "事実を言ってるだけだ" },
    { text: "薫は厳しい。平野は正直だ。２人揃うと、俺にとっての最高のアドバイザーだ。" },
    { speaker: "平野", text: "ふれんち、団長候補、お前どう思う？" },
    { speaker: "ふれんち", text: "……団長候補？" },
    { speaker: "平野", text: "俺、来年は受験だから、団長、譲りたいんだ。学園祭のリーダーも、今年は誰かに任せたい" },
    { text: "――この話、まだ１学期なのに、もう出てくるのか。ここから先、学園祭までのキーになる話だ。" },
    { type: "effect", effects: [{ flag: "leader_topic_raised", value: true }] }
  ],
  next: "1-18"
},

"1-17": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "left", chara: "watabe", expr: "default" },
    { type: "chara", pos: "right", chara: "himari", expr: "trouble" },
    { speaker: "渡部", text: "ヒマリちゃーん、一緒にカラオケ行こうよー" },
    { speaker: "ヒマリちゃん", text: "……ごめんなさい、遠慮します" },
    { speaker: "渡部", text: "えー、冷たいー" },
    { speaker: "ふれんち", text: "渡部、ストップ" },
    { speaker: "渡部", text: "あ、先輩" },
    { speaker: "ふれんち", text: "ヒマリちゃん嫌がってるだろ" },
    { speaker: "渡部", text: "えー、そうかなぁ" },
    { speaker: "ヒマリちゃん", text: "……すみません、ふれんちさん" },
    { speaker: "ふれんち", text: "いいよ。渡部、あとでコーヒー奢れ" },
    { speaker: "渡部", text: "ええー、なんで俺が……" },
    { text: "こういうとき、俺が「優しいお兄さん」で居続ける限り、ヒマリちゃんとの関係は安全だ。――安全、すぎる、と言うべきか。" }
  ],
  next: "1-18"
},

"1-18": {
  bg: "street_night",
  date: "打ち上げ終わり ／ 帰り道",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "打ち上げ終了。店を出ると、生ぬるい夏の空気。銀杏並木の葉は、まだ青くて、９月の終わりまでは、誰も葉の色なんて気にしない。" },
    { type: "chara", pos: "right", chara: "yutaka", expr: "default" },
    { speaker: "ユタカ", text: "ふれんち、帰る方向、一緒だろ" },
    { speaker: "ふれんち", text: "おう" },
    { speaker: "ユタカ", text: "ミヤコは……今日、実家の用事あるんだって。帰った" },
    { speaker: "ふれんち", text: "あ、そうなのか" },
    { speaker: "ユタカ", text: "うん" },
    { text: "ユタカと２人で帰るのは、久しぶりだ。ミヤコさんと付き合い始めてから、この時間は減った。……それは、寂しくもあり、当たり前でもある。" },
    { speaker: "ユタカ", text: "夏休み、免許合宿、行くのか？" },
    { speaker: "ふれんち", text: "……迷ってる" },
    { speaker: "ユタカ", text: "ミオ、同じ合宿らしいぞ" },
    { speaker: "ふれんち", text: "……お前、何で知ってんだよ" },
    { speaker: "ユタカ", text: "薫に聞いた" },
    { speaker: "ふれんち", text: "薫と最近話すの？" },
    { speaker: "ユタカ", text: "たまに。……薫は、ミオの親友だからな。色々、見えてる" },
    { text: "――薫に、筒抜け、ってことか。……まあ、そりゃそうだ。" },
    { speaker: "ユタカ", text: "ふれんち。お前、好きなようにやれよ。俺も、覚悟はしてる" },
    { speaker: "ふれんち", text: "……覚悟？" },
    { speaker: "ユタカ", text: "お前がミオを幸せにするなら、俺は嬉しい。そうならないなら、俺は怒る。それだけだ" },
    { text: "――ユタカの「それだけだ」は、世界で一番重い「それだけだ」だ。" }
  ],
  next: "1-19"
},

"1-19": {
  bg: "apartment",
  date: "自宅 ／ 夜",
  nodes: [
    // 1-15 で「免許合宿」を自分から口にしたかで文面を分岐
    { type: "condJump",
      branches: [
        { cond: { flag: "license_camp" }, to: "1-19a" }
      ],
      default: "1-19b" }
  ]
},
"1-19a": {
  bg: "apartment",
  date: "自宅 ／ 夜",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "風呂上がり、髪を拭きながら、部屋の窓を開ける。夏の夜風。携帯が、ピコン、と鳴った。" },
    { speaker: "ミオ（メール）", text: "今日、お疲れさま。ふれんちのコントラバス、ちゃんと聞こえたよ。思ったより上手くなってて、ちょっと感動した。免許合宿、行くなら連絡ちょうだい" },
    { text: "３行のメール。短い。でも、重い。俺は、しばらく携帯を見つめたあと、返信を打ち始めた。" },
    { type: "choice", choices: [
      { label: "「行くよ。一緒の合宿にする」とはっきり返す",
        effects: [{ param: "mio", delta: 2 }, { flag: "summer_path", value: "A" }],
        goto: "1-19-r1" },
      { label: "「まだ迷ってる。決まったら連絡する」と保留する",
        effects: [{ flag: "summer_path", value: "B" }],
        goto: "1-19-r2" },
      { label: "「残念だけど、今年は家にいる」と断る",
        effects: [{ param: "mio", delta: -1 }, { flag: "summer_path", value: "B_or_D" }],
        goto: "1-19-r3" }
    ]}
  ]
},
"1-19b": {
  bg: "apartment",
  date: "自宅 ／ 夜",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "風呂上がり、髪を拭きながら、部屋の窓を開ける。夏の夜風。携帯が、ピコン、と鳴った。" },
    { speaker: "ミオ（メール）", text: "今日、お疲れさま。ふれんちのコントラバス、ちゃんと聞こえたよ。思ったより上手くなってて、ちょっと感動した。……さっき、言いそびれたんだけど、私、８月、免許合宿行くんだ。ふれんちは、どうする？" },
    { text: "――「誘ったら来てくれる？」は、たぶん、この前振りだったんだ。ユタカから聞いた話も、これで繋がる。俺は、しばらく携帯を見つめたあと、返信を打ち始めた。" },
    { type: "choice", choices: [
      { label: "「俺も行く。同じ合宿にする」と踏み込む",
        effects: [{ param: "mio", delta: 2 }, { flag: "summer_path", value: "A" }, { flag: "license_camp", value: true }],
        goto: "1-19-r1" },
      { label: "「考えとく。決まったら連絡する」と保留する",
        effects: [{ flag: "summer_path", value: "B" }],
        goto: "1-19-r2" },
      { label: "「今年は、家のこととか色々あって」と断る",
        effects: [{ param: "mio", delta: -1 }, { flag: "summer_path", value: "B_or_D" }],
        goto: "1-19-r3" }
    ]}
  ]
},
"1-19-r1": {
  bg: "apartment",
  nodes: [
    { speaker: "ミオ（メール）", text: "ほんと？ やった！ 詳細決まったらまた連絡するね。免許、一緒に頑張ろー！" },
    { text: "三十秒もしないうちに、返信が返ってきた。電源、ずっと握ってたんじゃないか、と思った。" }
  ],
  next: "2A-01"
},
"1-19-r2": {
  bg: "apartment",
  nodes: [
    { speaker: "ミオ（メール）", text: "りょうかーい！ 待ってるね" },
    { text: "短い、いつもの絵文字付きの返信。でも、その軽さが、今夜は妙に、ありがたい。" }
  ],
  next: "2-HUB"
},
"1-19-r3": {
  bg: "apartment",
  nodes: [
    { speaker: "ミオ（メール）", text: "そっかー、了解！ じゃ、お土産期待しないでね（笑）" },
    { text: "「（笑）」の文字が、いつもより重く見えた。気のせい、ということにする。" }
  ],
  next: "2-HUB"
},

/* ========== 第2章 夏休み分岐ハブ ========== */
"2-HUB": {
  bg: "apartment",
  date: "2005年 7月末 ／ 演奏会翌日",
  nodes: [
    { text: "演奏会の余韻も、朝には消える。部活はオフ。大学も夏休み。――俺は、今年の夏をどう過ごすか、決めなきゃいけない。" },
    { type: "choice", choices: [
      { label: "ミオと一緒に、免許合宿へ行く",
        cond: { flag: "summer_path", eq: "A" },
        effects: [{ flag: "summer_path", value: "A" }],
        goto: "2A-01" },
      { label: "街に残って、バイト中心で過ごす",
        effects: [{ flag: "summer_path", value: "B" }],
        goto: "2B-01" },
      { label: "一人で、どこかへ旅に出る",
        effects: [{ flag: "summer_path", value: "C" }],
        goto: "2C-01" },
      { label: "実家に、帰省する",
        effects: [{ flag: "summer_path", value: "D" }],
        goto: "2D-01" }
    ]}
  ]
},

/* ===== Path A: 免許合宿（ミオ合流） ===== */
"2A-01": {
  bg: "camp",
  date: "8月上旬 ／ 長野・合宿所",
  nodes: [
    { text: "長野の山奥にある合宿所。都心から特急と送迎バスを乗り継いで、４時間。俺が合宿所の前でストレッチしていると、ちょうど別のバスから、見慣れた顔が降りてきた。" },
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "ふれんち！ ほんとに来たー！" },
    { speaker: "ふれんち", text: "来たよ" },
    { speaker: "ミオ", text: "ふふ、よろしく、同期" },
    { text: "ミオは、この２週間は同じ合宿生。俺たちは、同じ教習所で、同じ宿舎で、同じ食堂で、同じ時間を過ごす。……ここまで近づくのは、２年生の冬以来だ。" }
  ],
  next: "2A-02"
},
"2A-02": {
  bg: "camp",
  date: "合宿２日目 ／ 教習所",
  nodes: [
    { text: "学科の授業。隣にミオが座る。距離が近い。シャンプーの匂いが近い。――教官の話は、右から左に抜けていく。" },
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "ふれんち、ちゃんと聞いて" },
    { speaker: "ふれんち", text: "聞いてる" },
    { speaker: "ミオ", text: "嘘つけ" },
    { text: "……見抜かれている。" },
    { text: "俺のS字コースが酷い。教官に怒鳴られて、萎縮して、また失敗して、の悪循環。" }
  ],
  next: "2A-03"
},
"2A-03": {
  bg: "riverbank_night",
  date: "合宿中盤 ／ 河原",
  nodes: [
    { type: "cg", cg: "mio_riverbank" },
    { text: "合宿所から歩いて１０分の河原。星が、異常に多い。ミオが持ってきたコンビニのおにぎりを齧りながら、俺たちは土手に座った。" },
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "ふれんち、去年の冬のこと、覚えてる？" },
    { speaker: "ふれんち", text: "……覚えてる" },
    { speaker: "ミオ", text: "私、あのとき、ちゃんとふれんちに説明できなかった。だから、今日、話してもいい？" },
    { type: "choice", choices: [
      { label: "「聞きたい」と答える",
        effects: [{ param: "mio", delta: 2 }, { flag: "mio_riverbank_talk", value: true }],
        goto: "2A-03a" },
      { label: "「もういいよ、過ぎたことだ」と遮る",
        effects: [{ param: "mio", delta: -2 }],
        goto: "2A-03-r" },
      { label: "黙って頷く",
        effects: [{ param: "mio", delta: 1 }],
        goto: "2A-03a" }
    ]}
  ]
},
"2A-03-r": {
  bg: "riverbank_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "trouble" },
    { speaker: "ミオ", text: "……うん。そうだよね。ごめん" },
    { text: "ミオは、それ以上、何も言わなかった。" },
    { text: "星空が、急に、遠くなった気がした。" }
  ],
  next: "2A-04"
},
"2A-03a": {
  bg: "riverbank_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "私、大学入ってすぐ、ユタカが好きだったんだ。……知ってるよね？" },
    { speaker: "ふれんち", text: "うん" },
    { speaker: "ミオ", text: "フラれた。でも、ずっと、引きずってた。……ふれんちに告白されたとき、私、ずるかった" },
    { speaker: "ふれんち", text: "ずるかった？" },
    { speaker: "ミオ", text: "ふれんちのこと、嬉しかったのに、『ありがとう』で終わらせられなかった。……『今は無理』って言ったよね。私、あのとき、ユタカを忘れる自信が、なかっただけなの" },
    { text: "――今。『今は無理』。あの言葉の、『今』は、２００４年１２月の『今』だった。２００５年８月の『今』は、どうなんだ？" },
    { type: "choice", choices: [
      { label: "「じゃあ、今は？」と正面から聞く",
        effects: [{ param: "mio", delta: 3 }, { flag: "mio_direct_ask", value: true }],
        goto: "2A-03b" },
      { label: "「……話してくれて、ありがとう」で留める",
        effects: [{ param: "mio", delta: 1 }],
        goto: "2A-03a-r1" },
      { label: "「俺のこと、迷惑だった？」と自虐的に聞く",
        effects: [{ param: "mio", delta: -1 }],
        goto: "2A-03a-r2" }
    ]}
  ]
},
"2A-03a-r1": {
  bg: "riverbank_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "……うん。聞いてくれて、ありがと" },
    { text: "ミオは、河原の小石を拾って、川に投げた。ぽちゃん、と小さな音がした。" }
  ],
  next: "2A-04"
},
"2A-03a-r2": {
  bg: "riverbank_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "trouble" },
    { speaker: "ミオ", text: "……ふれんち、そういうの、だめだよ" },
    { speaker: "ふれんち", text: "ごめん" },
    { speaker: "ミオ", text: "謝らなくていいから、自分のこと、悪く言わないでね" },
    { text: "星空の下、彼女の声は、いつもより少しだけ、強かった。" }
  ],
  next: "2A-04"
},
"2A-03b": {
  bg: "riverbank_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "shy" },
    { speaker: "ミオ", text: "……今は、ね。ユタカのことは、もう、『恋』じゃなくなった。ちゃんと、友達として好き。だから、そこは、安心して" },
    { speaker: "ふれんち", text: "……うん" },
    { speaker: "ミオ", text: "でも、ふれんちのことを『恋』として見れるかは、まだ、わからない" },
    { speaker: "ミオ", text: "……でも、一緒にいて、楽しい、って思うようになった" },
    { text: "――それは、２年生の冬には、なかった言葉だった。" }
  ],
  next: "2A-04"
},
"2A-04": {
  bg: "camp",
  date: "合宿中盤 ／ 夜のロビー",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "合宿中盤、夜。ミオが、また飲んでいた。合宿所のロビーで、隣の教習生（別の大学の男子）に絡まれている。" },
    { type: "chara", pos: "center", chara: "mio", expr: "drunk" },
    { speaker: "ミオ", text: "だからー、今は、付き合えないってー" },
    { speaker: "男（別大学）", text: "えー、冷たいなー、ちょっと飲もうよー" },
    { type: "choice", choices: [
      { label: "割って入って止める",
        effects: [{ param: "mio", delta: 2 }],
        goto: "2A-04a" },
      { label: "合宿所の職員に言う",
        effects: [{ param: "mio", delta: 1 }],
        goto: "2A-04-r" },
      { label: "ミオを引きはがして、無言で部屋に戻す",
        effects: [{ param: "mio", delta: 3 }, { flag: "mio_rescue", value: true }, { param: "confidence", delta: 1 }],
        goto: "2A-04b" }
    ]}
  ]
},
"2A-04-r": {
  bg: "camp",
  nodes: [
    { text: "俺は、合宿所の事務室まで走って、女性スタッフを呼んできた。" },
    { type: "chara", pos: "center", chara: "mio", expr: "drunk" },
    { speaker: "ミオ", text: "ふれんち……ありがと、わざわざ" },
    { text: "ミオは、戻ってきた俺を見て、ちょっとだけ気まずそうに、けれど安心したように笑った。" }
  ],
  next: "2A-05"
},
"2A-04a": {
  bg: "camp",
  nodes: [
    { speaker: "ふれんち", text: "すみません、この子、連れです。部屋戻します" },
    { speaker: "男", text: "……ちっ" },
    { text: "男は舌打ちして、グラスを持ったままロビーを出ていった。" }
  ],
  next: "2A-05"
},
"2A-04b": {
  bg: "camp",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "drunk" },
    { speaker: "ふれんち", text: "ミオ、行くぞ" },
    { speaker: "ミオ", text: "ふれん、ち……" },
    { speaker: "男", text: "お、何だお前" },
    { speaker: "ふれんち", text: "彼女の先輩です。もう、寝る時間なんで" },
    { text: "俺は、ミオの手首を掴んで、ロビーを出た。部屋の前まで連れて行って、ドアを開けて、「水、飲んで寝ろ」とだけ言って、背を向けた。" },
    { speaker: "ミオ", text: "……ふれんち" },
    { speaker: "ふれんち", text: "うん" },
    { speaker: "ミオ", text: "……ありがとう" }
  ],
  next: "2A-05"
},
"2A-05": {
  bg: "camp",
  date: "合宿最終日",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "俺もミオも、卒検合格。ミオが「合格ー！」と万歳した時、普段より高く、腕が上がっていた。" },
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "ふれんち、帰ったら、ドライブ行こうよ" },
    { speaker: "ふれんち", text: "まだ免許取ってないだろ、俺ら" },
    { speaker: "ミオ", text: "学科、受けてからね" },
    { speaker: "ふれんち", text: "……だな" },
    { text: "――合宿は、終わった。俺たちの距離は、確実に、少し、縮まっていた。" }
  ],
  next: "3-01"
},

/* ===== Path B: 街に残る ===== */
"2B-01": {
  bg: "dolce",
  date: "8月初旬 ／ ドルチェ",
  nodes: [
    { text: "街は、いつもより少し静かだ。大学生の多くは、帰省したり、旅行に行ったりで、近所の安売りスーパーも平日は閑散としている。ドルチェも、客足は少ない。そのかわり、加藤さんが店にいる時間が、少し、増えた。" },
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふれんち君、今週の日曜、教会の夏祭り、お願いしてもいい？" },
    { speaker: "ふれんち", text: "了解です" },
    { speaker: "加藤さん", text: "ありがとう。……たぶん、雰囲気、気に入ると思うよ" }
  ],
  next: "2B-02"
},
"2B-02": {
  bg: "church_court",
  date: "教会の夏祭り",
  nodes: [
    { type: "clearChara", pos: "all" },
    { type: "cg", cg: "kato_festival" },
    { text: "都内の、小さなプロテスタント教会。中庭で、焼きそばとたこ焼きが焼かれていて、近所の子どもたちが走り回っている。……意外と、庶民的だ。" },
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふれんち君、焼きそばの屋台、一緒に手伝ってくれる？" },
    { speaker: "ふれんち", text: "了解です" },
    { text: "加藤さんは、エプロン姿で、頭にバンダナを巻いていた。普段のドルチェとは違って、少しだけ、幼く見えた。この人の普段着、初めて見たかもしれない。" }
  ],
  next: "2B-03"
},
"2B-03": {
  bg: "church_court",
  date: "夏祭り・夕方",
  nodes: [
    { text: "祭りは、夕方になると、急に静かになった。片付けの途中、加藤さんが裏の椅子に座って、深く息をついた。" },
    { type: "chara", pos: "center", chara: "kato", expr: "trouble" },
    { speaker: "加藤さん", text: "ふれんち君、隣、座る？" },
    { speaker: "ふれんち", text: "はい" },
    { speaker: "加藤さん", text: "ごめんね、お疲れさま" },
    { speaker: "ふれんち", text: "いえ、楽しかったです" },
    { speaker: "加藤さん", text: "……ふれんち君、私、たまに、こうやって、働けない日があるの" },
    { speaker: "ふれんち", text: "え" },
    { speaker: "加藤さん", text: "貧血というか、体調がね。だから、２５歳にもなって、フルタイムの仕事してないでしょ？ ドルチェくらいしか、続かないの" },
    { type: "choice", choices: [
      { label: "「大変ですね」と当たり障りなく返す",
        goto: "2B-04" },
      { label: "「……無理、しないでくださいね」と心配する",
        effects: [{ param: "kato", delta: 2 }],
        goto: "2B-04" },
      { label: "「ずっと、そうなんですか？」と踏み込んで聞く",
        effects: [{ param: "kato", delta: 3 }, { flag: "kato_illness_known", value: true }],
        goto: "2B-03a" }
    ]}
  ]
},
"2B-03a": {
  bg: "church_court",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "trouble" },
    { speaker: "加藤さん", text: "……うん。中学のとき、大きな病気して、それからずっと。慣れたよ" },
    { speaker: "加藤さん", text: "だからね、私、将来のこと、あんまり考えないの。いま、好きな人と、好きな時間を過ごせたら、それで十分" },
    { text: "――……それは、重いのか、軽いのか、わからない言葉だった。でも、この人が、そう言うなら、そうなんだろう。" }
  ],
  next: "2B-04"
},
"2B-04": {
  bg: "church_court",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "default" },
    { speaker: "加藤さん", text: "去年のクリスマス、ミサに来てくれたの、嬉しかったよ" },
    { speaker: "ふれんち", text: "あ、はい、こっちこそ" },
    { speaker: "加藤さん", text: "ふれんち君、今年のクリスマスは、予定、ある？" },
    { type: "choice", choices: [
      { label: "「まだ、わかりません」と正直に答える",
        goto: "2B-04-r" },
      { label: "「……加藤さんと過ごせたら嬉しいです」と少し踏み込む",
        effects: [{ param: "kato", delta: 3 }, { flag: "kato_christmas_promise", value: true }],
        goto: "2B-04a" }
    ]}
  ]
},
"2B-04-r": {
  bg: "church_court",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふふ、そっか。決まったら、教えてくれる？" },
    { text: "加藤さんは、それ以上、追ってこなかった。それが、彼女らしい優しさだ、と思った。" }
  ],
  next: "2B-05"
},
"2B-04a": {
  bg: "church_court",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "……ふふ。嬉しいこと、言うね" },
    { speaker: "加藤さん", text: "でもね、あんまり、私に優しくしすぎないでね" },
    { speaker: "ふれんち", text: "え？" },
    { speaker: "加藤さん", text: "私、年上だし、体も強くないし、……ふれんち君、ちゃんと、自分の年齢の人と恋愛するべきだよ" },
    { text: "――この人の優しさの中には、いつも、自分自身を一歩引かせる何かがある。" }
  ],
  next: "2B-05"
},
"2B-05": {
  bg: "street_night",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "加藤さんを、最寄り駅まで送る。駅の改札前で、加藤さんは振り向いて、小さく笑った。" },
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふれんち君" },
    { speaker: "ふれんち", text: "はい" },
    { speaker: "加藤さん", text: "ありがとう。……今日、楽しかった" },
    { text: "彼女の白い肩に、夏の夕陽が落ちた。俺は、この一瞬を、たぶん、忘れないだろう、と思った。" }
  ],
  next: "2B-06"
},
"2B-06": {
  bg: "dolce",
  date: "8月中旬 ／ お盆休み",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "お盆期間、ドルチェは店長の事情で臨時休業。俺は、急に暇になった。そんなとき、久しぶりに会った人間が、いた。" },
    { type: "choice", choices: [
      { label: "シェリーがドルチェの前に立っているのを見かける",
        effects: [{ flag: "sherry_reunion", value: true }],
        goto: "2B-07a" },
      { label: "中野さんが夜のコンビニで買い物しているのを見る",
        effects: [{ flag: "nakano_reunion", value: true }],
        goto: "2B-07b" },
      { label: "バイトだけして、あとは家で音楽を聴く",
        goto: "2B-08" }
    ]}
  ]
},
"2B-07a": {
  bg: "dolce",
  nodes: [
    { text: "シェリーは、閉まったドルチェのドアの前で、首をかしげていた。" },
    { type: "chara", pos: "center", chara: "sherry", expr: "default" },
    { speaker: "ふれんち", text: "……シェリー？" },
    { speaker: "シェリー", text: "……あ。ふれんち" },
    { speaker: "ふれんち", text: "店、閉まってるよ。お盆休み" },
    { speaker: "シェリー", text: "……そっか" },
    { text: "シェリー。チェロ。音楽センスが人並み外れていて、潔癖で、ブログを書いている、同期の女子。２年生のときに、一度だけデートしたことがあるけど、以来、どうも避けられている。" },
    { speaker: "シェリー", text: "……じゃ" },
    { speaker: "ふれんち", text: "ちょっと待って" },
    { type: "choice", choices: [
      { label: "「近くのカフェ、紹介しようか？」と誘う",
        effects: [{ param: "sherry", delta: 2 }],
        goto: "2B-07a-cafe" },
      { label: "「なんで俺、避けられてるの？」と正面から聞く",
        effects: [{ param: "sherry", delta: 3 }, { flag: "sherry_direct_ask", value: true }],
        goto: "2B-07a-1" },
      { label: "「……また、どこかで」と引く",
        goto: "2B-07a-back" }
    ]}
  ]
},
"2B-07a-cafe": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "sherry", expr: "default" },
    { speaker: "シェリー", text: "……ううん、いい。今日は、本屋に寄りたかっただけだから" },
    { text: "シェリーは、断り方さえも、潔癖だった。" }
  ],
  next: "2B-08"
},
"2B-07a-back": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "sherry", expr: "default" },
    { speaker: "シェリー", text: "……うん。じゃあね" },
    { text: "シェリーの背中が、夏の人気のない通りに消えていった。" }
  ],
  next: "2B-08"
},
"2B-07a-1": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "sherry", expr: "shy" },
    { speaker: "シェリー", text: "……え？" },
    { speaker: "ふれんち", text: "俺、何かした？ もし、したなら、謝る" },
    { speaker: "シェリー", text: "……してない。私が、勝手に、ね" },
    { speaker: "ふれんち", text: "？" },
    { speaker: "シェリー", text: "……今日は、もう、帰る。じゃあね、ふれんち" },
    { text: "でも、シェリーの背中は、前より少しだけ、柔らかくなった気がした。" }
  ],
  next: "2B-08"
},
"2B-07b": {
  bg: "street_night",
  date: "深夜のコンビニ",
  nodes: [
    { text: "深夜のコンビニ。中野さんが、冷凍食品のコーナーで、しゃがみ込んで品定めをしていた。俺は、店を出ようとして、思わず足を止めた。" },
    { type: "chara", pos: "center", chara: "nakano", expr: "default" },
    { speaker: "ふれんち", text: "……中野さん" },
    { text: "（彼女は顔を上げるが、目を合わせず、小さく会釈だけする）" },
    { speaker: "ふれんち", text: "久しぶり" },
    { text: "（彼女は頷いただけ。）" },
    { type: "choice", choices: [
      { label: "「夏休み、何してるの？」と話しかける",
        effects: [{ param: "nakano", delta: -1 }],
        goto: "2B-07b-talk" },
      { label: "「何か手伝う？ 荷物、重そう」と物理的に助ける",
        effects: [{ param: "nakano", delta: 2 }, { flag: "nakano_helped", value: true }],
        goto: "2B-07b-1" },
      { label: "「邪魔してごめん」と引き下がる",
        effects: [{ param: "nakano", delta: 1 }],
        goto: "2B-07b-back" }
    ]}
  ]
},
"2B-07b-talk": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "nakano", expr: "default" },
    { speaker: "中野さん", text: "……特に、何も" },
    { text: "それだけ。それ以上、何も言わなかった。続ける言葉が見つからなくて、俺は、コンビニを出た。" }
  ],
  next: "2B-08"
},
"2B-07b-back": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "nakano", expr: "default" },
    { text: "中野さんは、小さく、頷いた。それ以上は、何も。" },
    { text: "俺は、レジに向かった。背中に、彼女の視線を、ちょっとだけ、感じた気がした。" }
  ],
  next: "2B-08"
},
"2B-07b-1": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "nakano", expr: "default" },
    { speaker: "中野さん", text: "……大丈夫、です" },
    { speaker: "ふれんち", text: "そう。……じゃあ" },
    { text: "中野さんは、それだけ。でも、コンビニを出るとき、彼女が一瞬だけ、俺の背中に視線を投げたのがわかった。……ほんの一瞬、だけだった。" }
  ],
  next: "2B-08"
},
"2B-08": {
  bg: "dolce",
  date: "8月末 ／ ドルチェ",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "８月末。夏が終わる。ドルチェで最後のシフトが終わった夜、加藤さんが、カウンターの向こう側から、俺を見て言った。" },
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "ふれんち君、夏、楽しかった？" },
    { speaker: "ふれんち", text: "……はい" },
    { speaker: "加藤さん", text: "よかった" },
    { text: "加藤さんの笑顔は、相変わらず、俺を不安にさせる。この人は、きっと、何があっても、俺の前では笑うんだろうな、と思った。" }
  ],
  next: "3-01"
},

/* ===== Path C: 旅行 ===== */
"2C-01": {
  bg: "apartment",
  date: "8月上旬",
  nodes: [
    { text: "夏休み、旅行しようかな、と考えていた矢先、愛ちゃんからメールが来た。" },
    { speaker: "愛ちゃん（メール）", text: "ねえふれんち君、姫ちゃんと私で、京都行くんだけど、男手が欲しいって言うの！ 一緒にどう？" },
    { type: "choice", choices: [
      { label: "「行きたい」と即返信",
        effects: [{ param: "ai", delta: 2 }],
        goto: "2C-01-r1" },
      { label: "「姫ちゃん、俺のこと嫌がるんじゃない？」と確認",
        effects: [{ param: "ai", delta: 1 }],
        goto: "2C-01-r2" },
      { label: "「ごめん、一人旅にする」と断る",
        effects: [{ flag: "solo_trip", value: true }],
        goto: "2C-05" }
    ]}
  ]
},
"2C-01-r1": {
  bg: "apartment",
  nodes: [
    { speaker: "愛ちゃん（メール）", text: "やったぁ！ じゃあ、新幹線の予約しとくね。土曜の朝発で！" },
    { text: "あまりにも段取りが速い。たぶん、最初から俺を入れる前提で動いていた。" },
    { type: "date", date: "数日後 ／ 出発の朝" },
    { text: "土曜日、朝の東京駅。改札の前で、愛ちゃんと姫ちゃんが待っていた。" }
  ],
  next: "2C-02"
},
"2C-01-r2": {
  bg: "apartment",
  nodes: [
    { speaker: "愛ちゃん（メール）", text: "大丈夫大丈夫、姫ちゃんもふれんち君なら平気って言ってたから！" },
    { text: "「平気って言ってた」――この「平気」のニュアンスが、京都までの不安の種になりそうだった。" },
    { type: "date", date: "数日後 ／ 出発の朝" },
    { text: "土曜日、朝の東京駅。改札の前で、愛ちゃんと姫ちゃんが待っていた。姫ちゃんは、こちらに気づくと、軽く頷いただけだった。" }
  ],
  next: "2C-02"
},
"2C-02": {
  bg: "kyoto_night",
  date: "京都",
  nodes: [
    { text: "新幹線の中、愛ちゃんは浮かれていて、姫ちゃんは窓の外を見ていた。姫ちゃんが俺に話しかけた最初のセリフ。" },
    { type: "chara", pos: "center", chara: "hime", expr: "default" },
    { speaker: "姫", text: "愛が無理を言って、ごめんなさいね" },
    { speaker: "ふれんち", text: "いや……" },
    { speaker: "姫", text: "でも、人数、いたほうが便利だから、協力して" },
    { text: "……事務的だ。でも、嫌そうでは、ない。姫ちゃんは、基本的に正直な人だ、と改めて思った。" }
  ],
  next: "2C-03"
},
"2C-03": {
  bg: "kyoto_night",
  date: "京都・祇園の夜",
  nodes: [
    { text: "京都は、ちょうど祇園祭の終わりで、街全体にお祭りの余韻が漂っていた。夜、愛ちゃんが疲れて宿に戻ったあと、姫ちゃんが「ちょっと散歩しない？」と言った。" },
    { type: "chara", pos: "center", chara: "hime", expr: "default" },
    { speaker: "姫", text: "愛って、元気だけど、疲れやすいのよね" },
    { speaker: "ふれんち", text: "わかる" },
    { speaker: "姫", text: "……ね、ふれんち" },
    { speaker: "ふれんち", text: "はい" },
    { speaker: "姫", text: "オーケストラに入った頃、東山と噂になってたの、聞いてる？" },
    { speaker: "ふれんち", text: "……噂は" },
    { speaker: "姫", text: "あれね、半分は本当で、半分は嘘" },
    { speaker: "姫", text: "私、あの子のこと、別に嫌いじゃなかった。でも、付き合う前に、彼が別の女の子と二股してるのがわかったの。それで、私の方から切った" },
    { speaker: "ふれんち", text: "……そっか" },
    { speaker: "姫", text: "だから、私、男の人のこと、簡単に信じない。でも、長友みたいに、ふらふらしてるのに優しい人も、警戒してる" },
    { type: "choice", choices: [
      { label: "「俺は、警戒されるほどの男じゃないよ」と冗談めかす",
        effects: [{ param: "hime", delta: 2 }],
        goto: "2C-03-r1" },
      { label: "「じゃあ、信じてもらえるように、気をつける」と真顔で言う",
        effects: [{ param: "hime", delta: 1 }],
        goto: "2C-03-r2" },
      { label: "「姫ちゃんが警戒するなら、何も言わない方がいいのかな」と引く",
        goto: "2C-03-r3" }
    ]}
  ]
},
"2C-03-r1": {
  bg: "kyoto_night",
  nodes: [
    { type: "chara", pos: "center", chara: "hime", expr: "default" },
    { speaker: "姫", text: "ふふ。確かにね。あなた、自虐的にしてれば安全っていうタイプだもの" },
    { text: "言葉は辛辣だけど、姫ちゃんの目は、少しだけ笑っていた。" }
  ],
  next: "2C-04"
},
"2C-03-r2": {
  bg: "kyoto_night",
  nodes: [
    { type: "chara", pos: "center", chara: "hime", expr: "default" },
    { speaker: "姫", text: "……ふうん。じゃあ、見させてもらうわね、これから" },
    { text: "それだけ。でも、姫ちゃんが俺を「これから見る」相手として認識した、というだけで、十分だった。" }
  ],
  next: "2C-04"
},
"2C-03-r3": {
  bg: "kyoto_night",
  nodes: [
    { type: "chara", pos: "center", chara: "hime", expr: "default" },
    { speaker: "姫", text: "そういう退き方は、嫌いじゃないけど、面白くもないわよ" },
    { text: "姫ちゃんは、それだけ言って、また石畳の方に視線を戻した。" }
  ],
  next: "2C-04"
},
"2C-04": {
  bg: "kyoto_night",
  date: "帰りの新幹線",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "帰りの新幹線で、愛ちゃんが俺の隣に座った。姫ちゃんは、一つ前の席で、イヤホンをしている。" },
    { type: "chara", pos: "center", chara: "ai", expr: "default" },
    { speaker: "愛ちゃん", text: "ねえ、ふれんち君" },
    { speaker: "ふれんち", text: "ん" },
    { speaker: "愛ちゃん", text: "……私のこと、どう思う？" },
    { text: "――出た。この、愛ちゃんのストレートさ。" },
    { type: "choice", choices: [
      { label: "「いい子だと思う」と無難に答える",
        effects: [{ param: "ai", delta: 1 }],
        goto: "2C-04-r1" },
      { label: "「……花見のとき、楽しかった」と過去の話をする",
        effects: [{ param: "ai", delta: 2 }],
        goto: "2C-04-r2" },
      { label: "「俺、好みのタイプ、別にいるんだ」と正直に言う",
        effects: [{ param: "ai", delta: -2 }, { flag: "ai_honesty", value: true }],
        goto: "2C-04-r3" }
    ]}
  ]
},
"2C-04-r1": {
  bg: "kyoto_night",
  nodes: [
    { type: "chara", pos: "center", chara: "ai", expr: "default" },
    { speaker: "愛ちゃん", text: "それ、男の人が一番無責任に言うやつ" },
    { text: "愛ちゃんは、ぷっと吹き出して、それ以上は突っ込んでこなかった。" }
  ],
  next: "3-01"
},
"2C-04-r2": {
  bg: "kyoto_night",
  nodes: [
    { type: "chara", pos: "center", chara: "ai", expr: "default" },
    { speaker: "愛ちゃん", text: "……えへへ、やっぱり覚えててくれてたんだ" },
    { text: "愛ちゃんの頬が、車窓の夕焼けと同じ色になった。" }
  ],
  next: "3-01"
},
"2C-04-r3": {
  bg: "kyoto_night",
  nodes: [
    { type: "chara", pos: "center", chara: "ai", expr: "default" },
    { speaker: "愛ちゃん", text: "……ふうん。正直なのは、嫌いじゃないけどね" },
    { text: "愛ちゃんは、ぷいっと窓の外に視線をやった。怒っているようでいて、たぶん、半分は照れていた。" }
  ],
  next: "3-01"
},
"2C-05": {
  bg: "matsumoto",
  date: "8月中旬 ／ 松本",
  nodes: [
    { text: "俺は、一人で、松本に向かった。特に意味はない。ただ、音楽が生まれた街を、歩いてみたかっただけだ。" },
    { text: "松本城。開智学校。縄手通り。夕方、中町通りのカフェで、本を読んでいると、隣の席から、聞き覚えのある声がした。" },
    { type: "chara", pos: "center", chara: "taeyan", expr: "default" },
    { speaker: "たえやん", text: "……ふれんち？" },
    { text: "たえやん。ホルン。同期の女子。実家が大学の近くのはずなのに、なぜここに？" },
    { speaker: "たえやん", text: "おばあちゃんち、長野" },
    { speaker: "ふれんち", text: "あ、そうなんだ" },
    { speaker: "たえやん", text: "ふれんち、どうしてここにいんの" },
    { speaker: "ふれんち", text: "……気分" },
    { speaker: "たえやん", text: "……ふーん" },
    { text: "たえやんは、それ以上聞かなかった。でも、「カラオケ、行かない？」と言い出した。" },
    { text: "夜の松本、ちっちゃなカラオケ店で、たえやんは、びっくりするくらい、歌がうまかった。ポーカーフェースが崩れて、初めて声を出して笑う彼女を、俺は初めて見た。" },
    { type: "effect", effects: [{ param: "taeyan", delta: 3 }, { flag: "taeyan_karaoke", value: true }] },
    { text: "――たえやんは、おもしろい。でも、それ以上の関係には、たぶん、ならない。" }
  ],
  next: "3-01"
},

/* ===== Path D: 帰省 ===== */
"2D-01": {
  bg: "apartment",
  date: "8月 ／ 実家",
  nodes: [
    { text: "実家は、関東の地方都市。両親と、猫が１匹。エアコンのない部屋で、扇風機の前に座って、本を読む。それが、俺の帰省。" },
    { text: "高校の同級生とも、特に会わなかった。たぶん、今の俺は、誰とも会いたくないんだろう。" }
  ],
  next: "2D-02"
},
"2D-02": {
  bg: "apartment",
  date: "8月中旬 ／ 夜",
  nodes: [
    { text: "夜、携帯が鳴った。差出人は、――中野さん。……中野さんから、メールがくることは、ほとんどない。" },
    { speaker: "中野さん（メール）", text: "お疲れさまです。９月のパート練、どうしますか。ご連絡、ください" },
    { text: "短い。業務連絡。でも、彼女から俺にメールが届くこと自体、今年度はたぶん初めてだ。" },
    { type: "choice", choices: [
      { label: "「日程決めようか。何時なら空いてる？」と丁寧に返す",
        effects: [{ param: "nakano", delta: 2 }, { flag: "nakano_mail_warm", value: true }],
        goto: "2D-03" },
      { label: "「渡部とヒマリちゃんにも連絡するね」とリーダーっぽく返す",
        effects: [{ param: "hirano", delta: 1 }],
        goto: "2D-03" },
      { label: "「そうだね、決めないと」と曖昧に返す",
        goto: "2D-03" }
    ]}
  ]
},
"2D-03": {
  bg: "apartment",
  date: "8月末 ／ 電話",
  nodes: [
    { text: "８月末、ふいに、ユタカから電話があった。" },
    { type: "chara", pos: "center", chara: "yutaka", expr: "trouble" },
    { speaker: "ユタカ", text: "おう、ふれんち" },
    { speaker: "ふれんち", text: "どした" },
    { speaker: "ユタカ", text: "ミヤコ、最近、元気ないんだ" },
    { speaker: "ふれんち", text: "え" },
    { speaker: "ユタカ", text: "夏休み入ってから、ずっと" },
    { speaker: "ふれんち", text: "……" },
    { speaker: "ユタカ", text: "お前、帰ってきたら、ミヤコの話、聞いてやってくれないか。女子の話を聞く相手って、薫とかミオじゃ逆に重いらしいから" },
    { speaker: "ふれんち", text: "……俺で、いいのか？" },
    { speaker: "ユタカ", text: "お前だから、いい" },
    { type: "effect", effects: [{ flag: "miyako_support_request", value: true }, { param: "miyako", delta: 1 }] },
    { text: "――この一言の重さを、俺は、この時点では、まだ、理解していなかった。" }
  ],
  next: "3-01"
},

/* ========== 第3章 銀杏色づく前に ========== */
"3-01": {
  bg: "room_day",
  date: "9月上旬 ／ 部活再開",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "夏休みが終わって、部室に戻ると、全員が、夏休み前と少しずつ違う顔をしていた。" },
    { text: "ミオは焼けていて、薫はちょっと痩せていて、ヒマリちゃんは雰囲気がほんの少しだけ大人っぽくなっていた。ユタカは、いつも通り。――いや、いつも通りに見えて、少しだけ、疲れているような気がした。" },
    { type: "chara", pos: "center", chara: "heino", expr: "default" },
    { speaker: "平野", text: "みんな、集まってくれてありがとう。１２月の演奏会に向けて、新曲の譜面、配布します" },
    { text: "１２月の定期演奏会。前プロはプロコフィエフ《シンデレラ》組曲。中プロはラフマニノフ／ピアノ協奏曲第２番。メインはチャイコフスキー／交響曲第５番。楽団創立５０周年の記念公演。例年以上に、気合が入る。" },
    { speaker: "平野", text: "それから、もう一つ。学園祭のリーダーを決めます" },
    { text: "――きた。" }
  ],
  next: "3-02"
},

"3-02": {
  bg: "room_day",
  date: "学園祭リーダー選出",
  nodes: [
    { type: "chara", pos: "center", chara: "heino", expr: "default" },
    { speaker: "平野", text: "例年通り、３年生の中から、リーダーを選出します。立候補、ありますか？" },
    { text: "部室が、しん、とする。みんなが、隣の誰かを、そっと盗み見る。――俺は、ユタカが立候補するんじゃないかと思った。でも、ユタカは、腕を組んで、目を閉じていた。" },
    { type: "clearChara", pos: "all" },
    { type: "chara", pos: "left", chara: "watabe", expr: "default" },
    { type: "chara", pos: "right", chara: "nagatomo", expr: "default" },
    { speaker: "渡部", text: "平野先輩が、そのまま団長兼リーダーでいいじゃないっすかー" },
    { type: "chara", pos: "left", chara: "heino", expr: "default" },
    { speaker: "平野", text: "いや、俺は、演奏会のほうに集中したい" },
    { type: "chara", pos: "center", chara: "nagatomo", expr: "default" },
    { speaker: "長友", text: "俺、やってもいいけど、真面目にやれる自信ない" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "じゃあやるな" },
    { speaker: "長友", text: "ひどー" },
    { type: "choice", choices: [
      { label: "「平野、もう一度お願いしてみる」（平野推し）",
        effects: [{ flag: "festival_leader", value: "hirano" }, { param: "hirano", delta: 1 }],
        goto: "3-02a" },
      { label: "「……俺、やってみます」（自ら立候補）",
        effects: [{ flag: "festival_leader", value: "furenchi" }, { param: "mio", delta: 2 }, { param: "kaoru", delta: 2 }, { param: "himari", delta: 1 }, { param: "confidence", delta: 2 }],
        goto: "3-02b" },
      { label: "「長友、本気でやるなら、適任かもな」（長友推し）",
        effects: [{ flag: "festival_leader", value: "nagatomo" }, { param: "kaoru", delta: -1 }],
        goto: "3-02c" },
      { label: "黙って、誰かが決めるのを待つ",
        effects: [{ flag: "festival_leader", value: "default" }, { param: "kaoru", delta: -2 }, { param: "hirano", delta: -1 }],
        goto: "3-02d" }
    ]}
  ]
},
"3-02a": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "center", chara: "heino", expr: "default" },
    { speaker: "平野", text: "……わかった。俺がもう１年、やる" },
    { text: "平野の采配は、堅実だった。混乱はないが、サプライズもない。悪くない。" }
  ],
  next: "3-03"
},
"3-02b": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "left", chara: "heino", expr: "default" },
    { type: "chara", pos: "center", chara: "mio", expr: "surprise" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "smile" },
    { speaker: "平野", text: "……ふれんち、本気か？" },
    { speaker: "ふれんち", text: "……本気じゃない。でも、誰かがやらないと始まらないなら、俺でもいいかなと" },
    { speaker: "薫", text: "……意外と、男だな、お前" },
    { speaker: "ミオ", text: "……ふれんち、大丈夫？ ちゃんと食べる？" },
    { type: "chara", pos: "left", chara: "yutaka", expr: "smile" },
    { speaker: "ユタカ", text: "俺、手伝う" },
    { type: "chara", pos: "left", chara: "heino", expr: "default" },
    { speaker: "平野", text: "……よし。じゃあ、リーダーはふれんち。副リーダーをユタカ。それでいこう" },
    { text: "――一秒で、俺の１１月が決まった。" }
  ],
  next: "3-03"
},
"3-02c": {
  bg: "room_day",
  nodes: [
    { type: "chara", pos: "left", chara: "nagatomo", expr: "default" },
    { type: "chara", pos: "right", chara: "mio", expr: "default" },
    { speaker: "長友", text: "マジで？ いいの？" },
    { speaker: "ミオ", text: "……長友くんなら、ちゃんとやるよね？" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "trouble" },
    { speaker: "薫", text: "（小声で）……ミオ、甘いな" },
    { type: "chara", pos: "center", chara: "heino", expr: "trouble" },
    { speaker: "平野", text: "……わかった。長友、頼むぞ" },
    { text: "――何かが、歯車がズレた音がした気がした。" }
  ],
  next: "3-03"
},
"3-02d": {
  bg: "room_day",
  nodes: [
    { text: "沈黙が続き、結局、平野がもう１年引き受けることになった。" },
    { text: "――みんなの顔が、少しだけ、俺を見ていなかった。" }
  ],
  next: "3-03"
},

"3-03": {
  bg: "room_night",
  date: "9月中旬 ／ 個人練",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "チャイコフスキーの５番。メインのコントラバスパートは、地味に鬼畜だった。特に、２楽章のピツィカート。地味なのに、正確さが要求される。――個人練習、増やさないと。" },
    { type: "choice", choices: [
      { label: "部室に朝早く行って、一人で練習する",
        effects: [{ param: "confidence", delta: 1 }],
        goto: "3-04" },
      { label: "カラオケボックスで練習する",
        effects: [{ param: "confidence", delta: 1 }],
        goto: "3-04" },
      { label: "誰かを誘って一緒に練習する",
        goto: "3-03-choose" }
    ]}
  ]
},
"3-03-choose": {
  bg: "room_night",
  nodes: [
    { text: "誰を誘おうか。" },
    { type: "choice", choices: [
      { label: "ミオ（違う楽器だけど）",
        effects: [{ param: "mio", delta: 2 }],
        goto: "3-03-c-mio" },
      { label: "薫（低音同士）",
        effects: [{ param: "kaoru", delta: 2 }],
        goto: "3-03-c-kaoru" },
      { label: "ヒマリちゃん（後輩指導）",
        effects: [{ param: "himari", delta: 2 }],
        goto: "3-03-c-himari" },
      { label: "中野さん（コントラバスの先輩として）",
        effects: [{ param: "nakano", delta: 3 }, { flag: "nakano_lesson", value: true }],
        goto: "3-03-nakano" },
      { label: "渡部（気楽に）",
        effects: [{ param: "watabe", delta: 1 }],
        goto: "3-03-c-watabe" }
    ]}
  ]
},
"3-03-c-mio": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "え、私？ ……まあ、聞き役くらいなら" },
    { text: "結局、ミオは譜面を覗き込みながら「ここのリズム、こっちで取ってみたら？」と妙に的確なアドバイスをくれた。" }
  ],
  next: "3-04"
},
"3-03-c-kaoru": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "kaoru", expr: "default" },
    { speaker: "薫", text: "いいよ。ただし、私は妥協しないからな" },
    { text: "薫の容赦のなさは、痛いけど、結果的には、一番自分のためになる。" }
  ],
  next: "3-04"
},
"3-03-c-himari": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "himari", expr: "shy" },
    { speaker: "ヒマリちゃん", text: "は、はい！ 後輩指導……というか、私が教わる側、ですよね？" },
    { speaker: "ふれんち", text: "ああ、いや、お互い様で" }
  ],
  next: "3-04"
},
"3-03-c-watabe": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "watabe", expr: "default" },
    { speaker: "渡部", text: "やった、先輩からのお誘い！ 行きましょう行きましょう！" },
    { text: "気楽さは正義だ、と渡部を誘うたびに思う。" }
  ],
  next: "3-04"
},
"3-03-nakano": {
  bg: "room_night",
  nodes: [
    { text: "俺が勇気を出して、中野さんに「コントラバスの弾き方、教えてもらえないかな」と声をかけた日。中野さんは、俺の顔を、数秒、じっと見たあと、小さく頷いた。" },
    { type: "chara", pos: "center", chara: "nakano", expr: "default" },
    { speaker: "中野さん", text: "……何時、空いてますか" },
    { speaker: "ふれんち", text: "いつでも" },
    { speaker: "中野さん", text: "じゃあ、明日の午後、部室" },
    { speaker: "ふれんち", text: "ありがとう" },
    { text: "その日の夜、俺は、何か、小さな関門を一つだけ越えた気がした。" }
  ],
  next: "3-04"
},

"3-04": {
  bg: "waiwai",
  date: "9月末 ／ ヒマリちゃん誕生日会",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "ヒマリちゃんの誕生日は、７月。だから、厳密には「誕生日」イベントじゃない。でも、夏休みで部活がオフだったから、遅ればせながら、コントラバスパートでお祝いしよう、という話になった。" },
    { type: "chara", pos: "left", chara: "watabe", expr: "default" },
    { type: "chara", pos: "right", chara: "himari", expr: "shy" },
    { speaker: "渡部", text: "ヒマリちゃんのバースデー、ファミレスで！" },
    { speaker: "ヒマリちゃん", text: "……そんな、気を使わないで" },
    { speaker: "渡部", text: "気を使うに決まってるでしょ、後輩女子の誕生日！" },
    { type: "chara", pos: "center", chara: "nakano", expr: "default" },
    { text: "中野さんも、今回は珍しく来た。４人がけのテーブルに、俺、渡部、中野さん、ヒマリちゃん。……コントラバスパートが全員揃うのは、今年度、これが最初で最後かもしれない。" },
    { speaker: "中野さん", text: "……お誕生日、おめでとう、ヒマリちゃん" },
    { type: "chara", pos: "right", chara: "himari", expr: "smile" },
    { speaker: "ヒマリちゃん", text: "中野さん、ありがとうございます……！" },
    { type: "chara", pos: "right", chara: "himari", expr: "shy" },
    { speaker: "渡部", text: "ヒマリちゃん、彼氏とは順調？" },
    { type: "chara", pos: "right", chara: "himari", expr: "trouble" },
    { speaker: "ヒマリちゃん", text: "……えっと、はい" },
    { text: "一瞬、ヒマリちゃんの目が、フォークのところで止まった。――あれ？ 俺と、中野さんが、同時に気づいたみたいだった。" },
    { speaker: "渡部", text: "え、なに、聞きたい聞きたい" },
    { speaker: "ヒマリちゃん", text: "ううん、なんでもない" },
    { type: "choice", choices: [
      { label: "「渡部、少し黙れ」と場を整える",
        effects: [{ param: "himari", delta: 1 }, { param: "watabe", delta: -1 }],
        goto: "3-04-r1" },
      { label: "「ヒマリちゃん、話したくなったら、聞くから」と個別に声をかける",
        effects: [{ param: "himari", delta: 3 }, { flag: "himari_listen", value: true }],
        goto: "3-04-r2" },
      { label: "何も言わずに、食事を続ける",
        goto: "3-04-r3" }
    ]}
  ]
},
"3-04-r1": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "left", chara: "watabe", expr: "trouble" },
    { type: "chara", pos: "right", chara: "himari", expr: "shy" },
    { speaker: "渡部", text: "あっ、すんません" },
    { speaker: "ヒマリちゃん", text: "……ふれんちさん、ありがとうございます" },
    { text: "ヒマリちゃんは、小さな声で、ふっと胸を撫で下ろしたみたいに息を吐いた。" }
  ],
  next: "3-05"
},
"3-04-r2": {
  bg: "waiwai",
  nodes: [
    { type: "chara", pos: "center", chara: "himari", expr: "shy" },
    { speaker: "ヒマリちゃん", text: "……はい。ありがとう、ございます" },
    { text: "彼女の目は、まだ少しだけフォークの先で止まっていた。でも、その目に、わずかな光が戻った気がした。" }
  ],
  next: "3-05"
},
"3-04-r3": {
  bg: "waiwai",
  nodes: [
    { text: "俺は、コーヒーカップに視線を落とした。" },
    { text: "踏み込まないことが優しさ、と言うには、少しだけ、薄情な気分が残った。" }
  ],
  next: "3-05"
},

"3-05": {
  bg: "room_eve",
  date: "10月初旬 ／ 学園祭準備",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭は１１月初旬。オーケストラは、恒例の「あんだんて」――団員の生演奏が聞ける喫茶店――を出店する。メニュー、シフト、備品、装飾、会計。リーダーが誰かによって、進行の色が全く違う。" },
    { type: "condJump", branches: [
      { cond: { flag: "festival_leader", eq: "furenchi" }, to: "3-05b" },
      { cond: { flag: "festival_leader", eq: "nagatomo" }, to: "3-05c" }
    ], default: "3-05a" }
  ]
},
"3-05a": {
  bg: "room_eve",
  nodes: [
    { text: "平野の采配は、堅実だった。混乱はないが、サプライズもない。……悪くない、悪くないが、自分が何もしなかったことを、俺は、少し後悔していた。" }
  ],
  next: "3-06"
},
"3-05b": {
  bg: "room_eve",
  nodes: [
    { text: "俺の場合、とにかく、みんなの善意に支えられて、何とか回していた。ユタカがスプレッドシート管理、薫が金庫番、平野がシフト調整。……俺は、何もしていない、みたいに見えた。でも、ユタカが夜のわいわいで言ってくれた。" },
    { type: "chara", pos: "center", chara: "yutaka", expr: "smile" },
    { speaker: "ユタカ", text: "お前、自分で思ってるより、ちゃんと回してるぞ" },
    { speaker: "ふれんち", text: "……ほんとか？" },
    { speaker: "ユタカ", text: "お前が『ありがとう』って何十回も言ってるだけで、みんな、動く気になる。あれは、才能だ" },
    { type: "effect", effects: [{ param: "confidence", delta: 2 }, { param: "yutaka", delta: 2 }] }
  ],
  next: "3-06"
},
"3-05c": {
  bg: "room_eve",
  nodes: [
    { text: "長友のリーダーシップは、「俺の友達にやらせる」スタイルだった。それ自体は、別に、悪くはない。でも、長友が「ミオ、メニュー決めてよ」「姫、装飾頼む」と、女子ばっかり指名するのが、ちょっと、気になる。" },
    { type: "chara", pos: "left", chara: "mio", expr: "trouble" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
    { speaker: "ミオ", text: "長友くん、最近、頼ってくれすぎじゃない？" },
    { type: "chara", pos: "center", chara: "nagatomo", expr: "default" },
    { speaker: "長友", text: "えー、ミオ、頼りになるからさー" },
    { type: "clearChara", pos: "center" },
    { speaker: "薫", text: "（小声で）……ふれんち、あいつ、なんか企んでるな" },
    { speaker: "ふれんち", text: "……だろ" },
    { type: "effect", effects: [{ flag: "nagatomo_plot", value: true }] }
  ],
  next: "3-06"
},

"3-06": {
  bg: "room_night",
  date: "10月中旬 ／ 夜の部室",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "夜の部室。すっかり涼しくなった秋の夜、俺は、チャイコフスキーを弾いていた。突然、ドアが開いた。" },
    { type: "chara", pos: "center", chara: "sherry", expr: "default" },
    { speaker: "シェリー", text: "……ふれんち？" },
    { speaker: "ふれんち", text: "シェリー、どうしたの、こんな時間" },
    { speaker: "シェリー", text: "……自分の練習、と" },
    { text: "シェリーと、こうやって二人きりで話すのは、ずいぶん久しぶりだ。少しだけ、距離が近い。でも、彼女は、何かを探すような目をしていた。" },
    { speaker: "シェリー", text: "ふれんち。一つ、聞いていい？" },
    { speaker: "ふれんち", text: "……うん" },
    { speaker: "シェリー", text: "私のブログ、読んでる？" },
    { type: "choice", choices: [
      { label: "「たまに見てる」と正直に答える",
        effects: [{ param: "sherry", delta: 1 }],
        goto: "3-06-r1" },
      { label: "「……知らないんだ、ごめん」と答える",
        effects: [{ param: "sherry", delta: -1 }],
        goto: "3-06-r2" },
      { label: "「読んでない。読まない方がいい気がして」と答える",
        effects: [{ param: "sherry", delta: 3 }, { flag: "sherry_respect", value: true }],
        goto: "3-06a" }
    ]}
  ]
},
"3-06-r1": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "sherry", expr: "default" },
    { speaker: "シェリー", text: "……そう。じゃあ、あの記事も、読んだよね" },
    { speaker: "ふれんち", text: "……たぶん" },
    { speaker: "シェリー", text: "ふうん" },
    { text: "シェリーは、それ以上、何も言わなかった。" }
  ],
  next: "3-07"
},
"3-06-r2": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "sherry", expr: "sad" },
    { speaker: "シェリー", text: "……そっか。ううん、いいの" },
    { text: "シェリーの声は、ほんの少しだけ、しぼんでいた。俺は、何かを、間違えた気がした。" }
  ],
  next: "3-07"
},
"3-06a": {
  bg: "room_night",
  nodes: [
    { type: "chara", pos: "center", chara: "sherry", expr: "shy" },
    { speaker: "シェリー", text: "……読まない方がいい、と思ってくれてるの？" },
    { speaker: "ふれんち", text: "うん。潔癖な人のブログ、土足で入っちゃ悪い気がして" },
    { speaker: "シェリー", text: "……変なの、ふれんち" },
    { speaker: "シェリー", text: "でも、ちょっとだけ、嬉しい" }
  ],
  next: "3-07"
},

"3-07": {
  bg: "ginkgo_yellow",
  date: "10月下旬 ／ 銀杏並木",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭まで、あと１週間。銀杏並木は、葉が、ほんの少しだけ、黄色くなりかけていた。俺は、ある日の夕方、ふと、あの並木の下に立っていた。" },
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "あ、ふれんち" },
    { text: "ミオも、銀杏並木の下にいた。一人で、何かを考えているようだった。" },
    { speaker: "ふれんち", text: "……ミオ？" },
    { speaker: "ミオ", text: "ちょうど、よかった" },
    { speaker: "ミオ", text: "ねぇ、学園祭のシフト、一緒に入れる？" },
    { type: "choice", choices: [
      { label: "「いいよ、入れる」と応じる",
        effects: [{ param: "mio", delta: 2 }, { flag: "festival_shift_mio", value: true }],
        goto: "3-07-r1" },
      { label: "「リーダーだから、全部のシフト回らないと」と遠慮する",
        cond: { flag: "festival_leader", eq: "furenchi" },
        effects: [{ param: "mio", delta: 1 }, { param: "confidence", delta: 1 }],
        goto: "3-07-r2" },
      { label: "「……薫と３人で入ろう」と提案する",
        effects: [{ param: "mio", delta: 1 }, { param: "kaoru", delta: 1 }],
        goto: "3-07-r3" }
    ]}
  ]
},
"3-07-r1": {
  bg: "ginkgo_yellow",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "やった。じゃあ、決まりね" },
    { text: "ミオの言い方は、ちょっとだけ、いつもより嬉しそうに聞こえた――気のせいか、本当か、わからないけど。" }
  ],
  next: "3-08"
},
"3-07-r2": {
  bg: "ginkgo_yellow",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "あ、そっか。リーダーって、大変だね" },
    { text: "ミオは、少しだけ眉を下げた。それから、「でも、ちょっとは顔出してね」と付け加えた。" }
  ],
  next: "3-08"
},
"3-07-r3": {
  bg: "ginkgo_yellow",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "うん、それいいかも。薫、シフト苦手だから、私たちが助けてあげよう" },
    { text: "ミオの提案の仕方は、いつも、自然と俺を共犯者にする。" }
  ],
  next: "3-08"
},

"3-08": {
  bg: "dolce",
  date: "10月末 ／ ドルチェ",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭準備も佳境。久しぶりにドルチェに出ると、加藤さんの顔色が、ちょっと、悪かった。" },
    { type: "chara", pos: "center", chara: "kato", expr: "trouble" },
    { speaker: "ふれんち", text: "加藤さん、大丈夫ですか" },
    { speaker: "加藤さん", text: "うん……実は、ちょっと、入院することになって" },
    { speaker: "ふれんち", text: "え" },
    { speaker: "加藤さん", text: "２週間くらい。検査入院、みたいな感じ" },
    { type: "choice", choices: [
      { label: "「お見舞いに行っていいですか」",
        effects: [{ param: "kato", delta: 3 }, { flag: "kato_visited", value: true }, { param: "mio", delta: -1 }, { param: "himari", delta: -1 }],
        goto: "3-08-r1" },
      { label: "「何か、持っていけるもの、あります？」",
        effects: [{ param: "kato", delta: 2 }],
        goto: "3-08-r2" },
      { label: "「……お大事に」と距離を取る",
        effects: [{ param: "kato", delta: -1 }],
        goto: "3-08-r3" }
    ]}
  ]
},
"3-08-r1": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "……ありがとう。じゃあ、入院したら、連絡するね" },
    { text: "加藤さんは、少しだけ、目を伏せて笑った。嬉しい時の、彼女の癖だ。" }
  ],
  next: "3-09"
},
"3-08-r2": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "smile" },
    { speaker: "加藤さん", text: "そうだね……読みかけの本があると、嬉しいかな" },
    { text: "ふだん物欲しがらない加藤さんが、何かを「欲しい」と言ったのは、ちょっと珍しかった。" }
  ],
  next: "3-09"
},
"3-08-r3": {
  bg: "dolce",
  nodes: [
    { type: "chara", pos: "center", chara: "kato", expr: "default" },
    { speaker: "加藤さん", text: "うん、ありがとう" },
    { text: "それだけ。加藤さんは、いつも通りの、優しい笑顔だった。でも、その笑顔の奥に、なんとなく、距離を感じた。" }
  ],
  next: "3-09"
},

"3-09": {
  bg: "room_night",
  date: "10月末 ／ 学園祭の仕込み",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭まで、あと３日。部室は、夜中まで、ざわついていた。みんなが、それぞれの場所で、それぞれの役割を、こなしていた。" },
    { text: "その夜、俺はたまたま、机の上に、忘れ物を見つけた。――ミオのクラリネットのマウスピースケース。たぶん、家に忘れると、明日の練習に支障が出る。" },
    { type: "choice", choices: [
      { label: "夜遅いけど、ミオの家まで届けに行く",
        effects: [{ param: "mio", delta: 3 }, { flag: "mio_late_visit", value: true }],
        goto: "3-09-r1" },
      { label: "薫に連絡して、届けてもらう",
        effects: [{ param: "kaoru", delta: 2 }],
        goto: "3-09-r2" },
      { label: "翌日、部室で渡す",
        goto: "3-09-r3" }
    ]}
  ]
},
"3-09-r1": {
  bg: "room_night",
  nodes: [
    { speaker: "ミオ（メール）", text: "え、ほんとに？ 助かるー！ 家の前まで来たら、出るね" },
    { text: "返信は、すぐに来た。俺は、コートを羽織った。" }
  ],
  next: "3-10a"
},
"3-09-r2": {
  bg: "room_night",
  nodes: [
    { speaker: "薫（メール）", text: "おっけー、ついでだから受け取って届ける。次から忘れもの置きっぱは禁止な" },
    { text: "薫に頼むときは、なぜかいつも、説教が一発添えられる。" }
  ],
  next: "4-01"
},
"3-09-r3": {
  bg: "room_night",
  nodes: [
    { text: "結局、ケースは部室の机の引き出しに、メモを添えて入れておいた。" },
    { text: "ミオが朝、これを見つけて笑うか、舌打ちするか――半々の確率だ。" }
  ],
  next: "4-01"
},

"3-10a": {
  bg: "street_night",
  date: "夜道 ／ ミオの家",
  nodes: [
    { text: "ミオの家は、俺の家から徒歩２０分。手に、マウスピースケース。携帯で「今から届けに行くよ」とメール。返事、すぐ来た。「え、いいよ！ ありがとう」" },
    { text: "ミオの家の前。インターホンを押そうとして、ふと、彼女が外に出てくる気配がした。" },
    { type: "chara", pos: "center", chara: "mio", expr: "shy" },
    { speaker: "ミオ", text: "ふれんち、ごめんね、わざわざ" },
    { text: "ミオは、部屋着のパーカーで、ちょっと髪が濡れていた。――どうやら、風呂上がり。" },
    { speaker: "ふれんち", text: "いや、じゃあ、これ" },
    { speaker: "ミオ", text: "ありがとう" },
    { speaker: "ミオ", text: "……ちょっとだけ、話さない？" },
    { type: "choice", choices: [
      { label: "「うん、少しだけ」",
        effects: [{ param: "mio", delta: 2 }],
        goto: "3-10a-1" },
      { label: "「もう遅いから、また明日」",
        effects: [{ param: "mio", delta: 1 }, { param: "confidence", delta: 1 }],
        goto: "3-10a-r" }
    ]}
  ]
},
"3-10a-r": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "smile" },
    { speaker: "ミオ", text: "……ふふ。気を使ってくれてるんだ" },
    { speaker: "ミオ", text: "ありがと、ふれんち。気をつけて帰ってね" },
    { text: "ミオが手を振る。俺は、後ろ髪を少しだけ引かれながら、夜の道を引き返した。" }
  ],
  next: "4-01"
},
"3-10a-1": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { type: "condJump", branches: [
      { cond: { flag: "summer_path", eq: "A" }, to: "3-10a-1-A" },
      { cond: { flag: "summer_path", eq: "B" }, to: "3-10a-1-B" },
      { cond: { flag: "summer_path", eq: "C" }, to: "3-10a-1-C" },
      { cond: { flag: "summer_path", eq: "D" }, to: "3-10a-1-D" }
    ], default: "3-10a-1-A" }
  ]
},
"3-10a-1-A": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "夏の合宿、ありがとね" },
    { speaker: "ふれんち", text: "合宿" },
    { speaker: "ミオ", text: "あのとき、絡まれた私を助けてくれたこと、私、本当に感謝してる", cond: { flag: "mio_rescue", eq: true } },
    { speaker: "ミオ", text: "一緒に過ごせて、楽しかった" },
    { speaker: "ふれんち", text: "あれくらい、当然" }
  ],
  next: "3-10a-1-end"
},
"3-10a-1-B": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "夏休み、ふれんち、街に残ってたんだよね" },
    { speaker: "ふれんち", text: "うん。バイト、けっこう入ってたから" },
    { speaker: "ミオ", text: "暇だったら、私と遊んでくれた？" },
    { speaker: "ふれんち", text: "……そう聞かれると、ちょっと困るな" },
    { speaker: "ミオ", text: "ふふ、冗談" }
  ],
  next: "3-10a-1-end"
},
"3-10a-1-C": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "夏休み、京都とか、行ってたんだよね？", cond: { flag: "summer_path", eq: "C" } },
    { speaker: "ふれんち", text: "あー、まあ……成り行きで" },
    { speaker: "ミオ", text: "成り行き。いいなあ、その感じ" },
    { speaker: "ミオ", text: "私、夏休み、けっこう退屈だったから、ふれんちの話、聞きたかったな" },
    { speaker: "ふれんち", text: "……そんな面白い話、ないよ" }
  ],
  next: "3-10a-1-end"
},
"3-10a-1-D": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "default" },
    { speaker: "ミオ", text: "夏休み、ずっと帰省してたんだよね" },
    { speaker: "ふれんち", text: "うん" },
    { speaker: "ミオ", text: "なんか、帰省組って、急に音信不通になるよね" },
    { speaker: "ふれんち", text: "悪い、メール返すの、苦手で" },
    { speaker: "ミオ", text: "知ってる。ふふ" }
  ],
  next: "3-10a-1-end"
},
"3-10a-1-end": {
  bg: "street_night",
  nodes: [
    { type: "chara", pos: "center", chara: "mio", expr: "shy" },
    { speaker: "ミオ", text: "……でもね、ふれんち。最近、ちょっと、見え方、変わったの" },
    { text: "ミオが、俺を見る目。そこに、「恋」があるとは言わない。でも、「男」としては、見えている。……確かに。" }
  ],
  next: "4-01"
},

/* ========== 第4章 あんだんて（学園祭） ========== */
"4-01": {
  bg: "festival",
  date: "2005年 11月2日 ／ 学園祭初日",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "１１月２日。学園祭初日。銀杏並木は、上のほうから、少しずつ黄色くなり始めていた。「あんだんて」の看板が、組み上がったばかりの木造の屋台の正面に掲げられた。手書きの文字は、姫ちゃんが書いた、らしい。――さすがに、綺麗だ。" },
    { type: "chara", pos: "center", chara: "heino", expr: "smile" },
    { speaker: "平野", text: "３日間、よろしく頼む！" },
    { speaker: "団員", text: "おー！" },
    { text: "『あんだんて』の仕組みは単純だ。学園祭の中庭スペースに、木造の屋台を組んで、その前にイスとテーブルを並べる。コーヒーとお茶菓子を出す。そして、団員が入れ替わり立ち替わりで、屋台のすぐ脇で小さな生演奏をする。――それが、ここ数十年続いている、うちの学園祭の風物詩だ。" }
  ],
  next: "4-02"
},

"4-02": {
  bg: "festival",
  date: "初日 ／ 接客シフト",
  nodes: [
    { text: "初日の午前は、俺と、誰かが、ペアでシフト。今日、俺の隣に立つのは……" },
    { type: "condJump", branches: [
      { cond: { and: [{ param: "mio", gte: 6 }, { flag: "mio_honmei", eq: "true" }] }, to: "4-02-mio" },
      { cond: { param: "kaoru", gte: 6 }, to: "4-02-kaoru" },
      { cond: { param: "himari", gte: 6 }, to: "4-02-himari" },
      { cond: { param: "kato", gte: 7 }, to: "4-02-kato" },
      { cond: { param: "sherry", gte: 6 }, to: "4-02-sherry" },
      { cond: { param: "nakano", gte: 6 }, to: "4-02-nakano" },
      { cond: { flag: "miyako_support_request", eq: true }, to: "4-02-miyako" }
    ], default: "4-02-default" }
  ]
},
"4-02-mio":    { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "mio", expr: "smile" }, { speaker: "ミオ", text: "ふれんち、今日はよろしくね。私、エプロン似合ってる？" }, { speaker: "ふれんち", text: "似合ってる" }, { speaker: "ミオ", text: "即答だね……ふふ" }, { type: "effect", effects: [{ route: "mio" }] } ], next: "4-03" },
"4-02-kaoru":  { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "kaoru", expr: "default" }, { speaker: "薫", text: "コーヒー、こぼすなよ" }, { speaker: "ふれんち", text: "了解" }, { speaker: "薫", text: "……ふれんち、今日、ちゃんと仕事できたら、また個人練、付き合ってやる" }, { type: "effect", effects: [{ route: "kaoru" }] } ], next: "4-03" },
"4-02-himari": { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "himari", expr: "shy" }, { speaker: "ヒマリちゃん", text: "ふれんちさん、よろしくお願いします" }, { speaker: "ふれんち", text: "よろしく。……ヒマリちゃん、エプロン、少し大きいな" }, { speaker: "ヒマリちゃん", text: "……あ、ほんとだ" }, { type: "effect", effects: [{ route: "himari" }] } ], next: "4-03" },
"4-02-kato":   { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "kato", expr: "smile" }, { speaker: "加藤さん", text: "ふれんち君、外出許可もらって、ちょっとだけ抜けてきちゃった。差し入れ、あるよ" }, { speaker: "ふれんち", text: "病院抜け出しちゃダメでしょう……でも、ありがとうございます" }, { speaker: "加藤さん", text: "ふふ、君の顔、見に来ただけ。すぐ戻るね" }, { type: "effect", effects: [{ route: "kato" }] } ], next: "4-03" },
"4-02-sherry": { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "sherry", expr: "default" }, { speaker: "シェリー", text: "ふれんち、よろしく" }, { speaker: "ふれんち", text: "シェリー、チェロ、後で弾くの？" }, { speaker: "シェリー", text: "１４時から。……聞いてて、くれる？" }, { speaker: "ふれんち", text: "聞く" }, { type: "effect", effects: [{ route: "sherry" }] } ], next: "4-03" },
"4-02-nakano": { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "nakano", expr: "default" }, { speaker: "中野さん", text: "……よろしく、お願いします" }, { speaker: "ふれんち", text: "こっちこそ" }, { speaker: "中野さん", text: "……私、接客、苦手ですけど、頑張ります" }, { type: "effect", effects: [{ route: "nakano" }] } ], next: "4-03" },
"4-02-miyako": { bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "miyako", expr: "default" }, { speaker: "ミヤコさん", text: "ふれんち君、よろしくね" }, { speaker: "ふれんち", text: "ミヤコさん、体調、大丈夫ですか" }, { speaker: "ミヤコさん", text: "……うん。なんとか" }, { type: "effect", effects: [{ route: "miyako" }] } ], next: "4-03" },
"4-02-default":{ bg: "festival", nodes: [ { type: "chara", pos: "center", chara: "watabe", expr: "default" }, { speaker: "渡部", text: "先輩、俺っす！ 今日、盛り上げましょう！" }, { speaker: "ふれんち", text: "……お前、声、でかいな" } ], next: "4-03" },

"4-03": {
  bg: "festival",
  date: "初日14時 ／ 生演奏",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "１４時、最初の生演奏。ステージ（というより中庭のスペース）で、シェリーがチェロを構えた。ソロ。バッハ無伴奏チェロ組曲第１番、プレリュード。――お客さんが、静まった。" },
    { type: "cg", cg: "sherry_cello" },
    { text: "シェリーの演奏は、やっぱり、人間離れしている。音が、空気を、組み替えていく。誰もが、小さく息を呑んで、立ち止まって、耳を傾けた。" },
    { text: "演奏が終わったあと、俺たちのブースから、小さな拍手が起きた。シェリーは、一礼だけ。でも、戻ってきたとき、俺と目が合うと、ほんの少し、笑った。" }
  ],
  next: "4-04"
},

"4-04": {
  bg: "waiwai",
  date: "2日目夜 ／ わいわい",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭２日目の夜、疲れ切った部員たちで「わいわい」へ。明日の閉祭パーティーもあるし、今日は軽め、のはずだった。でも、長友が、何故か、テンション高めだった。" },
    { type: "chara", pos: "left", chara: "nagatomo", expr: "default" },
    { type: "chara", pos: "right", chara: "kaoru", expr: "trouble" },
    { speaker: "長友", text: "みんな、お疲れー！" },
    { speaker: "薫", text: "……あいつ、なんか変だな" },
    { speaker: "ふれんち", text: "何が" },
    { speaker: "薫", text: "ミオを見る目が、いつもと違う" },
    { text: "――薫の観察眼は、侮れない。" },
    { type: "condJump", branches: [
      { cond: { and: [{ flag: "festival_leader", eq: "nagatomo" }, { param: "mio", lte: 3 }] }, to: "BE-02" }
    ], default: "4-05" }
  ]
},

"4-05": {
  bg: "festival",
  date: "3日目 ／ 閉祭",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭最終日。お客さんが帰って、ブースの片付けが終わって、中庭の提灯を外す頃には、もう夜だった。部員たちは、それぞれに疲れきっていた。でも、この疲れは、悪くない疲れだ。" },
    { type: "chara", pos: "center", chara: "heino", expr: "smile" },
    { speaker: "平野", text: "リーダー、お疲れさま" },
    { type: "condJump", branches: [
      { cond: { flag: "festival_leader", eq: "furenchi" }, to: "4-05b" }
    ], default: "4-05a" }
  ]
},
"4-05a": {
  bg: "festival",
  nodes: [
    { text: "学園祭は、大きな事故なく、終わった。俺は、自分の役割を、ちゃんと、果たせただろうか。" }
  ],
  next: "5-DISPATCH"
},
"4-05b": {
  bg: "festival",
  nodes: [
    { type: "chara", pos: "center", chara: "heino", expr: "smile" },
    { speaker: "ふれんち", text: "……ありがとう、平野" },
    { speaker: "平野", text: "正直、ふれんちにやらせて、大丈夫かなって思ってたけど、ちゃんとやり切ったな" },
    { speaker: "ふれんち", text: "みんなのおかげ" },
    { speaker: "平野", text: "そうかもしれない。でも、最後に立ってたのは、お前だ" },
    { text: "――不器用で、うだつの上がらない俺が、何かを「最後まで立ってやり切った」のは、たぶん、人生で初めてのことだった。" },
    { type: "effect", effects: [{ param: "confidence", delta: 3 }] }
  ],
  next: "5-DISPATCH"
},

/* ========== 第5章以降はルート分岐 ========== */
"5-DISPATCH": {
  bg: "ginkgo_yellow",
  date: "11月中旬",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "学園祭が終わって、銀杏並木は一気に黄色くなった。秋は、短い。" },
    { type: "condJump", branches: [
      /* 主要ルート（ロック済） */
      { cond: { route: "mio" },    to: "5-mio-01" },
      { cond: { route: "kaoru" },  to: "5-kaoru-01" },
      { cond: { route: "himari" }, to: "5-himari-01" },
      { cond: { route: "kato" },   to: "5-kato-01" },
      { cond: { route: "sherry" }, to: "5-sherry-01" },
      { cond: { route: "miyako" }, to: "5-miyako-01" },
      { cond: { route: "nakano" }, to: "5-nakano-01" },
      /* 主要ルート（好感度フォールバック） */
      { cond: { param: "mio",    gte: 8 }, to: "5-mio-01" },
      { cond: { param: "kaoru",  gte: 8 }, to: "5-kaoru-01" },
      { cond: { param: "himari", gte: 8 }, to: "5-himari-01" },
      { cond: { param: "kato",   gte: 8 }, to: "5-kato-01" },
      { cond: { param: "sherry", gte: 8 }, to: "5-sherry-01" },
      { cond: { param: "nakano", gte: 8 }, to: "5-nakano-01" },
      /* 短期ルート（主要ルート未確定時のサブヒロイン） */
      { cond: { and: [{ flag: "taeyan_karaoke", eq: true }, { param: "taeyan", gte: 3 }] }, to: "5-taeyan-01" },
      { cond: { and: [{ flag: "maachan_secret_lunch", eq: true }, { param: "maachan", gte: 3 }] }, to: "5-maachan-01" },
      { cond: { param: "hime", gte: 3 }, to: "5-hime-01" },
      { cond: { param: "ai",   gte: 3 }, to: "5-ai-01" }
    ], default: "5-alone-01" }
  ]
},

/* ========== バッドエンド（参照用） ========== */
"BE-02": {
  bg: "waiwai",
  date: "11月3日 深夜",
  nodes: [
    { type: "clearChara", pos: "all" },
    { text: "その夜、俺は気付かなかった。長友とミオが、わいわいの店を、２人で先に抜け出していたことに。" },
    { text: "それから数日後、オーケストラのメーリングリストに、簡素なメールが流れた。" },
    { speaker: "長友（メール）", text: "報告。ミオさんと、付き合うことになりました" },
    { text: "俺は、携帯を見て、５分くらい、動けなかった。" },
    { text: "――銀杏の葉が、落ち始めた頃だった。" },
    { type: "ending", endingId: "BE-02", title: "【BAD END】 長友に出し抜かれて",
      text: "リーダーを長友に任せたことが、結果的に、ミオとの時間を奪った。\n俺は、何も悪いことはしていない。\nしていないから、何もできなかった。\n\n2005年のクリスマスは、過去最悪の一日になった。" }
  ]
}

};
