/* ============ ICONS (inline SVG strings) ============ */
const ICONS = {
  flame:`<path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2 1 4-1 6-3 6a3 3 0 0 1-3-3c0-2 1.5-3 1-4-2 1-4 3-4 6a5 5 0 0 0 10 0C18 7 14 5 12 2Z" fill="currentColor"/>`,
  bolt:`<path d="M13 2 3 14h6l-1 8 11-13h-6l1-7Z" fill="currentColor"/>`,
  heart:`<path d="M12 21.3c-.3 0-.6-.1-.8-.3C7.6 18.3 2 13.8 2 9.2 2 6 4.4 3.6 7.5 3.6c1.7 0 3.4.8 4.5 2.2 1.1-1.4 2.8-2.2 4.5-2.2 3.1 0 5.5 2.4 5.5 5.6 0 4.6-5.6 9.1-9.2 11.8-.2.2-.5.3-.8.3Z" fill="currentColor"/>`,
  heartOutline:`<path d="M12 21.3c-.3 0-.6-.1-.8-.3C7.6 18.3 2 13.8 2 9.2 2 6 4.4 3.6 7.5 3.6c1.7 0 3.4.8 4.5 2.2 1.1-1.4 2.8-2.2 4.5-2.2 3.1 0 5.5 2.4 5.5 5.6 0 4.6-5.6 9.1-9.2 11.8-.2.2-.5.3-.8.3Z" fill="none" stroke="currentColor" stroke-width="1.6"/>`,
  star:`<path d="M12 2.5 15 9l7 .8-5.2 4.8L18.2 21 12 17.3 5.8 21l1.4-6.4L2 9.8 9 9l3-6.5Z" fill="currentColor"/>`,
  gem:`<path d="M6 3h12l3 6-9 12L3 9l3-6Z" fill="currentColor"/>`,
  compass:`<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M15 9l-2 6-4-2 2-6 4 2Z" fill="currentColor"/>`,
  crown:`<path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8Z" fill="currentColor"/>`,
  close:`<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  home:`<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>`,
  profile:`<circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  trophy:`<path d="M6 4h12v2a6 6 0 0 1-6 6 6 6 0 0 1-6-6V4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 5H3.5A2.5 2.5 0 0 0 6 9.5M18 5h2.5A2.5 2.5 0 0 1 18 9.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 12v3.5M9.3 16.5h5.4l.9 3.5H8.4l.9-3.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,
  chartBar:`<rect x="4" y="12" width="4" height="8" rx="1" fill="currentColor"/><rect x="10" y="6.5" width="4" height="13.5" rx="1" fill="currentColor"/><rect x="16" y="3" width="4" height="17" rx="1" fill="currentColor"/>`,
  pencil:`<path d="M4 20l1-4.2L15.5 5.3l3.2 3.2L8.2 19 4 20Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M13.6 6.9l3.2 3.2" stroke="currentColor" stroke-width="1.6"/>`,
  check:`<path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  book:`<path d="M4 5.5C4 4.7 4.7 4 5.5 4H11a2 2 0 0 1 2 2v13.5S11 18 8 18s-4 1.5-4 1.5V5.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M20 5.5C20 4.7 19.3 4 18.5 4H13a2 2 0 0 0-2 2v13.5S13 18 16 18s4 1.5 4 1.5V5.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>`,
  upload:`<path d="M12 16V4M12 4 7 9M12 4l5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  key:`<circle cx="8" cy="15" r="3.4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.4 12.6 19 4M15.5 8.5 18 6M18.5 11.5 21 9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  trash:`<path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`
};
function icon(name, cls){ return `<svg class="${cls||''}" viewBox="0 0 24 24">${ICONS[name]}</svg>`; }

