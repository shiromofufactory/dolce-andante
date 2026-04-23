/* ==========================================================
   engine.js  ― Dolce andante シーン実行エンジン
   ========================================================== */
const Engine = (() => {
  let state = null;
  let currentScene = null;
  let currentIdx = 0;
  let typewriterTimer = null;
  let isTyping = false;
  let autoMode = false;
  let skipMode = false;
  let log = [];
  const LOG_LIMIT = 200;

  /* ----- 初期ステート ----- */
  function initialState() {
    return {
      sceneId: "P-01",
      idx: 0,
      flags: {},       // 一般フラグ
      params: {        // 好感度系（−10〜+10）
        mio: 0, kaoru: 0, himari: 0, kato: 0, sherry: 0,
        miyako: 0, nakano: 0, maachan: 0, ai: 0, hime: 0, taeyan: 0,
        yutaka: 0, hirano: 0, watabe: 0,
        confidence: 0,      // 自分への自信
        gingkoCounter: 60   // 11月から減っていく
      },
      routeLock: null     // 確定したルート（最終盤で使用）
    };
  }

  /* ----- ノード実行 ----- */
  function loadScene(sceneId) {
    const sc = SCENARIO[sceneId];
    if (!sc) {
      console.error("Scene not found:", sceneId);
      return;
    }
    currentScene = sc;
    currentIdx = 0;
    state.sceneId = sceneId;
    state.idx = 0;
    if (!replayMode) SaveManager.save(state);
    deduplicateChara();   // シーン開始時に立ち絵スロットの整合性を取る
    applyEnvironment(sc);
    runNode();
  }

  // 同じキャラが複数のスロットに居る不整合を解消する
  function deduplicateChara() {
    const slots = document.querySelectorAll(".chara-slot");
    const seen = new Set();
    slots.forEach(s => {
      const c = s.dataset.chara;
      if (!c) return;
      if (seen.has(c)) {
        // 既出 → このスロットを消す
        s.classList.remove("show", "dim");
        s.style.backgroundImage = "";
        delete s.dataset.chara;
      } else {
        seen.add(c);
      }
    });
  }

  function applyEnvironment(sc) {
    if (sc.bg)    setBackground(sc.bg);
    if (sc.date)  showDate(sc.date);
  }

  function runNode() {
    const nodes = currentScene.nodes;
    if (currentIdx >= nodes.length) {
      // シーン終了。nextSceneへ
      if (currentScene.next) {
        loadScene(currentScene.next);
      } else {
        // エンディングか中断
        console.log("Scene ended with no next:", currentScene.id);
      }
      return;
    }
    const node = nodes[currentIdx];
    state.idx = currentIdx;

    // ノード単位の cond（false ならスキップ）
    if (node.cond && !evalCond(node.cond)) {
      advance();
      return;
    }

    if (node.type === "text" || !node.type) {
      showText(node);
    } else if (node.type === "choice") {
      showChoices(node);
    } else if (node.type === "bg") {
      setBackground(node.bg);
      advance();
    } else if (node.type === "cg") {
      setCG(node.cg);
      advance();
    } else if (node.type === "chara") {
      setChara(node.pos, node.chara, node.expr);
      advance();
    } else if (node.type === "clearChara") {
      clearChara(node.pos);
      advance();
    } else if (node.type === "date") {
      showDate(node.date);
      advance();
    } else if (node.type === "jump") {
      loadScene(node.to);
    } else if (node.type === "effect") {
      applyEffect(node);
      advance();
    } else if (node.type === "bgm") {
      playBgm(node.track, node.fade);
      advance();
    } else if (node.type === "ending") {
      triggerEnding(node);
    } else if (node.type === "condJump") {
      const to = evalCondJump(node);
      loadScene(to);
    } else {
      advance();
    }
  }

  function advance() {
    currentIdx++;
    if (!replayMode) SaveManager.save(state);
    runNode();
  }

  /* ----- テキスト表示 ----- */
  function showText(node) {
    const speaker = node.speaker || "";
    const text = node.text || "";

    // 話者ごとの立ち絵強調
    if (speaker) focusChara(speaker);

    document.getElementById("speaker").textContent = speaker;
    const textEl = document.getElementById("text");
    textEl.textContent = "";
    document.getElementById("next-indicator").classList.remove("show");

    // ログに追加
    pushLog(speaker, text);

    if (skipMode) {
      textEl.textContent = text;
      isTyping = false;
      setTimeout(() => advance(), 20);
      return;
    }

    // タイプライター効果
    isTyping = true;
    let i = 0;
    clearInterval(typewriterTimer);
    typewriterTimer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(typewriterTimer);
        isTyping = false;
        document.getElementById("next-indicator").classList.add("show");
        if (autoMode) {
          setTimeout(() => { if (autoMode && !isTyping) advance(); }, 1400);
        }
        return;
      }
      textEl.textContent += text[i];
      i++;
    }, 28);
  }

  function completeText() {
    if (isTyping) {
      clearInterval(typewriterTimer);
      document.getElementById("text").textContent =
        (currentScene.nodes[currentIdx].text || "");
      isTyping = false;
      document.getElementById("next-indicator").classList.add("show");
    } else {
      advance();
    }
  }

  /* ----- 選択肢 ----- */
  function showChoices(node) {
    const choiceEl = document.getElementById("choices");
    choiceEl.innerHTML = "";
    node.choices.forEach(ch => {
      // 表示条件
      if (ch.cond && !evalCond(ch.cond)) return;
      const b = document.createElement("button");
      b.className = "choice-btn";
      b.textContent = ch.label;
      b.addEventListener("click", () => pickChoice(ch));
      choiceEl.appendChild(b);
    });
    choiceEl.classList.add("show");
    document.getElementById("next-indicator").classList.remove("show");
  }

  function pickChoice(ch) {
    document.getElementById("choices").classList.remove("show");
    // 効果適用
    if (ch.effects) ch.effects.forEach(applyEffectObj);
    if (ch.goto) {
      loadScene(ch.goto);
    } else {
      advance();
    }
  }

  /* ----- フラグ・パラメータ操作 ----- */
  function applyEffect(node) {
    if (node.effects) node.effects.forEach(applyEffectObj);
  }
  function applyEffectObj(eff) {
    if (eff.flag !== undefined) {
      state.flags[eff.flag] = (eff.value !== undefined) ? eff.value : true;
    }
    if (eff.param !== undefined) {
      state.params[eff.param] = (state.params[eff.param] || 0) + (eff.delta || 0);
    }
    if (eff.route !== undefined) {
      state.routeLock = eff.route;
    }
  }

  function evalCond(cond) {
    // { flag: "x", eq: true } / { param: "mio", gte: 5 } / { route: "mio" }
    if (cond.flag !== undefined) {
      const v = state.flags[cond.flag];
      if (cond.eq !== undefined) return v === cond.eq;
      return !!v;
    }
    if (cond.param !== undefined) {
      const v = state.params[cond.param] || 0;
      if (cond.gte !== undefined) return v >= cond.gte;
      if (cond.lte !== undefined) return v <= cond.lte;
      if (cond.eq  !== undefined) return v === cond.eq;
    }
    if (cond.route !== undefined) {
      return state.routeLock === cond.route;
    }
    if (cond.and) return cond.and.every(evalCond);
    if (cond.or)  return cond.or.some(evalCond);
    return true;
  }

  function evalCondJump(node) {
    // node.branches: [{ cond, to }, ...], node.default
    for (const b of node.branches) {
      if (evalCond(b.cond)) return b.to;
    }
    return node.default;
  }

  /* ----- 画像パス自動解決 -----
     優先順位：
       1) ASSETS manifest に明示指定があればそれを使う
       2) デフォルトパス（assets/{category}/{key}.png）を試す
       3) どちらも無ければプレースホルダー
  */
  const imageCache = {}; // key -> "path" or "MISSING"

  function probeImage(pathCandidates, onResult) {
    // 配列を順に試し、最初に読めたものを採用
    let idx = 0;
    const tryNext = () => {
      if (idx >= pathCandidates.length) { onResult(null); return; }
      const p = pathCandidates[idx++];
      const img = new Image();
      img.onload = () => onResult(p);
      img.onerror = tryNext;
      img.src = p;
    };
    tryNext();
  }

  function resolveImage(category, key, applyFn) {
    const cacheKey = category + ":" + key;
    if (imageCache[cacheKey] === "MISSING") { applyFn(null); return; }
    if (imageCache[cacheKey]) { applyFn(imageCache[cacheKey]); return; }

    // manifest 参照
    const manifestMap = ASSETS[category] || {};
    if (manifestMap[key]) {
      imageCache[cacheKey] = manifestMap[key];
      applyFn(manifestMap[key]);
      return;
    }
    // 自動検出：png → jpg の順で試す
    const candidates = [
      `assets/${category}/${key}.png`,
      `assets/${category}/${key}.jpg`,
      `assets/${category}/${key}.jpeg`,
      `assets/${category}/${key}.webp`
    ];
    probeImage(candidates, (found) => {
      imageCache[cacheKey] = found || "MISSING";
      applyFn(found);
    });
  }

  // 背景キー→BGMトラックの自動マッピング
  // 入手済み5曲: daily / night / emotional / concert / christmas
  // 未入手のカテゴリは雰囲気の近い曲で代替
  const BG_TO_BGM = {
    room_day: "daily", room_eve: "daily", dolce: "daily",
    room_night: "night", apartment: "night", street_night: "night",
    corridor: "daily",
    waiwai: "daily",                 // 居酒屋 → daily（賑やかさは無いが日常の延長）
    hall_stage: "concert",
    ginkgo_green: "daily",
    ginkgo_yellow: "concert",        // 銀杏色づく → 秋の歩み
    ginkgo_bare: "emotional",        // 葉が散った後の銀杏 → 切ない
    riverbank_night: "night",        // 河原の星空 → 星降る夜に
    church_court: "daily",
    church_mass: "christmas",
    illumination: "christmas",
    camp: "daily",                   // 合宿 → 夏色のキャンパス
    matsumoto: "daily",
    kyoto_night: "night",
    festival: "festival",            // 学園祭 → ヴァルス
    hospital: "emotional"
  };

  /* ----- 背景・CG・立ち絵 ----- */
  function setBackground(bgKey) {
    const el = document.getElementById("bg-layer");
    document.getElementById("cg-layer").classList.remove("show");
    // 先にプレースホルダーを出す（読み込み前のちらつき防止）
    el.style.backgroundImage = placeholderBG(bgKey);
    resolveImage("backgrounds", bgKey, (path) => {
      if (path) el.style.backgroundImage = `url('${path}')`;
    });
    // 背景に応じたBGMを自動切替（明示的な bgm ノードがあればそちらが優先される）
    const bgm = BG_TO_BGM[bgKey];
    if (bgm && bgm !== bgmCurrent) playBgm(bgm);
  }

  function setCG(cgKey) {
    const el = document.getElementById("cg-layer");
    resolveImage("cgs", cgKey, (path) => {
      if (path) {
        el.style.backgroundImage = `url('${path}')`;
        el.classList.add("show");
        SaveManager.markGalleryItem("cg:" + cgKey);
      } else {
        el.classList.remove("show");
      }
    });
  }

  function setChara(pos, charaKey, expr) {
    const key = `${charaKey}_${expr || "default"}`;
    const slots = document.querySelectorAll(".chara-slot");
    // 同じキャラが他の位置にいれば、まず消す（重複表示防止）
    slots.forEach(s => {
      if (s.dataset.pos !== pos && s.dataset.chara === charaKey) {
        s.classList.remove("show", "dim");
        s.style.backgroundImage = "";
        delete s.dataset.chara;
      }
    });
    slots.forEach(s => {
      if (s.dataset.pos === pos) {
        // 先にプレースホルダー
        s.style.backgroundImage = placeholderChara(charaKey);
        s.classList.add("show");
        s.dataset.chara = charaKey;
        resolveImage("characters", key, (path) => {
          if (path) s.style.backgroundImage = `url('${path}')`;
          else {
            // 表情ファイルが無ければ、default にフォールバック
            const defaultKey = `${charaKey}_default`;
            if (key !== defaultKey) {
              resolveImage("characters", defaultKey, (p2) => {
                if (p2) s.style.backgroundImage = `url('${p2}')`;
              });
            }
          }
        });
      }
    });
  }

  function clearChara(pos) {
    if (pos === "all") {
      document.querySelectorAll(".chara-slot").forEach(s => {
        s.classList.remove("show");
        s.style.backgroundImage = "";
      });
    } else {
      const s = document.querySelector(`.chara-slot[data-pos="${pos}"]`);
      if (s) { s.classList.remove("show"); s.style.backgroundImage = ""; }
    }
  }

  // 話者名（日本語）→ 立ち絵キー（英語）の対応
  const SPEAKER_NAME_MAP = {
    "ふれんち": "furenchi",
    "ふれんち（心の声）": "furenchi",
    "ミオ": "mio",
    "ミオ（メール）": "mio",
    "薫": "kaoru",
    "ヒマリちゃん": "himari",
    "加藤さん": "kato",
    "シェリー": "sherry",
    "ミヤコさん": "miyako",
    "ユタカ": "yutaka",
    "渡部": "watabe",
    "平野": "heino",
    "姫": "hime",
    "長友": "nagatomo",
    "愛ちゃん": "ai",
    "たえやん": "taeyan",
    "まーちゃん": "maachan",
    "中野さん": "nakano",
    "中野さん（メール）": "nakano",
    "ヨコノ": "yokono",
    "東山": "higashiyama"
  };

  function focusChara(speakerName) {
    const key = SPEAKER_NAME_MAP[speakerName];
    document.querySelectorAll(".chara-slot").forEach(s => {
      if (!s.dataset.chara) return;
      // マッピングが無い話者（不明キャラ・ナレーション）の場合は誰も dim にしない
      if (!key) { s.classList.remove("dim"); return; }
      if (s.dataset.chara === key) s.classList.remove("dim");
      else s.classList.add("dim");
    });
  }

  function showDate(txt) {
    const el = document.getElementById("date-banner");
    el.textContent = txt;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 3000);
  }

  /* ----- プレースホルダー生成 ----- */
  function placeholderBG(key) {
    const colorMap = {
      room_day: "linear-gradient(180deg,#e8dfc7,#cbb88f)",
      room_eve: "linear-gradient(180deg,#e6c891,#a87b5d)",
      room_night: "linear-gradient(180deg,#2d2a3e,#1a1625)",
      dolce: "linear-gradient(180deg,#e4c598,#8a5a3e)",
      waiwai: "linear-gradient(180deg,#c9a55a,#6b3e2a)",
      ginkgo_green: "linear-gradient(180deg,#cfe0b6,#8fb074)",
      ginkgo_yellow: "linear-gradient(180deg,#f0d67c,#c9a55a)",
      ginkgo_bare: "linear-gradient(180deg,#d6ceb9,#8a7a65)",
      street_night: "linear-gradient(180deg,#2a2430,#0f0d15)",
      hall_stage: "linear-gradient(180deg,#3a2f28,#6a4e3a)",
      apartment: "linear-gradient(180deg,#d6cab0,#a08c6b)",
      camp: "linear-gradient(180deg,#a5bcd4,#4a6b8a)",
      riverbank_night: "linear-gradient(180deg,#1a1f3a,#3a2f4a)",
      church_court: "linear-gradient(180deg,#e0d2b0,#b09070)",
      kyoto_night: "linear-gradient(180deg,#2a1f2a,#55344a)",
      matsumoto: "linear-gradient(180deg,#d8cab0,#8a7560)",
      festival: "linear-gradient(180deg,#f0d67c,#c97845)",
      hospital: "linear-gradient(180deg,#e8eaf0,#b0b8c8)",
      church_mass: "linear-gradient(180deg,#3a2a1a,#8a6a3a)",
      illumination: "linear-gradient(180deg,#1a1a2a,#5a4a8a)",
      corridor: "linear-gradient(180deg,#d0cab8,#8a8272)"
    };
    const grad = colorMap[key] || "linear-gradient(180deg,#f6f1e4,#cbb88f)";
    return `${grad},url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence baseFrequency='0.02' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>")`;
  }

  function placeholderChara(name) {
    // 名前ごとの色パレット
    const colorMap = {
      mio: "#e8a5b8", kaoru: "#8a9ec9", himari: "#c9b8e0", kato: "#e0d5c2",
      sherry: "#5a5a78", yutaka: "#6b7c8a", watabe: "#d8a070",
      miyako: "#f0c8a0", nakano: "#a8a8b8", maachan: "#e8c8a0", ai: "#d89090",
      hime: "#c8a0b8", heino: "#8a6a5a", nagatomo: "#c8b088",
      furenchi: "#8a8070", default: "#b0a890"
    };
    const color = colorMap[name] || colorMap.default;
    return `linear-gradient(180deg,${color} 0%, ${color} 60%, transparent 100%)`;
  }

  /* ----- BGM ----- */
  let bgmAudio = null;
  let bgmCurrent = null;
  let bgmVolume = 0.5;
  const BGM_FADE_MS = 1200;

  function playBgm(track, fadeMs) {
    if (track === bgmCurrent) return;
    const fade = (fadeMs !== undefined) ? fadeMs : BGM_FADE_MS;

    // 現在のBGMをフェードアウト
    if (bgmAudio) {
      const old = bgmAudio;
      const startVol = old.volume;
      const startTime = performance.now();
      const fadeOut = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / fade, 1);
        old.volume = startVol * (1 - progress);
        if (progress < 1) requestAnimationFrame(fadeOut);
        else { old.pause(); old.src = ""; }
      };
      requestAnimationFrame(fadeOut);
    }
    bgmAudio = null;
    bgmCurrent = track;

    if (!track) return;

    // 新規BGMをフェードイン
    const candidates = [
      `assets/bgm/${track}.mp3`,
      `assets/bgm/${track}.ogg`,
      `assets/bgm/${track}.m4a`,
      `assets/bgm/${track}.wav`
    ];
    let idx = 0;
    const tryPlay = () => {
      if (idx >= candidates.length) return;
      const src = candidates[idx++];
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0;
      audio.addEventListener("canplaythrough", () => {
        if (bgmCurrent !== track) { audio.pause(); return; }
        bgmAudio = audio;
        audio.play().catch(e => console.warn("BGM play blocked:", e));
        const startTime = performance.now();
        const fadeIn = () => {
          if (bgmAudio !== audio) return;
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / fade, 1);
          audio.volume = bgmVolume * progress;
          if (progress < 1) requestAnimationFrame(fadeIn);
        };
        requestAnimationFrame(fadeIn);
      }, { once: true });
      audio.addEventListener("error", () => { tryPlay(); }, { once: true });
    };
    tryPlay();
  }

  function setBgmVolume(v) {
    bgmVolume = Math.max(0, Math.min(1, v));
    if (bgmAudio) bgmAudio.volume = bgmVolume;
  }

  /* ----- ログ ----- */
  function pushLog(speaker, text) {
    log.push({ speaker, text, sceneId: state ? state.sceneId : "" });
    if (log.length > LOG_LIMIT) log.shift();
    // 新しいログが入ったら、レビュー位置を解除（最新に追従）
    reviewIdx = null;
  }
  function getLog() { return log.slice(); }
  function clearLog() { log = []; reviewIdx = null; }

  /* ----- 巻き戻し（レビュー）モード ----- */
  let reviewIdx = null;   // null = 通常モード、数値 = レビュー中の log インデックス

  function isReviewing() { return reviewIdx !== null; }

  function reviewBack() {
    if (log.length === 0) return false;
    if (reviewIdx === null) {
      // 通常モード → レビュー開始（現在の表示=最新の1個前 を見せる）
      reviewIdx = Math.max(0, log.length - 2);
    } else {
      reviewIdx = Math.max(0, reviewIdx - 1);
    }
    showReviewText();
    updateReviewIndicator();
    return true;
  }

  function reviewExit() {
    if (reviewIdx === null) return;
    reviewIdx = null;
    // 現在表示中のテキストを再描画
    const last = log[log.length - 1];
    if (last) {
      document.getElementById("speaker").textContent = last.speaker || "";
      document.getElementById("text").textContent = last.text || "";
    }
    document.getElementById("next-indicator").classList.add("show");
    updateReviewIndicator();
  }

  function showReviewText() {
    const e = log[reviewIdx];
    if (!e) return;
    document.getElementById("speaker").textContent = e.speaker || "";
    document.getElementById("text").textContent = e.text || "";
    document.getElementById("next-indicator").classList.remove("show");
    // タイプライターも止める
    if (typewriterTimer) clearInterval(typewriterTimer);
    isTyping = false;
  }

  function updateReviewIndicator() {
    const el = document.getElementById("review-indicator");
    if (!el) return;
    if (reviewIdx === null) {
      el.classList.add("hidden");
    } else {
      el.classList.remove("hidden");
      const pos = document.getElementById("review-pos");
      if (pos) pos.textContent = `(${reviewIdx + 1}/${log.length})`;
    }
  }

  /* ----- エンディング ----- */
  function triggerEnding(node) {
    if (!replayMode) SaveManager.markEnding(node.endingId);
    document.getElementById("game-screen").classList.remove("active");
    document.getElementById("ending-screen").classList.add("active");
    document.getElementById("ending-title").textContent = node.title || "";
    document.getElementById("ending-text").textContent = node.text || "";
  }

  /* ----- モード ----- */
  function toggleAuto() {
    autoMode = !autoMode;
    document.getElementById("btn-auto").classList.toggle("active", autoMode);
    if (autoMode && !isTyping) advance();
  }
  function toggleSkip() {
    skipMode = !skipMode;
    document.getElementById("btn-skip").classList.toggle("active", skipMode);
    if (skipMode && !isTyping) advance();
  }
  function stopSkip() { skipMode = false; document.getElementById("btn-skip").classList.remove("active"); }

  /* ----- 外部API ----- */
  let replayMode = false;

  // セッション開始時に必ず呼ぶリセット処理
  function resetSessionState() {
    autoMode = false;
    skipMode = false;
    reviewIdx = null;
    document.getElementById("btn-auto").classList.remove("active");
    document.getElementById("btn-skip").classList.remove("active");
    const reviewEl = document.getElementById("review-indicator");
    if (reviewEl) reviewEl.classList.add("hidden");
  }

  function start(fromSave) {
    replayMode = false;
    if (fromSave) {
      state = SaveManager.load() || initialState();
    } else {
      state = initialState();
      SaveManager.clear();
    }
    clearLog();
    clearChara("all");        // 前のセッションの立ち絵を一掃
    resetSessionState();      // SKIP/AUTO/巻き戻しをリセット
    document.getElementById("title-screen").classList.remove("active");
    document.getElementById("game-screen").classList.add("active");
    loadScene(state.sceneId);
    if (state.idx) currentIdx = state.idx;
  }

  // ギャラリーからエンディング再生（state はリセット、save には影響しない）
  function startReplay(sceneId) {
    replayMode = true;
    state = initialState();
    state.sceneId = sceneId;
    clearLog();
    clearChara("all");        // 立ち絵を一掃してから再生開始
    resetSessionState();      // SKIP/AUTO/巻き戻しをリセット
    document.getElementById("title-screen").classList.remove("active");
    document.getElementById("ending-screen").classList.remove("active");
    document.getElementById("game-screen").classList.add("active");
    loadScene(sceneId);
  }

  function stopBgm() { playBgm(null); }
  function isReplay() { return replayMode; }

  function onTextboxClick() {
    if (document.getElementById("choices").classList.contains("show")) return;
    if (reviewIdx !== null) {
      // レビュー中にクリック → 通常モードに戻す
      reviewExit();
      return;
    }
    stopSkip();
    completeText();
  }

  function getState() { return state; }

  return { start, startReplay, onTextboxClick, toggleAuto, toggleSkip, getLog, getState, playBgm, stopBgm, setBgmVolume, reviewBack, reviewExit, isReviewing, isReplay };
})();
