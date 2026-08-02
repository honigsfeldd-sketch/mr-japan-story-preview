const ORNA_YIGAL_STORIES = [
  {
    image: "04_tokyo_shibuya_crossing.png",
    name_he: "טוקיו",
    name_jp: "東京",
    day: "4 לילות",
    characteristics: [
      { label: "סמטאות לילה תוססות", icon: "night_street" },
      { label: "שכונות נישה וטרנדים", icon: "neighborhood" },
      { label: "קצב, פופ וטכנולוגיה", icon: "pop_culture" },
    ],
  },
  {
    image: "06_hakone_torii_dusk.png",
    name_he: "האקונה",
    name_jp: "箱根",
    day: "1 לילה",
    characteristics: [
      { label: "מעיינות חמים וריוקנים", icon: "onsen" },
      { label: "שיט באגם מול פוג'י", icon: "lake_fuji_boat" },
      { label: "מוזיאונים פתוחים בטבע", icon: "open_air_art_museum" },
    ],
  },
  {
    image: "07_kawaguchiko_fuji.png",
    name_he: "קאוואגוצ׳יקו",
    name_jp: "河口湖",
    day: "2 לילות",
    hero_pos: "50% 28%",
    characteristics: [
      { label: "נוף ישיר להר פוג'י", icon: "fuji" },
      { label: "בתי קפה על המים", icon: "cafe" },
      { label: "אווירת ריזורט שלווה", icon: "lakeside_resort" },
    ],
  },
  {
    image: "08_matsumoto_castle.png",
    name_he: "מטסומוטו",
    name_jp: "松本",
    day: "1 לילה",
    characteristics: [
      { label: "טירה שחורה עתיקה", icon: "castle" },
      { label: "שער לאלפים היפניים", icon: "mountain" },
      { label: "רחובות אמנות וצפרדעים", icon: "frog_art_street" },
    ],
  },
  {
    image: "09_takayama_old_town_v1.png",
    name_he: "טאקיאמה",
    name_jp: "高山",
    day: "2 לילות",
    characteristics: [
      { label: "סמטאות עץ עתיקות", icon: "traditional_house" },
      { label: "בשר הידה משובח", icon: "hida_beef" },
      { label: "שווקי בוקר על הנהר", icon: "market" },
    ],
  },
  {
    image: "11_kanazawa_garden_v1.png",
    name_he: "קאנזאווה",
    name_jp: "金沢",
    day: "1 לילה",
    characteristics: [
      { label: "גנים יפניים אייקוניים", icon: "garden" },
      { label: "רובעי גיישות וסמוראים", icon: "geisha_samurai_quarter" },
      { label: "אמנות מודרנית ועלי זהב", icon: "gold_leaf_art" },
    ],
  },
  {
    image: "13_kyoto_temple_gate.png",
    name_he: "קיוטו",
    name_jp: "京都",
    day: "4 לילות",
    characteristics: [
      { label: "מקדשים וגני זן", icon: "temple" },
      { label: "סמטאות עץ מסורתיות", icon: "traditional_house" },
      { label: "בתי תה וגיישות", icon: "tea_house_geisha" },
    ],
  },
  {
    image: "15_okayama_korakuen.png",
    name_he: "אוקאיאמה",
    name_jp: "岡山",
    day: "1 לילה",
    characteristics: [
      { label: "גנים מלכותיים וטירה", icon: "garden" },
      { label: "בירת הג'ינס היפני", icon: "japanese_denim" },
      { label: "השער לאיי האמנות", icon: "art_island_gateway" },
    ],
  },
  {
    image: "17_naoshima_v2.png",
    name_he: "נאושימה",
    name_jp: "直島",
    day: "2 לילות",
    characteristics: [
      { label: "מוזיאונים נסתרים באדמה", icon: "underground_museum" },
      { label: "פסלי דלעת על החוף", icon: "pumpkin_coast" },
      { label: "אי אדריכלות ואמנות", icon: "concrete_architecture" },
    ],
  },
  {
    image: "19_hiroshima_riverside.png",
    name_he: "הירושימה",
    name_jp: "広島",
    day: "2 לילות",
    characteristics: [
      { label: "פארק השלום והיסטוריה", icon: "memory" },
      { label: "שער הטורי הצף", icon: "torii" },
      { label: "אוקונומיאקי ואוכל רחוב", icon: "okonomiyaki" },
    ],
  },
  {
    image: "20_osaka_food_street.png",
    name_he: "אוסקה",
    name_jp: "大阪",
    day: "1 לילה",
    characteristics: [
      { label: "אורות ניאון וחיי לילה", icon: "night_street" },
      { label: "בירת אוכל הרחוב", icon: "takoyaki_street_food" },
      { label: "שופינג ואנרגיה מטורפת", icon: "shopping" },
    ],
  },
  {
    image: "22_tokyo_return.png",
    name_he: "טוקיו",
    name_jp: "東京",
    day: "3 לילות",
    characteristics: [
      { label: "שופינג וסטריטוור", icon: "shopping" },
      { label: "מסעדות מישלן וחבויות", icon: "hidden_michelin_restaurant" },
      { label: "פרידה מבירת הקצב", icon: "city_lights" },
    ],
  },
];

