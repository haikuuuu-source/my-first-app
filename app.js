/* ============ ICONS (inline SVG strings) ============ */
const ICONS = {
  flame:`<path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2 1 4-1 6-3 6a3 3 0 0 1-3-3c0-2 1.5-3 1-4-2 1-4 3-4 6a5 5 0 0 0 10 0C18 7 14 5 12 2Z" fill="currentColor"/>`,
  bolt:`<path d="M13 2 3 14h6l-1 8 11-13h-6l1-7Z" fill="currentColor"/>`,
  heart:`<path d="M12 21s-7-4.4-9.5-9C1 8.5 2.4 5 6 5c2 0 3.5 1.2 4 2.4C10.5 6.2 12 5 14 5c3.6 0 5 3.5 3.5 7-2.5 4.6-9.5 9-9.5 9Z" fill="currentColor"/>`,
  heartOutline:`<path d="M12 21s-7-4.4-9.5-9C1 8.5 2.4 5 6 5c2 0 3.5 1.2 4 2.4C10.5 6.2 12 5 14 5c3.6 0 5 3.5 3.5 7-2.5 4.6-9.5 9-9.5 9Z" fill="none" stroke="currentColor" stroke-width="1.6"/>`,
  star:`<path d="M12 2.5 15 9l7 .8-5.2 4.8L18.2 21 12 17.3 5.8 21l1.4-6.4L2 9.8 9 9l3-6.5Z" fill="currentColor"/>`,
  gem:`<path d="M6 3h12l3 6-9 12L3 9l3-6Z" fill="currentColor"/>`,
  compass:`<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M15 9l-2 6-4-2 2-6 4 2Z" fill="currentColor"/>`,
  crown:`<path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8Z" fill="currentColor"/>`,
  close:`<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  home:`<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>`,
  profile:`<circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`
};
function icon(name, cls){ return `<svg class="${cls||''}" viewBox="0 0 24 24">${ICONS[name]}</svg>`; }

/* ---------- STARFIELD BACKGROUND ---------- */
function buildStarfield(){
  const field = document.getElementById('starfield');
  if(!field || field.dataset.built) return;
  field.dataset.built = '1';
  let html = '';
  // twinkling dot stars
  for(let i=0;i<70;i++){
    const x = Math.random()*100, y = Math.random()*100;
    const size = (Math.random()*2 + 1).toFixed(1);
    const delay = (Math.random()*3.5).toFixed(2);
    const dur = (2.4 + Math.random()*2.4).toFixed(2);
    html += `<div class="star-pt" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${dur}s;"></div>`;
  }
  // a couple of slow drifting comet streaks for atmosphere
  for(let i=0;i<2;i++){
    const y = 10 + Math.random()*50;
    const delay = (i*4 + Math.random()*3).toFixed(2);
    html += `<div class="comet" style="top:${y}%;animation-delay:${delay}s;"></div>`;
  }
  field.innerHTML = html;
}

