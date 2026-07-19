/* =============================================================
   BUILDER GOLD — APP
   Profiles, progress tracking, module accordions, quiz engine,
   and the Team Progress board.

   STORAGE: all state lives in the `store` object below, backed by
   localStorage (per browser/device). To make progress sync across
   devices for a whole team, replace the store's four methods with
   API calls to a backend (Firebase/Supabase/your own) — nothing
   else in the app needs to change.
   ============================================================= */

/* ---------- store ---------- */
const store = {
  read(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  write(key, value) { localStorage.setItem(key, JSON.stringify(value)); },

  getUsers() { return this.read("bg_users", []); },
  saveUsers(users) { this.write("bg_users", users); },

  getProgress(userId) { return this.read("bg_progress_" + userId, { lessons: {}, quizScores: {} }); },
  saveProgress(userId, progress) { this.write("bg_progress_" + userId, progress); },
};

/* ---------- app state ---------- */
const state = {
  currentUserId: store.read("bg_currentUser", null),
  view: "dashboard",          // dashboard | lesson | team
  openModules: {},            // moduleId -> bool
  activeLesson: null,         // { moduleId, lessonId }
  quizAttempt: null,          // { answers: [], submitted: false, score: null }
};

function currentUser() {
  return store.getUsers().find(u => u.id === state.currentUserId) || null;
}

/* ---------- progress helpers ---------- */
function isLessonComplete(userId, lessonId) {
  return !!store.getProgress(userId).lessons[lessonId];
}
function moduleProgress(userId, mod) {
  const done = mod.lessons.filter(l => isLessonComplete(userId, l.id)).length;
  return { done, total: mod.lessons.length, complete: done === mod.lessons.length };
}
function programProgress(userId) {
  let done = 0, total = 0;
  CONTENT.modules.forEach(m => { const p = moduleProgress(userId, m); done += p.done; total += p.total; });
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}
function markLessonComplete(lessonId, quizScore) {
  const progress = store.getProgress(state.currentUserId);
  progress.lessons[lessonId] = { completedAt: new Date().toISOString() };
  if (quizScore != null) progress.quizScores[lessonId] = quizScore;
  store.saveProgress(state.currentUserId, progress);
}
function recordQuizScore(lessonId, score) {
  const progress = store.getProgress(state.currentUserId);
  progress.quizScores[lessonId] = score;
  store.saveProgress(state.currentUserId, progress);
}

/* ---------- utils ---------- */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function findLesson(moduleId, lessonId) {
  const mod = CONTENT.modules.find(m => m.id === moduleId);
  return { mod, lesson: mod ? mod.lessons.find(l => l.id === lessonId) : null };
}
function flatLessons() {
  const out = [];
  CONTENT.modules.forEach(m => m.lessons.forEach(l => out.push({ moduleId: m.id, lessonId: l.id })));
  return out;
}

/* ---------- icons ---------- */
const ICONS = {
  video: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M22 8l-6 4 6 4V8z"/></svg>',
  text: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  quiz: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
};
function typeLabel(l) {
  if (l.type === "video") return "VIDEO";
  if (l.type === "quiz") return "TEST";
  return "LESSON";
}

/* ---------- render root ---------- */
function render() {
  const app = document.getElementById("app");
  if (!currentUser()) { app.innerHTML = renderLogin(); return; }
  if (state.view === "lesson" && state.activeLesson) { app.innerHTML = renderLesson(); return; }
  if (state.view === "team") { app.innerHTML = renderTeam(); return; }
  app.innerHTML = renderDashboard();
}

/* ---------- login / profiles ---------- */
function renderLogin() {
  const users = store.getUsers();
  return `
  <div class="login-wrap">
    <div class="login-card">
      <div class="brand-mark">BG</div>
      <h1>${esc(CONTENT.programTitle)}</h1>
      <p class="subtitle">${esc(CONTENT.programSubtitle)}</p>

      ${users.length ? `
      <h2>Choose your profile</h2>
      <div class="profile-list">
        ${users.map(u => {
          const p = programProgress(u.id);
          return `<button class="profile-btn" onclick="selectUser('${u.id}')">
            <span class="avatar">${esc(u.name.slice(0, 1).toUpperCase())}</span>
            <span class="profile-info">
              <span class="profile-name">${esc(u.name)}</span>
              <span class="profile-meta">${u.role === "coach" ? "Coach" : "Goalie"} · ${p.percent}% complete</span>
            </span>
          </button>`;
        }).join("")}
      </div>
      <div class="divider"><span>or</span></div>` : ""}

      <h2>Create a profile</h2>
      <form onsubmit="createUser(event)">
        <input type="text" id="new-name" placeholder="Your name" required maxlength="40">
        <div class="role-row">
          <label><input type="radio" name="role" value="goalie" checked> Goalie</label>
          <label><input type="radio" name="role" value="coach"> Coach</label>
        </div>
        <button type="submit" class="btn primary full">Start Training</button>
      </form>
    </div>
  </div>`;
}

function selectUser(id) {
  state.currentUserId = id;
  store.write("bg_currentUser", id);
  state.view = "dashboard";
  render();
}

function createUser(e) {
  e.preventDefault();
  const name = document.getElementById("new-name").value.trim();
  if (!name) return;
  const role = document.querySelector('input[name="role"]:checked').value;
  const users = store.getUsers();
  const id = "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  users.push({ id, name, role, createdAt: new Date().toISOString() });
  store.saveUsers(users);
  selectUser(id);
}

function logout() {
  state.currentUserId = null;
  store.write("bg_currentUser", null);
  render();
}

/* ---------- header ---------- */
function renderHeader() {
  const user = currentUser();
  const p = programProgress(user.id);
  return `
  <header class="topbar">
    <div class="topbar-inner">
      <div class="topbar-left" onclick="goDashboard()">
        <div class="brand-mark small">BG</div>
        <div>
          <div class="topbar-title">${esc(CONTENT.programTitle)}</div>
          <div class="topbar-sub">${esc(CONTENT.programSubtitle)}</div>
        </div>
      </div>
      <nav class="topbar-nav">
        <button class="nav-btn ${state.view === "dashboard" ? "active" : ""}" onclick="goDashboard()">My Training</button>
        <button class="nav-btn ${state.view === "team" ? "active" : ""}" onclick="goTeam()">Team Progress</button>
      </nav>
      <div class="topbar-right">
        <div class="user-chip">
          <span class="avatar tiny">${esc(user.name.slice(0, 1).toUpperCase())}</span>
          <span>${esc(user.name)}</span>
          <button class="link-btn" onclick="logout()">Switch</button>
        </div>
      </div>
    </div>
    <div class="program-progress">
      <div class="program-progress-bar"><div style="width:${p.percent}%"></div></div>
      <span class="program-progress-label"><strong>${p.percent}%</strong> complete · ${p.done}/${p.total} lessons</span>
    </div>
  </header>`;
}

function goDashboard() { state.view = "dashboard"; state.activeLesson = null; render(); }
function goTeam() { state.view = "team"; state.activeLesson = null; render(); }

/* ---------- dashboard ---------- */
function renderDashboard() {
  const user = currentUser();
  let currentBlock = -1;
  const rows = CONTENT.modules.map(mod => {
    let blockHeader = "";
    if (mod.block !== currentBlock) {
      currentBlock = mod.block;
      blockHeader = `<div class="block-header">${esc(CONTENT.blocks[mod.block])}</div>`;
    }
    return blockHeader + renderModuleRow(user.id, mod);
  }).join("");

  return renderHeader() + `<main class="page"><div class="module-list">${rows}</div></main>`;
}

function renderModuleRow(userId, mod) {
  const p = moduleProgress(userId, mod);
  const open = !!state.openModules[mod.id];
  return `
  <section class="module ${open ? "open" : ""}">
    <button class="module-head" onclick="toggleModule('${mod.id}')" aria-expanded="${open}">
      <span class="status-circle ${p.complete ? "done" : p.done > 0 ? "partial" : ""}">
        ${p.complete ? ICONS.check : ""}
      </span>
      <span class="module-title">${esc(mod.title)}</span>
      <span class="module-count">${p.done}/${p.total}</span>
      <span class="chev">${ICONS.chevron}</span>
    </button>
    <div class="module-body">
      ${mod.objective ? `<p class="module-objective"><strong>Objective:</strong> ${esc(mod.objective)}${mod.time ? ` <span class="module-time">· ${esc(mod.time)}</span>` : ""}</p>` : ""}
      <ul class="lesson-list">
        ${mod.lessons.map(l => renderLessonRow(userId, mod.id, l)).join("")}
      </ul>
    </div>
  </section>`;
}

function renderLessonRow(userId, moduleId, lesson) {
  const done = isLessonComplete(userId, lesson.id);
  const score = store.getProgress(userId).quizScores[lesson.id];
  return `
  <li>
    <button class="lesson-row" onclick="openLesson('${moduleId}','${lesson.id}')">
      <span class="lesson-check ${done ? "done" : ""}">${done ? ICONS.check : ""}</span>
      <span class="lesson-icon">${ICONS[lesson.type]}</span>
      <span class="lesson-info">
        <span class="lesson-title">${esc(lesson.title)}</span>
        <span class="lesson-meta">${typeLabel(lesson)}${lesson.duration ? " · " + esc(lesson.duration) : ""}${score != null ? ` · Best score: ${score}%` : ""}</span>
      </span>
    </button>
  </li>`;
}

function toggleModule(id) { state.openModules[id] = !state.openModules[id]; render(); }

/* ---------- lesson view ---------- */
function openLesson(moduleId, lessonId) {
  state.view = "lesson";
  state.activeLesson = { moduleId, lessonId };
  state.quizAttempt = null;
  render();
  window.scrollTo(0, 0);
}

function renderLesson() {
  const { mod, lesson } = findLesson(state.activeLesson.moduleId, state.activeLesson.lessonId);
  if (!lesson) { state.view = "dashboard"; return renderDashboard(); }
  const done = isLessonComplete(state.currentUserId, lesson.id);

  const all = flatLessons();
  const idx = all.findIndex(x => x.lessonId === lesson.id);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  let body = "";
  if (lesson.type === "video") body = renderVideoLesson(lesson, done);
  else if (lesson.type === "text") body = renderTextLesson(lesson, done);
  else if (lesson.type === "quiz") body = renderQuizLesson(lesson);

  return renderHeader() + `
  <main class="page">
    <div class="lesson-page">
      <button class="link-btn back" onclick="goDashboard()">&larr; Back to modules</button>
      <div class="lesson-header">
        <span class="lesson-tag">${esc(mod.title)} · ${typeLabel(lesson)}</span>
        <h1>${esc(lesson.title)}</h1>
      </div>
      ${body}
      <div class="lesson-nav">
        ${prev ? `<button class="btn" onclick="openLesson('${prev.moduleId}','${prev.lessonId}')">&larr; Previous</button>` : "<span></span>"}
        ${next ? `<button class="btn" onclick="openLesson('${next.moduleId}','${next.lessonId}')">Next &rarr;</button>` : "<span></span>"}
      </div>
    </div>
  </main>`;
}

function renderVideoLesson(lesson, done) {
  const player = lesson.videoUrl
    ? `<div class="video-frame"><iframe src="${esc(lesson.videoUrl)}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
    : `<div class="video-placeholder">
         <div class="video-placeholder-icon">${ICONS.video}</div>
         <div class="video-placeholder-label">${esc(lesson.videoLabel || "INSERT VIDEO")}</div>
         <div class="video-placeholder-hint">Video coming soon — add the embed URL in <code>content.js</code></div>
       </div>`;
  return player + completeButton(lesson, done, "Mark as Watched");
}

function renderTextLesson(lesson, done) {
  return `<article class="lesson-content">${lesson.html}</article>` + completeButton(lesson, done, "Mark as Complete");
}

function completeButton(lesson, done, label) {
  return done
    ? `<div class="complete-banner">${ICONS.check.replace('#fff', '#fff')} <span>Completed</span></div>`
    : `<button class="btn primary big" onclick="completeLesson('${lesson.id}')">${label}</button>`;
}

function completeLesson(lessonId) {
  markLessonComplete(lessonId);
  render();
}

/* ---------- quiz engine ---------- */
function renderQuizLesson(lesson) {
  const progress = store.getProgress(state.currentUserId);
  const done = isLessonComplete(state.currentUserId, lesson.id);
  const best = progress.quizScores[lesson.id];
  const attempt = state.quizAttempt;

  if (done && !attempt) {
    return `
      <div class="complete-banner">${ICONS.check} <span>Test passed — best score ${best}%</span></div>
      <button class="btn" onclick="startQuiz()">Retake Test</button>`;
  }

  if (!attempt) {
    return `
      <div class="quiz-intro">
        <p>${lesson.questions.length} questions. You need <strong>${QUIZ_PASS_PERCENT}%</strong> to pass and complete this module's test.</p>
        ${best != null ? `<p class="quiz-best">Previous best: ${best}%</p>` : ""}
        <button class="btn primary big" onclick="startQuiz()">Start Test</button>
      </div>`;
  }

  const submitted = attempt.submitted;
  return `
  <div class="quiz">
    ${lesson.questions.map((q, qi) => `
      <fieldset class="quiz-q ${submitted ? (attempt.answers[qi] === q.answer ? "correct" : "incorrect") : ""}">
        <legend>${qi + 1}. ${esc(q.q)}</legend>
        ${q.options.map((opt, oi) => `
          <label class="quiz-opt ${submitted && oi === q.answer ? "is-answer" : ""}">
            <input type="radio" name="q${qi}" value="${oi}"
              ${attempt.answers[qi] === oi ? "checked" : ""}
              ${submitted ? "disabled" : ""}
              onchange="answerQuiz(${qi}, ${oi})">
            <span>${esc(opt)}</span>
          </label>`).join("")}
        ${submitted && attempt.answers[qi] !== q.answer ? `<div class="quiz-feedback">Correct answer: ${esc(q.options[q.answer])}</div>` : ""}
      </fieldset>`).join("")}

    ${submitted ? `
      <div class="quiz-result ${attempt.score >= QUIZ_PASS_PERCENT ? "pass" : "fail"}">
        <strong>${attempt.score}%</strong> — ${attempt.score >= QUIZ_PASS_PERCENT ? "Passed! Module test complete." : `Not yet. You need ${QUIZ_PASS_PERCENT}% — review the module and try again.`}
      </div>
      ${attempt.score >= QUIZ_PASS_PERCENT
        ? `<button class="btn primary big" onclick="goDashboard()">Back to Modules</button>`
        : `<button class="btn primary big" onclick="startQuiz()">Try Again</button>`}
    ` : `
      <button class="btn primary big" onclick="submitQuiz()">Submit Answers</button>
    `}
  </div>`;
}

function startQuiz() {
  const { lesson } = findLesson(state.activeLesson.moduleId, state.activeLesson.lessonId);
  state.quizAttempt = { answers: new Array(lesson.questions.length).fill(null), submitted: false, score: null };
  render();
  window.scrollTo(0, 0);
}

function answerQuiz(qi, oi) {
  if (state.quizAttempt && !state.quizAttempt.submitted) state.quizAttempt.answers[qi] = oi;
}

function submitQuiz() {
  const attempt = state.quizAttempt;
  const { lesson } = findLesson(state.activeLesson.moduleId, state.activeLesson.lessonId);
  if (attempt.answers.some(a => a === null)) {
    alert("Answer every question before submitting.");
    return;
  }
  const correct = lesson.questions.filter((q, i) => attempt.answers[i] === q.answer).length;
  attempt.score = Math.round((correct / lesson.questions.length) * 100);
  attempt.submitted = true;

  const prevBest = store.getProgress(state.currentUserId).quizScores[lesson.id] || 0;
  if (attempt.score >= QUIZ_PASS_PERCENT) {
    markLessonComplete(lesson.id, Math.max(attempt.score, prevBest));
  } else if (attempt.score > prevBest) {
    recordQuizScore(lesson.id, attempt.score);
  }
  render();
  window.scrollTo(0, 0);
}

/* ---------- team progress board ---------- */
function renderTeam() {
  const users = store.getUsers().filter(u => u.role !== "coach");
  const coachView = currentUser().role === "coach";

  const table = users.length ? `
  <div class="table-scroll">
    <table class="team-table">
      <thead>
        <tr>
          <th class="sticky-col">Goalie</th>
          ${CONTENT.modules.map(m => `<th title="${esc(m.title)}">${esc(shortTitle(m.title))}</th>`).join("")}
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(u => {
          const overall = programProgress(u.id);
          return `<tr>
            <td class="sticky-col"><span class="avatar tiny">${esc(u.name.slice(0, 1).toUpperCase())}</span> ${esc(u.name)}</td>
            ${CONTENT.modules.map(m => {
              const p = moduleProgress(u.id, m);
              const quiz = m.lessons.find(l => l.type === "quiz");
              const quizScore = quiz ? store.getProgress(u.id).quizScores[quiz.id] : null;
              const quizPassed = quiz ? isLessonComplete(u.id, quiz.id) : false;
              return `<td class="cell ${p.complete ? "cell-done" : p.done > 0 ? "cell-partial" : ""}">
                ${p.complete
                  ? `<span class="status-circle done small">${ICONS.check}</span>`
                  : `<span class="cell-frac">${p.done}/${p.total}</span>`}
                ${quiz ? `<span class="cell-quiz ${quizPassed ? "passed" : ""}" title="Module test">${quizPassed ? "Test ✓" + (quizScore != null ? " " + quizScore + "%" : "") : quizScore != null ? "Test " + quizScore + "%" : "Test —"}</span>` : ""}
              </td>`;
            }).join("")}
            <td class="cell"><strong>${overall.percent}%</strong></td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>
  </div>` : `<p class="empty-note">No goalie profiles yet. Goalies appear here as soon as they create a profile and start training.</p>`;

  return renderHeader() + `
  <main class="page">
    <div class="team-page">
      <h1>Team Progress</h1>
      <p class="team-sub">${coachView
        ? "Every goalie in the program. A checkmark means the module is fully complete — all videos watched, lessons read, and the module test passed."
        : "See how the whole group is progressing. Checkmarks = fully completed modules (videos watched + test passed)."}</p>
      ${table}
      <p class="storage-note">Progress is stored on this device/browser. To sync a whole team across devices, connect a backend — see the note at the top of <code>app.js</code>.</p>
    </div>
  </main>`;
}

function shortTitle(t) {
  const map = {
    "Welcome to Builder Gold": "Welcome",
    "Stance & Ready Position": "Stance",
    "Crease Movement & Skating": "Movement",
    "Angles & Depth Management": "Angles",
    "Rebound Control": "Rebounds",
    "Reading the Release": "Reads",
    "Puck Tracking": "Tracking",
    "Post Play": "Post Play",
    "Puck Handling": "Handling",
  };
  return map[t] || t;
}

/* ---------- boot ---------- */
render();
