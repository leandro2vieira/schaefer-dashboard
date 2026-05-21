/* ============================================================
   OceanCraft Boats — Application Logic
   Rendering engine, live clock, and mock data refresh
   ============================================================ */

'use strict';

// ── SVG ICONS ────────────────────────────────────────────────
const ICONS = {
  layers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  hammer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>`,
  scissors: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  droplet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  anchor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  alert: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  factory: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`,
};

// ── HEALTH STATUS HELPER ─────────────────────────────────────
function getHealthStatus(boat) {
  const delta = boat.progress - boat.plannedProgress;
  if (delta >= 0) return 'healthy';
  const deviationPct = Math.abs(delta) / boat.plannedProgress * 100;
  if (deviationPct <= 15) return 'warning';
  return 'critical';
}

// ── HEALTH LABEL MAP ─────────────────────────────────────────
const HEALTH_LABEL = {
  healthy:  'No prazo',
  warning:  'Atenção',
  critical: 'Atrasado',
};

const HEALTH_ICON = {
  healthy:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  warning:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  critical: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
};

const FACTORY_LABEL = {
  healthy:  'OPERAÇÃO NORMAL',
  warning:  'ATENÇÃO',
  critical: 'CRÍTICO',
};

// ── DEVIATION TAG ────────────────────────────────────────────
function deviationTag(actual, planned) {
  if (actual === undefined || planned === undefined) return '';
  const diff = actual - planned;
  if (diff < -1)      return `<span class="deviation-tag ahead">▲ ${Math.abs(diff)}d adiantado</span>`;
  if (diff === 0 || (diff >= -1 && diff <= 1)) return `<span class="deviation-tag ontrack">No prazo</span>`;
  if (diff <= 7)      return `<span class="deviation-tag behind-mild">▼ +${diff}d atraso</span>`;
  return `<span class="deviation-tag behind-critical">▼ +${diff}d ATRASO</span>`;
}

// ── BOAT IMAGE (real photo or SVG placeholder) ───────────────
function buildBoatImage(boat) {
  if (boat.imageUrl) {
    return `<img
      src="${boat.imageUrl}"
      alt="${boat.name}"
      loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
      style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"
    /><div class="boat-image-placeholder" style="display:none">${buildBoatSVG(boat.color)}</div>`;
  }
  return `<div class="boat-image-placeholder">${buildBoatSVG(boat.color)}</div>`;
}

// ── BOAT SILHOUETTE PLACEHOLDER ──────────────────────────────
function buildBoatSVG(color) {
  return `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bg_${color.replace('#','')}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#060912" stop-opacity="0.9"/>
      </linearGradient>
      <linearGradient id="water_${color.replace('#','')}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.2"/>
        <stop offset="50%" stop-color="${color}" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0.2"/>
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="320" height="180" fill="url(#bg_${color.replace('#','')})"/>
    <!-- Water lines -->
    <ellipse cx="160" cy="148" rx="140" ry="8" fill="url(#water_${color.replace('#','')})"/>
    <line x1="20" y1="152" x2="300" y2="152" stroke="${color}" stroke-opacity="0.15" stroke-width="1"/>
    <line x1="40" y1="158" x2="280" y2="158" stroke="${color}" stroke-opacity="0.08" stroke-width="1"/>
    <!-- Hull -->
    <path d="M55 140 Q60 148 160 150 Q260 148 265 140 L255 120 L65 120 Z"
          fill="${color}" fill-opacity="0.25" stroke="${color}" stroke-opacity="0.5" stroke-width="1.5"/>
    <!-- Deck / superstructure -->
    <rect x="90" y="90" width="130" height="32" rx="4"
          fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-opacity="0.4" stroke-width="1"/>
    <!-- Cabin -->
    <rect x="110" y="70" width="80" height="22" rx="3"
          fill="${color}" fill-opacity="0.28" stroke="${color}" stroke-opacity="0.5" stroke-width="1"/>
    <!-- Bridge windows -->
    <rect x="118" y="75" width="12" height="10" rx="2" fill="${color}" fill-opacity="0.6"/>
    <rect x="135" y="75" width="12" height="10" rx="2" fill="${color}" fill-opacity="0.6"/>
    <rect x="152" y="75" width="12" height="10" rx="2" fill="${color}" fill-opacity="0.6"/>
    <rect x="169" y="75" width="12" height="10" rx="2" fill="${color}" fill-opacity="0.6"/>
    <!-- Mast -->
    <line x1="160" y1="35" x2="160" y2="70" stroke="${color}" stroke-opacity="0.5" stroke-width="1.5"/>
    <line x1="135" y1="48" x2="185" y2="48" stroke="${color}" stroke-opacity="0.3" stroke-width="1"/>
    <!-- Bow detail -->
    <path d="M255 120 Q268 128 265 140" fill="none" stroke="${color}" stroke-opacity="0.4" stroke-width="1.5"/>
    <!-- Waterline glow -->
    <ellipse cx="160" cy="145" rx="100" ry="3" fill="${color}" fill-opacity="0.1"/>
  </svg>`;
}

