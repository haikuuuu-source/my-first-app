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
/* ---------- COMPANION: astronaut sitting on a crescent moon, legs swinging — no facial features (blank visor only) ---------- */
function astronautSVG(state){
  const suitFill = state==='struggling' ? '#BDB9A8' : '#F2EFE4';
  const moonFill = state==='struggling' ? '#4A4568' : 'url(#moonGrad)';
  const glowExtra = state==='thriving' ? 'drop-shadow(0 0 6px rgba(243,201,105,0.75)) ' : '';
  const legClass = state==='struggling' ? '' : (state==='thriving' ? 'leg-fast' : 'leg-slow');
  return `<svg viewBox="0 0 40 40" style="filter:${glowExtra}drop-shadow(0 0 5px rgba(199,192,222,0.45));">
    <!-- crescent moon: proven non-degenerate arc pair (distinct radii, non-diametric endpoints) -->
    <g transform="translate(2,10) scale(1.42)">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="${moonFill}"/>
    </g>
    <!-- legs (swinging from hip, draped over the moon's front curve) -->
    <g class="${legClass}" style="transform-origin:17px 24px;transform-box:view-box;">
      <path d="M17 24 L14.5 33" stroke="${suitFill}" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="14.2" cy="33.6" r="1.7" fill="var(--teal-bright)"/>
    </g>
    <g class="${legClass}" style="transform-origin:23px 24px;animation-delay:-1.1s;transform-box:view-box;">
      <path d="M23 24 L25.5 33" stroke="${suitFill}" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="25.8" cy="33.6" r="1.7" fill="var(--teal-bright)"/>
    </g>
    <!-- arms resting on the moon's surface -->
    <path d="M15 20.5 L11.5 23.5" stroke="${suitFill}" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M25 20.5 L28.5 23.5" stroke="${suitFill}" stroke-width="2.1" stroke-linecap="round"/>
    <!-- torso -->
    <rect x="14" y="16.5" width="12" height="8.5" rx="4.2" fill="${suitFill}"/>
    <circle cx="20" cy="20.5" r="1.7" fill="${state==='struggling' ? '#8983B8' : 'var(--star-gold)'}" opacity="0.9"/>
    <!-- helmet, no facial features: bright suit ring + blank reflective visor only -->
    <circle cx="20" cy="11.5" r="6.4" fill="${suitFill}"/>
    <circle cx="20" cy="11.5" r="6.4" fill="none" stroke="#0A2530" stroke-width="0.5" opacity="0.35"/>
    <circle cx="20" cy="11.5" r="4.9" fill="url(#visorGrad)"/>
    <ellipse cx="17.9" cy="9.1" rx="1.5" ry="0.9" fill="#EAF7F4" opacity="0.7"/>
  </svg>`;
}
const SVG_DEFS = `<svg width="0" height="0" style="position:absolute;">
  <defs>
    <linearGradient id="visorGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#A8EDE0"/>
      <stop offset="55%" stop-color="#1F6E78"/>
      <stop offset="100%" stop-color="#0A2530"/>
    </linearGradient>
    <linearGradient id="moonGrad" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#FBF8ED"/>
      <stop offset="100%" stop-color="#C7C0DE"/>
    </linearGradient>
    <radialGradient id="planetShade" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#FFF3D2"/>
      <stop offset="55%" stop-color="var(--star-gold)"/>
      <stop offset="100%" stop-color="#A9782A"/>
    </radialGradient>
    <radialGradient id="moonBadgeGrad" cx="32%" cy="28%" r="80%">
      <stop offset="0%" stop-color="#FBF8ED"/>
      <stop offset="55%" stop-color="#DCD6EC"/>
      <stop offset="100%" stop-color="#9C93B8"/>
    </radialGradient>
    <linearGradient id="rocketGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C7C9D6"/>
      <stop offset="45%" stop-color="#F5F3EA"/>
      <stop offset="100%" stop-color="#B7B4C4"/>
    </linearGradient>
    <radialGradient id="cometGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFAE6"/>
      <stop offset="55%" stop-color="var(--star-gold)"/>
      <stop offset="100%" stop-color="#B8862E"/>
    </radialGradient>
    <linearGradient id="cometTailGrad" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--star-gold)" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="var(--star-gold)" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="galaxyGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFCF0"/>
      <stop offset="35%" stop-color="var(--star-gold)"/>
      <stop offset="70%" stop-color="var(--violet-glow)"/>
      <stop offset="100%" stop-color="#241A4D"/>
    </radialGradient>
    <radialGradient id="nebulaGrad1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--violet-glow)" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="var(--violet-glow)" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebulaGrad2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--teal-bright)" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="var(--teal-bright)" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebulaGrad3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="var(--star-gold)" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="var(--star-gold)" stop-opacity="0"/>
    </radialGradient>
    <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.2"/>
    </filter>
  </defs>
</svg>`;
function companionState(){
  if(state.hearts <= 1) return 'struggling';
  if(state.streak >= 3 || (lessonCtx && lessonCtx.mistakes === 0 && lessonCtx.idx > 0)) return 'thriving';
  return 'idle';
}
function companionNote(){
  const s = companionState();
  if(s === 'struggling') return "Your astronaut's taking it slow tonight — that's okay! Even the brightest stars dim sometimes. One more try? 💫";
  if(s === 'thriving') return "<b>You're on a roll!</b> Your astronaut is kicking their feet with excitement ✨";
  return "Your astronaut is perched on the moon, legs swinging — ready when you are.";
}
function renderCompanion(){
  const s = companionState();
  return `<div class="companion-row">
    <div class="companion-box ${s}">${astronautSVG(s)}</div>
    <div class="companion-note">${companionNote()}</div>
  </div>`;
}