const query = new URLSearchParams(window.location.search);
const IS_ORNA_TRIP = query.get("trip") === "orna";
const STORIES = IS_ORNA_TRIP
  ? ORNA_YIGAL_STORIES
  : (window.ALL_DESTINATION_STORIES || ORNA_YIGAL_STORIES);

const screenEl = document.getElementById("screen");
const stageEl = document.getElementById("stage");
const appShellEl = document.getElementById("app-shell");
const screenShellEl = document.getElementById("screen-shell");
const closedViewEl = document.getElementById("closed-view");
const openViewEl = document.getElementById("open-view");
const carouselEl = document.getElementById("carousel");
let detailsListEl = document.getElementById("details-list");
const routeGridEl = document.getElementById("route-grid");
const identityEl = document.getElementById("identity");
const progressEl = document.getElementById("progress-bar");
const openRevealEl = document.getElementById("open-reveal");
const exitButtonEl = document.getElementById("exit-button");
const guideButtonEl = document.getElementById("guide-button");
const stateHintEl = document.getElementById("state-hint");
const imageCache = new Map();
const iconCache = new Map();

const ROUTE_LABELS = [
  { name: "טוקיו", days: "4 לילות", color: "#ffc960" },
  { name: "האקונה", days: "1 לילה", color: "#81b6d9" },
  { name: "קוואגוצ'יקו", days: "2 לילות", color: "#7fb174" },
  { name: "מצומוטו", days: "1 לילה", color: "#e2a66a" },
  { name: "טקיאמה", days: "2 לילות", color: "#ba8f6f" },
  { name: "קנזאווה", days: "1 לילה", color: "#79a68c" },
  { name: "קיוטו", days: "4 לילות", color: "#c98596" },
  { name: "אוקיאמה", days: "1 לילה", color: "#78a7c8" },
  { name: "נאושימה", days: "2 לילות", color: "#9dc7b2" },
  { name: "הירושימה", days: "2 לילות", color: "#d08d7c" },
  { name: "אוסקה", days: "1 לילה", color: "#dbb861" },
  { name: "טוקיו", days: "3 לילות", color: "#ffc960" },
];

const BASE_CARD = {
  current: { x: 0, y: 0, w: 293.63, h: 521.523, r: 30.627 },
  prev: { x: -286.12, y: 24.37, w: 266.189, h: 472.784, r: 27.763 },
  next: { x: 286.12, y: 24.37, w: 268.803, h: 477.426, r: 27.766 },
};
let CARD = copyCardLayout(BASE_CARD);
let dragDistance = 286;
let swipeCommit = 72;
let verticalSwipeCommit = 74;
const STORY_DURATION_MS = 15000;
const TAP_RADIUS = 8;
const TAP_TIME = 320;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
// Drag-up live reveal: unscaled px of upward drag = full --reveal of 1.
let revealThreshold = 200;
// Commit to open if the user passed this fraction of the threshold.
const REVEAL_COMMIT_PROGRESS = 0.4;
// Time the post-release transition takes (commit or snap back).
const REVEAL_SETTLE_MS = 320;

let current = 0;
let state = "closed";
let press = null;
let animating = false;
let suppressClick = false;
let progressRaf = null;
let progressStartedAt = 0;
let progressElapsed = 0;
let detailsTransitionDirection = 0;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const lerp = (from, to, t) => from + (to - from) * t;
const wrap = (index) => ((index % STORIES.length) + STORIES.length) % STORIES.length;

function copyCardLayout(layout) {
  return {
    current: { ...layout.current },
    prev: { ...layout.prev },
    next: { ...layout.next },
  };
}

function imagePath(story) {
  return story.image.includes("/") ? story.image : `assets/images/${story.image}`;
}

function iconPath(icon) {
  return icon.includes("/") ? icon : `assets/icons/${icon}.png`;
}

function warmImage(src, cache) {
  const cached = cache.get(src);
  if (cached) {
    if (cached.decode) cached.decode().catch(() => {});
    return cached;
  }

  const img = new Image();
  img.decoding = "async";
  img.src = src;
  cache.set(src, img);
  if (img.decode) img.decode().catch(() => {});
  return img;
}

function warmStoryAssets(index) {
  const story = STORIES[wrap(index)];
  warmImage(imagePath(story), imageCache);
  story.characteristics.forEach((item) => {
    warmImage(iconPath(item.icon), iconCache);
  });
}

function warmAdjacentAssets(center = current) {
  [-2, -1, 0, 1, 2].forEach((offset) => warmStoryAssets(center + offset));
}

function preloadAssets() {
  warmAdjacentAssets();
}

function viewportMetrics() {
  const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const viewport = window.visualViewport || window;
  const viewportWidth = Math.floor(viewport.width || window.innerWidth);
  const viewportHeight = Math.floor(viewport.height || window.innerHeight);
  const isMobileViewport = isTouch || viewportWidth <= 600 || window.innerWidth <= 600;
  return { viewportWidth, viewportHeight, isMobileViewport };
}

