/* =====================================================================
 * app.js  -  화면을 그리고 동작시키는 로직 (보통은 수정할 필요 없음)
 * ---------------------------------------------------------------------
 * 하는 일:
 *   1) 해시(#) 기반 라우팅: 목록 / 상세 / 퀴즈 / 소개 화면 전환
 *   2) 언어 토글(KO/ZH) - 선택은 브라우저에 저장됨
 *   3) 중국어 발음 재생 (sound 폴더의 Edge TTS MP3 우선, 없으면 Web Speech API 사용)
 *   4) 지도 임베드 (Google 지도 iframe, 키 불필요)
 *   5) 퀴즈 (data.js 의 표현들로 자동 생성)
 * ===================================================================== */

/* ----------------------- 언어(다국어) 설정 ----------------------- */
const I18N = {
  ko: {
    "nav.home": "유적지", "nav.quiz": "퀴즈", "nav.about": "소개",
    listTitle: "중국 역사 유적지",
    heroSub: "중국의 역사 유적지를 한국어와 중국어로 함께 배워요",
    statsText: (s, r) => `유적지 ${s}곳 · 지역 ${r}곳`,
    filterAll: "전체",
    favTitle: "즐겨찾기",
    fav: "즐겨찾기",
    descHeading: "설명", exprHeading: "주요 표현", dialogueHeading: "중국어 대화",
    mapHeading: "위치", speak: "발음 듣기",
    quizTitle: "표현 퀴즈", quizStart: "퀴즈 시작", quizQuestion: "이 뜻에 맞는 중국어는?",
    quizNext: "다음", quizResult: "결과", quizRetry: "다시 풀기",
    quizScore: (c, t) => `${t}문제 중 ${c}문제 정답!`,
    quizEmpty: "퀴즈를 만들려면 표현이 2개 이상 필요해요. data.js 에 표현을 더 채워 주세요.",
    aboutTitle: "앱 소개",
    back: "뒤로"
  },
  zh: {
    "nav.home": "景点", "nav.quiz": "测验", "nav.about": "关于",
    listTitle: "中国历史景点",
    heroSub: "用韩语和中文一起学习中国历史景点",
    statsText: (s, r) => `景点 ${s}个 · 地区 ${r}个`,
    filterAll: "全部",
    favTitle: "收藏",
    fav: "收藏",
    descHeading: "介绍", exprHeading: "常用表达", dialogueHeading: "中文对话",
    mapHeading: "位置", speak: "播放发音",
    quizTitle: "表达测验", quizStart: "开始测验", quizQuestion: "下面哪个是正确的中文?",
    quizNext: "下一题", quizResult: "结果", quizRetry: "再来一次",
    quizScore: (c, t) => `${t}题中答对了${c}题!`,
    quizEmpty: "至少需要2个表达才能生成测验，请在 data.js 中补充更多表达。",
    aboutTitle: "关于本应用",
    back: "返回"
  }
};

let lang = localStorage.getItem("lang") || "ko";

function t(key) {
  const v = I18N[lang][key];
  return typeof v === "function" ? v : (v ?? key);
}

/* ----------------------- 유틸 ----------------------- */
// HTML 특수문자 이스케이프(안전하게 텍스트 표시)
function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function findSite(id) {
  return SITES.find((s) => s.id === id);
}
// 배경 이미지 스타일(이미지가 없으면 기본 그라디언트 유지)
function bgStyle(image) {
  return image ? ` style="background-image:url('${esc(image)}')"` : "";
}

/* ----------------------- 즐겨찾기 (localStorage) ----------------------- */
function getFavs() {
  try { return JSON.parse(localStorage.getItem("favs") || "[]"); }
  catch { return []; }
}
function isFav(id) {
  return getFavs().includes(id);
}
function toggleFav(id) {
  const favs = getFavs();
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1); else favs.push(id);
  localStorage.setItem("favs", JSON.stringify(favs));
}

/* ----------------------- 홈 지역 필터 상태 ----------------------- */
let homeFilter = "all"; // "all" | 지역의 한국어 이름(고정 키)