// ── STAGE NODE RENDERER ──────────────────────────────────────
function renderStageNode(stage, stageIdx, boatId) {
  const def = PRODUCTION_STAGES.find(s => s.id === stage.id);
  const status = stage.status;
  const isFirst = stageIdx === 0;

  const connectorClass = isFirst ? '' : `<div class="stage-connector ${status}"></div>`;

  let deviationChip = '';
  if (stage.deviationDays !== 0 && (status === 'done' || status === 'active' || status === 'delayed')) {
    const d = stage.deviationDays;
    if (d < 0) {
      deviationChip = `<span class="stage-dev-chip ahead">▲ ${Math.abs(d)}d</span>`;
    } else if (d <= 3) {
      deviationChip = `<span class="stage-dev-chip mild">+${d}d</span>`;
    } else {
      deviationChip = `<span class="stage-dev-chip delayed">+${d}d</span>`;
    }
  } else if (status === 'done' && stage.deviationDays === 0) {
    deviationChip = `<span class="stage-dev-chip ontrack">✓</span>`;
  }

  const prevLbl = `<span class="stage-date-lbl">Prev</span><span class="stage-date-val">${formatDate(stage.plannedEnd)}</span>`;
  const realLbl = stage.actualEnd
    ? `<span class="stage-date-lbl">Real</span><span class="stage-date-val ${status === 'done' ? 'done-val' : 'active-val'}">${formatDate(stage.actualEnd)}</span>`
    : (stage.actualStart
        ? `<span class="stage-date-lbl">Início</span><span class="stage-date-val active-val">${formatDate(stage.actualStart)}</span>`
        : `<span class="stage-date-lbl">Início</span><span class="stage-date-val">${formatDate(stage.plannedStart)}</span>`);

  return `
    <div class="stage-node ${status} stage-node--clickable"
         data-boat-id="${boatId}"
         data-stage-id="${stage.id}"
         title="Ver ordens de produção: ${def.label}">
      ${connectorClass}
      <div class="stage-icon-wrap ${status}">
        ${ICONS[def.icon] || ''}
      </div>
      <div class="stage-label-block">
        <span class="stage-name">${def.label}</span>
        <div class="stage-date-info">
          <div class="stage-date-row">${prevLbl}</div>
          <div class="stage-date-row">${realLbl}</div>
        </div>
        <div class="stage-deviation">${deviationChip}</div>
      </div>
    </div>`;
}