function resetStoryGeometry() {
  CARD = copyCardLayout(BASE_CARD);
  dragDistance = 286;
  swipeCommit = 72;
  verticalSwipeCommit = 74;
  revealThreshold = 200;
  [
    "--closed-top",
    "--closed-side",
    "--closed-bottom",
    "--closed-radius",
    "--carousel-top",
    "--carousel-width",
    "--carousel-height",
    "--details-left",
    "--details-top",
    "--details-width",
    "--details-row-height",
    "--details-icon-size",
    "--details-icon-col",
    "--details-separator-left",
    "--details-label-pad",
    "--details-font-size",
    "--progress-top",
    "--progress-open-top",
    "--progress-left",
    "--progress-width",
    "--progress-transform",
    "--progress-gap",
    "--progress-height",
    "--identity-top",
    "--exit-top",
    "--exit-right",
    "--hint-top",
    "--guide-right",
    "--guide-bottom",
    "--guide-size",
    "--guide-closed-right",
    "--guide-closed-bottom",
    "--guide-closed-size",
  ].forEach((name) => screenEl.style.removeProperty(name));
}

function syncResponsiveStoryGeometry(width, height) {
  const safeTop = Math.max(18, Math.min(44, height * 0.035));
  const top = Math.max(safeTop + 44, Math.min(78, height * 0.085));
  const sidePeek = clamp(width * 0.115, 32, 54);
  const cardW = clamp(width - sidePeek * 2, 248, Math.min(338, width * 0.78));
  const naturalCardH = cardW * 1.776;
  const maxCardH = height * 0.58;
  const cardH = clamp(Math.min(naturalCardH, maxCardH), 330, Math.max(330, height * 0.6));
  const cardRadius = clamp(cardW * 0.105, 24, 34);
  const sideW = cardW * 0.91;
  const sideH = cardH * 0.91;
  const sideY = cardH * 0.046;
  const sideX = cardW * 0.98;
  const carouselH = cardH + sideY + 2;
  const rowHeight = clamp(height * 0.075, 52, 66);
  const detailsTop = Math.min(
    top + cardH + clamp(height * 0.032, 18, 34),
    height - rowHeight * 3 - 50
  );
  const detailsWidth = Math.min(width - 42, 348);
  const detailsLeft = (width - detailsWidth) / 2;
  const hintTop = Math.max(detailsTop + rowHeight * 3 + 7, height - 42);
  const exitTop = top - 5;
  const exitRight = Math.max(12, (width - cardW) / 2 - 18);
  const exitLeft = width - exitRight - 36;
  const progressRightGap = clamp(width * 0.035, 14, 20);
  const progressLeft = progressRightGap;
  const progressWidth = Math.max(180, exitLeft - progressLeft - progressRightGap);
  const progressHeight = height < 700 ? 2.5 : 3;
  const progressTop = exitTop + (36 - progressHeight) / 2;
  const progressOpenTop = clamp(height * 0.018, 11, 16);

  CARD = {
    current: { x: 0, y: 0, w: cardW, h: cardH, r: cardRadius },
    prev: { x: -sideX, y: sideY, w: sideW, h: sideH, r: cardRadius * 0.9 },
    next: { x: sideX, y: sideY, w: sideW, h: sideH, r: cardRadius * 0.9 },
  };
  dragDistance = sideX;
  swipeCommit = clamp(width * 0.18, 52, 88);
  verticalSwipeCommit = clamp(height * 0.085, 56, 92);
  revealThreshold = clamp(height * 0.25, 150, 230);

  screenEl.style.setProperty("--closed-top", `${top}px`);
  screenEl.style.setProperty("--closed-side", `${(width - cardW) / 2}px`);
  screenEl.style.setProperty("--closed-bottom", `${height - top - cardH}px`);
  screenEl.style.setProperty("--closed-radius", `${cardRadius}px`);
  screenEl.style.setProperty("--carousel-top", `${top}px`);
  screenEl.style.setProperty("--carousel-width", `${width}px`);
  screenEl.style.setProperty("--carousel-height", `${carouselH}px`);
  screenEl.style.setProperty("--details-left", `${detailsLeft}px`);
  screenEl.style.setProperty("--details-top", `${detailsTop}px`);
  screenEl.style.setProperty("--details-width", `${detailsWidth}px`);
  screenEl.style.setProperty("--details-row-height", `${rowHeight}px`);
  screenEl.style.setProperty("--details-icon-size", `${clamp(rowHeight * 0.86, 44, 58)}px`);
  screenEl.style.setProperty("--details-icon-col", `${clamp(rowHeight * 1.35, 72, 88)}px`);
  screenEl.style.setProperty("--details-separator-left", `${clamp(rowHeight * 1.55, 84, 104)}px`);
  screenEl.style.setProperty("--details-label-pad", `${clamp(width * 0.03, 10, 16)}px`);
  screenEl.style.setProperty("--details-font-size", `${clamp(width * 0.048, 17, 20)}px`);
  screenEl.style.setProperty("--progress-top", `${progressTop}px`);
  screenEl.style.setProperty("--progress-open-top", `${progressOpenTop}px`);
  screenEl.style.setProperty("--progress-left", `${progressLeft}px`);
  screenEl.style.setProperty("--progress-width", `${progressWidth}px`);
  screenEl.style.setProperty("--progress-transform", "none");
  screenEl.style.setProperty("--progress-gap", `${STORIES.length > 12 ? 2 : 3}px`);
  screenEl.style.setProperty("--progress-height", `${progressHeight}px`);
  screenEl.style.setProperty("--identity-top", `${top + cardH * 0.22}px`);
  screenEl.style.setProperty("--exit-top", `${exitTop}px`);
  screenEl.style.setProperty("--exit-right", `${exitRight}px`);
  screenEl.style.setProperty("--hint-top", `${hintTop}px`);
  screenEl.style.setProperty("--guide-right", `${-clamp(width * 0.055, 18, 28)}px`);
  screenEl.style.setProperty("--guide-bottom", `${-clamp(height * 0.018, 12, 18)}px`);
  screenEl.style.setProperty("--guide-size", `${clamp(width * 0.23, 84, 98)}px`);
  screenEl.style.setProperty("--guide-closed-right", `${-Math.max(16, width * 0.055)}px`);
  screenEl.style.setProperty("--guide-closed-bottom", `${-Math.max(14, height * 0.02)}px`);
  screenEl.style.setProperty("--guide-closed-size", `${clamp(width * 0.34, 116, 144)}px`);
}

