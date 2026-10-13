/* ============================================================
   مشويات الرافدين — TV Menu Logic
   ============================================================ */

const IMG_PATH = "images/";

const CATEGORIES = [
  {
    name: "المشويات",
    items: [
      ["مشكل مشويات", 38, [["38","نفر"],["76","وسط"],["152","كبير"]], "mashakel-mashawi.jpg"],
      ["كباب لحم", 37, [["37","نفر"],["74","وسط"],["148","كبير"]], "kabab-lahm.jpg"],
      ["كباب عراقي الرافدين", 37, [["37","نفر"],["74","وسط"],["148","كبير"]], "kabab-iraqi.jpg"],
      ["كباب باذنجان", 40, [["40","نفر"],["80","وسط"],["160","كبير"]], "kabab-badanjan.jpg"],
      ["كباب باللبن", 42, [["42","نفر"],["84","وسط"],["168","كبير"]], "kabab-laban.jpg"],
      ["كباب خشخاش", 40, [["40","نفر"]], "kabab-khashkhash.jpg"],
      ["مشكل لحم (كباب-اوصال)", 39, [["39","نفر"],["78","وسط"],["156","كبير"]], "mashakel-lahm.jpg"],
      ["كباب دجاج", 35, [["35","نفر"],["70","وسط"],["140","كبير"]], "kabab-dajaj.jpg"],
      ["مشكل دجاج (كباب-شيش)", 35, [["35","نفر"],["70","وسط"],["140","كبير"]], "mashakel-dajaj.jpg"],
      ["مشكل كباب (لحم-دجاج)", 37, [["37","نفر"],["74","وسط"],["148","كبير"]], "mashakel-kabab.jpg"],
      ["مشكل اوصال (شيش-اوصال)", 36, [["36","نفر"],["72","وسط"],["143","كبير"]], "mashakel-awsal.jpg"],
      ["ريش", 38, [["38","نفر"],["76","وسط"],["152","كبير"]], "reesh.jpg"],
      ["طبق ملكي الرافدين", 214, [["214","طبق"]], "tabaq-malaki-rafidain.jpg"],
      ["مشكل مشويات بدون اوصال", 37, [["37","نفر"],["74","وسط"],["148","كبير"]], "mashakel-mashawi-bidon-awsal.jpg"],
      ["كباب الرافدين بالمكسرات", 39, [["39","نفر"],["74","وسط"],["148","كبير"]], "kabab-rafidain-mukasarat.jpg"],
      ["كباب بالجوز", 42, [["42","نفر"],["84","وسط"],["168","كبير"]], "kabab-jawz.jpg"],
      ["كباب جبن", 42, [["42","نفر"],["84","وسط"],["168","كبير"]], "kabab-jibn.jpg"],
      ["شيش طاووق بالزعتر البري", 37, [["37","نفر"],["74","وسط"],["148","كبير"]], "shish-tawouk-zaatar.jpg"],
      ["مسكوف سمك عروس", 75, [["75","طبق"]], "maskouf-samak-arous.jpg"],
      ["كباب مبشور الرافدين", 39, [["39","نفر"],["78","وسط"],["156","كبير"]], "kabab-mabshour-rafidain.jpg"]
    ]
  },
  {
    name: "صواني الفرن",
    items: [
      ["كفتة لحم بالفرن", 37, [["37","طبق"]], "kofta-lahm-furn.jpg"],
      ["كفتة دجاج بالفرن", 35, [["35","طبق"]], "kofta-dajaj-furn.jpg"],
      ["كفتة لحم طحينية", 39, [["39","طبق"]], "kofta-lahm-tahina.jpg"],
      ["حميس لحم", 37, [["37","طبق"]], "hamees-lahm.jpg"],
      ["اوصال دجاج فرن", 36, [["36","طبق"]], "awsal-dajaj-furn.jpg"],
      ["اوصال لحم بالفرن", 38, [["38","طبق"]], "awsal-lahm-furn.jpg"],
      ["طوايه عراقية", 39, [["39","طبق"]], "tawayi-iraqiya.jpg"],
      ["حميس دجاج بالفرن", 35, [["35","طبق"]], "hamees-dajaj-furn.jpg"],
      ["كفتة دجاج طحينية", 37, [["37","طبق"]], "kofta-dajaj-tahina.jpg"],
      ["كفتة جبن والمكسرات", 39, [["39","طبق"]], "kofta-jibn-mukasarat.jpg"],
      ["كفتة لحم جبن", 38, [["38","طبق"]], "kofta-lahm-jibn.jpg"],
      ["كفتة دجاج بالجبن", 38, [["38","طبق"]], "kofta-dajaj-jibn.jpg"],
      ["كفتة مشوية", 36, [["36","طبق"]], "kofta-mashwiya.jpg"],
      ["كفتة مشويه بالجبن", 38, [["38","طبق"]], "kofta-mashwiya-jibn.jpg"],
      ["اوصال لحم فرن طماطم", 38, [["38","طبق"]], "awsal-lahm-furn-tamatam.jpg"],
      ["بروستد", 22, [["22","طبق"]], "broasted.jpg"],
      ["برياني دجاج", 37, [["37","طبق"]], "biryani-dajaj.jpg"],
      ["حميس لحم طماطم حاره", 39, [["39","طبق"]], "hamees-lahm-tamatam-harra.jpg"]
    ]
  }
];