// 카드 하나를 그리는 공통 함수 (목록/즐겨찾기 섹션에서 사용)
function cardHtml(s) {
  const emoji = s.emoji ? `<span class="card__emoji">${esc(s.emoji)}</span>` : "";
  const star = isFav(s.id) ? `<span class="card__fav">★</span>` : "";
  return `
    <a class="card" href="#/site/${esc(s.id)}">
      <div class="card__thumb"${bgStyle(s.image)}>
        ${emoji}
        <span class="card__badge">${esc(s.region?.[lang] || "")}</span>
        ${star}
      </div>
      <div class="card__body">
        <div class="card__name-zh">${esc(s.name?.zh || "")}</div>
        <div class="card__pinyin">${esc(s.name?.pinyin || "")}</div>
        <div class="card__name-ko">${esc(s.name?.ko || "")}</div>
      </div>
    </a>`;
}

function dialogueSections(dialogue) {
  if (!Array.isArray(dialogue) || !dialogue.length) return [];
  if (Array.isArray(dialogue[0]?.lines)) return dialogue;
  return [{ level: { ko: "대화", zh: "对话" }, lines: dialogue }];
}

function speakerKey(speaker) {
  return (speaker || "A").toUpperCase() === "B" ? "b" : "a";
}

function dialogueAudioPath(siteId, sectionIndex, lineIndex, speaker) {
  return `sound/${siteId}/dialogue-${sectionIndex + 1}-${lineIndex + 1}-${speakerKey(speaker)}.mp3`;
}

function expressionAudioPath(siteId, index) {
  return `sound/${siteId}/expr-${index + 1}.mp3`;
}

function dialogueLineHtml(d, audioSrc) {
  const side = (d.speaker || "A").toUpperCase() === "B" ? "b" : "a";
  return `
    <div class="dialogue-line dialogue-line--${side}">
      <div class="bubble">
        <div class="bubble__zh">${esc(d.speaker)}: ${esc(d.zh)}</div>
        <div class="bubble__pinyin">${esc(d.pinyin)}</div>
        <div class="bubble__ko">${esc(d.ko)}</div>
        <button class="speak-btn" data-speak="${esc(d.zh)}" data-audio="${esc(audioSrc)}" aria-label="${esc(t("speak"))}">🔊</button>
      </div>
    </div>`;
}

/* ----------------------- 발음 재생 (Edge TTS MP3 + Web Speech API fallback) ----------------------- */
let currentAudio = null;

function setSpeaking(btn, isSpeaking) {
  if (btn) btn.classList.toggle("is-speaking", isSpeaking);
}

function speakWithBrowser(text, btn) {
  if (!("speechSynthesis" in window)) {
    alert("이 브라우저는 발음 재생을 지원하지 않아요. 병음을 참고해 주세요.");
    return;
  }
  window.speechSynthesis.cancel(); // 이전 재생 중지
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.9;
  // 중국어 음성이 설치되어 있으면 우선 사용
  const zhVoice = window.speechSynthesis.getVoices().find((v) => /zh|Chinese/i.test(v.lang + v.name));
  if (zhVoice) u.voice = zhVoice;
  setSpeaking(btn, true);
  u.onend = () => setSpeaking(btn, false);
  u.onerror = () => setSpeaking(btn, false);
  window.speechSynthesis.speak(u);
}

function speak(text, btn, audioSrc) {
  window.speechSynthesis?.cancel?.();
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  if (!audioSrc) {
    speakWithBrowser(text, btn);
    return;
  }

  const audio = new Audio(audioSrc);
  currentAudio = audio;
  setSpeaking(btn, true);
  audio.onended = () => {
    if (currentAudio === audio) currentAudio = null;
    setSpeaking(btn, false);
  };
  audio.onerror = () => {
    if (currentAudio === audio) currentAudio = null;
    setSpeaking(btn, false);
    speakWithBrowser(text, btn);
  };
  audio.play().catch(() => {
    if (currentAudio === audio) currentAudio = null;
    setSpeaking(btn, false);
    speakWithBrowser(text, btn);
  });
}