function syncStageScale() {
  const { viewportWidth, viewportHeight, isMobileViewport } = viewportMetrics();
  const flow = stageEl.dataset.flow || "app";
  const availableHeight = Math.max(420, viewportHeight - 8);
  let scale;
  if (isMobileViewport) {
    const widthScale = viewportWidth / 402;
    const heightScale = availableHeight / 874;
    scale = flow === "story" ? Math.min(widthScale, heightScale) : widthScale;
  } else {
    scale = Math.min(
      1.4,
      (window.innerWidth - 32) / 402,
      (window.innerHeight - 32) / 874
    );
  }
  const safeScale = Math.max(0.3, scale);
  document.documentElement.style.setProperty("--scale", String(safeScale));
  document.documentElement.style.setProperty("--viewport-w", `${viewportWidth}px`);
  document.documentElement.style.setProperty("--viewport-h", `${viewportHeight}px`);
  appShellEl.style.width = `${402 * safeScale}px`;
  appShellEl.style.height = `${874 * safeScale}px`;
  screenShellEl.style.width = `${402 * safeScale}px`;
  screenShellEl.style.height = `${874 * safeScale}px`;

  if (isMobileViewport && flow === "story") {
    const storyWidth = viewportWidth;
    const storyHeight = viewportHeight;
    document.documentElement.style.setProperty("--scale", "1");
    screenShellEl.style.width = `${storyWidth}px`;
    screenShellEl.style.height = `${storyHeight}px`;
    syncResponsiveStoryGeometry(storyWidth, storyHeight);
  } else {
    resetStoryGeometry();
  }

  applyCardMotion(0, false);
  if (isMobileViewport) {
    window.scrollTo(0, 0);
  }
}

function renderIdentity(story) {
  identityEl.innerHTML = `
    <h1 class="identity-title">
      <span>${story.name_he}</span>
      ${story.name_jp ? `<span lang="ja">${story.name_jp}</span>` : ""}
    </h1>
    <p class="identity-day">${story.day}</p>
  `;
}

function renderProgress() {
  progressEl.innerHTML = STORIES.map((story, index) => {
    const fill = index < current ? 1 : 0;
    return `
      <span class="progress-seg" data-progress-index="${index}" aria-label="${story.name_he}">
        <span class="progress-fill" style="--fill:${fill}"></span>
      </span>
    `;
  }).join("");
}

function setProgressFill(index, fill) {
  const segment = progressEl.querySelector(`[data-progress-index="${index}"] .progress-fill`);
  if (segment) segment.style.setProperty("--fill", String(clamp(fill, 0, 1)));
}

function paintProgress(fill) {
  progressEl.querySelectorAll(".progress-fill").forEach((bar, index) => {
    const value = index < current ? 1 : index === current ? fill : 0;
    bar.style.setProperty("--fill", String(value));
  });
}

function stopStoryProgress() {
  if (progressRaf) {
    window.cancelAnimationFrame(progressRaf);
    progressRaf = null;
  }
}

function runStoryProgress(timestamp) {
  if (stageEl.dataset.flow !== "story" || state === "open") {
    stopStoryProgress();
    return;
  }
  progressElapsed = timestamp - progressStartedAt;
  const fill = clamp(progressElapsed / STORY_DURATION_MS, 0, 1);
  setProgressFill(current, fill);
  if (fill >= 1) {
    go(1);
    return;
  }
  progressRaf = window.requestAnimationFrame(runStoryProgress);
}

function startStoryProgress({ reset = true } = {}) {
  stopStoryProgress();
  if (stageEl.dataset.flow !== "story") return;
  progressElapsed = reset ? 0 : clamp(progressElapsed, 0, STORY_DURATION_MS);
  paintProgress(progressElapsed / STORY_DURATION_MS);
  if (state === "open") return;
  progressStartedAt = performance.now() - progressElapsed;
  progressRaf = window.requestAnimationFrame(runStoryProgress);
}

function pauseStoryProgress() {
  if (stageEl.dataset.flow !== "story" || !progressRaf) return;
  progressElapsed = clamp(performance.now() - progressStartedAt, 0, STORY_DURATION_MS);
  stopStoryProgress();
}