// ── BOAT CARD RENDERER ───────────────────────────────────────
function renderBoatCard(boat) {
  const health = getHealthStatus(boat);
  const cardClass = health === 'critical' ? 'card-critical' : (health === 'warning' ? 'card-warning' : '');

  // Progress deviation
  const progressDelta = boat.progress - boat.plannedProgress;
  let progressDeviationHtml = '';
  if (progressDelta > 2) {
    progressDeviationHtml = `<span class="deviation-tag ahead">▲ +${progressDelta}% adiantado</span>`;
  } else if (progressDelta >= -2 && progressDelta <= 2) {
    progressDeviationHtml = `<span class="deviation-tag ontrack">No prazo</span>`;
  } else if (progressDelta > -15) {
    progressDeviationHtml = `<span class="deviation-tag behind-mild">▼ ${Math.abs(progressDelta)}% atraso</span>`;
  } else {
    progressDeviationHtml = `<span class="deviation-tag behind-critical">▼ ${Math.abs(progressDelta)}% CRÍTICO</span>`;
  }

  // Planned marker position
  const markerPct = Math.min(boat.plannedProgress, 98);

  // Week stats
  const weeksLeft = boat.totalWeeks - boat.currentWeek;

  // Stage nodes
  const stagesHtml = boat.stages.map((s, i) => renderStageNode(s, i, boat.id)).join('');

  // Health badge — standalone, prominent
  const healthBadge = `<div class="health-badge-bar ${health}">
    <span class="hbb-icon">${HEALTH_ICON[health]}</span>
    <span class="hbb-text">${HEALTH_LABEL[health]}</span>
  </div>`;

  return `
    <div class="boat-card ${cardClass}" style="--boat-color: ${boat.color}" id="card-${boat.id}">

      <!-- ─ LEFT: Boat Info ─ -->
      <div class="boat-info">
        <div class="boat-image-wrap">
          ${buildBoatImage(boat)}
        </div>

        ${healthBadge}

        <div class="boat-name">${boat.name}</div>
        <div class="boat-model">${boat.model}</div>

        <div class="boat-meta">
          <div class="boat-meta-row">
            <span class="meta-label">Projeto</span>
            <span class="meta-value accent">${boat.project}</span>
          </div>
          <div class="boat-meta-row">
            <span class="meta-label">Cliente</span>
            <span class="meta-value">${boat.client}</span>
          </div>
          <div class="boat-meta-row">
            <span class="meta-label">Semana</span>
            <span class="meta-value">${boat.currentWeek} / ${boat.totalWeeks}</span>
          </div>
          ${boat.specs ? `
          <div class="boat-meta-row">
            <span class="meta-label">Comprimento</span>
            <span class="meta-value">${boat.specs.length}</span>
          </div>
          <div class="boat-meta-row">
            <span class="meta-label">Motor</span>
            <span class="meta-value">${boat.specs.motor}</span>
          </div>
          <div class="boat-meta-row">
            <span class="meta-label">Lotação</span>
            <span class="meta-value">${boat.specs.capacity}</span>
          </div>` : `
          <div class="boat-meta-row">
            <span class="meta-label">Duração total</span>
            <span class="meta-value">${boat.totalWeeks} semanas</span>
          </div>`}
        </div>
      </div>

      <!-- ─ RIGHT TOP: Progress ─ -->
      <div class="boat-progress-section">
        <div class="progress-header">
          <div style="display:flex;align-items:baseline;gap:8px">
            <span class="progress-pct" id="pct-${boat.id}" style="color:${boat.color}">${boat.progress}<span class="pct-sym">%</span></span>
            <span style="font-size:13px;color:var(--text-muted);font-weight:500">concluído</span>
          </div>
          <div class="progress-stats">
            <div class="progress-stat">
              <span class="progress-stat-value">${boat.currentWeek}</span>
              <span class="progress-stat-label">Semanas realizadas</span>
            </div>
            <div class="progress-stat">
              <span class="progress-stat-value">${weeksLeft}</span>
              <span class="progress-stat-label">Semanas restantes</span>
            </div>
            <div class="progress-stat">
              <span class="progress-stat-value">${progressDeviationHtml}</span>
              <span class="progress-stat-label">vs. Planejado</span>
            </div>
          </div>
        </div>

        <div class="progress-track-wrap">
          <div class="progress-track">
            <div class="progress-fill" id="fill-${boat.id}" style="width:${boat.progress}%; background:${boat.color}"></div>
            <div class="progress-planned-marker" style="left:${markerPct}%">
              <div class="progress-planned-label">Planejado ${boat.plannedProgress}%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─ RIGHT BOTTOM: Timeline ─ -->
      <div class="boat-timeline-section">
        <div class="timeline-header">Fluxo de Produção</div>
        <div class="timeline-track">
          ${stagesHtml}
        </div>
      </div>

    </div>`;
}

// ── GLOBAL KPI RENDER ────────────────────────────────────────
function renderKPIs(boats) {
  const kpis = getGlobalKPIs(boats);

  document.getElementById('kpi-total').textContent     = kpis.total;
  document.getElementById('kpi-delayed').textContent   = kpis.delayed;
  document.getElementById('kpi-critical').textContent  = kpis.critical;
  document.getElementById('kpi-progress').textContent  = kpis.avgProgress + '%';
  document.getElementById('kpi-weekly').textContent    = kpis.avgWeeklyAdvance.toFixed(1) + '%';

  const badge = document.getElementById('factory-status');
  badge.className = 'factory-status-badge ' + kpis.factoryStatus;
  badge.innerHTML = `<span class="status-dot"></span>${FACTORY_LABEL[kpis.factoryStatus]}`;

  // Highlight delayed KPI block
  const delayedBlock = document.getElementById('kpi-block-delayed');
  if (delayedBlock) {
    delayedBlock.className = 'kpi-block ' + (kpis.delayed > 0 ? 'kpi-warn' : 'kpi-good');
  }

  const critBlock = document.getElementById('kpi-block-critical');
  if (critBlock) {
    critBlock.className = 'kpi-block ' + (kpis.critical > 0 ? 'kpi-crit' : 'kpi-good');
  }
}

