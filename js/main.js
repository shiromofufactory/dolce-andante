/* ==========================================================
   main.js  ― UI wiring
   ========================================================== */

// グローバルエラー表示（デバッグ用）
window.addEventListener("error", (ev) => {
  const msg = ev.message + "\n" + (ev.filename||"") + ":" + (ev.lineno||"");
  console.error(msg);
  showDebug("JS ERROR: " + msg);
});
window.addEventListener("unhandledrejection", (ev) => {
  showDebug("Promise error: " + (ev.reason && ev.reason.message || ev.reason));
});
function showDebug(msg) {
  let el = document.getElementById("_debug_overlay");
  if (!el) {
    el = document.createElement("div");
    el.id = "_debug_overlay";
    el.style.cssText = "position:fixed;top:0;left:0;right:0;background:#b00;color:#fff;padding:10px;font:12px monospace;z-index:9999;white-space:pre-wrap;max-height:40vh;overflow:auto;";
    document.body.appendChild(el);
  }
  el.textContent = (el.textContent ? el.textContent + "\n" : "") + msg;
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    initUI();
    loadTitleImage();
    // タイトル画面の音楽を再生（ユーザー操作後でないと音は出ない可能性あり）
    document.body.addEventListener("click", () => {
      if (document.getElementById("title-screen").classList.contains("active")) {
        Engine.playBgm("title");
      }
      // フルスクリーン・横画面ロック（ユーザー操作後でないと呼べない）
      tryLockLandscape();
    }, { once: true });
    registerServiceWorker();
  }
  catch (e) { showDebug("Init error: " + e.message + "\n" + e.stack); }
});

// Service Worker 登録（PWAオフライン対応）
function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  // file:// で開いた時は登録しない
  if (location.protocol === "file:") return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

// 画面を横画面にロック（Fullscreen + Screen Orientation API）
async function tryLockLandscape() {
  try {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      await document.documentElement.requestFullscreen().catch(() => {});
    }
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock("landscape").catch(() => {});
    }
  } catch (e) { /* ignore */ }
}

// タイトル画像があれば適用する（画像にロゴが入っているのでテキストタイトルを隠す）
function loadTitleImage() {
  const candidates = ["assets/cg/title.jpg","assets/cg/title.png","assets/cg/title.jpeg","assets/cg/title.webp"];
  let i = 0;
  const tryNext = () => {
    if (i >= candidates.length) return;
    const p = candidates[i++];
    const img = new Image();
    img.onload = () => {
      const el = document.querySelector(".title-bg");
      if (el) el.style.backgroundImage = `url('${p}')`;
      document.getElementById("title-screen").classList.add("has-image");
    };
    img.onerror = tryNext;
    img.src = p;
  };
  tryNext();
}

