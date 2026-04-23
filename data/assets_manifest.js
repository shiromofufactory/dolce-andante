/* ==========================================================
   assets_manifest.js  ― 画像・音声ファイルのマッピング
   実装時はプレースホルダー（画像なし）。
   イラスト納品後に以下のキーにパスを埋めれば自動で適用される。
   ========================================================== */
const ASSETS = {

  /* ----- 背景 -----
     キーを指定すると engine.js の placeholderBG が色を自動生成。
     画像ファイルを納品したら、以下のキーに "assets/backgrounds/xxx.jpg" を指定。
  */
  backgrounds: {
    // corridor:       "assets/backgrounds/corridor.jpg",
    // room_day:       "assets/backgrounds/room_day.jpg",
    // room_eve:       "assets/backgrounds/room_eve.jpg",
    // room_night:     "assets/backgrounds/room_night.jpg",
    // dolce:          "assets/backgrounds/dolce.jpg",
    // waiwai:         "assets/backgrounds/waiwai.jpg",
    // ginkgo_green:   "assets/backgrounds/ginkgo_green.jpg",
    // ginkgo_yellow:  "assets/backgrounds/ginkgo_yellow.jpg",
    // ginkgo_bare:    "assets/backgrounds/ginkgo_bare.jpg",
    // street_night:   "assets/backgrounds/street_night.jpg",
    // hall_stage:     "assets/backgrounds/hall_stage.jpg",
    // apartment:      "assets/backgrounds/apartment.jpg",
    // camp:           "assets/backgrounds/camp.jpg",
    // riverbank_night:"assets/backgrounds/riverbank_night.jpg",
    // church_court:   "assets/backgrounds/church_court.jpg",
    // kyoto_night:    "assets/backgrounds/kyoto_night.jpg",
    // matsumoto:      "assets/backgrounds/matsumoto.jpg",
    // festival:       "assets/backgrounds/festival.jpg",
    // hospital:       "assets/backgrounds/hospital.jpg",
    // church_mass:    "assets/backgrounds/church_mass.jpg",
    // illumination:   "assets/backgrounds/illumination.jpg",
  },

  /* ----- 立ち絵 -----
     キーは "{charaKey}_{expr}" 形式。
     expr は default/smile/shy/trouble/surprise/drunk/…
  */
  characters: {
    // "mio_default":  "assets/characters/mio_default.png",
    // "mio_smile":    "assets/characters/mio_smile.png",
    // "mio_shy":      "assets/characters/mio_shy.png",
    // ... 以下各キャラ
  },

  /* ----- CG ----- */
  cgs: {
    // "cg_mio_riverbank":  "assets/cg/mio_riverbank.jpg",
    // "cg_mio_confession": "assets/cg/mio_confession.jpg",
    // "cg_title":          "assets/cg/title.jpg",
    // ...
  },

  /* ----- BGM / SE ----- */
  bgm: {
    // title:     "assets/bgm/title.mp3",
    // daily:     "assets/bgm/daily.mp3",
    // tension:   "assets/bgm/tension.mp3",
    // melancholy:"assets/bgm/melancholy.mp3",
    // concert:   "assets/bgm/concert.mp3",
    // christmas: "assets/bgm/christmas.mp3",
  },
  se: {
    // page:      "assets/se/page.mp3",
    // door:      "assets/se/door.mp3",
  }
};