/* ---------- SHARED BOTTOM NAV (5 tabs) ---------- */
function bottomNav(active){
  const tabs = [
    ['home','home','Path'],
    ['materials','book','Study'],
    ['challenges','trophy','Challenges'],
    ['insights','chartBar','Insights'],
    ['profile','profile','Profile']
  ];
  return `<div class="bottom-nav">${tabs.map(([r,ic,label])=>
    `<button class="nav-btn${active===r?' active':''}" ${active===r?'':`onclick="navigate('${r}')"`}>${icon(ic)}<span>${label}</span></button>`
  ).join('')}</div>`;
}

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
/* ---------- PLATFORMER ASTRONAUT: no facial features, body language only ---------- */
function astronautReadySVG(){
  // coiled, ready-to-spring crouch — static pose, no swinging limbs
  const suitFill = '#F2EFE4';
  return `<svg viewBox="0 0 30 42" class="astro-sprite">
    <path d="M11 25 L7 30.5 L9 38" stroke="${suitFill}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M19 25 L23 30.5 L21 38" stroke="${suitFill}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="9" cy="38.6" r="1.8" fill="var(--teal-bright)"/>
    <circle cx="21" cy="38.6" r="1.8" fill="var(--teal-bright)"/>
    <path d="M11.5 19.5 L7.5 17.5 L4.5 20.5" stroke="${suitFill}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M18.5 19.5 L22.5 17.5 L25.5 20.5" stroke="${suitFill}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <rect x="9.5" y="15.5" width="11" height="9.5" rx="4.4" fill="${suitFill}"/>
    <circle cx="15" cy="20" r="1.6" fill="var(--star-gold)"/>
    <circle cx="15" cy="8" r="6.4" fill="${suitFill}"/>
    <circle cx="15" cy="8" r="4.9" fill="url(#visorGrad)"/>
    <ellipse cx="12.9" cy="5.6" rx="1.5" ry="0.9" fill="#EAF7F4" opacity="0.7"/>
  </svg>`;
}
function astronautCelebrateSVG(){
  // landed correctly — arms raised in victory
  const suitFill = '#F2EFE4';
  return `<svg viewBox="0 0 30 42" class="astro-sprite">
    <path d="M11.5 27 L8 38" stroke="${suitFill}" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M18.5 27 L22 38" stroke="${suitFill}" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="7.7" cy="38.6" r="1.8" fill="var(--teal-bright)"/>
    <circle cx="22.3" cy="38.6" r="1.8" fill="var(--teal-bright)"/>
    <path d="M12 19 L7 11 L5.5 6" stroke="${suitFill}" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <path d="M18 19 L23 11 L24.5 6" stroke="${suitFill}" stroke-width="2.2" stroke-linecap="round" fill="none"/>
    <circle cx="5.2" cy="5" r="1.6" fill="var(--star-gold)"/>
    <circle cx="24.8" cy="5" r="1.6" fill="var(--star-gold)"/>
    <rect x="9.5" y="17" width="11" height="10.5" rx="4.6" fill="${suitFill}"/>
    <circle cx="15" cy="21.7" r="1.6" fill="var(--star-gold)"/>
    <circle cx="15" cy="9" r="6.4" fill="${suitFill}"/>
    <circle cx="15" cy="9" r="4.9" fill="url(#visorGrad)"/>
    <ellipse cx="12.9" cy="6.6" rx="1.5" ry="0.9" fill="#EAF7F4" opacity="0.7"/>
  </svg>`;
}
function astronautEncourageSVG(){
  // landed wrong — a determined, motivating gesture, not defeat
  const suitFill = '#F2EFE4';
  return `<svg viewBox="0 0 30 42" class="astro-sprite">
    <path d="M11.5 27 L8.5 38" stroke="${suitFill}" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M18.5 27 L21.5 38" stroke="${suitFill}" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="8.2" cy="38.6" r="1.8" fill="var(--teal-bright)"/>
    <circle cx="21.8" cy="38.6" r="1.8" fill="var(--teal-bright)"/>
    <path d="M12 20 L9.5 24 L11 27" stroke="${suitFill}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M18.5 19 L22.5 15 L20.5 9" stroke="${suitFill}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <circle cx="20.5" cy="8" r="2.1" fill="var(--teal-bright)"/>
    <rect x="9.5" y="17" width="11" height="10.5" rx="4.6" fill="${suitFill}"/>
    <circle cx="15" cy="21.7" r="1.6" fill="var(--star-gold)"/>
    <circle cx="15" cy="9" r="6.4" fill="${suitFill}"/>
    <circle cx="15" cy="9" r="4.9" fill="url(#visorGrad)"/>
    <ellipse cx="12.9" cy="6.6" rx="1.5" ry="0.9" fill="#EAF7F4" opacity="0.7"/>
  </svg>`;
}

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
    <linearGradient id="moonGrad" x1="0.1" y1="0" x2="0.5" y2="1">
      <stop offset="0%" stop-color="#FFEFB0"/>
      <stop offset="55%" stop-color="#F6CE5B"/>
      <stop offset="100%" stop-color="#D89A2E"/>
    </linearGradient>
    <radialGradient id="planetShade" cx="32%" cy="26%" r="80%">
      <stop offset="0%" stop-color="#FFF6DC"/>
      <stop offset="45%" stop-color="var(--star-gold)"/>
      <stop offset="100%" stop-color="#8F621E"/>
    </radialGradient>
    <radialGradient id="moonBadgeGrad" cx="30%" cy="26%" r="85%">
      <stop offset="0%" stop-color="#FFF3C4"/>
      <stop offset="45%" stop-color="#F6CE5B"/>
      <stop offset="100%" stop-color="#B8791E"/>
    </radialGradient>
    <linearGradient id="rocketGrad" x1="0.15" y1="0" x2="0.85" y2="0">
      <stop offset="0%" stop-color="#9A9AAE"/>
      <stop offset="40%" stop-color="#F7F5EE"/>
      <stop offset="60%" stop-color="#F7F5EE"/>
      <stop offset="100%" stop-color="#8A8798"/>
    </linearGradient>
    <radialGradient id="cometGrad" cx="38%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#FFFDF2"/>
      <stop offset="45%" stop-color="var(--star-gold)"/>
      <stop offset="100%" stop-color="#9C6E1E"/>
    </radialGradient>
    <linearGradient id="cometTailGrad" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="var(--star-gold)" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="var(--star-gold)" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="galaxyGrad" cx="42%" cy="38%" r="60%">
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
    <radialGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EAEAF2"/>
      <stop offset="100%" stop-color="#9D9CB0"/>
    </radialGradient>
    <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.2"/>
    </filter>
    <filter id="iconShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="1.2" stdDeviation="1.4" flood-color="#000000" flood-opacity="0.4"/>
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
      <g filter="url(#iconShadow)">
        <path d="M15 33 Q13 29 15 25 L25 25 Q27 29 25 33 Q20 36 15 33Z" fill="var(--bloom)"/>
        <path d="M16.5 32 Q15.5 29 16.5 26.5 L23.5 26.5 Q24.5 29 23.5 32 Q20 34 16.5 32Z" fill="var(--star-gold)"/>
        <path d="M20 2 Q29 9.5 27.5 24.5 Q27.5 28 20 29 Q12.5 28 12.5 24.5 Q11 9.5 20 2Z" fill="url(#rocketGrad)"/>
        <path d="M13.5 22 L5.5 27.5 L9 18.5 Z" fill="var(--teal-bright)"/>
        <path d="M26.5 22 L34.5 27.5 L31 18.5 Z" fill="var(--teal-bright)"/>
        <ellipse cx="16.5" cy="9" rx="1.8" ry="6.5" fill="#fff" opacity="0.35" transform="rotate(-8 16.5 9)"/>
        <circle cx="20" cy="15" r="4.8" fill="url(#visorGrad)"/>
        <ellipse cx="18.3" cy="12.8" rx="1.3" ry="0.8" fill="#EAF7F4" opacity="0.75"/>
      </g>
    </svg>`;
  }
  if(type === 'star'){
    return `<svg ${S}>
      <g filter="url(#iconShadow)">
        <path d="M20 1.5 L25.3 14.6 L39 15.6 L28.2 24.4 L31.8 38 L20 30.2 L8.2 38 L11.8 24.4 L1 15.6 L14.7 14.6 Z" fill="url(#planetShade)"/>
        <path d="M20 1.5 L23 13 L20 20 L17 13 Z" fill="#fff" opacity="0.3"/>
      </g>
    </svg>`;
  }
  if(type === 'moon'){
    return `<svg ${S}>
      <g filter="url(#iconShadow)">
        <g transform="translate(1,1) scale(1.62)">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="url(#moonBadgeGrad)"/>
        </g>
        <circle cx="14" cy="24" r="1.7" fill="#B8791E" opacity="0.45"/>
        <circle cx="19" cy="30" r="1.2" fill="#B8791E" opacity="0.4"/>
        <circle cx="10" cy="30" r="1" fill="#B8791E" opacity="0.35"/>
        <ellipse cx="11" cy="10" rx="2.5" ry="5" fill="#fff" opacity="0.3" transform="rotate(-20 11 10)"/>
      </g>
    </svg>`;
  }
  if(type === 'planet'){
    return `<svg ${S}>
      <g filter="url(#iconShadow)">
        <ellipse cx="19" cy="19" rx="18.5" ry="5.2" fill="none" stroke="#8F621E" stroke-width="2.4" opacity="0.55" transform="rotate(-15 19 19)"/>
        <circle cx="19" cy="19" r="14" fill="url(#planetShade)"/>
        <path d="M8 24 A14 14 0 0 0 19 33 A16 8 0 0 1 8 24Z" fill="#5A3E10" opacity="0.28"/>
        <ellipse cx="14.5" cy="12.5" rx="3.5" ry="5.5" fill="#fff" opacity="0.3" transform="rotate(-15 14.5 12.5)"/>
        <ellipse cx="19" cy="19" rx="18.5" ry="5.2" fill="none" stroke="#FFE9A8" stroke-width="1" opacity="0.4" transform="rotate(-15 19 19)"/>
        <circle cx="35" cy="8" r="2.4" fill="url(#moonBadgeGrad)"/>
      </g>
    </svg>`;
  }
  if(type === 'ufo'){
    return `<svg ${S}>
      <g filter="url(#iconShadow)">
        <ellipse cx="20" cy="26" rx="19.5" ry="6.8" fill="url(#metalGrad)"/>
        <path d="M8 24 Q10 8.5 20 8.5 Q30 8.5 32 24 Z" fill="url(#visorGrad)"/>
        <ellipse cx="16" cy="15" rx="3" ry="4.5" fill="#fff" opacity="0.35" transform="rotate(-10 16 15)"/>
        <ellipse cx="20" cy="26" rx="19.5" ry="6.8" fill="none" stroke="#fff" stroke-width="0.8" opacity="0.25"/>
        <circle cx="10.5" cy="27.5" r="1.9" fill="var(--star-gold)"/>
        <circle cx="20" cy="31.5" r="1.9" fill="var(--star-gold)"/>
        <circle cx="29.5" cy="27.5" r="1.9" fill="var(--star-gold)"/>
      </g>
    </svg>`;
  }
  if(type === 'cluster'){
    const pts = [[12,11,4.6],[27,8,3.2],[32,20,5.4],[9,26,3.4],[21,30,5],[17,19,2.6]];
    let stars = pts.map(([cx,cy,r])=>{
      const R2=r*2.2;
      return `<path d="M${cx} ${cy-R2} L${cx+r*0.55} ${cy-r*0.55} L${cx+R2} ${cy} L${cx+r*0.55} ${cy+r*0.55} L${cx} ${cy+R2} L${cx-r*0.55} ${cy+r*0.55} L${cx-R2} ${cy} L${cx-r*0.55} ${cy-r*0.55} Z" fill="url(#planetShade)"/>`;
    }).join('');
    return `<svg ${S}>
      <line x1="12" y1="11" x2="21" y2="30" stroke="var(--star-gold-soft)" stroke-width="0.6" opacity="0.4"/>
      <line x1="27" y1="8" x2="32" y2="20" stroke="var(--star-gold-soft)" stroke-width="0.6" opacity="0.4"/>
      <line x1="9" y1="26" x2="17" y2="19" stroke="var(--star-gold-soft)" stroke-width="0.6" opacity="0.4"/>
      <g filter="url(#iconShadow)">${stars}</g>
    </svg>`;
  }
  if(type === 'comet'){
    return `<svg ${S}>
      <path d="M28 13 L5 34" stroke="url(#cometTailGrad)" stroke-width="10" stroke-linecap="round"/>
      <path d="M30 11 L13 30" stroke="url(#cometTailGrad)" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
      <g filter="url(#iconShadow)">
        <circle cx="30" cy="10" r="8" fill="url(#cometGrad)"/>
        <ellipse cx="27" cy="7" rx="2" ry="3" fill="#fff" opacity="0.4" transform="rotate(-30 27 7)"/>
      </g>
    </svg>`;
  }
  if(type === 'satellite'){
    return `<svg ${S}>
      <g filter="url(#iconShadow)" transform="rotate(-25 20 20)">
        <rect x="3" y="14" width="11" height="11" rx="1.2" fill="url(#visorGrad)"/>
        <line x1="5.3" y1="14" x2="5.3" y2="25" stroke="#0A2530" stroke-width="0.6" opacity="0.4"/>
        <line x1="8.5" y1="14" x2="8.5" y2="25" stroke="#0A2530" stroke-width="0.6" opacity="0.4"/>
        <line x1="11.7" y1="14" x2="11.7" y2="25" stroke="#0A2530" stroke-width="0.6" opacity="0.4"/>
        <rect x="26" y="14" width="11" height="11" rx="1.2" fill="url(#visorGrad)"/>
        <line x1="28.3" y1="14" x2="28.3" y2="25" stroke="#0A2530" stroke-width="0.6" opacity="0.4"/>
        <line x1="31.5" y1="14" x2="31.5" y2="25" stroke="#0A2530" stroke-width="0.6" opacity="0.4"/>
        <line x1="34.7" y1="14" x2="34.7" y2="25" stroke="#0A2530" stroke-width="0.6" opacity="0.4"/>
        <rect x="15" y="15.5" width="10" height="9" rx="2.2" fill="url(#rocketGrad)"/>
        <ellipse cx="17.5" cy="18" rx="1" ry="2.6" fill="#fff" opacity="0.4"/>
        <line x1="20" y1="15.5" x2="20" y2="8" stroke="#B7B4C4" stroke-width="1.3"/>
        <circle cx="20" cy="7" r="1.6" fill="var(--star-gold)"/>
      </g>
    </svg>`;
  }
  if(type === 'nebula'){
    return `<svg ${S}>
      <g filter="url(#softBlur)">
        <ellipse cx="14" cy="18" rx="12.5" ry="9.5" fill="url(#nebulaGrad1)"/>
        <ellipse cx="26" cy="23" rx="11.5" ry="9" fill="url(#nebulaGrad2)"/>
        <ellipse cx="20" cy="13" rx="9.5" ry="7.5" fill="url(#nebulaGrad3)"/>
      </g>
      <circle cx="13" cy="16" r="1.4" fill="#FFFCF0"/>
      <circle cx="27" cy="25" r="1.1" fill="#FFFCF0"/>
      <circle cx="22" cy="10" r="1" fill="#FFFCF0"/>
      <circle cx="17" cy="28" r="1.2" fill="#FFFCF0"/>
      <circle cx="30" cy="15" r="0.8" fill="#FFFCF0"/>
    </svg>`;
  }
  // galaxy — finale badge (day 10)
  const beams = [0,45,90,135,180,225,270,315].map(a=>
    `<path d="M20 20 L20 1.5" stroke="var(--star-gold-soft)" stroke-width="1.5" stroke-linecap="round" opacity="0.8" transform="rotate(${a} 20 20)"/>`
  ).join('');
  return `<svg ${S}>
    <circle cx="20" cy="20" r="19" fill="none" stroke="var(--violet-glow)" stroke-width="1" opacity="0.35"/>
    ${beams}
    <g filter="url(#iconShadow)">
      <circle cx="20" cy="20" r="10" fill="url(#galaxyGrad)"/>
      <ellipse cx="17" cy="16.5" rx="2.5" ry="4" fill="#fff" opacity="0.4" transform="rotate(-25 17 16.5)"/>
    </g>
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
    currentUnit:1,
    profileName:'',
    unitStats:{},          // {unitId: {correct:0, total:0}} — powers Insights
    perfectRunCount:0,     // consecutive perfect (0-mistake) lessons — powers a Challenge
    lastLessonDate:null,
    lessonsToday:0,        // lessons finished on lastLessonDate — powers a Challenge
    materialCompletions:{} // {materialUnitId: {mistakes, at}} — study-material quiz results
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
let profileEditing = false;

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
  else if(route === 'challenges') renderChallenges();
  else if(route === 'insights') renderInsights();
  else if(route === 'materials') renderMaterials();
}