function initUI() {

  // タイトル「つづきから」の活性状態
  const btnContinue = document.getElementById("btn-continue");
  if (!SaveManager.hasSave()) {
    btnContinue.disabled = true;
    btnContinue.style.opacity = "0.4";
    btnContinue.style.cursor = "not-allowed";
  }

  document.getElementById("btn-start").addEventListener("click", () => {
    if (SaveManager.hasSave()) {
      if (!confirm("セーブデータを上書きして、最初からはじめますか？")) return;
    }
    Engine.start(false);
  });

  document.getElementById("btn-continue").addEventListener("click", () => {
    if (!SaveManager.hasSave()) return;
    Engine.start(true);
  });

  document.getElementById("btn-gallery").addEventListener("click", openGallery);

  document.getElementById("btn-credit").addEventListener("click", showCredit);

  // ゲーム中テキスト送り（画面のどこをクリックしてもOK）
  // ただしツールバー・選択肢・オーバーレイの上では進めない
  document.getElementById("game-screen").addEventListener("click", (e) => {
    const t = e.target;
    if (t.closest(".toolbar")) return;
    if (t.closest(".choices.show")) return;
    if (t.closest(".overlay:not(.hidden)")) return;
    Engine.onTextboxClick();
  });

  // キーボード
  document.addEventListener("keydown", (e) => {
    const gameScreen = document.getElementById("game-screen");
    if (!gameScreen.classList.contains("active")) return;
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      Engine.onTextboxClick();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      Engine.reviewBack();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      Engine.reviewExit();
    } else if (e.key === "Escape") {
      toggleMenu();
    }
  });

  // ツールバー
  document.getElementById("btn-auto").addEventListener("click", Engine.toggleAuto);
  document.getElementById("btn-skip").addEventListener("click", Engine.toggleSkip);
  document.getElementById("btn-log").addEventListener("click", openLog);
  document.getElementById("btn-menu").addEventListener("click", toggleMenu);
  document.getElementById("btn-back").addEventListener("click", (e) => {
    e.stopPropagation();
    Engine.reviewBack();
  });

  // メニュー
  document.querySelectorAll("#menu-overlay .menu-btn").forEach(b => {
    b.addEventListener("click", () => {
      const act = b.dataset.act;
      document.getElementById("menu-overlay").classList.add("hidden");
      if (act === "resume") { /* 何もしない */ }
      if (act === "title")  backToTitle();
      if (act === "gallery") openGallery();
    });
  });

  // ログ閉じる
  document.getElementById("btn-log-close").addEventListener("click", () => {
    document.getElementById("log-overlay").classList.add("hidden");
  });

  // ギャラリー閉じる
  document.getElementById("btn-gallery-close").addEventListener("click", () => {
    document.getElementById("gallery-overlay").classList.add("hidden");
  });

  // エンディング → タイトル
  document.getElementById("btn-ending-back").addEventListener("click", () => {
    document.getElementById("ending-screen").classList.remove("active");
    document.getElementById("title-screen").classList.add("active");
    Engine.playBgm("title");   // タイトル曲に切り替え
    // つづきから復活
    if (SaveManager.hasSave()) {
      btnContinue.disabled = false;
      btnContinue.style.opacity = "1";
      btnContinue.style.cursor = "pointer";
    }
  });

}

function toggleMenu() {
  document.getElementById("menu-overlay").classList.toggle("hidden");
}

function backToTitle() {
  document.getElementById("game-screen").classList.remove("active");
  document.getElementById("title-screen").classList.add("active");
}

function openLog() {
  const logs = Engine.getLog();
  const c = document.getElementById("log-content");
  c.innerHTML = "";
  logs.forEach(e => {
    const div = document.createElement("div");
    div.className = "log-entry";
    const sceneTag = e.sceneId
      ? `<span style="font-size:0.7rem;color:#8a6a8c;font-family:monospace;margin-left:8px;">[${escapeHtml(e.sceneId)}]</span>`
      : "";
    div.innerHTML = `<div class="log-speaker">${escapeHtml(e.speaker)}${sceneTag}</div>
                     <div class="log-text">${escapeHtml(e.text)}</div>`;
    c.appendChild(div);
  });
  document.getElementById("log-overlay").classList.remove("hidden");
  c.scrollTop = c.scrollHeight;
}

// エンディングID → 再生開始シーン
const ENDING_REPLAY_START = {
  "END-MIO":     { scene: "5-mio-08",     title: "Dolce andante", route: "ミオ" },
  "END-KAORU":   { scene: "5-kaoru-06",   title: "あなたの隣の風景", route: "薫" },
  "END-HIMARI":  { scene: "5-himari-06",  title: "不器用な二人", route: "ヒマリちゃん" },
  "END-KATO":    { scene: "5-kato-05",    title: "あなたを、抱きしめる", route: "加藤さん" },
  "END-SHERRY":  { scene: "5-sherry-04",  title: "あなたの音に、私は", route: "シェリー" },
  "END-MIYAKO-A":{ scene: "5-miyako-06A", title: "友を失った夜", route: "ミヤコさん" },
  "END-MIYAKO-B":{ scene: "5-miyako-06B", title: "守った線", route: "ミヤコさん（友情）" },
  "END-NAKANO":  { scene: "5-nakano-04",  title: "名前を、呼ぶ", route: "中野さん" },
  "END-MAACHAN": { scene: "5-maachan-04", title: "足元に散った葉", route: "まーちゃん" },
  "END-AI":      { scene: "5-ai-03",      title: "温度のない約束", route: "愛ちゃん" },
  "END-HIME":    { scene: "5-hime-03",    title: "少数派の、友達", route: "姫ちゃん" },
  "END-TAEYAN":  { scene: "5-taeyan-03",  title: "いつもの集合場所", route: "たえやん" },
  "END-ALONE":   { scene: "5-alone-03",   title: "それでも、俺の銀杏並木", route: "孤独" },
  "BE-02":       { scene: "BE-02",        title: "長友に出し抜かれて", route: "BAD END" }
};