function renderClosed(story, options = {}) {
  const heroPos = story.hero_pos || "50% 50%";
  const existing = closedViewEl.querySelector(".closed-hero");

  // No previous hero, or caller did not request a crossfade → snap.
  if (!existing || !options.crossfade) {
    closedViewEl.innerHTML = `
      <img class="closed-hero" src="${imagePath(story)}" style="--hero-pos:${heroPos}" alt="" loading="eager" decoding="sync" fetchpriority="high">
    `;
    return;
  }

  // Crossfade: append the new img on top with opacity 0, fade it in,
  // remove the old img once the transition completes.
  const next = document.createElement("img");
  next.className = "closed-hero is-entering";
  next.alt = "";
  next.style.setProperty("--hero-pos", heroPos);
  next.src = imagePath(story);
  closedViewEl.appendChild(next);

  // Force the initial opacity:0 to be committed before we remove the
  // class — otherwise the browser may skip the transition.
  void next.offsetWidth;
  next.classList.remove("is-entering");

  const cleanup = () => {
    if (existing && existing.parentNode === closedViewEl) {
      existing.remove();
    }
  };
  next.addEventListener("transitionend", cleanup, { once: true });
  // Safety in case transitionend doesn't fire (e.g. backgrounded tab).
  window.setTimeout(cleanup, 480);
}

function cardMarkup(story, role) {
  const heroPos = story.hero_pos || "50% 50%";
  const priority = role === "current" ? "high" : "auto";
  return `
    <article class="story-card" data-role="${role}" style="--hero-pos:${heroPos}">
      <img src="${imagePath(story)}" alt="" loading="eager" decoding="sync" fetchpriority="${priority}">
      <div class="card-identity">
        <h2 class="card-title">
          <span>${story.name_he}</span>
          ${story.name_jp ? `<span lang="ja">${story.name_jp}</span>` : ""}
        </h2>
        <p class="card-day">${story.day}</p>
      </div>
    </article>
  `;
}

function renderCards() {
  warmAdjacentAssets(current);
  carouselEl.innerHTML = [
    cardMarkup(STORIES[wrap(current - 2)], "prev-far"),
    cardMarkup(STORIES[wrap(current - 1)], "prev"),
    cardMarkup(STORIES[current], "current"),
    cardMarkup(STORIES[wrap(current + 1)], "next"),
    cardMarkup(STORIES[wrap(current + 2)], "next-far"),
  ].join("");
  applyCardMotion(0, false);
}

function detailsMarkup(story) {
  return story.characteristics.slice(0, 3).map((item, i) => `
    <li class="details-row" style="--delay: ${i * 70}ms">
      <img class="details-icon" src="${iconPath(item.icon)}" alt="" loading="eager" decoding="async">
      <span class="details-label">${item.label}</span>
    </li>
  `).join("");
}

function cleanupDetailsTransition() {
  openViewEl.querySelectorAll(".details-list-incoming").forEach((list) => list.remove());
  detailsListEl.classList.remove("is-details-animating");
  detailsListEl.style.removeProperty("--details-x");
  detailsListEl.style.removeProperty("--details-opacity");
  detailsListEl.style.removeProperty("transition");
  detailsTransitionDirection = 0;
}

function renderDetails(story) {
  cleanupDetailsTransition();
  detailsListEl.innerHTML = detailsMarkup(story);
}

function commitDetailsTransition() {
  const incoming = openViewEl.querySelector(".details-list-incoming");
  if (!incoming) return false;

  // Keep the exact incoming DOM node that the user already watched land.
  // Replacing it with freshly rendered rows creates a one-frame jump,
  // especially when images and text are re-laid out on mobile Safari.
  detailsListEl.remove();
  incoming.id = "details-list";
  incoming.classList.remove("details-list-incoming", "is-details-animating");
  incoming.removeAttribute("aria-hidden");
  incoming.style.removeProperty("--details-x");
  incoming.style.removeProperty("--details-opacity");
  incoming.style.removeProperty("transition");
  detailsListEl = incoming;
  detailsTransitionDirection = 0;
  return true;
}

function prepareDetailsTransition(direction) {
  if (detailsTransitionDirection === direction) {
    return openViewEl.querySelector(".details-list-incoming");
  }

  cleanupDetailsTransition();
  detailsTransitionDirection = direction;
  const incoming = document.createElement("ul");
  incoming.className = "details-list details-list-incoming";
  incoming.setAttribute("aria-hidden", "true");
  incoming.innerHTML = detailsMarkup(STORIES[wrap(current + direction)]);
  incoming.style.setProperty("--details-x", `${direction > 0 ? 42 : -42}px`);
  incoming.style.setProperty("--details-opacity", "0");
  openViewEl.appendChild(incoming);
  return incoming;
}

function applyDetailsMotion(progress, transition = false) {
  if (state !== "open") return;
  const amount = clamp(Math.abs(progress), 0, 1);

  if (amount === 0 && !detailsTransitionDirection) return;
  const direction = progress === 0
    ? detailsTransitionDirection
    : progress > 0 ? 1 : -1;
  const incoming = prepareDetailsTransition(direction);
  if (!incoming) return;

  const duration = transition ? `420ms ${EASE}` : "0ms linear";
  detailsListEl.style.transition = `transform ${duration}, opacity ${transition ? "360ms ease-out" : "0ms linear"}`;
  incoming.style.transition = `transform ${duration}, opacity ${transition ? "360ms ease-out" : "0ms linear"}`;
  detailsListEl.classList.add("is-details-animating");

  detailsListEl.style.setProperty("--details-x", `${direction > 0 ? -28 * amount : 28 * amount}px`);
  detailsListEl.style.setProperty("--details-opacity", String(1 - amount));
  incoming.style.setProperty("--details-x", `${direction > 0 ? 42 * (1 - amount) : -42 * (1 - amount)}px`);
  incoming.style.setProperty("--details-opacity", String(amount));
}