/* ---------- COMPANION: astronaut riding a small ship — no facial features (blank visor only) ---------- */
function astronautSVG(state){
  const podFill = state==='struggling' ? '#5A5580' : 'var(--teal-bright)';
  const trimFill = state==='struggling' ? '#3F3B5C' : '#1F9C8A';
  const flameOn = state !== 'struggling';
  const flicker = state === 'thriving' ? 'flame-flicker' : 'flame-idle';
  return `<svg viewBox="0 0 40 40">
    <!-- thruster flame -->
    ${flameOn ? `<g class="${flicker}">
      <path d="M16 30 Q19 38 19 41 Q22 38 24 30 Z" fill="var(--bloom)" opacity="0.9"/>
      <path d="M17.5 30 Q19.5 35 19.5 37 Q21.5 35 22.5 30 Z" fill="var(--star-gold)"/>
    </g>` : ''}
    <!-- ship body -->
    <path d="M9 26 Q6 20 12 12 Q16 6 20 6 Q24 6 28 12 Q34 20 31 26 Q30 29 20 29 Q10 29 9 26Z" fill="${podFill}"/>
    <path d="M9 26 Q6 20 12 12 Q16 6 20 6 Q24 6 28 12 Q34 20 31 26" fill="none" stroke="${trimFill}" stroke-width="1.4"/>
    <!-- fins -->
    <path d="M9 24 L4 27 L9 27Z" fill="${trimFill}"/>
    <path d="M31 24 L36 27 L31 27Z" fill="${trimFill}"/>
    <!-- cockpit: dark glass so the helmet reads clearly against it -->
    <circle cx="20" cy="17" r="9.5" fill="${trimFill}"/>
    <circle cx="20" cy="17" r="8" fill="#0C2430"/>
    <!-- astronaut helmet bust, no facial features: bright suit + blank reflective visor only -->
    <path d="M13.6 24.5 Q20 28.5 26.4 24.5 L26.4 22 Q20 25.5 13.6 22 Z" fill="#EDEAE0"/>
    <circle cx="20" cy="15.8" r="5.6" fill="#EDEAE0"/>
    <circle cx="20" cy="15.8" r="5.6" fill="none" stroke="#B7C9C6" stroke-width="0.6"/>
    <circle cx="20" cy="15.8" r="4.3" fill="url(#visorGrad)"/>
    <ellipse cx="18.2" cy="13.8" rx="1.3" ry="0.8" fill="#EAF7F4" opacity="0.65"/>
  </svg>`;
}
const SVG_DEFS = `<svg width="0" height="0" style="position:absolute;">
  <defs>
    <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#A8EDE0"/>
      <stop offset="55%" stop-color="#1F6E78"/>
      <stop offset="100%" stop-color="#0A2530"/>
    </linearGradient>
  </defs>
</svg>`;
function companionState(){
  if(state.hearts <= 1) return 'struggling';
  if(state.streak >= 3 || (lessonCtx && lessonCtx.mistakes === 0 && lessonCtx.idx > 0)) return 'thriving';
  return 'idle';
}
function companionNote(){
  const s = companionState();
  if(s === 'struggling') return "Fuel's running low tonight — that's okay! Even the brightest ships slow down sometimes. One more try? 💫";
  if(s === 'thriving') return "<b>You're flying right now!</b> Full speed ahead ✨";
  return "Your ship is docked and ready — where should we launch to next?";
}
function renderCompanion(){
  const s = companionState();
  return `<div class="companion-row">
    <div class="companion-box ${s}">${astronautSVG(s)}</div>
    <div class="companion-note">${companionNote()}</div>
  </div>`;
}