function openGallery() {
  const endings = SaveManager.getEndings();
  const c = document.getElementById("gallery-content");
  c.innerHTML = "";
  if (endings.length === 0) {
    c.innerHTML = '<p class="gallery-hint">エンディングを見ると、ここから再生できるようになります。</p>';
    document.getElementById("gallery-overlay").classList.remove("hidden");
    return;
  }
  const headerDiv = document.createElement("div");
  headerDiv.style.gridColumn = "1 / -1";
  headerDiv.innerHTML = `<h3 style="margin:12px 0;font-size:1rem;letter-spacing:0.1em;">
    到達エンディング：${endings.length} 種類　<span style="font-size:0.8rem;color:#6b5c4e;font-weight:normal;">クリックで再生</span></h3>`;
  c.appendChild(headerDiv);

  endings.forEach(id => {
    const info = ENDING_REPLAY_START[id];
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.color = "#fff";
    div.style.background = id.startsWith("BE")
      ? "linear-gradient(135deg,#5a4a4a,#3a2a2a)"
      : "linear-gradient(135deg,#8a6a8c,#c9a55a)";
    div.style.padding = "10px";
    div.style.cursor = "pointer";
    div.style.textAlign = "center";
    div.style.fontSize = "0.85rem";
    div.style.lineHeight = "1.3";
    if (info) {
      div.innerHTML = `<div style="font-size:0.7rem;opacity:0.7;">${escapeHtml(info.route)}</div>
                       <div style="font-weight:500;margin-top:4px;">${escapeHtml(info.title)}</div>
                       <div style="font-size:0.65rem;opacity:0.5;margin-top:4px;font-family:monospace;">${escapeHtml(id)}</div>`;
      div.title = `クリックして「${info.title}」を再生`;
      div.addEventListener("click", () => replayEnding(id));
    } else {
      div.textContent = id;
    }
    c.appendChild(div);
  });
  document.getElementById("gallery-overlay").classList.remove("hidden");
}

function replayEnding(endingId) {
  const info = ENDING_REPLAY_START[endingId];
  if (!info) return;
  document.getElementById("gallery-overlay").classList.add("hidden");
  Engine.startReplay(info.scene);
}

function showCredit() {
  const html = `
    <div style="line-height:1.9; font-size:0.95rem;">
      <h3 style="margin:6px 0 12px; letter-spacing:0.15em;">Dolce andante</h3>
      <p style="color:#6b5c4e; margin-bottom:18px;">© 2026</p>

      <p><strong>企画・シナリオ</strong><br>あなた</p>
      <p style="margin-top:10px;"><strong>実装協力</strong><br>Claude (Anthropic)</p>

      <p style="margin-top:14px;"><strong>BGM</strong><br>
      <a href="https://amachamusic.chagasi.com/" target="_blank" rel="noopener">甘茶の音楽工房</a><br>
      ・小さな足跡（title）<br>
      ・春への憧れ（emotional）<br>
      ・夏色のキャンパス（daily）<br>
      ・星降る夜に（night）<br>
      ・秋の歩み（concert）<br>
      ・ヴァルス（festival）<br>
      ・天使の夢（christmas）
      </p>

      <p style="margin-top:14px;"><strong>イラスト</strong><br>
      Nano Banana 2 (Gemini 2.5 Flash Image)
      </p>

      <p style="color:#6b5c4e; margin-top:18px; font-size:0.85rem;">
      この作品はフィクションです。<br>
      実在の人物・団体・出来事とは関係ありません。
      </p>
    </div>`;
  // 既存のメニュー overlay を流用（簡易表示）
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.style.zIndex = "200";
  overlay.innerHTML = `<div class="menu-inner"><h2>クレジット</h2>${html}<button class="menu-btn" id="btn-credit-close">閉じる</button></div>`;
  document.body.appendChild(overlay);
  overlay.querySelector("#btn-credit-close").addEventListener("click", () => overlay.remove());
}

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
