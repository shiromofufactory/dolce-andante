/* ==========================================================
   scenario_routes.js  ― 第5〜7章・各ルート・エンディング
   scenario_common.js の SCENARIO オブジェクトに追記マージする。
   ========================================================== */
(function(){
  const R = {

  /* ================================================
     【ミオルート】（正規）
     ================================================ */
  "5-mio-01": {
    bg: "room_eve", date: "11月中旬 ／ チャイコ５番・練習後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "学園祭が終わって、一気にチャイコフスキーの練習が本格化した。楽団は、１２月の定期演奏会――５０周年の記念公演――に向けて、毎日、緊張していた。" },
      { text: "練習後の廊下。ミオが、ふいに、俺に声をかけてきた。" },
      { type: "chara", pos: "center", chara: "mio", expr: "smile" },
      { speaker: "ミオ", text: "ふれんちのコントラバス、ちょっと上手くなったね" },
      { speaker: "ふれんち", text: "え" },
      { speaker: "ミオ", text: "夏の合宿が効いてる、のかもしれないね" },
      { text: "……ミオに褒められると、俺は、だいたい、右耳から左耳まで、熱くなる。" }
    ], next: "5-mio-02"
  },
  "5-mio-02": {
    bg: "street_night", date: "11月下旬 ／ バイト帰り",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "yutaka", expr: "default" },
      { speaker: "ユタカ", text: "ふれんち" },
      { speaker: "ふれんち", text: "なに" },
      { speaker: "ユタカ", text: "ミオ、お前のこと、見てる" },
      { speaker: "ふれんち", text: "……お前に応援されるの、こっぱずかしい" },
      { speaker: "ユタカ", text: "だろうな" },
      { type: "choice", choices: [
        { label: "「ユタカ、ありがとう」",
          effects: [{ param: "yutaka", delta: 1 }, { param: "mio", delta: 1 }],
          goto: "5-mio-02-r1" },
        { label: "「でも、まだ自信ない」",
          goto: "5-mio-02-r2" },
        { label: "「……俺、まだミオに値する男じゃない」",
          effects: [{ param: "mio", delta: -1 }, { param: "confidence", delta: -1 }, { flag: "mio_self_deprecating", value: true }],
          goto: "5-mio-02-r3" }
      ]}
    ]
  },
  "5-mio-02-r1": {
    bg: "street_night",
    nodes: [
      { type: "chara", pos: "center", chara: "yutaka", expr: "smile" },
      { speaker: "ユタカ", text: "礼を言われるようなこと、してないよ。お前が、自分でつかむ番だ" },
      { text: "ユタカは、メガネを少し上げて、夜の街灯を見上げた。" }
    ],
    next: "5-mio-03"
  },
  "5-mio-02-r2": {
    bg: "street_night",
    nodes: [
      { type: "chara", pos: "center", chara: "yutaka", expr: "default" },
      { speaker: "ユタカ", text: "自信なんて、最初から要らないだろ。やるかやらないかだ" },
      { text: "ユタカの口調は、相変わらず、そっけなくて、優しい。" }
    ],
    next: "5-mio-03"
  },
  "5-mio-02-r3": {
    bg: "street_night",
    nodes: [
      { type: "chara", pos: "center", chara: "yutaka", expr: "trouble" },
      { speaker: "ユタカ", text: "……お前さ。値する／しないって、お前が決めることじゃない。ミオが決めることだ" },
      { text: "ユタカの言葉は、いつも、痛いところを突いてくる。" }
    ],
    next: "5-mio-03"
  },
  "5-mio-03": {
    bg: "ginkgo_yellow", date: "11月末 ／ 銀杏並木",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "銀杏並木が、完全に黄色くなった日。俺は、ミオと２人で、並木を歩いていた。" },
      { type: "chara", pos: "center", chara: "mio", expr: "default" },
      { speaker: "ミオ", text: "葉が散ったら、もう冬だね" },
      { speaker: "ふれんち", text: "……な" },
      { text: "葉が散るまでに、俺は、何か、言えるだろうか。" },
      { speaker: "ミオ", text: "ふれんち、最近、ちょっと、変わったね" },
      { speaker: "ふれんち", text: "どう、変わった？" },
      { speaker: "ミオ", text: "……前より、逃げなくなった" },
      { text: "ミオの目が、真っ直ぐに俺を見ていた。", speaker: "" }
    ], next: "5-mio-04"
  },
  "5-mio-04": {
    bg: "room_night", date: "12月上旬 ／ 演奏会直前・リハ後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "チャイコフスキー５番のリハ。メインの２楽章、コントラバスのピツィカートが難所。俺は、この数週間、毎日、深夜まで練習した。" },
      { text: "リハ後、楽器置き場で、ミオが泣きそうな顔をしていた。" },
      { type: "chara", pos: "center", chara: "mio", expr: "trouble" },
      { speaker: "ふれんち", text: "どうした？" },
      { speaker: "ミオ", text: "……ユタカ、今日、ミヤコさんと別れたって" },
      { speaker: "ふれんち", text: "……え" },
      { speaker: "ミオ", text: "だから、なんか、複雑で" },
      { text: "ミオの目は、複雑、だった。ユタカへの古い想い、ミヤコさんへの申し訳なさ、そして、俺への――何か。" }
    ], next: "5-mio-05"
  },
  "5-mio-05": {
    bg: "hall_stage", date: "12月上旬 ／ 定期演奏会本番",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "concert_winter" },
      { text: "本番当日。プロコ《シンデレラ》の冒頭。ラフマニノフのピアノの重みに、俺たちの弦が絡まる。そして、チャイコフスキー５番。" },
      { text: "メインの２楽章。俺のピツィカートの瞬間、客席のどこかで、誰かが、小さく、息を呑んだ。……気のせい、かもしれない。" },
      { text: "終演。割れるような拍手。５０周年の舞台は、例年以上の熱だった。" },
      { text: "――悪くない。今年の、冬の序曲は、悪くなかった。" }
    ], next: "5-mio-06"
  },
  "5-mio-06": {
    bg: "waiwai", date: "打ち上げ ／ 三角関係の決着",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "yutaka", expr: "sad" },
      { speaker: "ユタカ", text: "みんなに、報告しておく。俺、ミヤコと別れた" },
      { text: "部員たちが、ざわ、とする。でも、ユタカの声は、静かだった。" },
      { speaker: "ユタカ", text: "俺のせい。俺が、最近、ちゃんとミヤコと向き合えてなかった" },
      { type: "chara", pos: "left", chara: "mio", expr: "trouble" },
      { speaker: "ミオ", text: "ユタカ……お疲れさま。演奏会、良かったよ" },
      { speaker: "ミオ", text: "……それと、私、勝手に、複雑な気持ちになってた、ごめん" },
      { speaker: "ユタカ", text: "ミオ。お前が謝ることじゃない" },
      { speaker: "ユタカ", text: "俺は、ふれんちの味方だ。昔も、今も" },
      { type: "choice", choices: [
        { label: "ミオに「話したいことがある」と言う",
          effects: [{ flag: "mio_ask_talk", value: true }],
          goto: "5-mio-06-r1" },
        { label: "今日は見送って、後日改めて言う",
          goto: "5-mio-06-r2" },
        { label: "ユタカを気遣って、自分は引く",
          effects: [{ param: "mio", delta: -1 }, { flag: "mio_too_careful", value: true }],
          goto: "5-mio-06-r3" }
      ]}
    ]
  },
  "5-mio-06-r1": {
    bg: "waiwai",
    nodes: [
      { type: "chara", pos: "center", chara: "mio", expr: "shy" },
      { speaker: "ミオ", text: "……うん。わかった。じゃあ、また、連絡するね" },
      { text: "ミオは、いつもより、少しだけ早口だった。" }
    ],
    next: "5-mio-07"
  },
  "5-mio-06-r2": {
    bg: "waiwai",
    nodes: [
      { type: "chara", pos: "center", chara: "mio", expr: "default" },
      { text: "俺は、何も言わずに、ミオの背中を見送った。" },
      { text: "言うべき時は、きっと、今じゃない。――そう、自分に、言い聞かせた。" }
    ],
    next: "5-mio-07"
  },
  "5-mio-06-r3": {
    bg: "waiwai",
    nodes: [
      { type: "chara", pos: "center", chara: "yutaka", expr: "trouble" },
      { speaker: "ユタカ", text: "ふれんち、俺のこと、気にするな。って言っただろ" },
      { text: "ユタカの口調には、微かに苛立ちが混ざっていた。……俺は、彼の友情の使い方を、また一つ、間違えた気がした。" }
    ],
    next: "5-mio-07"
  },
  "5-mio-07": {
    bg: "ginkgo_bare", date: "12月中旬 ／ 銀杏並木・告白",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "mio_confession" },
      { text: "銀杏の葉が、ほとんど散った日。俺は、ミオを並木の下に呼び出した。" },
      { type: "chara", pos: "center", chara: "mio", expr: "shy" },
      { speaker: "ふれんち", text: "ミオ。俺、もう一度、言うね" },
      { speaker: "ミオ", text: "……うん" },
      { speaker: "ふれんち", text: "ミオのこと、好きだ。去年の冬と、同じ気持ちだ" },
      { speaker: "ふれんち", text: "でも、今日は、『つきあってください』じゃなくて、『これから、俺のペースで、お前のことを、好きでいさせてくれ』って言いに来た" },
      { speaker: "ミオ", text: "……なに、それ" },
      { speaker: "ふれんち", text: "俺、自分に自信がないから、去年みたいに、焦って言って、失敗したくない。だから、ペースをもらいたい" },
      { speaker: "ミオ", text: "……ふれんち、ずるくなったね" },
      { speaker: "ふれんち", text: "ダメか" },
      { speaker: "ミオ", text: "ううん。……いいよ。私も、自分のペースで、ふれんちのこと、ちゃんと、見る" }
    ], next: "5-mio-08"
  },
  "5-mio-08": {
    bg: "dolce", date: "12月24日 ／ クリスマスイブ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "ふれんちとミオは、「付き合う」という言葉を、まだ、交わしていない。でも、クリスマスイブ、ミオから「ドルチェで、夜ごはん、食べない？」と誘いが来た。" },
      { text: "ドルチェは、加藤さんがいる店。――でも、加藤さんは、その日、教会のミサで不在。無口な店長は、俺とミオを見ると、小さく頷いて、奥に引っ込んだ。――今夜は、貸し切り状態。" },
      { type: "chara", pos: "center", chara: "mio", expr: "smile" },
      { speaker: "ミオ", text: "ふれんち、メリークリスマス" },
      { speaker: "ふれんち", text: "メリークリスマス、ミオ" },
      { speaker: "ミオ", text: "……ねえ、さっきの続き、聞いてもいい？" },
      { speaker: "ふれんち", text: "うん" },
      { speaker: "ミオ", text: "ふれんちは、私の彼氏に、なりたいの？" },
      { speaker: "ふれんち", text: "……なりたい" },
      { speaker: "ミオ", text: "じゃあ、なりなよ" },
      { speaker: "ふれんち", text: "……え" },
      { speaker: "ミオ", text: "もう、今日から、彼氏。ダメ？" },
      { speaker: "ふれんち", text: "……ダメじゃ、ない" },
      { text: "ミオが、小さく笑って、俺の手を握った。" }
    ], next: "END-MIO"
  },
  "END-MIO": {
    bg: "ginkgo_bare",
    nodes: [
      { type: "ending", endingId: "END-MIO",
        title: "【TRUE END】 Dolce andante",
        text: "銀杏並木の葉は、完全に散った。\nでも、俺は、今年、たぶん、少しだけ、リア充だ。\n\n『ドルチェ・アンダンテ』――甘く、ゆっくりと。\n２年越しの恋は、焦らず、ゆっくり、俺たちのペースで、進んでいく。\n\n２００５年１２月２４日、２３時４１分。\nミオの小さな手の温度を、俺は、たぶん、一生、忘れない。" }
    ]
  },

  /* ================================================
     【薫ルート】
     ================================================ */
  "5-kaoru-01": {
    bg: "room_night", date: "11月中旬 ／ 低音合わせ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "ファゴットとコントラバスの低音合わせ。練習室で、薫と２人きり。" },
      { type: "chara", pos: "center", chara: "kaoru", expr: "default" },
      { speaker: "薫", text: "ふれんち、もうちょっと、音を前に出せ" },
      { speaker: "ふれんち", text: "はい" },
      { speaker: "薫", text: "私、ファゴットなのに、コントラバスより前に出ててどうする" },
      { speaker: "ふれんち", text: "……すみません" },
      { speaker: "薫", text: "……でも、お前の音、嫌いじゃない" }
    ], next: "5-kaoru-02"
  },
  "5-kaoru-02": {
    bg: "corridor", date: "11月下旬 ／ 廊下",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "練習後、廊下を歩いていると、角の向こうから、薫とミオの声が聞こえた。" },
      { type: "chara", pos: "left", chara: "mio", expr: "default" },
      { type: "chara", pos: "right", chara: "kaoru", expr: "default" },
      { speaker: "ミオ", text: "薫、最近、ふれんちのこと、どう思ってる？" },
      { speaker: "薫", text: "……ふれんちのこと？ 面倒な男だな、と思ってる" },
      { speaker: "ミオ", text: "それだけ？" },
      { speaker: "薫", text: "それ以上を、今、言いたくない" },
      { text: "――聞こえてしまった。俺は、角の手前で、息を止めた。" }
    ], next: "5-kaoru-03"
  },
  "5-kaoru-03": {
    bg: "room_night", date: "12月上旬 ／ 薫の質問",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "kaoru", expr: "default" },
      { speaker: "薫", text: "ふれんち。お前、ミオのこと、まだ好きか？" },
      { type: "choice", choices: [
        { label: "「……たぶん、もう、違う」",
          effects: [{ param: "kaoru", delta: 3 }, { flag: "kaoru_ok", value: true }],
          goto: "5-kaoru-03-r1" },
        { label: "「わからない」",
          effects: [{ param: "kaoru", delta: 1 }],
          goto: "5-kaoru-03-r2" },
        { label: "「好きだと思う」",
          effects: [{ param: "kaoru", delta: -3 }],
          goto: "5-kaoru-03-r3" }
      ]}
    ]
  },
  "5-kaoru-03-r1": {
    bg: "room_night",
    nodes: [
      { type: "chara", pos: "center", chara: "kaoru", expr: "shy" },
      { speaker: "薫", text: "……そうか" },
      { text: "薫は、ぽつりとそれだけ言った。表情は変わらない。でも、その「そうか」の声は、少しだけ、震えていた気がした。" }
    ],
    next: "5-kaoru-04"
  },
  "5-kaoru-03-r2": {
    bg: "room_night",
    nodes: [
      { type: "chara", pos: "center", chara: "kaoru", expr: "default" },
      { speaker: "薫", text: "……まあ、わからないなら、わからないでいい。お前らしいよ" },
      { text: "薫は、いつも、俺の煮え切らなさを、こうして許容してくれる。それが、たまに、申し訳なくなる。" }
    ],
    next: "5-kaoru-04"
  },
  "5-kaoru-03-r3": {
    bg: "room_night",
    nodes: [
      { type: "chara", pos: "center", chara: "kaoru", expr: "default" },
      { speaker: "薫", text: "……そうか。じゃあ、頑張れよ" },
      { text: "薫の声は、いつも通り、フラットだった。でも、その後、彼女は、俺と二人きりになる時間を、避けるようになった。" }
    ],
    next: "5-alone-01"
  },
  "5-kaoru-04": {
    bg: "hall_stage", date: "演奏会本番後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "演奏会は、よい本番だった。薫のファゴットと、俺のコントラバスは、低音の森みたいに、重なっていた。" },
      { text: "打ち上げで、薫がウーロン茶で、酔った女子たちの面倒を見ている。" },
      { type: "chara", pos: "center", chara: "kaoru", expr: "trouble" },
      { speaker: "ふれんち", text: "薫、いつも、お前ばっかり、そうやって" },
      { speaker: "薫", text: "……私、こういう役回り、向いてる" },
      { speaker: "ふれんち", text: "向いてるけど、お前自身は、誰に面倒を見てもらう？" },
      { speaker: "薫", text: "……そういうこと、お前に言われると、ちょっと、ずるいぞ" }
    ], next: "5-kaoru-05"
  },
  "5-kaoru-05": {
    bg: "ginkgo_bare", date: "12月中旬 ／ 冷たい雨",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "冷たい雨の日。薫が、部室前で、俺を待っていた。" },
      { type: "chara", pos: "center", chara: "kaoru", expr: "shy" },
      { speaker: "薫", text: "……お前、知ってると思うけど、私、『ミオの彼氏』って言われ続けてきた" },
      { speaker: "ふれんち", text: "うん" },
      { speaker: "薫", text: "でも、本当は、私、ミオのことを、親友として好きで、恋愛対象として好きな相手は、別にいる" },
      { speaker: "ふれんち", text: "……" },
      { speaker: "薫", text: "お前だ、ふれんち" },
      { speaker: "薫", text: "返事、今は、いい。……ただ、これだけは、言わせろ" }
    ], next: "5-kaoru-06"
  },
  "5-kaoru-06": {
    bg: "street_night", date: "クリスマスイブ ／ ファミレス",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "kaoru_snow" },
      { text: "クリスマスイブ。薫とは、大学近くのファミレスで会う約束だった。彼女は、珍しくスカートを履いて来た。" },
      { type: "chara", pos: "center", chara: "kaoru", expr: "shy" },
      { speaker: "薫", text: "似合わないだろ" },
      { speaker: "ふれんち", text: "……いや、似合ってる" },
      { speaker: "薫", text: "無理すんな" },
      { speaker: "ふれんち", text: "本当に似合ってる" },
      { speaker: "ふれんち", text: "薫。告白の返事、今日、言ってもいい？" },
      { speaker: "薫", text: "……" },
      { speaker: "ふれんち", text: "俺、お前のこと、ずっと頼りにしてた。頼りにするだけじゃなくて、俺からも、お前を頼らせてもらえるなら、付き合ってください" },
      { speaker: "薫", text: "……お前、そういう言い方、するのね" },
      { speaker: "ふれんち", text: "はい" },
      { speaker: "薫", text: "……わかった。よろしく" }
    ], next: "END-KAORU"
  },
  "END-KAORU": {
    bg: "illumination",
    nodes: [
      { type: "ending", endingId: "END-KAORU",
        title: "【HAPPY END】 あなたの隣の風景",
        text: "雪がちらつく中、俺たちは、手袋のまま、少しだけ、手を繋いだ。\n薫は、俺の隣で、俺より背が高い。\nでも、それも、悪くないんだ、と気づいた。\n\n『ミオの彼氏』だった薫は、今日から、俺の彼女になった。\n彼女の姿勢の良さが、俺に、少しだけ、背筋を伸ばさせる。\n２００５年のクリスマスは、冬空みたいに、静かで、透明だった。" }
    ]
  },

  /* ================================================
     【ヒマリちゃんルート】
     ================================================ */
  "5-himari-01": {
    bg: "room_night", date: "11月中旬 ／ パート練",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "himari", expr: "sad" },
      { text: "夜のパート練で、ヒマリちゃんが、突然、弓を止めた。目が、赤い。" },
      { speaker: "ヒマリちゃん", text: "……ふれんちさん" },
      { speaker: "ふれんち", text: "どうした" },
      { speaker: "ヒマリちゃん", text: "……彼、が、その、浮気、していて" },
      { text: "――遠距離恋愛の彼氏の話だった。俺は、ヒマリちゃんが泣くのを、初めて見た。" }
    ], next: "5-himari-02"
  },
  "5-himari-02": {
    bg: "room_night", date: "11月下旬 ／ コントラバスの絆",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "himari", expr: "default" },
      { speaker: "ふれんち", text: "ヒマリちゃん、ピツィカート、指、痛むだろ" },
      { speaker: "ヒマリちゃん", text: "はい、結構" },
      { speaker: "ふれんち", text: "俺も、最初、Gの音出すだけで３０分かかった" },
      { speaker: "ヒマリちゃん", text: "……そう、なんですね" },
      { speaker: "ふれんち", text: "初心者から始めた仲間、だから。お互い、ちゃんと、弾けるようになろう" },
      { speaker: "ヒマリちゃん", text: "……はい" }
    ], next: "5-himari-03"
  },
  "5-himari-03": {
    bg: "ginkgo_yellow", date: "11月末 ／ 銀杏並木",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "himari", expr: "shy" },
      { speaker: "ヒマリちゃん", text: "ふれんちさんって、お兄さん……ですよね？" },
      { type: "choice", choices: [
        { label: "「うん、お兄さん、でいいよ」",
          effects: [{ param: "himari", delta: 1 }],
          goto: "5-himari-03-r" },
        { label: "「……お兄さん、じゃなくてもいい？」",
          effects: [{ param: "himari", delta: 3 }, { flag: "himari_more_than_brother", value: true }],
          goto: "5-himari-04" }
      ]}
    ]
  },
  "5-himari-03-r": {
    bg: "ginkgo_yellow",
    nodes: [
      { type: "chara", pos: "center", chara: "himari", expr: "smile" },
      { speaker: "ヒマリちゃん", text: "……はい。ありがとうございます、ふれんちさん" },
      { text: "ヒマリちゃんは、嬉しそうに、けれど少しだけ寂しそうに、頷いた。" }
    ],
    next: "5-himari-04-friend"
  },
  "5-himari-04": {
    bg: "ginkgo_yellow",
    nodes: [
      { type: "chara", pos: "center", chara: "himari", expr: "surprise" },
      { speaker: "ヒマリちゃん", text: "……え" },
      { speaker: "ふれんち", text: "困らせたなら、忘れて" },
      { speaker: "ヒマリちゃん", text: "……忘れ、ません" },
      { text: "ヒマリちゃんは、俯いた。でも、目を逸らさなかった。" }
    ], next: "5-himari-05"
  },
  "5-himari-04-friend": {
    bg: "ginkgo_yellow",
    nodes: [
      { text: "ヒマリちゃんは、小さく笑って、頷いた。――それ以上の関係には、たぶん、ならない。" }
    ], next: "5-alone-01"
  },
  "5-himari-05": {
    bg: "hall_stage", date: "12月上旬 ／ 定期演奏会",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "concert_winter" },
      { text: "演奏会本番。ヒマリちゃんは、自分のパートを、間違えずに、丁寧に弾いた。" },
      { type: "chara", pos: "center", chara: "himari", expr: "smile" },
      { speaker: "ヒマリちゃん", text: "ふれんちさんに、見ててほしかった" }
    ], next: "5-himari-06"
  },
  "5-himari-06": {
    bg: "illumination", date: "クリスマスイブ ／ イルミネーション",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "himari_illumination" },
      { type: "chara", pos: "center", chara: "himari", expr: "shy" },
      { speaker: "ヒマリちゃん", text: "ふれんちさん、不器用な私で、ごめんなさい" },
      { speaker: "ふれんち", text: "不器用、嫌いじゃない。俺も、不器用だから" },
      { speaker: "ヒマリちゃん", text: "ふれんちさん、彼女、いないですか" },
      { speaker: "ふれんち", text: "いないよ" },
      { speaker: "ヒマリちゃん", text: "……じゃあ、私、なってもいいですか" },
      { speaker: "ふれんち", text: "……いいよ" }
    ], next: "END-HIMARI"
  },
  "END-HIMARI": {
    bg: "illumination",
    nodes: [
      { type: "ending", endingId: "END-HIMARI",
        title: "【HAPPY END】 不器用な二人",
        text: "ヒマリちゃんは、不器用だけど、真っ直ぐで、\n俺は、その真っ直ぐさに、救われた。\n\n彼女のコントラバスは、この１年で、確実に、上達した。\n俺のコントラバスも、たぶん、少しだけ、上達した。\n\n２００５年のクリスマスは、大きすぎる楽器の隣で、\n俺たちは、ちっちゃく、笑っていた。" }
    ]
  },

  /* ================================================
     【加藤さんルート】
     ================================================ */
  "5-kato-01": {
    bg: "hospital", date: "11月中旬 ／ 病院",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "学園祭で「外出許可」を使って差し入れに来てくれた加藤さん。あの後、彼女はすぐに病室に戻り、検査入院は予定より長引いていた。" },
      { text: "学園祭が終わって少しして、俺は、ようやくお見舞いに行く時間を作れた。" },
      { type: "chara", pos: "center", chara: "kato", expr: "trouble" },
      { speaker: "加藤さん", text: "ふれんち君、お見舞い、ありがとう" },
      { text: "病室のベッドに、加藤さんは小さく座っていた。点滴のチューブが、細い腕に繋がっている。" },
      { speaker: "加藤さん", text: "……私ね、先天性の持病があって、定期的に、こうして検査入院するの" },
      { speaker: "加藤さん", text: "この先も、たぶん、ずっと。完治は、しないんだって" },
      { speaker: "ふれんち", text: "……" },
      { speaker: "加藤さん", text: "だから、私のこと、あんまり、好きにならない方がいい" }
    ], next: "5-kato-02"
  },
  "5-kato-02": {
    bg: "dolce", date: "11月下旬 ／ 退院・ドルチェ復帰",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "kato", expr: "smile" },
      { text: "加藤さんは、退院して、ドルチェに戻ってきた。何事もなかったように、いつも通りに、コーヒーを淹れていた。" },
      { text: "俺は、加藤さんを、「大人の女性」としてではなく、「一人の人」として、見るようになった。" }
    ], next: "5-kato-03"
  },
  "5-kato-03": {
    bg: "street_night", date: "12月初旬 ／ ユタカの忠告",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "yutaka", expr: "default" },
      { speaker: "ユタカ", text: "ふれんち、加藤さん、真剣か？" },
      { speaker: "ふれんち", text: "……真剣、だと思う" },
      { speaker: "ユタカ", text: "……それなら、俺は何も言わない" }
    ], next: "5-kato-04"
  },
  "5-kato-04": {
    bg: "hall_stage", date: "12月上旬 ／ 定期演奏会・本番",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "concert_winter" },
      { text: "本番当日。楽屋裏は、独特の張りつめた空気だった。" },
      { text: "プロコフィエフ《シンデレラ》。木管が舞踏会のメロディーを刻むなか、俺のコントラバスは、舞台の床を、ゆっくりと震わせる役を担った。" },
      { text: "ラフマニノフ／ピアノ協奏曲第２番。客演のピアニストの指は、まるで、別の生き物のように動いていた。俺たちの弦は、その身体の伴走者になる。" },
      { text: "そして、メイン。チャイコフスキー／交響曲第５番。" },
      { text: "２楽章。あの、難所のピツィカート。指が、譜面より先に動いた。練習で繰り返した夜の数だけ、指は、覚えていた。" },
      { text: "４楽章。終盤。客席の最前列から、少しずつ、人々が身を乗り出すのが、視界の隅に映った。――その中に、加藤さんの白いカーディガンが、見えた気がした。" },
      { text: "終演。割れるような拍手。俺は、舞台の上で、自分の呼吸が、いつのまにか深くなっているのに気づいた。" },
      { type: "clearChara", pos: "all" },
      { type: "date", date: "本番終了後 ／ 楽屋" },
      { text: "楽屋に戻ると、ドアのところに、加藤さんが立っていた。退院していたのは、本当に、今日だけ、らしかった。" },
      { type: "chara", pos: "center", chara: "kato", expr: "smile" },
      { speaker: "加藤さん", text: "ふれんち君、お疲れさま" },
      { speaker: "ふれんち", text: "……来てくださって、ありがとうございます。体、大丈夫ですか" },
      { speaker: "加藤さん", text: "うん、全然。今日のために、お医者さんに無理言って外出許可、もらったの" },
      { speaker: "ふれんち", text: "……無理しないでくださいって、いつも言ってるのに" },
      { type: "chara", pos: "center", chara: "kato", expr: "default" },
      { speaker: "加藤さん", text: "ふふ。ねえ、ふれんち君" },
      { speaker: "加藤さん", text: "音、変わったね" },
      { speaker: "ふれんち", text: "……そうですか" },
      { speaker: "加藤さん", text: "うん。あなたの人生の音が、聞こえたよ" },
      { text: "加藤さんの白い指が、俺のコントラバスの肩のあたりに、そっと触れた。冷たかった。" },
      { text: "彼女が「人生の音」と呼んでくれたものが、何なのか――その瞬間は、俺には、わからなかった。" }
    ], next: "5-kato-05"
  },
  "5-kato-05": {
    bg: "church_mass", date: "12月24日 ／ クリスマスイブ・ミサ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "kato_church" },
      { text: "去年と同じ、教会のミサ。でも、今年は、俺が加藤さんの隣で、手を握りたい、と思う。" },
      { text: "握らない。ミサの間は。" },
      { text: "ミサの後、教会の中庭で、俺は、彼女に言った。" },
      { type: "chara", pos: "center", chara: "kato", expr: "default" },
      { speaker: "ふれんち", text: "加藤さん。俺と、付き合ってください" },
      { speaker: "加藤さん", text: "……ふれんち君、ね" },
      { speaker: "ふれんち", text: "はい" },
      { speaker: "加藤さん", text: "私、この先、ずっと、元気に働ける保証がないよ。子ども、作れるかもわからない" },
      { speaker: "ふれんち", text: "知ってます" },
      { speaker: "加藤さん", text: "……それでも、？" },
      { speaker: "ふれんち", text: "それでも" },
      { speaker: "加藤さん", text: "……じゃあ、……はい" },
      { text: "加藤さんが、小さく、涙を流した。俺は、はじめて、彼女の肩を抱いた。" }
    ], next: "END-KATO"
  },
  "END-KATO": {
    bg: "church_mass",
    nodes: [
      { type: "ending", endingId: "END-KATO",
        title: "【HAPPY END】 あなたを、抱きしめる",
        text: "加藤さんは、ずっと、俺にとって、優しいお姉さんだった。\n今日から、俺の、かけがえのない人になった。\n\n彼女の体は、健康な人より、少しだけ、冷たい。\nその冷たさを、俺は、温めていく。\n少しずつ、ゆっくり。\n\n２００５年のクリスマス、\n俺は、自分より少しだけ大人の人を、抱きしめた。\n彼女の小さな十字架のネックレスが、\n俺の鎖骨に、冷たく、触れた。" }
    ]
  },

  /* ================================================
     【シェリールート】
     ================================================ */
  "5-sherry-01": {
    bg: "apartment", date: "11月中旬 ／ シェリーのアパート",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "学園祭の片付けで、シェリーのアパートまで、道具を運ぶ用事があった。初めて、彼女の部屋に入った。" },
      { text: "潔癖な彼女の部屋は、びっくりするほど、清潔。物が、少なかった。" },
      { type: "chara", pos: "center", chara: "sherry", expr: "shy" },
      { speaker: "シェリー", text: "ふれんち。私のブログ、見せる" },
      { speaker: "ふれんち", text: "え" },
      { speaker: "シェリー", text: "２年生のとき、あなたとデートした日の記事" },
      { text: "その記事には、こう書かれていた。「今日、彼に、私の音楽を聴いてほしかった。でも、彼は、ずっと、私の指を見ていた」" },
      { speaker: "ふれんち", text: "……俺、そんな、変態みたいだったの？" },
      { speaker: "シェリー", text: "変態じゃない。……音楽を見てくれる人が、欲しかった、ってだけ" }
    ], next: "5-sherry-02"
  },
  "5-sherry-02": {
    bg: "room_night", date: "11月下旬 ／ 即興の合奏",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "個人練で、シェリーと、バッハのチェロ組曲を、即興で合わせた。シェリーの音が、俺の音を、完全に包み込む。" },
      { text: "――俺、この子の音に、ずっと、憧れてた。" }
    ], next: "5-sherry-03"
  },
  "5-sherry-03": {
    bg: "room_night", date: "12月上旬 ／ 演奏会後・部室",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "sherry", expr: "sad" },
      { text: "演奏会が終わったあと、シェリーは打ち上げには来なかった。俺は、部室で、一人で残っていた彼女を探しに行った。" },
      { speaker: "シェリー", text: "……ふれんち、今日、チェロ、良かった？" },
      { speaker: "ふれんち", text: "……うん。良かった" },
      { speaker: "シェリー", text: "じゃあ、今日、あなたのものの一部を、私に、くれない？" },
      { speaker: "ふれんち", text: "……え" },
      { speaker: "シェリー", text: "あなたの時間を。私と、クリスマスを過ごすという時間を" }
    ], next: "5-sherry-04"
  },
  "5-sherry-04": {
    bg: "apartment", date: "12月24日 ／ シェリーの部屋",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "sherry_room" },
      { text: "シェリーの部屋の、本棚の１段に、埃をかぶったCDが１枚だけ、置いてあった。" },
      { type: "chara", pos: "center", chara: "sherry", expr: "default" },
      { speaker: "シェリー", text: "これは、私が、２年の冬に、ふれんちに聴いてほしかったCD" },
      { text: "グールドのバッハ。\n俺たちは、その夜、そのCDを、最初から最後まで、聴いた。" },
      { speaker: "シェリー", text: "メリークリスマス。……今年は、１人じゃないよ、私" }
    ], next: "END-SHERRY"
  },
  "END-SHERRY": {
    bg: "apartment",
    nodes: [
      { type: "ending", endingId: "END-SHERRY",
        title: "【HAPPY END】 あなたの音に、私は",
        text: "シェリーの部屋は、静かすぎる、と思っていた。\nでも、そこには、音楽があった。\nグールドのバッハ、ブラームス、ブルッフ、そして、\n私たちの、静かな呼吸。\n\n『音楽を聴いてくれる人』だった俺は、\n今日から、シェリーの、一人の聴き手になった。\n彼女のブログの、次の記事は、もう、\n俺の指のことじゃなくて、音楽のことだけが、\n書かれていた。" }
    ]
  },

  /* ================================================
     【ミヤコさんルート】（隠し）
     ================================================ */
  "5-miyako-01": {
    bg: "apartment", date: "11月中旬 ／ ユタカの異変",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "ユタカが、最近、バイトを急に休むようになった。俺は、ユタカが、自分の将来（院進学か、就職か）に悩んでいることを知る。" },
      { text: "でも、ミヤコさんには、ユタカは、その悩みを、言えていないらしい。" }
    ], next: "5-miyako-02"
  },
  "5-miyako-02": {
    bg: "apartment", date: "11月下旬 ／ 電話",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "夜、携帯が鳴った。ミヤコさん、だった。" },
      { type: "chara", pos: "center", chara: "miyako", expr: "sad" },
      { speaker: "ミヤコさん", text: "ふれんち君、今、話せる？" },
      { text: "俺は、親友の彼女の話を、聞き続けた。\n何度も、何度も。" }
    ], next: "5-miyako-03"
  },
  "5-miyako-03": {
    bg: "apartment", date: "12月上旬 ／ 破局",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "１２月上旬、ユタカとミヤコさんが、正式に別れた。きっかけは、ユタカが言えなかった本音を、ミヤコさんが受け止めきれなかったこと。" }
    ], next: "5-miyako-04"
  },
  "5-miyako-04": {
    bg: "apartment", date: "演奏会後 ／ ミヤコさんの部屋",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "miyako", expr: "sad" },
      { text: "演奏会の打ち上げに、ミヤコさんは来なかった。俺は、彼女のアパートまで、心配して、行った。" },
      { speaker: "ミヤコさん", text: "ふれんち君、ごめんね、こんな時に……" },
      { speaker: "ふれんち", text: "……大丈夫ですか" },
      { speaker: "ミヤコさん", text: "大丈夫じゃない、かも" }
    ], next: "5-miyako-05"
  },
  "5-miyako-05": {
    bg: "apartment", date: "12月24日 ／ クリスマスイブ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "miyako", expr: "default" },
      { speaker: "ミヤコさん", text: "ふれんち君、今日、隣に、いてほしい" },
      { type: "choice", choices: [
        { label: "「行きます」",
          effects: [{ flag: "miyako_choice", value: "A" }],
          goto: "5-miyako-06A" },
        { label: "「ごめんなさい、行けない」",
          effects: [{ flag: "miyako_choice", value: "B" }],
          goto: "5-miyako-06B" }
      ]}
    ]
  },
  "5-miyako-06A": {
    bg: "apartment",
    nodes: [
      { type: "cg", cg: "miyako_embrace" },
      { text: "俺は、ミヤコさんのアパートに、行った。" },
      { type: "chara", pos: "center", chara: "miyako", expr: "sad" },
      { speaker: "ミヤコさん", text: "ふれんち君、私のこと、好き？" },
      { speaker: "ふれんち", text: "……わからない。でも、今日、貴方のそばにいたい、と思った" },
      { speaker: "ミヤコさん", text: "それで、いい" },
      { text: "２人は、お互いに、抱きしめあった。それ以上のことは、しなかった。――しなかった、と、俺は、自分に、言い聞かせている。" }
    ], next: "END-MIYAKO-A"
  },
  "END-MIYAKO-A": {
    bg: "apartment",
    nodes: [
      { type: "ending", endingId: "END-MIYAKO-A",
        title: "【BITTERSWEET END】 友を失った夜",
        text: "ユタカとは、もう、昔のように話せないかもしれない。\nそれでも、俺は、今日の選択を、間違いとは思いたくなかった。\n\nミヤコさんは、俺の腕の中で、朝まで、静かに泣いていた。\n俺は、彼女の髪を、ずっと、撫でていた。\n\n２００５年のクリスマスは、\n俺が、誰かの夜に、間に合った日。\n同時に、誰かの、友情を、失った日。" }
    ]
  },
  "5-miyako-06B": {
    bg: "apartment",
    nodes: [
      { type: "chara", pos: "center", chara: "miyako", expr: "sad" },
      { speaker: "ふれんち", text: "ミヤコさん、俺、あなたの話を聞ける人間ではあっても、あなたの夜に、いていい人間じゃない" },
      { speaker: "ミヤコさん", text: "……わかってる。でも、……ありがとう" }
    ], next: "END-MIYAKO-B"
  },
  "END-MIYAKO-B": {
    bg: "apartment",
    nodes: [
      { type: "ending", endingId: "END-MIYAKO-B",
        title: "【FRIEND END】 守った線",
        text: "俺は、ユタカの親友のまま、ミヤコさんと距離を保った。\nクリスマスの夜、俺は、１人で、アパートに戻った。\nでも、友情は、守られた。\n\n後日、ユタカは俺に「悪かったな、頼んで」とだけ言った。\n俺は「何が？」と返した。\n――それで、俺たちの関係は、元通りに、戻った。\n\n線を、守ること。\nそれが、今日の、俺の、正解だった。" }
    ]
  },

  /* ================================================
     【中野さんルート】
     ================================================ */
  "5-nakano-01": {
    bg: "room_night", date: "11月中旬 ／ 教えてくれる中野さん",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "nakano", expr: "default" },
      { text: "中野さんが、コントラバスの弾き方を、ぽつり、ぽつりと、教えてくれる。言葉は少ないが、音は優しい。俺は、彼女の高校時代の経験の蓄積を、肌で感じた。" }
    ], next: "5-nakano-02"
  },
  "5-nakano-02": {
    bg: "room_night", date: "11月下旬 ／ 少し開く",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "中野さんは、少しずつ、普通の会話をしてくれるようになった。でも、それは、長くは続かない。" },
      { type: "chara", pos: "center", chara: "nakano", expr: "default" },
      { speaker: "中野さん", text: "……私、１年のとき、男の子に、付き纏われたことがあって" },
      { speaker: "中野さん", text: "だから、私、男の子が、怖いんだ" },
      { speaker: "ふれんち", text: "……わかった" },
      { speaker: "中野さん", text: "でも、あなたは、違う、気がする" }
    ], next: "5-nakano-03"
  },
  "5-nakano-03": {
    bg: "hall_stage", date: "12月上旬 ／ 演奏会",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "nakano", expr: "smile" },
      { text: "本番の直前、中野さんが、ふれんちに「よろしくね」と、初めて、笑って言った。" },
      { text: "本番、コントラバスパートが、初めて、全員で、音を合わせた。渡部もヒマリちゃんも、中野さんも、俺も。" },
      { text: "――この瞬間のために、俺たちは、たぶん、ここにいた。" }
    ], next: "5-nakano-04"
  },
  "5-nakano-04": {
    bg: "apartment", date: "12月24日 ／ 中野さんの家",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "nakano", expr: "shy" },
      { speaker: "中野さん", text: "ちょっとだけ、家に寄って、いい？" },
      { text: "中野さんの部屋は、シンプルで、清潔で、少しだけ寂しかった。" },
      { speaker: "中野さん", text: "ふれんち君、私、たぶん、あなたのこと、一番、信じてる" },
      { speaker: "ふれんち", text: "……俺も、中野さんのこと、ずっと、気になってた" },
      { speaker: "中野さん", text: "じゃあ、今日から、私、もう、『中野さん』じゃなくて、……名前、呼んでくれる？" }
    ], next: "END-NAKANO"
  },
  "END-NAKANO": {
    bg: "apartment",
    nodes: [
      { type: "ending", endingId: "END-NAKANO",
        title: "【HAPPY END】 名前を、呼ぶ",
        text: "中野さんの名前を、初めて、俺は、呼んだ。\nそれは、世界で一番、小さな声だった。\nでも、世界で一番、特別な声だった。\n\n彼女のコントラバスが、\nこの楽団で、もう一度、響くようになるのは、\n来年の春から、かもしれない。\n\n俺は、彼女の隣で、下手なりに、\n低音を鳴らし続ける。\n――それが、俺にできる、\n一番ちゃんとした、愛情表現だった。" }
    ]
  },

  /* ================================================
     【まーちゃんルート】（短・ビタースイート）
     ================================================ */
  "5-maachan-01": {
    bg: "ginkgo_yellow", date: "11月中旬 ／ 銀杏並木",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "学園祭が終わって、まーちゃんから相談のメールが何度か届くようになった。「ちょっとだけ話を聞いてほしい」という、ほんわかと重いお願い。" },
      { type: "chara", pos: "center", chara: "maachan", expr: "default" },
      { speaker: "まーちゃん", text: "ふれんちさん、渡部君に言わないで、聞いてもらえますか" },
      { speaker: "ふれんち", text: "……うん。どうした？" },
      { speaker: "まーちゃん", text: "最近、渡部君と喧嘩、しちゃって。ふれんちさんに、愚痴こぼしたくなっちゃって" },
      { text: "まーちゃんの「愚痴」は、本当は、愚痴じゃない――のは、俺にもわかっていた。" }
    ],
    next: "5-maachan-02"
  },
  "5-maachan-02": {
    bg: "dolce", date: "11月末 ／ ドルチェ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "maachan", expr: "shy" },
      { speaker: "まーちゃん", text: "ふれんちさんって、……すごく、聞き上手ですよね" },
      { speaker: "ふれんち", text: "俺、何もしてないけど" },
      { speaker: "まーちゃん", text: "いえ、ほんとに……あの、その、私、ちょっと、ふれんちさんのこと――" },
      { text: "――店の入り口が開いた。俺が視線を向けると、そこに、渡部が立っていた。気まずそうに、でも、確信をもった目で、俺を見ていた。" }
    ],
    next: "5-maachan-03"
  },
  "5-maachan-03": {
    bg: "street_night", date: "12月上旬 ／ 演奏会本番後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "concert_winter" },
      { text: "演奏会の終わり。俺は、最後まで、コントラバスに集中できなかった。――まーちゃんと渡部のことが、頭を離れなかった。" },
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "watabe", expr: "trouble" },
      { speaker: "渡部", text: "先輩" },
      { speaker: "ふれんち", text: "……なんだ" },
      { speaker: "渡部", text: "まーちゃんのこと、好きですか" },
      { speaker: "ふれんち", text: "……違う" },
      { speaker: "渡部", text: "じゃあ、突き放してください。あいつ、ふれんち先輩のこと、本気なんで" },
      { text: "渡部の声は、いつもの明るさが、完全に抜けていた。" }
    ],
    next: "5-maachan-04"
  },
  "5-maachan-04": {
    bg: "ginkgo_bare", date: "12月中旬 ／ 銀杏並木",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "maachan", expr: "sad" },
      { speaker: "ふれんち", text: "まーちゃん。俺たち、ここまでにしよう" },
      { speaker: "まーちゃん", text: "……うん。わかってました、ずっと" },
      { text: "まーちゃんは、泣いていた。でも、ちゃんと、最後まで、目を逸らさなかった。" },
      { speaker: "まーちゃん", text: "ふれんちさんのこと、忘れます。ちゃんと、渡部君と、やり直します" },
      { speaker: "ふれんち", text: "……それが、一番、いい" },
      { text: "銀杏の葉が、冷たい風に巻かれて、俺たちの足元で、くるくると、踊った。" }
    ],
    next: "5-maachan-05"
  },
  "5-maachan-05": {
    bg: "dolce", date: "12月24日 ／ クリスマスイブ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "クリスマスイブ。俺は、ドルチェのカウンターで、１人、ホットコーヒーを飲んでいた。" },
      { text: "加藤さんが、オフの日の私服で店に入ってきて、俺の向かい側に、無言で座った。" },
      { type: "chara", pos: "center", chara: "kato", expr: "smile" },
      { speaker: "加藤さん", text: "ふれんち君、今日、１人なの？" },
      { speaker: "ふれんち", text: "……まあ、色々あって" },
      { speaker: "加藤さん", text: "そっか。じゃあ、一緒に、コーヒー、飲みましょ" },
      { text: "加藤さんは、何も聞かなかった。俺も、何も、言わなかった。それで、十分だった。" }
    ],
    next: "END-MAACHAN"
  },
  "END-MAACHAN": {
    bg: "dolce",
    nodes: [
      { type: "ending", endingId: "END-MAACHAN",
        title: "【BITTERSWEET END】 足元に散った葉",
        text: "俺は、まーちゃんの気持ちに、報いなかった。\nでも、報いることが、正しいとは、思えなかった。\n\n渡部とは、たぶん、春にはまた普通に喋れるようになる。\nまーちゃんとも、たぶん、同じように。\nでも、「たぶん」という言葉は、今はまだ、少し、痛い。\n\n２００５年のクリスマスは、ドルチェの窓の外で、\n銀杏の最後の葉が、１枚、落ちた日だった。" }
    ]
  },

  /* ================================================
     【愛ちゃんルート】（短・成り行き）
     ================================================ */
  "5-ai-01": {
    bg: "ginkgo_yellow", date: "11月中旬 ／ 学園祭の後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "夏の京都旅行のあと、愛ちゃんから、ぽつぽつと連絡が来るようになった。大した用事はない。ただ、学食で一緒に昼を食べたり、ちょっとだけ駅まで一緒に歩いたり、という程度の、曖昧な親しさだった。" },
      { type: "chara", pos: "center", chara: "ai", expr: "default" },
      { speaker: "愛ちゃん", text: "ねえ、ふれんち君、今度、姫ちゃん抜きで、また遊ばない？" },
      { speaker: "ふれんち", text: "……姫ちゃん、抜き？" },
      { speaker: "愛ちゃん", text: "うん、ダメ？" }
    ],
    next: "5-ai-02"
  },
  "5-ai-02": {
    bg: "waiwai", date: "12月上旬 ／ 演奏会後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "concert_winter" },
      { text: "定期演奏会。俺のコントラバスは、１楽章でひとつ、２楽章でひとつ、ミスをした。でも、誰も気づかないくらい、小さなミスだった。" },
      { text: "打ち上げ。愛ちゃんが、俺の隣の席に、自然に座った。" },
      { type: "chara", pos: "center", chara: "ai", expr: "default" },
      { speaker: "愛ちゃん", text: "ふれんち君、今夜、帰り、駅まで一緒でいい？" },
      { speaker: "ふれんち", text: "……うん" },
      { text: "駅までの道、愛ちゃんは、ずっと俺の半歩後ろを、歩いていた。" }
    ],
    next: "5-ai-03"
  },
  "5-ai-03": {
    bg: "illumination", date: "12月24日 ／ クリスマスイブ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "ai", expr: "default" },
      { speaker: "愛ちゃん", text: "ねえ、ふれんち君" },
      { speaker: "ふれんち", text: "ん" },
      { speaker: "愛ちゃん", text: "私たち、付き合わない？" },
      { speaker: "ふれんち", text: "……" },
      { speaker: "愛ちゃん", text: "別に、重い意味はないよ。ただ、クリスマスに１人で過ごすの、つまんないし" },
      { text: "愛ちゃんの言い方は、相変わらず、ストレートだった。嘘がないかわりに、温度も、少しだけ、低かった。" },
      { speaker: "ふれんち", text: "……わかった。うん。付き合おう" },
      { speaker: "愛ちゃん", text: "よろしく" }
    ],
    next: "END-AI"
  },
  "END-AI": {
    bg: "illumination",
    nodes: [
      { type: "ending", endingId: "END-AI",
        title: "【NORMAL END】 温度のない約束",
        text: "俺は、愛ちゃんに対して、たぶん、「好き」ではない。\nでも、「嫌い」でもない。\n\n２００５年のクリスマス、\n俺は、「愛のない交際」を、選んだ。\n\nこれが正解かどうかは、春になればわかる。\n――あるいは、わからないまま、\nなんとなく、続いていくのかもしれない。\n\nイルミネーションの光は、冷たくも、温かくも、\nなかった。" }
    ]
  },

  /* ================================================
     【姫ちゃんルート】（フレンドエンド）
     ================================================ */
  "5-hime-01": {
    bg: "ginkgo_yellow", date: "11月中旬 ／ 練習後",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "hime", expr: "default" },
      { speaker: "姫", text: "ふれんち、ちょっと、いい？" },
      { speaker: "ふれんち", text: "あ、はい" },
      { speaker: "姫", text: "……長友、最近、しつこいの。京都の話を持ち出して、『また旅行しよう』って" },
      { speaker: "ふれんち", text: "……それは、普通に引くな" },
      { speaker: "姫", text: "でしょう？ 私、誰にも頼まないんだけど、あなたなら、話を聞いてくれると思って" },
      { text: "姫ちゃんが俺に「頼る」という言葉を使ったのは、たぶん、大学生活で初めてだった。" }
    ],
    next: "5-hime-02"
  },
  "5-hime-02": {
    bg: "waiwai", date: "11月末 ／ 長友との対話",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "nagatomo", expr: "default" },
      { speaker: "ふれんち", text: "長友。姫ちゃんのこと、引いてやれ" },
      { speaker: "長友", text: "え、なに、ふれんち、お前、姫のこと狙ってんの？" },
      { speaker: "ふれんち", text: "違う。俺は、姫ちゃんの代わりに、頼まれただけだ" },
      { speaker: "長友", text: "……あー、はいはい。わかったよ、引きます、引きます" },
      { text: "長友は、へらっと笑ったが、目の奥は、ほんの少しだけ、真剣だった。――彼が姫ちゃんに本当に何を思っていたのかは、たぶん、彼自身にもわからない。" }
    ],
    next: "5-hime-03"
  },
  "5-hime-03": {
    bg: "apartment", date: "12月24日 ／ クリスマスイブ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "クリスマスイブ、自宅。俺の携帯が鳴った。差出人は、――姫ちゃん。" },
      { speaker: "姫（メール）", text: "この前は、ありがとう。長友、ちゃんと引いたわ。メリークリスマス。あなたは、私の、数少ない『友達』です" },
      { text: "「友達」の２文字が、少しだけ、引用符でくくられていた。姫ちゃんらしい、丁寧さだった。" },
      { speaker: "ふれんち（メール）", text: "こちらこそ、ありがとう。メリークリスマス" },
      { text: "――姫ちゃんに「友達」と認めてもらえる、という感覚を、俺は、たぶん、少しだけ、誇りに思っていた。" }
    ],
    next: "END-HIME"
  },
  "END-HIME": {
    bg: "apartment",
    nodes: [
      { type: "ending", endingId: "END-HIME",
        title: "【FRIEND END】 少数派の、友達",
        text: "姫ちゃんに、『友達』と認められた。\nそれは、たぶん、俺の人生でも、\nちょっとした勲章なんだと思う。\n\n恋愛じゃない。\nでも、恋愛じゃないからこそ、壊れにくい関係もある。\n\n２００５年のクリスマス、\n俺は、姫ちゃんの『友達』として、\n静かに、自分の部屋で、年越しを迎えた。" }
    ]
  },

  /* ================================================
     【たえやんルート】（フレンドエンド・カラオケ友）
     ================================================ */
  "5-taeyan-01": {
    bg: "room_eve", date: "11月中旬 ／ 部室",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "松本の夏以来、たえやんとは、月に１度くらいのペースで、カラオケに行くようになっていた。" },
      { type: "chara", pos: "center", chara: "taeyan", expr: "default" },
      { speaker: "たえやん", text: "ふれんち、次いつ空いてる" },
      { speaker: "ふれんち", text: "……水曜か、金曜" },
      { speaker: "たえやん", text: "じゃ、金曜。１９時集合。いつもの場所" },
      { text: "たえやんは、毎回、会話の９割が「業務連絡」だった。でも、カラオケに入るとスイッチが切り替わったように、声を張り上げて歌った。" }
    ],
    next: "5-taeyan-02"
  },
  "5-taeyan-02": {
    bg: "waiwai", date: "12月上旬 ／ 演奏会打ち上げ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "cg", cg: "concert_winter" },
      { text: "定期演奏会本番。俺のコントラバスの音は、思ったより、ホールの隅まで届いていたらしい。" },
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "taeyan", expr: "default" },
      { speaker: "たえやん", text: "ふれんち、今日のコントラバス、良かった" },
      { speaker: "ふれんち", text: "……お世辞？" },
      { speaker: "たえやん", text: "私、お世辞、言わない" },
      { text: "たえやんの「お世辞、言わない」は、たえやんと知り合ってから聞いた、一番、強い褒め言葉だった。" }
    ],
    next: "5-taeyan-03"
  },
  "5-taeyan-03": {
    bg: "street_night", date: "12月24日 ／ クリスマスイブ",
    nodes: [
      { type: "clearChara", pos: "all" },
      { type: "chara", pos: "center", chara: "taeyan", expr: "default" },
      { speaker: "たえやん", text: "ふれんち、クリスマス、予定ある？" },
      { speaker: "ふれんち", text: "ない" },
      { speaker: "たえやん", text: "カラオケ、行く？" },
      { speaker: "ふれんち", text: "行く" },
      { text: "２人で、クリスマスイブの夜を、カラオケで歌い倒した。俺は下手で、たえやんは相変わらず、びっくりするほど、うまかった。" },
      { text: "帰り道、たえやんは、いつもと同じテンポで、少し前を歩いていた。――これは、恋愛ではない。でも、孤独でも、ない。" }
    ],
    next: "END-TAEYAN"
  },
  "END-TAEYAN": {
    bg: "illumination",
    nodes: [
      { type: "ending", endingId: "END-TAEYAN",
        title: "【FRIEND END】 いつもの集合場所",
        text: "恋愛では、ない。\nでも、孤独でも、ない。\n\n「友達」って、案外、悪くないじゃんか、と、\nこの日、俺は、初めて思った。\n\nたえやんは、たぶん、この先もずっと、\n月に１度、「いつもの場所」と送ってくる。\nそして、俺は、毎回、行くんだろう。\n\n２００５年のクリスマスは、\n歌声と、マイクの熱と、\nペットボトルのお茶の音の夜だった。" }
    ]
  },

  /* ================================================
     【孤独なクリスマスエンド】（真・ノーマル）
     ================================================ */
  "5-alone-01": {
    bg: "ginkgo_yellow", date: "11月中旬",
    nodes: [
      { type: "clearChara", pos: "all" },
      { text: "学園祭が終わって、気づくと、俺の周りから、特別なことは、何も、起きなくなっていた。" },
      { text: "部員たちは、それぞれの日常を、生きていた。俺も、それぞれの日常を、生きていた。" },
      { text: "恋愛は、特に、なかった。" }
    ], next: "5-alone-02"
  },
  "5-alone-02": {
    bg: "hall_stage", date: "12月上旬 ／ 定期演奏会本番",
    nodes: [
      { type: "cg", cg: "concert_winter" },
      { text: "本番当日。プロコ、ラフマニノフ、チャイコフスキー。５０周年の舞台は、俺の中で、静かに、鳴っていた。" },
      { text: "俺のコントラバスは、今年、ちょっとだけ、上手くなった。それは、誰にも褒められないけど、本当のことだった。" }
    ], next: "5-alone-03"
  },
  "5-alone-03": {
    bg: "ginkgo_bare", date: "12月24日 ／ 銀杏並木",
    nodes: [
      { type: "cg", cg: "alone_christmas" },
      { text: "クリスマスイブ、ふれんちは、１人で、銀杏並木を歩いた。葉は、すっかり、散っていた。携帯には、誰からも、メッセージは来ていなかった。" },
      { text: "でも、それは、失敗ではない。" },
      { text: "俺は、今年、恋愛で何かを達成したわけじゃない。でも、ユタカとの友情は守ったし、学園祭は乗り切ったし、コントラバスは、ちょっとだけ、上手くなった。" },
      { text: "リア充じゃない。でも、これも、俺の、２００５年だ。" }
    ], next: "END-ALONE"
  },
  "END-ALONE": {
    bg: "ginkgo_bare",
    nodes: [
      { type: "ending", endingId: "END-ALONE",
        title: "【NORMAL END】 それでも、俺の銀杏並木",
        text: "銀杏並木のジンクスは、嘘じゃなかった。\nでも、ジンクス通りにならなかった年が、\n俺にとって、つまらない年だったかと言えば、そうでもなかった。\n\nそれを、俺は、クリスマスイブの夜、\n自分の部屋で、少しだけ、誇らしく、思った。\n\n――来年の春、銀杏並木は、また、緑になる。\nそのときに、何かが変わっているかは、わからない。\nでも、変わっていても、変わっていなくても、\n俺は、たぶん、ここに、いる。" }
    ]
  }

  };

  // マージ
  Object.assign(SCENARIO, R);
})();