/* ============================================================
   TIMING
   ============================================================ */
const OPTION_SECONDS = 1.0;         // 1s per pill (was 0.5)
const SINGLE_OPTION_SECONDS = 1.5;  // 1.5s for single-option items
const CARD_BASE_MS = 200;

/* ============================================================
   DOM
   ============================================================ */
const app = document.getElementById("app");
const stageWrap = document.getElementById("stageWrap");
const stage = document.getElementById("stage");
const categoryTitle = document.getElementById("categoryTitle");
const progressBar = document.getElementById("progressBar");
const countdown = document.getElementById("countdown");
const transition = document.getElementById("transition");
const pageDots = document.getElementById("pageDots");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const exitFs = document.getElementById("exitFs");

/* ============================================================
   STATE
   ============================================================ */
let categoryIndex = 0;
let activeItemIndex = 0;
let activeOptionIndex = 0;
let pageStarted = 0;
let itemStarted = 0;
let optionStarted = 0;
let running = false;
let raf = 0;
let transitioning = false;
let currentPageDuration = 0;
let fullscreenLock = false;

/* ============================================================
   HELPERS
   ============================================================ */
function getOptionCount(item) {
  const opts = (item[2] && item[2].length) ? item[2] : [[item[1], "سعر"]];
  return opts.length;
}
function getItemDuration(item) {
  const count = getOptionCount(item);
  if (count <= 1) return SINGLE_OPTION_SECONDS * 1000 + CARD_BASE_MS;
  return count * OPTION_SECONDS * 1000 + CARD_BASE_MS;
}
function computePageDuration(items) {
  let total = 0;
  for (const it of items) total += getItemDuration(it);
  return total;
}

/* ============================================================
   RENDER
   ============================================================ */
function renderDots() {
  pageDots.innerHTML = CATEGORIES.map((_, i) =>
    `<div class="dot ${i === categoryIndex ? "active" : ""}"></div>`
  ).join("");
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function makeCard(item, i) {
  const [name, basePrice, options, img] = item;
  const optionList = (options && options.length) ? options : [[basePrice, "سعر"]];
  const isSolo = optionList.length === 1;

  const optionsHTML = optionList.map(o => `
    <div class="option ${isSolo ? 'solo' : ''}" data-opt="${esc(o[0])}">
      <b>${esc(o[0])}</b>
      <span>${esc(o[1])}</span>
    </div>
  `).join("");

  const imgHTML = img
    ? `<img src="${IMG_PATH}${esc(img)}" alt="" loading="eager" decoding="async"
         onload="this.classList.add('loaded')"
         onerror="this.style.display='none'">`
    : "";

  return `
    <article class="card ${i === activeItemIndex ? "active" : "dim"}" data-index="${i}">
      <div class="activePulse"></div>
      <div class="cardImage">
        ${imgHTML}
        <div class="placeholder">IMAGE</div>
        <div class="itemNameOverlay">
          <div class="itemName">${esc(name)}</div>
        </div>
      </div>
      <div class="cardBody">
        <div class="options">${optionsHTML}</div>
      </div>
    </article>`;
}

function render() {
  const cat = CATEGORIES[categoryIndex];
  categoryTitle.textContent = cat.name;
  stage.innerHTML = cat.items.map(makeCard).join("");
  stage.style.transform = "translateY(0)";
  renderDots();
  activeItemIndex = 0;
  activeOptionIndex = 0;
  currentPageDuration = computePageDuration(cat.items);
  requestAnimationFrame(() => {
    applyActiveStates();
    scrollToActive(false);
  });
}

function scrollToActive(smooth) {
  const activeCard = stage.children[activeItemIndex];
  if (!activeCard) return;
  const wrapH = stageWrap.clientHeight;
  const cardTop = activeCard.offsetTop;
  const cardH = activeCard.offsetHeight;
  const cardCenter = cardTop + cardH / 2;
  let targetY = cardCenter - wrapH / 2;
  const maxScroll = Math.max(0, stage.scrollHeight - wrapH);
  targetY = Math.max(0, Math.min(maxScroll, targetY));
  stage.style.transition = smooth ? "transform .7s var(--ease)" : "none";
  stage.style.transform = `translateY(${-targetY}px)`;
  if (!smooth) {
    void stage.offsetHeight;
    stage.style.transition = "transform .7s var(--ease)";
  }
}

function applyActiveStates() {
  const cards = [...stage.children];
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === activeItemIndex);
    card.classList.toggle("dim", i !== activeItemIndex);
  });
  const activeCard = cards[activeItemIndex];
  if (!activeCard) return;
  const pills = activeCard.querySelectorAll(".option");
  pills.forEach((pill, idx) => {
    pill.classList.toggle("active", idx === activeOptionIndex);
  });
}
function clearAllOptionHighlights() {
  stage.querySelectorAll(".option.active").forEach(el => el.classList.remove("active"));
}
function activateItem(index) {
  activeItemIndex = index;
  activeOptionIndex = 0;
  applyActiveStates();
  scrollToActive(true);
}
function activateOption(index) {
  activeOptionIndex = index;
  applyActiveStates();
}