function snapDetailsBack() {
  if (!detailsTransitionDirection) return;
  const incoming = openViewEl.querySelector(".details-list-incoming");
  const direction = detailsTransitionDirection;
  detailsListEl.style.transition = `transform 320ms ${EASE}, opacity 220ms ease-out`;
  detailsListEl.style.setProperty("--details-x", "0px");
  detailsListEl.style.setProperty("--details-opacity", "1");
  if (incoming) {
    incoming.style.transition = `transform 320ms ${EASE}, opacity 180ms ease-out`;
    incoming.style.setProperty("--details-x", `${direction > 0 ? 42 : -42}px`);
    incoming.style.setProperty("--details-opacity", "0");
  }
  window.setTimeout(cleanupDetailsTransition, 340);
}

function renderRouteGrid() {
  routeGridEl.innerHTML = STORIES.map((story, index) => {
    const label = (IS_ORNA_TRIP ? ROUTE_LABELS[index] : null) || {
      name: story.name_he,
      days: story.day,
      color: "#ffc960",
    };
    return `
      <article class="route-card" aria-label="${label.name}, ${label.days}">
        <img src="${imagePath(story)}" alt="" loading="lazy" decoding="async">
        <span class="route-order">${index + 1}</span>
        <div class="route-meta">
          <span class="route-days">${label.days}</span>
          <span class="route-name">
            <span>${label.name}</span>
            <span class="route-dot" style="--dot:${label.color}"></span>
          </span>
        </div>
      </article>
    `;
  }).join("");
}

function applyCardStyle(card, values, transition) {
  card.style.width = `${values.w}px`;
  card.style.height = `${values.h}px`;
  card.style.borderRadius = `${values.r}px`;
  card.style.setProperty("--x", `${values.x}px`);
  card.style.setProperty("--y", `${values.y}px`);
  card.style.transition = transition
    ? `transform 420ms ${EASE}, width 420ms ${EASE}, height 420ms ${EASE}, border-radius 420ms ${EASE}`
    : "none";
}

function interpolate(from, to, t) {
  return {
    x: lerp(from.x, to.x, t),
    y: lerp(from.y, to.y, t),
    w: lerp(from.w, to.w, t),
    h: lerp(from.h, to.h, t),
    r: lerp(from.r, to.r, t),
  };
}

function applyCardMotion(progress, transition = false) {
  const prevFar = carouselEl.querySelector('[data-role="prev-far"]');
  const prev = carouselEl.querySelector('[data-role="prev"]');
  const cur = carouselEl.querySelector('[data-role="current"]');
  const next = carouselEl.querySelector('[data-role="next"]');
  const nextFar = carouselEl.querySelector('[data-role="next-far"]');
  if (!prevFar || !prev || !cur || !next || !nextFar) return;

  const amount = Math.abs(progress);
  const farPrev = { ...CARD.prev, x: CARD.prev.x - CARD.current.w };
  const farNext = { ...CARD.next, x: CARD.next.x + CARD.current.w };

  if (progress < 0) {
    applyCardStyle(prevFar, interpolate(farPrev, CARD.prev, amount), transition);
    applyCardStyle(prev, interpolate(CARD.prev, CARD.current, amount), transition);
    applyCardStyle(cur, interpolate(CARD.current, CARD.next, amount), transition);
    applyCardStyle(next, interpolate(CARD.next, farNext, amount), transition);
    applyCardStyle(nextFar, farNext, transition);
  } else if (progress > 0) {
    applyCardStyle(prevFar, farPrev, transition);
    applyCardStyle(next, interpolate(CARD.next, CARD.current, amount), transition);
    applyCardStyle(cur, interpolate(CARD.current, CARD.prev, amount), transition);
    applyCardStyle(prev, interpolate(CARD.prev, farPrev, amount), transition);
    applyCardStyle(nextFar, interpolate(farNext, CARD.next, amount), transition);
  } else {
    applyCardStyle(prevFar, farPrev, transition);
    applyCardStyle(prev, CARD.prev, transition);
    applyCardStyle(cur, CARD.current, transition);
    applyCardStyle(next, CARD.next, transition);
    applyCardStyle(nextFar, farNext, transition);
  }
}

function renderAll(options = {}) {
  const story = STORIES[current];
  renderClosed(story, options);
  renderIdentity(story);
  renderProgress();
  renderCards();
  if (!options.preserveDetails) renderDetails(story);
}

function setState(nextState) {
  state = nextState;
  screenEl.dataset.state = state;
  openViewEl.setAttribute("aria-hidden", state === "open" ? "false" : "true");
  closedViewEl.setAttribute("aria-hidden", state === "open" ? "true" : "false");
  guideButtonEl.setAttribute(
    "aria-label",
    state === "open" ? "סגירת פרטי היעד" : "פתיחת פרטי היעד"
  );
  stateHintEl.textContent = state === "open" ? "לחצו לסגירה" : "לחצו לפתיחה";
}