function planetBadgeSVG(size){
  // simple ringed-planet badge for completed days — space-themed, replaces the old flower rosette
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40">
    <ellipse cx="20" cy="21" rx="15" ry="4.2" fill="none" stroke="var(--night-1)" stroke-width="2" opacity="0.55" transform="rotate(-14 20 21)"/>
    <circle cx="20" cy="19" r="10" fill="var(--star-gold-soft)"/>
    <circle cx="20" cy="19" r="10" fill="url(#planetShade)"/>
    <ellipse cx="20" cy="19" rx="15" ry="4.2" fill="none" stroke="var(--night-1)" stroke-width="2" transform="rotate(-14 20 19)"/>
  </svg>`;
}
const PLANET_DEFS = `<svg width="0" height="0" style="position:absolute;">
  <defs>
    <radialGradient id="planetShade" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#FFEFC2"/>
      <stop offset="60%" stop-color="var(--star-gold)"/>
      <stop offset="100%" stop-color="#B8862E"/>
    </radialGradient>
  </defs>
</svg>`;

/* ============ STATE ============ */
const STORAGE_KEY = 'darb_nahw_state_v1';
function defaultState(){
  return {
    xp:0,
    streak:0,
    lastActiveDate:null,
    hearts:5,
    heartsMax:5,
    completedUnits:{},     // {unitId: {mistakes:0}}
    unlockedAchievements:[],
    currentUnit:1
  };
}
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){ return defaultState(); }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
}
let state = loadState();

function todayStr(){ return new Date().toISOString().slice(0,10); }
function checkStreak(){
  const today = todayStr();
  if(state.lastActiveDate === today) return; // already counted today
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
  if(state.lastActiveDate === yesterday){
    state.streak += 1;
  } else if(state.lastActiveDate === null){
    state.streak = 1;
  } else {
    state.streak = 1; // gap -> reset
  }
  state.lastActiveDate = today;
  saveState();
}

function currentRank(){
  let r = RANKS[0];
  for(const rk of RANKS){ if(state.xp >= rk.min) r = rk; }
  return r;
}
function nextUnlockedUnitId(){
  for(const u of UNITS){ if(!state.completedUnits[u.id]) return u.id; }
  return null; // all done
}
function isUnitUnlocked(unitId){
  if(unitId === 1) return true;
  return !!state.completedUnits[unitId-1];
}

/* ============ TOAST ============ */
let toastQueue = [];
function queueAchievement(ach){
  if(state.unlockedAchievements.includes(ach.id)) return;
  state.unlockedAchievements.push(ach.id);
  toastQueue.push(ach);
  saveState();
}
function flushToasts(){
  if(toastQueue.length === 0) return;
  const ach = toastQueue.shift();
  const toast = document.getElementById('toast');
  document.getElementById('toastIcon').innerHTML = ICONS[ach.icon] || ICONS.star;
  document.getElementById('toastTitle').textContent = "✨ YOU EARNED A STAR";
  document.getElementById('toastBody').textContent = ach.title + " — " + ach.body;
  toast.classList.add('show');
  setTimeout(()=>{
    toast.classList.remove('show');
    setTimeout(flushToasts, 400);
  }, 2600);
}

/* ============ ROUTER ============ */
const app = document.getElementById('app');
let route = 'home';
let lessonCtx = null;

function navigate(r, params){
  route = r;
  lessonCtx = params || lessonCtx;
  render();
  window.scrollTo(0,0);
}

function render(){
  if(route === 'home') renderHome();
  else if(route === 'lesson') renderLesson();
  else if(route === 'result') renderResult();
  else if(route === 'profile') renderProfile();
}

/* ============ HOME / PATH SCREEN ============ */
function renderHome(){
  const rank = currentRank();
  const stations = UNITS.map(u => {
    const done = !!state.completedUnits[u.id];
    const unlocked = isUnitUnlocked(u.id);
    const isCurrent = !done && unlocked;
    const cls = done ? 'done' : (isCurrent ? 'current' : 'locked');
    let inner;
    if(done) inner = planetBadgeSVG(38);
    else if(isCurrent) inner = astronautSVG(companionState());
    else inner = `<span class="station-num">${u.day}</span>`;
    return `
    <div class="station">
      <div class="station-node ${cls}">
        <button ${unlocked ? `onclick="startUnit(${u.id})"` : 'disabled'} aria-label="Day ${u.day}">${inner}</button>
      </div>
      <div class="station-card">
        <div class="day-label">Day ${u.day}${done ? ' · Complete' : ''}</div>
        <h3>${u.title}</h3>
        <div class="ar-title arabic">${u.arTitle}</div>
        <div class="prog">${done ? '✨ all 5 stars earned' : (unlocked ? "Your ship is docked here" : 'Locked')}</div>
      </div>
    </div>`;
  }).join('');

  app.innerHTML = `
  <div class="screen active" style="flex:1;">
    <div class="topbar">
      <div class="stat-pill streak">${icon('flame','stat-icon')}${state.streak}</div>
      <div class="stat-pill xp">${icon('bolt','stat-icon')}${state.xp} XP</div>
      <div class="stat-pill hearts">${icon('heart','stat-icon')}${state.hearts}/${state.heartsMax}</div>
    </div>
    <div class="path-header">
      <div class="eyebrow">Your 10-Night Journey ✨</div>
      <h1><span class="arabic">دَرْب</span>Darb</h1>
      <div class="rank-line">You're shining as a <b>${rank.title}</b> <span class="arabic">${rank.ar}</span> right now</div>
    </div>
    ${renderCompanion()}
    <div class="trail">
      <div class="trail-svg-line"></div>
      ${stations}
    </div>
    <div class="bottom-nav">
      <button class="nav-btn active">${icon('home')}<span>Path</span></button>
      <button class="nav-btn" onclick="navigate('profile')">${icon('profile')}<span>Profile</span></button>
    </div>
  </div>`;
  buildStarfield();
}

function startUnit(unitId){
  if(!isUnitUnlocked(unitId)) return;
  if(state.hearts <= 0){ regenCheck(); if(state.hearts<=0){ alert("You're out of hearts — they refill over time. Come back soon!"); return; } }
  const unit = UNITS.find(u=>u.id===unitId);
  navigate('lesson', {unit, idx:-1, mistakes:0, showingTeach:true, selected:null, answered:false, tapPicked:null});
}
window.startUnit = startUnit;
window.navigate = navigate;

function regenCheck(){
  // simple regen: 1 heart back if a full day passed since hearts hit 0 (approx via lastActiveDate gap)
  if(state.hearts < state.heartsMax){
    state.hearts = state.heartsMax; // generous regen on new day, keeps flow simple
    saveState();
  }
}

/* ============ LESSON SCREEN ============ */
function renderLesson(){
  const {unit} = lessonCtx;

  if(lessonCtx.showingTeach){
    app.innerHTML = `
    <div class="screen active">
      <div class="lesson-top">
        <button class="close-btn" onclick="navigate('home')">${icon('close')}</button>
        ${tileRow(unit.exercises.length, 0)}
        <div class="hearts-mini">${heartsRow()}</div>
      </div>
      <div class="exercise-wrap">
        <div class="ex-kicker">Day ${unit.day} · ${unit.arTitle}</div>
        <h2 style="font-size:22px;margin-bottom:14px;">${unit.title}</h2>
        <p style="font-size:15.5px;line-height:1.7;color:var(--ink-soft);">${unit.teach}</p>
      </div>
      <div class="footer-bar">
        <button class="primary-btn" onclick="beginExercises()">Let's light this up ✨ (5 stars)</button>
      </div>
    </div>`;
    return;
  }

  const total = unit.exercises.length;
  const idx = lessonCtx.idx;
  const ex = unit.exercises[idx];

  let bodyHtml = '';
  if(ex.type === 'mcq'){
    bodyHtml = `
      <div class="ex-kicker">Multiple Choice</div>
      <div class="ex-prompt">${ex.prompt}</div>
      <div class="options" id="optWrap">
        ${ex.options.map((o,i)=>`<button class="opt-btn" data-i="${i}" onclick="selectMcq(${i})"><span>${o}</span></button>`).join('')}
      </div>`;
  } else if(ex.type === 'tap'){
    bodyHtml = `
      <div class="ex-kicker">Tap the Word</div>
      <div class="ex-prompt">${ex.prompt}</div>
      <div class="ex-sub">${ex.sub}</div>
      <div class="ex-sentence" id="tapSentence">
        ${ex.words.map((w,i)=>`<span class="tap-word" data-i="${i}" onclick="selectTap(${i})">${w}</span>`).join(' ')}
      </div>
      <div style="margin-top:auto;"></div>`;
  }

  app.innerHTML = `
  <div class="screen active">
    <div class="lesson-top">
      <button class="close-btn" onclick="if(confirm('Leave this lesson? Progress on this lesson will be lost.')) navigate('home')">${icon('close')}</button>
      ${tileRow(total, idx)}
      <div class="hearts-mini">${heartsRow()}</div>
    </div>
    <div class="exercise-wrap" id="exWrap">${bodyHtml}</div>
    <div class="footer-bar" id="footerBar" style="display:none;"></div>
  </div>`;
}

function tileRow(total, currentIdx){
  // currentIdx: -1 = none started (teach screen), else index of exercise in progress; earlier ones are filled
  let out = '<div class="tile-row">';
  for(let i=0;i<total;i++){
    let cls = 'tile';
    if(i < currentIdx || (currentIdx===-1 && false)) cls += ' filled';
    if(i === currentIdx) cls += ' current';
    out += `<div class="${cls}"></div>`;
  }
  out += '</div>';
  return out;
}

function heartsRow(){
  let h = '';
  for(let i=0;i<state.heartsMax;i++){
    h += icon(i < state.hearts ? 'heart' : 'heartOutline', 'stat-icon');
  }
  return h;
}

function beginExercises(){
  lessonCtx.showingTeach = false;
  lessonCtx.idx = 0;
  lessonCtx.mistakes = 0;
  render();
}
window.beginExercises = beginExercises;

function selectMcq(i){
  if(lessonCtx.answered) return;
  lessonCtx.answered = true;
  lessonCtx.selected = i;
  const {unit, idx} = lessonCtx;
  const ex = unit.exercises[idx];
  const correct = i === ex.answer;
  document.querySelectorAll('.opt-btn').forEach((btn,bi)=>{
    btn.disabled = true;
    if(bi === ex.answer) btn.classList.add('correct');
    else if(bi === i && !correct) btn.classList.add('wrong');
  });
  handleAnswer(correct, ex.explanation);
}
window.selectMcq = selectMcq;

function selectTap(i){
  if(lessonCtx.answered) return;
  lessonCtx.answered = true;
  lessonCtx.tapPicked = i;
  const {unit, idx} = lessonCtx;
  const ex = unit.exercises[idx];
  const correct = i === ex.answer;
  document.querySelectorAll('.tap-word').forEach((el,wi)=>{
    if(wi === ex.answer) el.classList.add('correct');
    else if(wi === i && !correct) el.classList.add('wrong');
  });
  handleAnswer(correct, ex.explanation);
}
window.selectTap = selectTap;

function handleAnswer(correct, explanation){
  const footer = document.getElementById('footerBar');
  footer.style.display = 'block';
  if(!correct){
    lessonCtx.mistakes += 1;
    state.hearts = Math.max(0, state.hearts - 1);
    saveState();
  } else {
    state.xp += 10;
    saveState();
  }
  footer.innerHTML = `
    <div class="explain-box ${correct?'correct':'wrong'}">
      <b>${correct ? "Correct" : "Not quite"}</b>
      ${explanation}
    </div>
    <button class="primary-btn ${correct?'':'gold'}" onclick="nextExercise()">Continue</button>
  `;
  // update hearts display live
  document.querySelector('.hearts-mini').innerHTML = heartsRow();

  if(state.hearts <= 0 && !correct){
    footer.innerHTML += `<p style="text-align:center;font-size:12px;color:var(--ink-soft);margin-top:10px;">Out of hearts — you can still finish this lesson, hearts just won't go lower.</p>`;
  }
}