// ── CLOCK ────────────────────────────────────────────────────
function updateClock() {
  const now = new Date();

  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const timeEl = document.getElementById('clock-time');
  if (timeEl) timeEl.textContent = `${hh}:${mm}:${ss}`;

  const dateEl = document.getElementById('clock-date');
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString('pt-BR', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).replace(',', '').replace('.', '');
  }
}

// ── LIVE DATA UPDATE (mock simulation) ──────────────────────
let liveBoats = JSON.parse(JSON.stringify(BOATS)); // deep clone
let updateCount = 0;

function runLiveUpdate() {
  updateCount++;
  const indicator = document.getElementById('live-indicator');
  if (indicator) indicator.style.opacity = '0.4';

  // Randomly pick 1-2 boats to slightly update
  const numToUpdate = Math.floor(Math.random() * 2) + 1;
  const indices = [];
  while (indices.length < numToUpdate) {
    const idx = Math.floor(Math.random() * liveBoats.length);
    if (!indices.includes(idx)) indices.push(idx);
  }

  indices.forEach(idx => {
    const boat = liveBoats[idx];
    // Increment progress by 0 or 1 (simulate slow production advance)
    const increment = Math.random() < 0.4 ? 1 : 0;
    if (boat.progress < 99 && increment) {
      boat.progress = Math.min(99, boat.progress + increment);
      // Update DOM elements directly (no full re-render to preserve animations)
      const pctEl = document.getElementById('pct-' + boat.id);
      const fillEl = document.getElementById('fill-' + boat.id);
      if (pctEl) {
        pctEl.innerHTML = `${boat.progress}<span class="pct-sym">%</span>`;
        pctEl.style.animation = 'none';
        void pctEl.offsetWidth; // reflow
        pctEl.style.animation = 'counter-tick 0.3s ease';
      }
      if (fillEl) {
        fillEl.style.width = boat.progress + '%';
      }
    }
  });

  // Update global KPIs
  renderKPIs(liveBoats);

  // Flash live indicator
  setTimeout(() => {
    if (indicator) indicator.style.opacity = '1';
  }, 400);

  // Update last refresh time
  const lastEl = document.getElementById('last-update');
  if (lastEl) {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    lastEl.textContent = `Atualizado às ${hh}:${mm}:${ss}`;
  }
}

// ── INITIAL RENDER ───────────────────────────────────────────
function render() {
  const container = document.getElementById('boats-container');
  if (!container) return;

  container.innerHTML = liveBoats.map(renderBoatCard).join('');
  renderKPIs(liveBoats);
}

// ── THEME TOGGLE ─────────────────────────────────────────────
function toggleTheme() {
  var html = document.documentElement;
  var current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  try { localStorage.setItem('sy-theme', html.getAttribute('data-theme')); } catch(e) {}
}

// ── BOOT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // Restore saved theme
  try {
    var saved = localStorage.getItem('sy-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch(e) {}

  render();
  updateClock();

  // Clock ticks every second
  setInterval(updateClock, 1000);

  // Live data refresh every 30 seconds
  setInterval(runLiveUpdate, 30000);

  // ── Delegated click handler for stage nodes ──────────────
  document.addEventListener('click', function (e) {
    var node = e.target.closest('.stage-node--clickable');
    if (node) {
      openOpModal(node.dataset.boatId, node.dataset.stageId);
      return;
    }
    // Close when clicking the overlay backdrop (not the dialog)
    var overlay = document.getElementById('op-modal');
    if (overlay && e.target === overlay) {
      closeOpModal();
    }
  });

  document.getElementById('op-modal-close').addEventListener('click', closeOpModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeOpModal();
  });
});