/* ---------- SPACE BADGES: 10 fully unique icons, one per day, sized to fill the badge circle ---------- */
const BADGE_TYPES_BY_DAY = ['rocket','star','moon','planet','ufo','cluster','comet','satellite','nebula','galaxy'];
function badgeTypeForDay(day){ return BADGE_TYPES_BY_DAY[(day-1) % BADGE_TYPES_BY_DAY.length]; }

function spaceBadgeSVG(type, size){
  const S = `width="${size}" height="${size}" viewBox="0 0 40 40"`;

  if(type === 'rocket'){
    return `<svg ${S}>
      <g transform="rotate(0 20 20)">
        <path d="M15 33 Q13 29 15 25 L25 25 Q27 29 25 33 Q20 36 15 33Z" fill="var(--bloom)"/>
        <path d="M16.5 32 Q15.5 29 16.5 26.5 L23.5 26.5 Q24.5 29 23.5 32 Q20 34 16.5 32Z" fill="var(--star-gold)"/>
        <path d="M20 3 Q28 10 27 24 Q27 27 20 28 Q13 27 13 24 Q12 10 20 3Z" fill="url(#rocketGrad)" stroke="var(--night-1)" stroke-width="1.5"/>
        <path d="M13 22 L6 27 L9 19 Z" fill="var(--teal-bright)" stroke="var(--night-1)" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M27 22 L34 27 L31 19 Z" fill="var(--teal-bright)" stroke="var(--night-1)" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M20 3 Q28 10 27 24" fill="none" stroke="var(--night-1)" stroke-width="1.5"/>
        <circle cx="20" cy="15" r="4.6" fill="url(#visorGrad)" stroke="var(--night-1)" stroke-width="1.3"/>
      </g>
    </svg>`;
  }
  if(type === 'star'){
    return `<svg ${S}>
      <path d="M20 2 L25 14.5 L38 15.5 L28 24 L31.5 37 L20 29.5 L8.5 37 L12 24 L2 15.5 L15 14.5 Z" fill="url(#planetShade)" stroke="var(--night-1)" stroke-width="1.6" stroke-linejoin="round"/>
    </svg>`;
  }
  if(type === 'moon'){
    return `<svg ${S}>
      <g transform="translate(2,2) scale(1.55)">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#moonBadgeGrad)" stroke="var(--night-1)" stroke-width="1.1" stroke-linejoin="round"/>
      </g>
      <circle cx="12" cy="27" r="1.6" fill="#9C93B8" opacity="0.6"/>
      <circle cx="17" cy="32" r="1.1" fill="#9C93B8" opacity="0.5"/>
    </svg>`;
  }
  if(type === 'planet'){
    return `<svg ${S}>
      <ellipse cx="20" cy="22" rx="18" ry="5" fill="none" stroke="var(--night-1)" stroke-width="2.2" opacity="0.5" transform="rotate(-15 20 22)"/>
      <circle cx="19" cy="19" r="13" fill="url(#planetShade)"/>
      <ellipse cx="19" cy="19" rx="18" ry="5" fill="none" stroke="var(--night-1)" stroke-width="2.2" transform="rotate(-15 19 19)"/>
      <circle cx="34" cy="9" r="2.2" fill="url(#moonBadgeGrad)" stroke="var(--night-1)" stroke-width="0.9"/>
    </svg>`;
  }
  if(type === 'ufo'){
    return `<svg ${S}>
      <ellipse cx="20" cy="25" rx="19" ry="6.5" fill="url(#planetShade)" stroke="var(--night-1)" stroke-width="1.8"/>
      <path d="M9 23 Q11 9 20 9 Q29 9 31 23 Z" fill="url(#visorGrad)" stroke="var(--night-1)" stroke-width="1.6"/>
      <ellipse cx="20" cy="25" rx="19" ry="6.5" fill="none" stroke="var(--night-1)" stroke-width="1.8"/>
      <circle cx="11" cy="26.5" r="1.8" fill="#F2EFE4"/>
      <circle cx="20" cy="30" r="1.8" fill="#F2EFE4"/>
      <circle cx="29" cy="26.5" r="1.8" fill="#F2EFE4"/>
    </svg>`;
  }
  if(type === 'cluster'){
    const pts = [[13,12,4.2],[26,9,3],[31,20,5],[10,25,3.2],[21,29,4.6],[18,19,2.4]];
    let stars = pts.map(([cx,cy,r])=>{
      const R2=r*2.2;
      return `<path d="M${cx} ${cy-R2} L${cx+r*0.55} ${cy-r*0.55} L${cx+R2} ${cy} L${cx+r*0.55} ${cy+r*0.55} L${cx} ${cy+R2} L${cx-r*0.55} ${cy+r*0.55} L${cx-R2} ${cy} L${cx-r*0.55} ${cy-r*0.55} Z" fill="url(#planetShade)" stroke="var(--night-1)" stroke-width="1"/>`;
    }).join('');
    return `<svg ${S}>
      <line x1="13" y1="12" x2="21" y2="29" stroke="var(--star-gold-soft)" stroke-width="0.6" opacity="0.4"/>
      <line x1="26" y1="9" x2="31" y2="20" stroke="var(--star-gold-soft)" stroke-width="0.6" opacity="0.4"/>
      <line x1="10" y1="25" x2="18" y2="19" stroke="var(--star-gold-soft)" stroke-width="0.6" opacity="0.4"/>
      ${stars}
    </svg>`;
  }
  if(type === 'comet'){
    return `<svg ${S}>
      <path d="M27 13 L6 33" stroke="url(#cometTailGrad)" stroke-width="9" stroke-linecap="round"/>
      <path d="M29 11 L12 30" stroke="url(#cometTailGrad)" stroke-width="4.5" stroke-linecap="round" opacity="0.8"/>
      <circle cx="29.5" cy="10.5" r="7" fill="url(#cometGrad)" stroke="var(--night-1)" stroke-width="1.4"/>
    </svg>`;
  }
  if(type === 'satellite'){
    return `<svg ${S}>
      <g transform="rotate(-25 20 20)">
        <rect x="4" y="15" width="10" height="10" rx="1" fill="url(#visorGrad)" stroke="var(--night-1)" stroke-width="1.3"/>
        <line x1="6" y1="15" x2="6" y2="25" stroke="var(--night-1)" stroke-width="0.7" opacity="0.5"/>
        <line x1="9" y1="15" x2="9" y2="25" stroke="var(--night-1)" stroke-width="0.7" opacity="0.5"/>
        <line x1="12" y1="15" x2="12" y2="25" stroke="var(--night-1)" stroke-width="0.7" opacity="0.5"/>
        <rect x="26" y="15" width="10" height="10" rx="1" fill="url(#visorGrad)" stroke="var(--night-1)" stroke-width="1.3"/>
        <line x1="28" y1="15" x2="28" y2="25" stroke="var(--night-1)" stroke-width="0.7" opacity="0.5"/>
        <line x1="31" y1="15" x2="31" y2="25" stroke="var(--night-1)" stroke-width="0.7" opacity="0.5"/>
        <line x1="34" y1="15" x2="34" y2="25" stroke="var(--night-1)" stroke-width="0.7" opacity="0.5"/>
        <rect x="15.5" y="16" width="9" height="8" rx="2" fill="url(#rocketGrad)" stroke="var(--night-1)" stroke-width="1.4"/>
        <line x1="20" y1="16" x2="20" y2="9" stroke="var(--night-1)" stroke-width="1.3"/>
        <circle cx="20" cy="8" r="1.5" fill="var(--star-gold)" stroke="var(--night-1)" stroke-width="1"/>
      </g>
    </svg>`;
  }
  if(type === 'nebula'){
    return `<svg ${S}>
      <g filter="url(#softBlur)">
        <ellipse cx="15" cy="17" rx="11" ry="8" fill="url(#nebulaGrad1)"/>
        <ellipse cx="25" cy="22" rx="10" ry="7.5" fill="url(#nebulaGrad2)"/>
        <ellipse cx="20" cy="14" rx="8" ry="6" fill="url(#nebulaGrad3)"/>
      </g>
      <circle cx="14" cy="16" r="1.3" fill="#FFFCF0"/>
      <circle cx="26" cy="24" r="1" fill="#FFFCF0"/>
      <circle cx="22" cy="11" r="0.9" fill="#FFFCF0"/>
      <circle cx="18" cy="27" r="1.1" fill="#FFFCF0"/>
    </svg>`;
  }
  // galaxy — finale badge (day 10)
  const beams = [0,45,90,135,180,225,270,315].map(a=>
    `<path d="M20 20 L20 3" stroke="var(--star-gold-soft)" stroke-width="1.4" stroke-linecap="round" opacity="0.75" transform="rotate(${a} 20 20)"/>`
  ).join('');
  return `<svg ${S}>
    <circle cx="20" cy="20" r="18" fill="none" stroke="var(--violet-glow)" stroke-width="1" opacity="0.4"/>
    ${beams}
    <circle cx="20" cy="20" r="9" fill="url(#galaxyGrad)" stroke="var(--night-1)" stroke-width="1.4"/>
  </svg>`;
}

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
    if(done) inner = spaceBadgeSVG(badgeTypeForDay(u.day), 38);
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
    const badgeType = badgeTypeForDay(unit.day);
    app.innerHTML = `
    <div class="screen active">
      <div class="lesson-top">
        <button class="close-btn" onclick="navigate('home')">${icon('close')}</button>
        ${tileRow(unit.exercises.length, 0)}
        <div class="hearts-mini">${heartsRow()}</div>
      </div>
      <div class="exercise-wrap">
        <div class="teach-card">
          <div class="teach-badge">${spaceBadgeSVG(badgeType, 76)}</div>
          <div class="ex-kicker" style="text-align:center;">Day ${unit.day}</div>
          <h2 class="teach-title">${unit.title}</h2>
          <div class="teach-ar arabic">${unit.arTitle}</div>
          <p class="teach-desc">${unit.teach}</p>
        </div>
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
      <div class="result-rosette">${spaceBadgeSVG(badgeTypeForDay(unit.day), 140)}</div>
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
document.body.insertAdjacentHTML('afterbegin', SVG_DEFS);
regenCheck(); // simple generous regen on load
navigate('home');