/* ----------------------- 화면: 유적지 목록 ----------------------- */
function renderHome() {
  // 지역 목록(고정 키는 한국어 이름 사용, 표시는 현재 언어)
  const regionKeys = [];
  const regionLabel = {};
  SITES.forEach((s) => {
    const key = s.region?.ko || "기타";
    if (!regionKeys.includes(key)) {
      regionKeys.push(key);
      regionLabel[key] = s.region?.[lang] || key;
    }
  });

  // 인트로 히어로
  let html = `
    <section class="hero">
      <div class="hero__emoji">🏮</div>
      <div class="hero__text">
        <div class="hero__title">${esc(t("listTitle"))}</div>
        <div class="hero__sub">${esc(t("heroSub"))}</div>
        <div class="hero__stats">${esc(t("statsText")(SITES.length, regionKeys.length))}</div>
      </div>
    </section>`;

  // 즐겨찾기 섹션 (있을 때만)
  const favSites = SITES.filter((s) => isFav(s.id));
  if (favSites.length) {
    html += `<h2 class="section-title">★ ${esc(t("favTitle"))}</h2>
      <div class="card-list">${favSites.map(cardHtml).join("")}</div>`;
  }

  // 지역 필터 칩
  html += `<div class="chips">
    <button class="chip${homeFilter === "all" ? " is-active" : ""}" data-filter="all">${esc(t("filterAll"))}</button>
    ${regionKeys.map((k) => `<button class="chip${homeFilter === k ? " is-active" : ""}" data-filter="${esc(k)}">${esc(regionLabel[k])}</button>`).join("")}
  </div>`;

  // 지역별 목록 (필터 적용)
  const shownKeys = homeFilter === "all" ? regionKeys : regionKeys.filter((k) => k === homeFilter);
  shownKeys.forEach((key) => {
    const sites = SITES.filter((s) => (s.region?.ko || "기타") === key);
    html += `<div class="region-group">
      <div class="region-group__name">📍 ${esc(regionLabel[key])}</div>
      <div class="card-list">${sites.map(cardHtml).join("")}</div>
    </div>`;
  });

  return html;
}