function nextExercise(){
  const {unit} = lessonCtx;
  lessonCtx.idx += 1;
  lessonCtx.answered = false;
  lessonCtx.selected = null;
  lessonCtx.tapPicked = null;
  if(lessonCtx.idx >= unit.exercises.length){
    finishLesson();
  } else {
    render();
  }
}
window.nextExercise = nextExercise;

function finishLesson(){
  const {unit, mistakes} = lessonCtx;
  const wasAlreadyDone = !!state.completedUnits[unit.id];
  state.completedUnits[unit.id] = {mistakes};
  checkStreak();
  saveState();

  if(!wasAlreadyDone && Object.keys(state.completedUnits).length === 1){
    queueAchievement(ACHIEVEMENTS.find(a=>a.id==='first_lesson'));
  }
  if(mistakes === 0){
    queueAchievement(ACHIEVEMENTS.find(a=>a.id==='perfect'));
  }
  if(state.streak >= 3) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='streak3'));
  if(state.streak >= 7) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='streak7'));
  if(unit.id === 5) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='halfway'));
  if(Object.keys(state.completedUnits).length === UNITS.length) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='finisher'));

  navigate('result', {unit, mistakes, xpGained: (unit.exercises.length - mistakes) * 10});
}

/* ============ RESULT SCREEN ============ */
const CELEBRATIONS = [
  "You just made the sky brighter! 🌙",
  "Look at you go!! ✨",
  "That was beautiful to watch.",
  "You're on fire tonight!",
  "Another star, just like that ⭐"
];
function renderResult(){
  const {unit, mistakes, xpGained} = lessonCtx;
  const correct = unit.exercises.length - mistakes;
  const headline = CELEBRATIONS[unit.id % CELEBRATIONS.length];
  app.innerHTML = `
  <div class="screen active">
    <div class="result-wrap">
      ${planetBadgeSVG(140)}
      <h1>${headline}</h1>
      <p>Day ${unit.day} complete — ${unit.title} · ${unit.arTitle}</p>
      <div class="result-stats">
        <div class="rstat"><div class="num">+${xpGained}</div><div class="lab">XP earned</div></div>
        <div class="rstat"><div class="num">${correct}/${unit.exercises.length}</div><div class="lab">Correct</div></div>
        <div class="rstat"><div class="num">${state.streak}</div><div class="lab">Day streak</div></div>
      </div>
      <button class="primary-btn" onclick="navigate('home')">Keep the magic going →</button>
    </div>
  </div>`;
  setTimeout(flushToasts, 500);
}