function openDetails() {
  if (state === "open") return;
  pauseStoryProgress();
  // Tag this state change as tap-driven so the CSS uses the
  // Figma-matched 300ms ease-out transitions defined under
  // `.screen.is-state-tween`. commitReveal() bypasses this — it
  // animates --reveal at its own 320ms cadence and calls
  // setState("open") only after the morph has settled.
  screenEl.classList.add("is-state-tween");
  setState("open");
  window.setTimeout(() => {
    screenEl.classList.remove("is-state-tween");
  }, 460);
}

function closeDetails() {
  if (state === "closed") return;
  // Mirror openDetails: tag this state change as tap-driven so the CSS
  // 300ms ease-out (Figma Smart Animate) plays in both directions.
  screenEl.classList.add("is-state-tween");
  setState("closed");
  startStoryProgress({ reset: false });
  window.setTimeout(() => {
    screenEl.classList.remove("is-state-tween");
  }, 460);
}

function toggleState() {
  if (state === "open") closeDetails();
  else openDetails();
}

function showApp() {
  stopStoryProgress();
  stageEl.dataset.flow = "app";
  syncStageScale();
  closeDetails();
}

function showStory({ reset = false } = {}) {
  if (reset) {
    current = 0;
    renderAll();
    closeDetails();
  }
  stageEl.dataset.flow = "story";
  syncStageScale();
  startStoryProgress({ reset: true });
}

function finishNavigation(direction) {
  const preserveDetails = state === "open" && commitDetailsTransition();
  current = wrap(current + direction);
  // Closed-state nav is the only path where the hero swap is visible
  // to the user; ask renderClosed to crossfade rather than snap.
  renderAll({
    crossfade: state === "closed",
    preserveDetails,
  });
  screenEl.classList.remove("is-sliding-prev", "is-sliding-next");
  animating = false;
  startStoryProgress({ reset: true });
}

function startOpenNavigationMotion(direction) {
  screenEl.classList.toggle("is-sliding-next", direction > 0);
  screenEl.classList.toggle("is-sliding-prev", direction < 0);
  applyCardMotion(direction, true);
  applyDetailsMotion(direction, true);
  window.setTimeout(() => finishNavigation(direction), 430);
}

function go(direction) {
  if (animating) return;
  stopStoryProgress();
  warmStoryAssets(current + direction);
  warmStoryAssets(current + direction * 2);
  animating = true;
  if (state === "open") {
    const incomingAlreadyMounted = detailsTransitionDirection === direction
      && Boolean(openViewEl.querySelector(".details-list-incoming"));

    if (incomingAlreadyMounted) {
      startOpenNavigationMotion(direction);
    } else {
      prepareDetailsTransition(direction);
      // Safari runs rAF before paint. A nested rAF guarantees one painted
      // frame at the incoming panel's starting offset before motion begins.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => startOpenNavigationMotion(direction));
      });
    }
  } else {
    // Closed state — no carousel cards to morph; snap to the next
    // destination and re-render. State stays "closed".
    finishNavigation(direction);
  }
}

function snapBack() {
  screenEl.classList.remove("is-sliding-prev", "is-sliding-next");
  applyCardMotion(0, true);
  snapDetailsBack();
}

// ─── Drag-up live reveal ────────────────────────────────────────────
// `--reveal` on .screen drives the closed-view scale + radius, the
// bottom-sheet (details-list) rise, and the rows' fade. During a live
// drag we set it inline; on release we either animate to 1 (commit to
// open) or to 0 (snap back to closed) with transitions re-enabled.

function setReveal(value) {
  screenEl.style.setProperty("--reveal", String(value));
}

function clearReveal() {
  screenEl.style.removeProperty("--reveal");
}

function commitReveal() {
  if (animating) return;
  animating = true;
  screenEl.classList.remove("is-drag-revealing");
  setReveal(1);
  window.setTimeout(() => {
    setState("open");
    clearReveal();
    animating = false;
  }, REVEAL_SETTLE_MS);
}

function snapRevealBack() {
  if (animating) return;
  animating = true;
  screenEl.classList.remove("is-drag-revealing");
  setReveal(0);
  window.setTimeout(() => {
    clearReveal();
    animating = false;
    startStoryProgress({ reset: false });
  }, REVEAL_SETTLE_MS);
}

function pointerXToUnscaled(dx) {
  if (stageEl.dataset.flow === "story" && viewportMetrics().isMobileViewport) return dx;
  const scale = screenEl.getBoundingClientRect().width / 402;
  return dx / scale;
}

function pointerYToUnscaled(dy) {
  if (stageEl.dataset.flow === "story" && viewportMetrics().isMobileViewport) return dy;
  const scale = screenEl.getBoundingClientRect().height / 874;
  return dy / scale;
}

screenEl.addEventListener("pointerdown", (event) => {
  if (animating) return;
  pauseStoryProgress();
  if (event.target.closest(".exit-button, .guide-button, .state-hint")) {
    press = null;
    return;
  }
  press = {
    x: event.clientX,
    y: event.clientY,
    t: Date.now(),
    rect: screenEl.getBoundingClientRect(),
    dragging: false,
    axis: null,
  };
});

