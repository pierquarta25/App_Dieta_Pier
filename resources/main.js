/* ============================================================
   Piano Nutrizionale — Pier
   main.js — Aggiornato: 1 Aprile 2026
   ============================================================ */

// ── DATA ────────────────────────────────────────────────────
const MACROS = {
  on:  { kcal: 2800, prot: 240, carb: 310, fat: 55 },
  off: { kcal: 2720, prot: 235, carb: 260, fat: 65 },
};

// ── STATE ────────────────────────────────────────────────────
let currentDay = 'on';

// ── DOM REFS ─────────────────────────────────────────────────
const btnOn   = document.getElementById('bOn');
const btnOff  = document.getElementById('bOff');
const pill    = document.getElementById('tp');
const viewOn  = document.getElementById('vOn');
const viewOff = document.getElementById('vOff');
const kcalEl  = document.getElementById('kn');
const protEl  = document.getElementById('pn');
const carbEl  = document.getElementById('cn');
const fatEl   = document.getElementById('fn');

// ── TOGGLE DAY ───────────────────────────────────────────────
function sw(day) {
  if (day === currentDay) return;
  currentDay = day;

  btnOn.classList.toggle('active', day === 'on');
  btnOff.classList.toggle('active', day === 'off');

  const activeBtn = day === 'on' ? btnOn : btnOff;
  pill.style.width     = activeBtn.offsetWidth + 'px';
  pill.style.transform = day === 'on' ? 'translateX(0)' : `translateX(${btnOn.offsetWidth + 4}px)`;

  animateNumber(kcalEl, MACROS[day].kcal);
  animateNumber(protEl, MACROS[day].prot);
  animateNumber(carbEl, MACROS[day].carb);
  animateNumber(fatEl,  MACROS[day].fat);

  if (day === 'on') {
    viewOff.className = 'day-view hidden';
    viewOn.className  = 'day-view visible';
  } else {
    viewOn.className  = 'day-view hidden';
    viewOff.className = 'day-view visible';
  }
}

// ── ACCORDION ────────────────────────────────────────────────
function toggle(card) {
  const body    = card.querySelector('.meal-body');
  const chevron = card.querySelector('.chevron');
  const isOpen  = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}

// ── ANIMATED NUMBER COUNTER ───────────────────────────────────
function animateNumber(el, target) {
  const start    = parseInt(el.textContent) || 0;
  const duration = 400;
  const t0       = performance.now();

  function tick(t) {
    const progress = Math.min((t - t0) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// ── INIT ─────────────────────────────────────────────────────
window.addEventListener('load', () => {
  pill.style.width = btnOn.offsetWidth + 'px';
});