/* ============ PROFILE SCREEN ============ */
function renderProfile(){
  const rank = currentRank();
  const completedCount = Object.keys(state.completedUnits).length;
  const badges = ACHIEVEMENTS.map(a=>{
    const unlocked = state.unlockedAchievements.includes(a.id);
    return `<div class="badge ${unlocked?'':'locked'}">
      <svg class="bi" viewBox="0 0 24 24" style="color:${unlocked?'var(--gold)':'var(--ink-soft)'}">${ICONS[a.icon]}</svg>
      <div class="bt">${a.title}</div>
    </div>`;
  }).join('');

  app.innerHTML = `
  <div class="screen active">
    <div class="topbar">
      <div class="stat-pill streak">${icon('flame','stat-icon')}${state.streak}</div>
      <div class="stat-pill xp">${icon('bolt','stat-icon')}${state.xp} XP</div>
      <div class="stat-pill hearts">${icon('heart','stat-icon')}${state.hearts}/${state.heartsMax}</div>
    </div>
    <div class="profile-header">
      <div class="profile-avatar arabic">ن</div>
      <h2>Your Constellation</h2>
      <div class="rank-tag">${rank.title} · <span class="arabic">${rank.ar}</span></div>
    </div>
    <div class="grid-stats">
      <div class="gcard"><div class="num">${completedCount}/10</div><div class="lab">Days done</div></div>
      <div class="gcard"><div class="num">${state.xp}</div><div class="lab">Total XP</div></div>
      <div class="gcard"><div class="num">${state.streak}</div><div class="lab">Streak</div></div>
    </div>
    <div class="section-title">Achievements</div>
    <div class="badge-grid">${badges}</div>
    <div class="reset-row"><button class="reset-link" onclick="resetProgress()">Reset all progress</button></div>
    <div class="bottom-nav">
      <button class="nav-btn" onclick="navigate('home')">${icon('home')}<span>Path</span></button>
      <button class="nav-btn active">${icon('profile')}<span>Profile</span></button>
    </div>
  </div>`;
}

function resetProgress(){
  if(!confirm("This will erase all XP, streaks, and completed days. Continue?")) return;
  state = defaultState();
  saveState();
  navigate('home');
}
window.resetProgress = resetProgress;

/* ============ INIT ============ */
document.body.insertAdjacentHTML('afterbegin', SVG_DEFS + PLANET_DEFS);
regenCheck(); // simple generous regen on load
navigate('home');
