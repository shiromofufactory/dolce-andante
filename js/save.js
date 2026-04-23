/* ==========================================================
   save.js  ― LocalStorage wrapper
   ========================================================== */
const SaveManager = (() => {
  const KEY = "dolce_andante_save_v1";
  const GALLERY_KEY = "dolce_andante_gallery_v1";
  const ENDING_KEY = "dolce_andante_endings_v1";

  // LocalStorage が使えない環境（サンドボックスiframe等）のためのメモリフォールバック
  let memStore = {};
  let useMemory = false;
  try {
    const t = "__t__";
    localStorage.setItem(t, t);
    localStorage.removeItem(t);
  } catch (e) {
    useMemory = true;
    console.warn("LocalStorage unavailable; using in-memory fallback.");
  }

  function _set(k, v) {
    if (useMemory) { memStore[k] = v; return; }
    try { localStorage.setItem(k, v); } catch { memStore[k] = v; useMemory = true; }
  }
  function _get(k) {
    if (useMemory) return memStore[k] !== undefined ? memStore[k] : null;
    try { return localStorage.getItem(k); } catch { return null; }
  }
  function _remove(k) {
    if (useMemory) { delete memStore[k]; return; }
    try { localStorage.removeItem(k); } catch {}
  }

  function save(state) {
    try { _set(KEY, JSON.stringify(state)); return true; }
    catch (e) { console.error("Save failed:", e); return false; }
  }
  function load() {
    try { const raw = _get(KEY); return raw ? JSON.parse(raw) : null; }
    catch (e) { console.error("Load failed:", e); return null; }
  }
  function hasSave() { return _get(KEY) !== null; }
  function clear()   { _remove(KEY); }

  function markGalleryItem(id) {
    const s = getGallery();
    if (!s.includes(id)) { s.push(id); _set(GALLERY_KEY, JSON.stringify(s)); }
  }
  function getGallery() {
    try { const raw = _get(GALLERY_KEY); return raw ? JSON.parse(raw) : []; }
    catch { return []; }
  }
  function markEnding(endingId) {
    const s = getEndings();
    if (!s.includes(endingId)) { s.push(endingId); _set(ENDING_KEY, JSON.stringify(s)); }
  }
  function getEndings() {
    try { const raw = _get(ENDING_KEY); return raw ? JSON.parse(raw) : []; }
    catch { return []; }
  }

  return { save, load, hasSave, clear, markGalleryItem, getGallery, markEnding, getEndings };
})();