/* ============ STUDY MATERIALS ============
   Upload a PDF -> extract its text (pdf.js, client-side) -> send it to
   Claude to auto-generate a quiz in the same {mcq|tap} shape used by UNITS.

   NOTE ON SHARING: this currently persists to *this browser's* localStorage
   only, so materials are not yet visible across devices/users. To make the
   library truly shared, swap loadMaterials()/saveMaterials() below for reads/
   writes against a backend (e.g. Supabase) — nothing else here needs to change,
   since the rest of the app just calls those two functions. */
const MATERIALS_KEY = 'darb_materials_v1';
const API_KEY_STORAGE = 'darb_anthropic_key_v1';

function loadMaterials(){
  try{
    const raw = localStorage.getItem(MATERIALS_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveMaterials(){
  try{ localStorage.setItem(MATERIALS_KEY, JSON.stringify(materials)); }catch(e){}
}
function getApiKey(){ return localStorage.getItem(API_KEY_STORAGE) || ''; }
function setApiKey(k){ localStorage.setItem(API_KEY_STORAGE, (k||'').trim()); }

let materials = loadMaterials();

function escapeHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function extractPdfText(file){
  if(!window.pdfjsLib) throw new Error('PDF reader failed to load. Check your connection and try again.');
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({data: buf}).promise;
  let text = '';
  const maxPages = Math.min(pdf.numPages, 60);
  for(let p=1; p<=maxPages; p++){
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    text += content.items.map(it=>it.str).join(' ') + '\n';
  }
  return text.trim();
}

async function generateQuestionsFromText(text, apiKey){
  const trimmed = text.slice(0, 15000);
  const sys = `You write short quiz questions for an Arabic grammar (Nahw) learning app, based on study material text the user provides. Return ONLY valid JSON — no prose, no markdown fences, no code block. The JSON must be an array of 6 to 10 question objects, each one of these two shapes:
{"type":"mcq","prompt":"...","options":["...","...","...","..."],"answer":0,"explanation":"..."}
{"type":"tap","prompt":"...","sub":"a full sentence to tap a word within","words":["w1","w2","w3"],"answer":0,"explanation":"..."}
"answer" is a 0-based index into "options" or "words". Base every question strictly on the provided text — don't invent facts not in it. Mix mcq and tap types, prefer mcq. Keep prompts concise. Preserve any Arabic script exactly as written in the source.`;
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'x-api-key': apiKey,
      'anthropic-version':'2023-06-01',
      'anthropic-dangerous-direct-browser-access':'true'
    },
    body: JSON.stringify({
      model:'claude-sonnet-5',
      max_tokens: 3000,
      system: sys,
      messages:[{role:'user', content:`Study material text:\n\n${trimmed}`}]
    })
  });
  if(!res.ok){
    const errBody = await res.text().catch(()=> '');
    let msg = `API error ${res.status}`;
    try{ msg = JSON.parse(errBody).error.message || msg; }catch(e){}
    throw new Error(msg);
  }
  const data = await res.json();
  const textOut = (data.content||[]).map(b=>b.text||'').join('').trim();
  const cleaned = textOut.replace(/^```json\s*|^```\s*|```\s*$/g,'').trim();
  let parsed;
  try{ parsed = JSON.parse(cleaned); }catch(e){ throw new Error('Could not read the questions the AI returned — try again.'); }
  if(!Array.isArray(parsed) || parsed.length===0) throw new Error('No questions were generated from this PDF.');
  return parsed;
}

async function handlePdfUpload(fileInput){
  const file = fileInput.files[0];
  fileInput.value = '';
  if(!file) return;
  const apiKey = getApiKey();
  if(!apiKey){ promptApiKey(); if(!getApiKey()) return; }

  const id = 'm' + Date.now();
  const material = {id, title: file.name.replace(/\.pdf$/i,''), addedAt: todayStr(), status:'reading', questions:[], errorMsg:null};
  materials.unshift(material);
  saveMaterials();
  navigate('materials');

  try{
    const text = await extractPdfText(file);
    if(!text || text.length < 40) throw new Error('Could not read text from this PDF — it may be a scanned image without a text layer.');
    material.status = 'generating';
    saveMaterials(); render();
    const questions = await generateQuestionsFromText(text, getApiKey());
    material.questions = questions;
    material.status = 'ready';
  }catch(e){
    material.status = 'error';
    material.errorMsg = (e && e.message) ? e.message : 'Something went wrong reading this PDF.';
  }
  saveMaterials();
  render();
}
window.handlePdfUpload = handlePdfUpload;

function promptApiKey(){
  const cur = getApiKey();
  const val = prompt("Paste your Anthropic API key. It's stored only in this browser (localStorage) and used only to generate quiz questions from your PDFs:", cur);
  if(val === null) return;
  setApiKey(val);
  render();
}
window.promptApiKey = promptApiKey;

function removeMaterial(id){
  if(!confirm('Remove this study material and its questions?')) return;
  materials = materials.filter(m=>m.id!==id);
  saveMaterials();
  render();
}
window.removeMaterial = removeMaterial;

function startMaterialQuiz(id){
  const m = materials.find(x=>x.id===id);
  if(!m || !m.questions || !m.questions.length) return;
  const unit = {
    id: 'mat_'+m.id,
    day: 1,
    title: m.title,
    arTitle: 'مَوَادّ دِرَاسِيَّة',
    teach: `Auto-generated questions from your PDF "${m.title}".`,
    exercises: m.questions
  };
  navigate('lesson', {unit, showingTeach:true, idx:0, mistakes:0});
}
window.startMaterialQuiz = startMaterialQuiz;

function materialCard(m){
  const count = (m.questions||[]).length;
  let body;
  if(m.status==='reading'){
    body = `<div class="challenge-desc">Reading PDF…</div>`;
  } else if(m.status==='generating'){
    body = `<div class="challenge-desc">Generating questions with AI…</div>`;
  } else if(m.status==='error'){
    body = `<div class="challenge-desc" style="color:#FF9E7A;">${escapeHtml(m.errorMsg)}</div>
      <button class="reset-link" onclick="removeMaterial('${m.id}')">Remove</button>`;
  } else {
    body = `<div class="challenge-desc">${count} question${count===1?'':'s'} · added ${m.addedAt}</div>
      <div style="display:flex;gap:10px;align-items:center;margin-top:6px;">
        <button class="primary-btn" style="flex:1;padding:10px;" onclick="startMaterialQuiz('${m.id}')">Start Quiz</button>
        <button class="close-btn" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);width:36px;height:36px;" onclick="removeMaterial('${m.id}')">${icon('trash')}</button>
      </div>`;
  }
  return `<div class="challenge-card">
    <div class="challenge-icon">${icon('book')}</div>
    <div class="challenge-body">
      <div class="challenge-title">${escapeHtml(m.title)}</div>
      ${body}
    </div>
  </div>`;
}

function renderMaterials(){
  const apiKey = getApiKey();
  const cards = materials.length
    ? materials.map(materialCard).join('')
    : `<div class="insight-empty">No study materials yet. Upload a PDF and Darb will turn it into a quiz for everyone using the app ✨</div>`;
  app.innerHTML = `
  <div class="screen active">
    <div class="path-header">
      <div class="eyebrow">STUDY MATERIALS</div>
      <h1 class="section-h1">Your Library <span class="arabic" style="font-size:20px;">مَوَادّ</span></h1>
      <p class="rank-line">Upload a PDF — Darb reads it and builds a quiz from it automatically.</p>
    </div>
    <div style="padding:0 24px 10px;display:flex;gap:10px;">
      <label class="primary-btn" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;">
        ${icon('upload')}<span>Add PDF</span>
        <input type="file" accept="application/pdf" style="display:none;" onchange="handlePdfUpload(this)">
      </label>
      <button class="close-btn" style="width:48px;height:48px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.16);border-radius:14px;" onclick="promptApiKey()" title="Set Anthropic API key">${icon('key')}</button>
    </div>
    ${!apiKey ? `<div class="insight-empty-sm" style="text-align:left;padding:0 24px 14px;">No Anthropic API key set — tap the key icon above to add one. It's stored only in this browser and used to generate questions from your PDFs.</div>` : ''}
    <div class="challenge-list">${cards}</div>
    ${bottomNav('materials')}
  </div>`;
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
      <h1 class="arabic solo">دَرْب</h1>
    </div>
    ${renderCompanion()}
    <div class="trail">
      <div class="trail-svg-line"></div>
      ${stations}
    </div>
    ${bottomNav('home')}
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

  const isMaterial = typeof unit.id === 'string';
  const backRoute = isMaterial ? 'materials' : 'home';

  if(lessonCtx.showingTeach){
    const badgeType = badgeTypeForDay(unit.day);
    app.innerHTML = `
    <div class="screen active">
      <div class="lesson-top">
        <button class="close-btn" onclick="navigate('${backRoute}')">${icon('close')}</button>
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
      <div class="ex-header-card">
        <div class="ex-kicker">Jump to the Answer · Question ${idx+1} of ${total}</div>
        <div class="ex-prompt">${ex.prompt}</div>
      </div>
      ${renderPlatformerStage(ex)}`;
  } else if(ex.type === 'tap'){
    bodyHtml = `
      <div class="ex-header-card">
        <div class="ex-kicker">Tap the Word · Question ${idx+1} of ${total}</div>
        <div class="ex-prompt">${ex.prompt}</div>
        <div class="ex-sub">${ex.sub}</div>
      </div>
      <div class="ex-sentence" id="tapSentence">
        ${ex.words.map((w,i)=>`<span class="tap-word" data-i="${i}" onclick="selectTap(${i})">${w}</span>`).join(' ')}
      </div>
      <div style="margin-top:auto;"></div>`;
  }

  app.innerHTML = `
  <div class="screen active">
    <div class="lesson-top">
      <button class="close-btn" onclick="if(confirm('Leave this lesson? Progress on this lesson will be lost.')) navigate('${backRoute}')">${icon('close')}</button>
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
    h += icon(i < state.hearts ? 'heart' : 'heartOutline', 'heart-icon');
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

/* ---------- PLATFORMER MINIGAME: jump to the planet, bonk the block, reveal the answer ---------- */
const PLATFORMER_LAYOUT = [
  {left:15, top:68, badge:'planet'},
  {left:39, top:34, badge:'moon'},
  {left:62, top:56, badge:'planet'},
  {left:85, top:20, badge:'ufo'}
];
const BLOCK_TYPES = ['star','comet','star','comet'];

function renderPlatformerStage(ex){
  const planets = ex.options.map((o,i)=>{
    const p = PLATFORMER_LAYOUT[i];
    return `
    <div class="stage-planet" id="planet${i}" style="left:${p.left}%;top:${p.top}%;" onclick="jumpTo(${i})">
      <div class="stage-block" id="block${i}">
        <div class="block-icon">${spaceBadgeSVG(BLOCK_TYPES[i], 34)}</div>
        <div class="block-q">?</div>
      </div>
      <div class="planet-icon">${spaceBadgeSVG(p.badge, 44)}</div>
      <div class="planet-label"><span class="ar">${o}</span></div>
    </div>`;
  }).join('');
  return `
  <div class="stage" id="stage">
    <div class="stage-launchpad"></div>
    <div class="stage-astro" id="stageAstro">${astronautReadySVG()}</div>
    ${planets}
  </div>`;
}

function jumpTo(i){
  if(lessonCtx.answered) return;
  const {unit, idx} = lessonCtx;
  const ex = unit.exercises[idx];
  lessonCtx.answered = true;
  lessonCtx.selected = i;

  document.querySelectorAll('.stage-planet').forEach(el=>el.style.pointerEvents='none');

  const stage = document.getElementById('stage');
  const astro = document.getElementById('stageAstro');
  const sprite = astro.querySelector('.astro-sprite');
  const targetPlanet = document.getElementById('planet'+i);
  const stageRect = stage.getBoundingClientRect();
  const astroRect = astro.getBoundingClientRect();
  const targetRect = targetPlanet.getBoundingClientRect();

  const startX = astroRect.left - stageRect.left;
  const startY = astroRect.top - stageRect.top;
  const endX = (targetRect.left - stageRect.left) + (targetRect.width/2) - (astroRect.width/2);
  const endY = (targetRect.top - stageRect.top) - astroRect.height*0.15;
  const dist = Math.hypot(endX-startX, endY-startY);
  const doSomersault = dist > 130;

  astro.style.position = 'absolute';
  astro.style.left = startX+'px';
  astro.style.top = startY+'px';

  // catapult: brief coil/squash, THEN launch fast
  astro.classList.add('launch-squash');
  setTimeout(()=>{
    astro.classList.remove('launch-squash');
    astro.classList.add('jumping');
    const duration = 460;
    const arcHeight = 102;
    const t0 = performance.now();
    function frame(now){
      const t = Math.min(1, (now-t0)/duration);
      const x = startX + (endX-startX)*t;
      const straightY = startY + (endY-startY)*t;
      const arc = -4*arcHeight*t*(1-t);
      astro.style.left = x+'px';
      astro.style.top = (straightY+arc)+'px';
      if(doSomersault && sprite){
        sprite.style.transform = `rotate(${(360*t).toFixed(1)}deg)`;
      }
      if(t < 1){
        requestAnimationFrame(frame);
      } else {
        astro.classList.remove('jumping');
        if(sprite) sprite.style.transform = '';
        astro.classList.add('landing-squash');
        setTimeout(()=>astro.classList.remove('landing-squash'), 260);
        onLanded(i, ex);
      }
    }
    requestAnimationFrame(frame);
  }, 110);
}
window.jumpTo = jumpTo;

function onLanded(i, ex){
  const correct = i === ex.answer;
  const astro = document.getElementById('stageAstro');
  astro.innerHTML = correct ? astronautCelebrateSVG() : astronautEncourageSVG();

  const block = document.getElementById('block'+i);
  block.classList.add('hit', correct ? 'correct' : 'wrong');
  const qEl = block.querySelector('.block-q');
  if(qEl) qEl.textContent = correct ? '✓' : '✕';

  if(!correct){
    const correctBlock = document.getElementById('block'+ex.answer);
    if(correctBlock){
      correctBlock.classList.add('hit','correct-reveal');
      const cq = correctBlock.querySelector('.block-q');
      if(cq) cq.textContent = '✓';
    }
  }
  ex.options.forEach((_,j)=>{
    if(j!==i && j!==ex.answer){
      const p = document.getElementById('planet'+j);
      if(p) p.classList.add('dim');
    }
  });

  if(correct) spawnParticles(block);
  handleAnswer(correct, ex.explanation);
}

function spawnParticles(el){
  const stage = document.getElementById('stage');
  const stageRect = stage.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  const cx = rect.left - stageRect.left + rect.width/2;
  const cy = rect.top - stageRect.top + rect.height/2;
  for(let k=0;k<8;k++){
    const p = document.createElement('div');
    p.className = 'burst-particle';
    const angle = (Math.PI*2/8)*k;
    const dist = 36 + Math.random()*22;
    p.style.left = cx+'px';
    p.style.top = cy+'px';
    p.style.setProperty('--dx', (Math.cos(angle)*dist).toFixed(1)+'px');
    p.style.setProperty('--dy', (Math.sin(angle)*dist).toFixed(1)+'px');
    stage.appendChild(p);
    setTimeout(()=>p.remove(), 750);
  }
}

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
  const uid = lessonCtx.unit.id;
  if(!state.unitStats[uid]) state.unitStats[uid] = {correct:0, total:0};
  state.unitStats[uid].total += 1;
  if(!correct){
    lessonCtx.mistakes += 1;
    state.hearts = Math.max(0, state.hearts - 1);
    saveState();
  } else {
    state.xp += 10;
    state.unitStats[uid].correct += 1;
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
  if(!correct){
    const hm = document.querySelector('.hearts-mini');
    hm.classList.remove('heart-lost'); void hm.offsetWidth; hm.classList.add('heart-lost');
  }

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

  // Study-material quizzes use string ids ('mat_...') and are tracked separately
  // so they never touch UNITS-based progress (completedUnits / finisher achievement).
  if(typeof unit.id === 'string'){
    checkStreak();
    state.perfectRunCount = (mistakes === 0) ? (state.perfectRunCount + 1) : 0;
    const today = todayStr();
    if(state.lastLessonDate === today){ state.lessonsToday += 1; }
    else { state.lastLessonDate = today; state.lessonsToday = 1; }
    if(!state.materialCompletions) state.materialCompletions = {};
    state.materialCompletions[unit.id] = {mistakes, at: today};
    saveState();
    if(mistakes === 0) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='perfect'));
    if(state.streak >= 3) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='streak3'));
    if(state.streak >= 7) queueAchievement(ACHIEVEMENTS.find(a=>a.id==='streak7'));
    navigate('result', {unit, mistakes, xpGained: (unit.exercises.length - mistakes) * 10});
    return;
  }

  const wasAlreadyDone = !!state.completedUnits[unit.id];
  state.completedUnits[unit.id] = {mistakes};
  checkStreak();

  // perfect-run tracking (consecutive 0-mistake lessons)
  state.perfectRunCount = (mistakes === 0) ? (state.perfectRunCount + 1) : 0;

  // same-day lesson count tracking
  const today = todayStr();
  if(state.lastLessonDate === today){ state.lessonsToday += 1; }
  else { state.lastLessonDate = today; state.lessonsToday = 1; }

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
const CELEBRATIONS_GREAT = [
  "You just made the sky brighter! 🌙",
  "Look at you go!! ✨",
  "You're on fire tonight!",
  "Another star, just like that ⭐"
];
const CELEBRATIONS_GOOD = [
  "Solid work tonight — you're getting there!",
  "Nice progress ✨ that's real momentum.",
  "You're putting the pieces together well."
];
const CELEBRATIONS_ENCOURAGE = [
  "Nahw takes practice — you did the hard part: showing up.",
  "Every attempt makes the next one easier. Keep going.",
  "That's a tough day — and you still finished it. That counts."
];
function renderResult(){
  const {unit, mistakes, xpGained} = lessonCtx;
  const isMaterial = typeof unit.id === 'string';
  const correct = unit.exercises.length - mistakes;
  const ratio = correct / unit.exercises.length;
  const pool = ratio >= 0.8 ? CELEBRATIONS_GREAT : (ratio >= 0.5 ? CELEBRATIONS_GOOD : CELEBRATIONS_ENCOURAGE);
  const headline = pool[(isMaterial ? correct : unit.id) % pool.length];
  const subtext = isMaterial
    ? (ratio >= 0.5 ? `Study quiz complete — ${unit.title}` : `Study quiz finished — ${unit.title}. Want to try it again?`)
    : (ratio >= 0.5 ? `Day ${unit.day} complete — ${unit.title} · ${unit.arTitle}` : `Day ${unit.day} finished — ${unit.title}. Want to review it again before moving on?`);
  const backRoute = isMaterial ? 'materials' : 'home';
  const backLabel = isMaterial
    ? (ratio >= 0.5 ? 'Back to Study Materials →' : 'Back to Study Materials →')
    : (ratio >= 0.5 ? 'Keep the magic going →' : 'Back to the path →');
  app.innerHTML = `
  <div class="screen active">
    <div class="result-wrap">
      <div class="result-rosette">${spaceBadgeSVG(badgeTypeForDay(unit.day), 140)}</div>
      <h1>${headline}</h1>
      <p>${subtext}</p>
      <div class="result-stats">
        <div class="rstat"><div class="num">+${xpGained}</div><div class="lab">XP earned</div></div>
        <div class="rstat"><div class="num">${correct}/${unit.exercises.length}</div><div class="lab">Correct</div></div>
        <div class="rstat"><div class="num">${state.streak}</div><div class="lab">Day streak</div></div>
      </div>
      <button class="primary-btn" onclick="navigate('${backRoute}')">${backLabel}</button>
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

  const nameBlock = profileEditing
    ? `<div class="name-edit-row">
        <input id="nameInput" class="name-input" maxlength="24" placeholder="Your name" value="${(state.profileName||'').replace(/"/g,'')}" />
        <button class="name-save-btn" onclick="saveProfileName()">${icon('check')}</button>
       </div>`
    : `<div class="name-display-row" onclick="startEditProfile()">
        <h2>${state.profileName ? state.profileName : 'Set your name'}</h2>
        ${icon('pencil','edit-pencil')}
       </div>`;

  app.innerHTML = `
  <div class="screen active">
    <div class="topbar">
      <div class="stat-pill streak">${icon('flame','stat-icon')}${state.streak}</div>
      <div class="stat-pill xp">${icon('bolt','stat-icon')}${state.xp} XP</div>
      <div class="stat-pill hearts">${icon('heart','stat-icon')}${state.hearts}/${state.heartsMax}</div>
    </div>
    <div class="profile-header">
      <div class="profile-avatar">${astronautSVG('idle')}</div>
      ${nameBlock}
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
    ${bottomNav('profile')}
  </div>`;
  if(profileEditing){
    const inp = document.getElementById('nameInput');
    inp.focus();
    inp.select();
    inp.addEventListener('keydown', e=>{ if(e.key==='Enter') saveProfileName(); });
  }
}
function startEditProfile(){ profileEditing = true; render(); }
function saveProfileName(){
  const inp = document.getElementById('nameInput');
  state.profileName = (inp.value || '').trim().slice(0,24);
  saveState();
  profileEditing = false;
  render();
}
window.startEditProfile = startEditProfile;
window.saveProfileName = saveProfileName;

/* ============ CHALLENGES SCREEN ============ */
function renderChallenges(){
  const completedCount = Object.keys(state.completedUnits).length;
  const lessonsTodayCount = (state.lastLessonDate === todayStr()) ? state.lessonsToday : 0;
  const challenges = [
    {icon:'flame', title:'Streak Keeper', desc:'Reach a 7-day streak', progress:Math.min(state.streak,7), goal:7},
    {icon:'gem', title:'Flawless Run', desc:'Finish 3 lessons in a row with zero mistakes', progress:Math.min(state.perfectRunCount,3), goal:3},
    {icon:'bolt', title:'Double Session', desc:'Complete 2 lessons in a single day', progress:Math.min(lessonsTodayCount,2), goal:2},
    {icon:'crown', title:'Full Constellation', desc:'Complete all 10 days of the path', progress:completedCount, goal:10}
  ];
  const cards = challenges.map(c=>{
    const pct = Math.round((c.progress/c.goal)*100);
    const done = c.progress >= c.goal;
    return `<div class="challenge-card ${done?'done':''}">
      <div class="challenge-icon ${done?'done':''}">${icon(c.icon)}</div>
      <div class="challenge-body">
        <div class="challenge-title">${c.title}${done?icon('check','ch-check'):''}</div>
        <div class="challenge-desc">${c.desc}</div>
        <div class="challenge-track"><div class="challenge-fill" style="width:${pct}%"></div></div>
        <div class="challenge-count">${c.progress}/${c.goal}</div>
      </div>
    </div>`;
  }).join('');

  app.innerHTML = `
  <div class="screen active">
    <div class="topbar">
      <div class="stat-pill streak">${icon('flame','stat-icon')}${state.streak}</div>
      <div class="stat-pill xp">${icon('bolt','stat-icon')}${state.xp} XP</div>
      <div class="stat-pill hearts">${icon('heart','stat-icon')}${state.hearts}/${state.heartsMax}</div>
    </div>
    <div class="path-header">
      <div class="eyebrow">Keep Pushing ✨</div>
      <h1 class="section-h1">Challenges</h1>
    </div>
    <div class="challenge-list">${cards}</div>
    ${bottomNav('challenges')}
  </div>`;
  buildStarfield();
}

/* ============ INSIGHTS SCREEN ============ */
function insightRow(x, kind){
  const barColor = kind==='strong' ? 'var(--teal-bright)' : (kind==='weak' ? 'var(--bloom)' : 'var(--star-gold)');
  return `<div class="insight-row">
    <div class="insight-row-top">
      <span class="insight-row-title">Day ${x.unit.day} · ${x.unit.title}</span>
      <span class="insight-row-pct">${x.acc}%</span>
    </div>
    <div class="insight-row-ar arabic">${x.unit.arTitle}</div>
    <div class="insight-track"><div class="insight-fill" style="width:${x.acc}%;background:${barColor};"></div></div>
  </div>`;
}
function renderInsights(){
  const statsArr = Object.keys(state.unitStats).map(uid=>{
    const s = state.unitStats[uid];
    const unit = UNITS.find(u=>u.id==uid);
    const acc = s.total>0 ? Math.round((s.correct/s.total)*100) : 0;
    return {unit, correct:s.correct, total:s.total, acc};
  }).filter(x=>x.unit && x.total>0).sort((a,b)=>b.acc-a.acc);

  const eligible = statsArr.filter(x=>x.total>=3);
  const strong = eligible.slice(0,2);
  const weak = eligible.slice(-2).reverse().filter(x=>!strong.includes(x));
  const totalCorrect = statsArr.reduce((s,x)=>s+x.correct,0);
  const totalAnswered = statsArr.reduce((s,x)=>s+x.total,0);
  const overallAcc = totalAnswered>0 ? Math.round((totalCorrect/totalAnswered)*100) : 0;

  let body;
  if(statsArr.length === 0){
    body = `<div class="insight-empty">Complete a few exercises and your strong points + focus areas will show up here ✨</div>`;
  } else {
    const strongHtml = strong.length ? strong.map(x=>insightRow(x,'strong')).join('') : `<div class="insight-empty-sm">Keep going — not enough data yet.</div>`;
    const weakHtml = weak.length ? weak.map(x=>insightRow(x,'weak')).join('') : `<div class="insight-empty-sm">No clear focus areas yet — nice work!</div>`;
    const allHtml = statsArr.map(x=>insightRow(x,'neutral')).join('');
    body = `
      <div class="insight-overall">
        <div class="insight-overall-num">${overallAcc}%</div>
        <div class="insight-overall-lab">Overall accuracy across ${totalAnswered} answers</div>
      </div>
      <div class="section-title">💪 Strong Areas</div>
      <div class="insight-list">${strongHtml}</div>
      <div class="section-title">🎯 Focus Areas</div>
      <div class="insight-list">${weakHtml}</div>
      <div class="section-title">All Topics</div>
      <div class="insight-list">${allHtml}</div>
    `;
  }

  app.innerHTML = `
  <div class="screen active">
    <div class="topbar">
      <div class="stat-pill streak">${icon('flame','stat-icon')}${state.streak}</div>
      <div class="stat-pill xp">${icon('bolt','stat-icon')}${state.xp} XP</div>
      <div class="stat-pill hearts">${icon('heart','stat-icon')}${state.hearts}/${state.heartsMax}</div>
    </div>
    <div class="path-header">
      <div class="eyebrow">Know Yourself ✨</div>
      <h1 class="section-h1">Insights</h1>
    </div>
    ${body}
    ${bottomNav('insights')}
  </div>`;
  buildStarfield();
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