screenEl.addEventListener("pointermove", (event) => {
  if (!press || animating) return;
  const dx = event.clientX - press.x;
  const dy = event.clientY - press.y;
  if (!press.dragging && (Math.abs(dx) > TAP_RADIUS || Math.abs(dy) > TAP_RADIUS)) {
    press.dragging = true;
    press.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    if (press.axis === "x") {
      screenEl.classList.add("is-dragging");
    }
  }

  // Open-state horizontal drag → carousel cards follow the finger.
  if (press && press.dragging && press.axis === "x" && state === "open") {
    const progress = clamp(-pointerXToUnscaled(dx) / dragDistance, -1, 1);
    applyCardMotion(progress, false);
    applyDetailsMotion(progress, false);
  }

  // Closed-state upward drag → engage live reveal. --reveal tracks the
  // upward distance; transitions stay suspended via .is-drag-revealing
  // so updates render frame-perfect with the finger.
  if (press && press.dragging && press.axis === "y" && state === "closed") {
    const unscaledDy = pointerYToUnscaled(dy);
    if (!press.revealing && unscaledDy < 0) {
      press.revealing = true;
      screenEl.classList.add("is-drag-revealing");
    }
    if (press.revealing) {
      const progress = clamp(-unscaledDy / revealThreshold, 0, 1);
      setReveal(progress);
    }
  }
});

screenEl.addEventListener("pointerup", (event) => {
  if (!press) return;
  const dx = event.clientX - press.x;
  const dy = event.clientY - press.y;
  const wasDragging = press.dragging;
  const wasRevealing = press.revealing;
  const axis = press.axis;
  screenEl.classList.remove("is-dragging");
  press = null;

  if (wasDragging) {
    suppressClick = true;
    window.setTimeout(() => {
      suppressClick = false;
    }, 0);

    // Live-reveal drag took priority — commit to open if past the
    // threshold fraction, otherwise snap back to closed.
    if (wasRevealing) {
      const unscaledDy = pointerYToUnscaled(dy);
      const progress = clamp(-unscaledDy / revealThreshold, 0, 1);
      if (progress >= REVEAL_COMMIT_PROGRESS) commitReveal();
      else snapRevealBack();
      return;
    }

    if (axis === "y") {
      const unscaledDy = pointerYToUnscaled(dy);
      if (unscaledDy < -verticalSwipeCommit) {
        openDetails();
        startStoryProgress({ reset: false });
      } else if (unscaledDy > verticalSwipeCommit) {
        if (state === "open") closeDetails();
        else showApp();
        startStoryProgress({ reset: false });
      } else {
        startStoryProgress({ reset: false });
      }
    } else {
      const unscaledDx = pointerXToUnscaled(dx);
      if (Math.abs(unscaledDx) > swipeCommit) {
        go(unscaledDx < 0 ? 1 : -1);
      } else if (state === "open") {
        // Snap-back is a card animation; only meaningful in open state.
        snapBack();
        startStoryProgress({ reset: false });
      } else {
        startStoryProgress({ reset: false });
      }
    }
    return;
  }
  startStoryProgress({ reset: false });
});

screenEl.addEventListener("click", (event) => {
  if (animating || suppressClick) return;
  if (event.target.closest(".exit-button, .guide-button, .state-hint")) return;
  const rect = screenEl.getBoundingClientRect();
  const zone = (event.clientX - rect.left) / rect.width;
  if (state === "closed") {
    go(zone > 0.5 ? 1 : -1);
  } else if (zone < 0.32) {
    go(-1);
  } else if (zone > 0.68) {
    go(1);
  }
});

screenEl.addEventListener("pointercancel", () => {
  screenEl.classList.remove("is-dragging");
  if (press && press.revealing) {
    snapRevealBack();
  } else if (press && press.dragging && state === "open") {
    snapBack();
  }
  press = null;
});

document.addEventListener("visibilitychange", () => {
  if (stageEl.dataset.flow !== "story") return;
  if (document.hidden) {
    pauseStoryProgress();
  } else {
    startStoryProgress({ reset: false });
  }
});

openRevealEl.addEventListener("click", () => {
  showStory({ reset: true });
});

exitButtonEl.addEventListener("click", (event) => {
  event.stopPropagation();
  showApp();
});

guideButtonEl.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleState();
  startStoryProgress({ reset: false });
});

stateHintEl.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleState();
  startStoryProgress({ reset: false });
});

document.addEventListener("keydown", (event) => {
  if (stageEl.dataset.flow !== "story") return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleState();
  }
  if (event.key === "Escape") showApp();
  if (event.key === "ArrowLeft") {
    go(-1);
  }
  if (event.key === "ArrowRight") {
    go(1);
  }
});

const params = new URLSearchParams(window.location.search);
const requested = Number.parseInt(params.get("n") || "1", 10);
current = clamp(Number.isFinite(requested) ? requested - 1 : 0, 0, STORIES.length - 1);
if (params.get("state") === "open") state = "open";
const initialFlow = params.get("flow") === "story" || params.has("n") || params.has("state")
  ? "story"
  : "app";

preloadAssets();
stageEl.dataset.flow = initialFlow;
syncStageScale();
renderRouteGrid();
renderAll();
setState(state);
startStoryProgress({ reset: true });
window.addEventListener("resize", syncStageScale);
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", syncStageScale);
  window.visualViewport.addEventListener("scroll", syncStageScale);
}