/* ----------------------- 화면: 유적지 상세 ----------------------- */
function renderDetail(id) {
  const s = findSite(id);
  if (!s) return `<div class="empty">유적지를 찾을 수 없어요.</div>`;

  const exprHtml = (s.expressions || []).map((e, index) => `
    <div class="expr">
      <div class="expr__text">
        <div class="expr__zh">${esc(e.zh)}</div>
        <div class="expr__pinyin">${esc(e.pinyin)}</div>
        <div class="expr__ko">${esc(e.ko)}</div>
      </div>
      <button class="speak-btn" data-speak="${esc(e.zh)}" data-audio="${esc(expressionAudioPath(s.id, index))}" aria-label="${esc(t("speak"))}">🔊</button>
    </div>`).join("");

  const dialogueHtml = dialogueSections(s.dialogue).map((section, index) => {
    const level = section.level?.[lang] || section.level?.ko || `${lang === "zh" ? "对话" : "대화"} ${index + 1}`;
    const linesHtml = (section.lines || [])
      .map((line, lineIndex) => dialogueLineHtml(line, dialogueAudioPath(s.id, index, lineIndex, line.speaker)))
      .join("");
    const imageHtml = document.body.classList.contains("has-dialogue-images") && typeof dialogueImageHtml === "function"
      ? dialogueImageHtml(s.name?.ko || s.name?.zh || "", level)
      : "";
    return `
      <div class="dialogue-section">
        <div class="dialogue-section__title">${esc(level)}</div>
        ${linesHtml}
        ${imageHtml}
      </div>`;
  }).join("");

  const mapSrc = s.mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&output=embed`
    : "";

  const heroEmoji = s.emoji ? `<span class="detail__emoji">${esc(s.emoji)}</span>` : "";
  const faved = isFav(s.id);

  return `
    <div class="detail__hero"${bgStyle(s.image)}>${heroEmoji}</div>
    <div class="detail__title">
      <div>
        <div class="detail__title-zh">${esc(s.name?.zh || "")}</div>
        <div class="detail__title-ko">${esc(s.name?.ko || "")}</div>
      </div>
      <button class="fav-btn${faved ? " is-fav" : ""}" data-fav="${esc(s.id)}" aria-label="${esc(t("fav"))}">${faved ? "★" : "☆"}</button>
    </div>
    <div class="detail__pinyin">${esc(s.name?.pinyin || "")}</div>

    <div class="block">
      <div class="block__heading">📖 ${esc(t("descHeading"))}</div>
      <div class="block__text">${esc(s.desc?.[lang] || s.desc?.ko || "")}</div>
    </div>

    ${exprHtml ? `<div class="block">
      <div class="block__heading">💬 ${esc(t("exprHeading"))}</div>
      ${exprHtml}
    </div>` : ""}

    ${dialogueHtml ? `<div class="block">
      <div class="block__heading">🗣️ ${esc(t("dialogueHeading"))}</div>
      ${dialogueHtml}
    </div>` : ""}

    ${mapSrc ? `<div class="block">
      <div class="block__heading">🗺️ ${esc(t("mapHeading"))}</div>
      <iframe class="map-frame" loading="lazy" src="${mapSrc}" title="map"></iframe>
    </div>` : ""}
  `;
}

/* ----------------------- 화면: 퀴즈 ----------------------- */
// data.js 의 모든 표현을 모아 4지선다 퀴즈를 만든다.
let quizState = null;

function buildQuizPool() {
  const pool = [];
  SITES.forEach((s) => (s.expressions || []).forEach((e) => {
    if (e.zh && e.ko && !/^\(/.test(e.zh)) pool.push(e); // 빈 양식(placeholder) 제외
  }));
  return pool;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  const pool = buildQuizPool();
  const questions = shuffle(pool).slice(0, Math.min(5, pool.length));
  quizState = { questions, index: 0, score: 0, answered: false, pool };
  location.hash = "#/quiz";
  render();
}

function renderQuiz() {
  const pool = buildQuizPool();
  if (pool.length < 2) {
    return `<h2 class="section-title">${esc(t("quizTitle"))}</h2>
      <div class="block empty">${esc(t("quizEmpty"))}</div>`;
  }
  // 시작 화면
  if (!quizState) {
    return `<h2 class="section-title">${esc(t("quizTitle"))}</h2>
      <div class="block quiz-card">
        <p>${esc(t("quizQuestion"))}</p>
        <p style="margin:14px 0;color:var(--muted)">총 ${Math.min(5, pool.length)}문제</p>
        <button class="btn" id="quizStartBtn">${esc(t("quizStart"))}</button>
      </div>`;
  }
  // 결과 화면
  if (quizState.index >= quizState.questions.length) {
    return `<h2 class="section-title">${esc(t("quizResult"))}</h2>
      <div class="block quiz-card">
        <div class="quiz__score">${esc(t("quizScore")(quizState.score, quizState.questions.length))}</div>
        <button class="btn btn--gold" id="quizRetryBtn">${esc(t("quizRetry"))}</button>
      </div>`;
  }
  // 문제 화면
  const q = quizState.questions[quizState.index];
  // 오답 보기 3개 뽑기
  const distractors = shuffle(quizState.pool.filter((e) => e.zh !== q.zh)).slice(0, 3);
  const options = shuffle([q, ...distractors]);
  quizState._options = options; // 채점용 저장

  const optionsHtml = options.map((o, i) => `
    <button class="quiz__option" data-opt="${i}" data-correct="${o.zh === q.zh}">${esc(o.zh)}</button>
  `).join("");

  return `<h2 class="section-title">${esc(t("quizTitle"))}</h2>
    <div class="block quiz-card">
      <div class="quiz__progress">${quizState.index + 1} / ${quizState.questions.length}</div>
      <p>${esc(t("quizQuestion"))}</p>
      <div class="quiz__q">${esc(q.ko)}</div>
      <div class="quiz__q-pinyin">(${esc(q.pinyin)})</div>
      <div class="quiz__options">${optionsHtml}</div>
    </div>`;
}

/* ----------------------- 화면: 소개 ----------------------- */
function renderAbout() {
  const ko = `
    <h2 class="section-title">${esc(t("aboutTitle"))}</h2>
    <div class="block about">
      <p><b>중국어 역사문화 여행 가이드</b>는 중국의 주요 역사 유적지를 한국어와 중국어로 함께 배우며,
      여행에 필요한 표현과 발음까지 익힐 수 있는 학습용 앱입니다.</p>
      <p>가천대학교 중국어문학과 학생들이 2인 1조로 조사한 내용을 담아 만들었습니다.</p>
      <p><b>주요 기능</b>: 지역별 유적지 소개, 한/중 이중언어 설명, 표현·발음 듣기, 지도, 즐겨찾기, 표현 퀴즈</p>
      <p><b>향후 개선 방향</b>: AI 음성 중국어 회화, 학습 진도·평가, 사용자가 직접 추가하는 유적지 등을 계획하고 있습니다.</p>
      <div class="note">발음 듣기는 브라우저(크롬 권장)의 음성 기능을 사용합니다.
      기기에 중국어 음성이 없으면 소리가 나지 않을 수 있어요. 이때는 병음을 참고하세요.</div>
    </div>`;
  const zh = `
    <h2 class="section-title">${esc(t("aboutTitle"))}</h2>
    <div class="block about">
      <p><b>中国历史文化旅行指南</b>是一款学习类应用，用韩语和中文一起介绍中国主要历史景点，
      并帮助学习旅行所需的表达和发音。</p>
      <p>本应用由嘉泉大学中文系学生两人一组调查整理内容制作而成。</p>
      <p><b>主要功能</b>：按地区介绍景点、韩中双语说明、表达与发音、地图、收藏、表达测验。</p>
      <p><b>未来改进方向</b>：计划加入 AI 语音中文会话、学习进度与评价、用户自行添加景点等功能。</p>
      <div class="note">发音功能使用浏览器（推荐 Chrome）的语音合成。若设备没有中文语音，可能无法发声，请参考拼音。</div>
    </div>`;
  return lang === "zh" ? zh : ko;
}

/* ----------------------- 라우터 ----------------------- */
function currentRoute() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\//, "").split("/"); // "" | "site/great-wall" | "quiz" | "about"
  if (parts[0] === "site" && parts[1]) return { name: "detail", id: parts[1] };
  if (parts[0] === "quiz") return { name: "quiz" };
  if (parts[0] === "about") return { name: "about" };
  return { name: "home" };
}

function render() {
  const route = currentRoute();
  const app = document.getElementById("app");
  const backBtn = document.getElementById("backBtn");

  let html = "";
  if (route.name === "detail") html = renderDetail(route.id);
  else if (route.name === "quiz") html = renderQuiz();
  else if (route.name === "about") html = renderAbout();
  else html = renderHome();

  app.innerHTML = html;
  window.scrollTo(0, 0);

  // 뒤로가기 버튼은 상세 화면에서만 표시
  backBtn.hidden = route.name !== "detail";

  updateBottomNav(route.name);
  applyStaticI18n();
}

/* ----------------------- 하단 네비 / 정적 텍스트 갱신 ----------------------- */
function updateBottomNav(routeName) {
  document.querySelectorAll(".bottomnav__item").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.nav === routeName || (routeName === "detail" && el.dataset.nav === "home"));
  });
}
function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelector(".lang-toggle__label").textContent = lang === "ko" ? "中" : "KO";
}

/* ----------------------- 이벤트 연결 ----------------------- */
// 클릭 이벤트 위임(발음 버튼, 퀴즈 버튼 등)
document.addEventListener("click", (e) => {
  // 발음 버튼
  const speakBtn = e.target.closest("[data-speak]");
  if (speakBtn) { speak(speakBtn.getAttribute("data-speak"), speakBtn, speakBtn.getAttribute("data-audio")); return; }

  // 즐겨찾기 토글(상세 별 버튼)
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn) { toggleFav(favBtn.getAttribute("data-fav")); render(); return; }

  // 홈 지역 필터 칩
  const chip = e.target.closest(".chip");
  if (chip) { homeFilter = chip.getAttribute("data-filter"); render(); return; }

  // 퀴즈 시작 / 다시풀기
  if (e.target.id === "quizStartBtn" || e.target.id === "quizRetryBtn") { startQuiz(); return; }

  // 퀴즈 보기 선택
  const opt = e.target.closest(".quiz__option");
  if (opt && quizState && !quizState.answered) {
    quizState.answered = true;
    const isCorrect = opt.dataset.correct === "true";
    if (isCorrect) quizState.score++;
    // 정답/오답 표시
    document.querySelectorAll(".quiz__option").forEach((b) => {
      if (b.dataset.correct === "true") b.classList.add("correct");
      else if (b === opt) b.classList.add("wrong");
    });
    // 잠시 후 다음 문제로
    setTimeout(() => {
      quizState.index++;
      quizState.answered = false;
      render();
    }, 900);
  }
});

// 언어 토글
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "ko" ? "zh" : "ko";
  localStorage.setItem("lang", lang);
  render();
});

// 뒤로가기
document.getElementById("backBtn").addEventListener("click", () => history.back());

// 해시 변경 시 다시 그리기
window.addEventListener("hashchange", render);

// Web Speech 음성 목록이 늦게 로드되는 경우 대비
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

// 최초 실행
render();