// ── MODAL: ORDENS DE PRODUÇÃO ─────────────────────────────────
function openOpModal(boatId, stageId) {
  var boat = BOATS.find(function (b) { return b.id === boatId; });
  if (!boat) return;

  var stageDef = PRODUCTION_STAGES.find(function (s) { return s.id === stageId; });
  var stageData = boat.stages.find(function (s) { return s.id === stageId; });
  var ops = (PRODUCTION_ORDERS[boatId] && PRODUCTION_ORDERS[boatId][stageId]) || [];

  var pending = ops.filter(function (o) { return !o.dtRealFim; });
  var done    = ops.filter(function (o) { return  o.dtRealFim; });

  // Populate header
  var badge = document.getElementById('op-modal-boat-badge');
  badge.textContent = boat.project;
  badge.style.color = boat.color;
  badge.style.borderColor = boat.color;

  document.getElementById('op-modal-title').textContent = stageDef ? stageDef.label : stageId;
  document.getElementById('op-modal-subtitle').textContent =
    boat.name + ' \u00b7 Status: ' + labelStatus(stageData ? stageData.status : '');

  // Summary chips
  document.getElementById('op-modal-summary').innerHTML =
    '<span class="op-chip op-chip-total">' + ops.length + ' OPs total</span>' +
    '<span class="op-chip op-chip-pending">' + pending.length + ' pendente' + (pending.length !== 1 ? 's' : '') + '</span>' +
    '<span class="op-chip op-chip-done">' + done.length + ' conclu\u00edda' + (done.length !== 1 ? 's' : '') + '</span>';

  // Body
  var bodyEl = document.getElementById('op-modal-body');
  bodyEl.innerHTML = '';

  if (pending.length > 0) {
    bodyEl.innerHTML += buildOpSection('Pendentes (' + pending.length + ')', pending, 'pending-hdr', false);
  }
  if (done.length > 0) {
    bodyEl.innerHTML += buildOpSection('Conclu\u00eddas (' + done.length + ')', done, 'done-hdr', true);
  }
  if (ops.length === 0) {
    bodyEl.innerHTML = '<p class="op-empty">Nenhuma ordem de produ\u00e7\u00e3o registrada para esta etapa.</p>';
  }

  var modal = document.getElementById('op-modal');
  modal.removeAttribute('hidden');
  bodyEl.scrollTop = 0;
}

function closeOpModal() {
  var modal = document.getElementById('op-modal');
  if (modal) modal.setAttribute('hidden', '');
}

function labelStatus(status) {
  var map = { done: 'Conclu\u00eddo', active: 'Em andamento', pending: 'Pendente', delayed: 'Atrasado' };
  return map[status] || status;
}

function buildOpSection(title, ops, headerClass, isDone) {
  var thead =
    '<thead><tr>' +
    '<th>N\u00ba OP</th><th>Item</th><th>Seq</th><th>Produto</th>' +
    '<th>Prev. In\u00edcio</th><th>Entrega</th><th>Arma.</th>' +
    '<th>Emiss\u00e3o</th><th>Qtd. Prod.</th><th>Fim Real</th><th>Status</th>' +
    '</tr></thead>';

  var rows = ops.map(function (o) {
    var rowClass = isDone ? 'op-row-done' : '';
    var statusCell = isDone
      ? '<span class="op-col-status-done">&#10003; Conclu\u00edda</span>'
      : '<span class="op-col-status-pending">&#9679; Pendente</span>';
    var fimCell = o.dtRealFim
      ? '<span class="op-col-fim">' + formatDate(o.dtRealFim) + '</span>'
      : '<span style="color:var(--text-muted)">—</span>';
    return '<tr class="' + rowClass + '">' +
      '<td class="op-col-op">' + o.op + '</td>' +
      '<td>' + o.item + '</td>' +
      '<td>' + o.seq + '</td>' +
      '<td class="op-col-produto">' + o.produto + '</td>' +
      '<td>' + formatDate(o.prevIni) + '</td>' +
      '<td>' + formatDate(o.entrega) + '</td>' +
      '<td>' + o.armazem + '</td>' +
      '<td>' + formatDate(o.dtEmissao) + '</td>' +
      '<td style="text-align:center">' + o.qtdProduzida + '</td>' +
      '<td>' + fimCell + '</td>' +
      '<td>' + statusCell + '</td>' +
      '</tr>';
  }).join('');

  return '<div>' +
    '<div class="op-section-header ' + headerClass + '">' + title + '</div>' +
    '<div class="op-table-wrap">' +
      '<table class="op-table">' + thead + '<tbody>' + rows + '</tbody></table>' +
    '</div>' +
    '</div>';
}