/* ============================================================
   CATEGORY SWITCH
   ============================================================ */
function goNextCategory() {
  if (transitioning) return;
  transitioning = true;
  transition.classList.add("show");
  categoryTitle.classList.add("fade-out");
  stageWrap.style.opacity = "0";

  setTimeout(() => {
    categoryIndex = (categoryIndex + 1) % CATEGORIES.length;
    activeItemIndex = 0;
    activeOptionIndex = 0;
    render();
    const now = performance.now();
    pageStarted = now;
    itemStarted = now;
    optionStarted = now;
    categoryTitle.classList.remove("fade-out");
    stageWrap.style.opacity = "1";
    setTimeout(() => {
      transition.classList.remove("show");
      transitioning = false;
    }, 90);
  }, 420);
}

/* ============================================================
   ANIMATION LOOP — with no pill loop-back
   ============================================================ */
function tick(now) {
  if (!running) { raf = requestAnimationFrame(tick); return; }
  if (transitioning) { raf = requestAnimationFrame(tick); return; }

  const elapsedTotal = now - pageStarted;
  const remainingMs = Math.max(0, currentPageDuration - elapsedTotal);
  countdown.textContent = Math.ceil(remainingMs / 1000);
  progressBar.style.transform = `scaleX(${Math.max(0, remainingMs / currentPageDuration)})`;

  const currentCard = stage.children[activeItemIndex];
  if (currentCard) {
    const pillCount = currentCard.querySelectorAll(".option").length;
    const itemDuration = (pillCount <= 1)
      ? (SINGLE_OPTION_SECONDS * 1000 + CARD_BASE_MS)
      : (pillCount * OPTION_SECONDS * 1000 + CARD_BASE_MS);
    const elapsedItem = now - itemStarted;

    if (elapsedItem >= itemDuration) {
      clearAllOptionHighlights();
      itemStarted = now;
      optionStarted = now;
      const totalItems = CATEGORIES[categoryIndex].items.length;
      const nextItem = (activeItemIndex + 1) % totalItems;
      activateItem(nextItem);
    } else if (pillCount > 1) {
      const elapsedOptions = now - optionStarted;
      if (elapsedOptions >= OPTION_SECONDS * 1000) {
        optionStarted = now;
        const nextOpt = activeOptionIndex + 1;
        if (nextOpt < pillCount) {
          activateOption(nextOpt);   // walk forward only: 0 → 1 → 2
        }
      }
    }
  }

  if (elapsedTotal >= currentPageDuration) goNextCategory();
  raf = requestAnimationFrame(tick);
}

/* ============================================================
   FULLSCREEN
   ============================================================ */
async function enterFullscreen() {
  try {
    if (document.documentElement.requestFullscreen) {
      fullscreenLock = true;
      await document.documentElement.requestFullscreen();
      setTimeout(() => { fullscreenLock = false; }, 800);
    }
  } catch (e) { fullscreenLock = false; }

  document.body.classList.add("fs");
  startScreen.classList.add("hide");
  app.classList.add("running");

  running = true;
  transitioning = false;
  categoryIndex = 0;
  activeItemIndex = 0;
  activeOptionIndex = 0;
  render();
  const now = performance.now();
  pageStarted = now;
  itemStarted = now;
  optionStarted = now;
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(tick);
}

function exitFullscreen() {
  running = false;
  transitioning = false;
  cancelAnimationFrame(raf);
  if (document.fullscreenElement && document.exitFullscreen) {
    fullscreenLock = true;
    document.exitFullscreen().catch(() => {});
    setTimeout(() => { fullscreenLock = false; }, 800);
  }
  document.body.classList.remove("fs");
  startScreen.classList.remove("hide");
  app.classList.remove("running");
}

startBtn.addEventListener("click", enterFullscreen);
exitFs.addEventListener("click", exitFullscreen);

document.addEventListener("fullscreenchange", () => {
  if (fullscreenLock) return;
  if (!document.fullscreenElement && running) exitFullscreen();
});

window.addEventListener("resize", () => {
  if (running) scrollToActive(false);
});

render();