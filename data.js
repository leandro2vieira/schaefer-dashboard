// Schaefer Yachts — Dados Reais de Produção
// Fonte: www.schaeferyachts.com.br/barcos
// Semana de referência: 2026-05-18

const PRODUCTION_STAGES = [
  { id: 'marcenaria', label: 'Marcenaria', icon: 'hammer' },
  { id: 'pintura',    label: 'Pintura',    icon: 'droplet' },
  { id: 'costura',    label: 'Costura',    icon: 'scissors' },
  { id: 'fibra',      label: 'Fibra',      icon: 'layers' },
  { id: 'chicote',    label: 'Chicote',    icon: 'zap' },
  { id: 'entrega',    label: 'Entrega',    icon: 'anchor' },
];

// Imagens: Wix CDN oficial Schaefer Yachts (static.wixstatic.com)
// URLs capturadas diretamente do DOM das páginas de produto (hero images 1485px)
var WIX_BASE = 'https://static.wixstatic.com/media/96e999_';
var WIX_FMT_JPG = '/v1/fill/w_900,h_506,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg';
var WIX_FMT_PNG = '/v1/fill/w_900,h_506,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.png';

// status: 'done' | 'active' | 'pending' | 'delayed'
const BOATS = [
  // ─────────────────────────────────────────────────────────
  // 1. Schaefer 26M — 86ft — Maior iate fabricado em série no Brasil
  // ─────────────────────────────────────────────────────────
  {
    id: 'hull-2601',
    name: 'Schaefer 26M',
    model: 'Linha Schaefer — 26M · 86 pés',
    project: 'HULL-2601',
    client: 'Grupo Atlântico S.A.',
    specs: {
      length: '26,00 m · 86 ft',
      beam: '—',
      motor: 'Volvo Penta IPS',
      capacity: 'Lotação 12 · Noite 4',
    },
    description: 'O maior iate fabricado em série no Brasil. Amplo espaço interno totalmente personalizável, acabamento primoroso em cada detalhe.',
    imageUrl: WIX_BASE + '0091c091cdd04b32bc4f5467e16a1b74~mv2.jpg' + WIX_FMT_JPG,
    pageUrl: 'https://www.schaeferyachts.com.br/schaefer-26m',
    currentWeek: 8,
    totalWeeks: 20,
    progress: 72,
    plannedProgress: 67,
    color: '#06b6d4',
    stages: [
      { id: 'marcenaria', status: 'done',    plannedStart: '2026-01-05', plannedEnd: '2026-01-30', actualStart: '2026-01-05', actualEnd: '2026-01-30', deviationDays: 0 },
      { id: 'pintura',    status: 'done',    plannedStart: '2026-02-02', plannedEnd: '2026-02-27', actualStart: '2026-02-02', actualEnd: '2026-03-01', deviationDays: 2 },
      { id: 'costura',    status: 'done',    plannedStart: '2026-03-02', plannedEnd: '2026-03-27', actualStart: '2026-03-04', actualEnd: '2026-03-29', deviationDays: 2 },
      { id: 'fibra',      status: 'done',    plannedStart: '2026-03-30', plannedEnd: '2026-04-17', actualStart: '2026-03-30', actualEnd: '2026-04-17', deviationDays: 0 },
      { id: 'chicote',    status: 'active',  plannedStart: '2026-04-20', plannedEnd: '2026-05-15', actualStart: '2026-04-22', actualEnd: null,         deviationDays: 2 },
      { id: 'entrega',    status: 'pending', plannedStart: '2026-05-18', plannedEnd: '2026-06-05', actualStart: null,         actualEnd: null,         deviationDays: 0 },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 2. Schaefer 770 — 77.19ft — Marco do estaleiro
  // Comprimento: 23,53 m · Boca: 5,91 m · Lotação: 25 · Noite: 8+3
  // Motor: Volvo Penta IPS1050
  // ─────────────────────────────────────────────────────────
  {
    id: 'hull-7701',
    name: 'Schaefer 770',
    model: 'Linha Schaefer — 770 · 77 pés',
    project: 'HULL-7701',
    client: 'Navegações Boreais Ltda.',
    specs: {
      length: '23,53 m · 77,19 ft',
      beam: 'Boca 5,91 m',
      motor: 'Volvo Penta IPS1050',
      capacity: 'Lotação 25 · Noite 8+3',
    },
    description: 'Um projeto ousado, moderno, sofisticado. Dois balcões laterais que se abrem formando ampla área de convivência integrada ao mar.',
    imageUrl: WIX_BASE + 'cd11906d01514ef6a4d7b2a6e3dabb20~mv2.jpg' + WIX_FMT_JPG,
    pageUrl: 'https://www.schaeferyachts.com.br/schaefer-770',
    currentWeek: 5,
    totalWeeks: 18,
    progress: 45,
    plannedProgress: 37,
    color: '#8b5cf6',
    stages: [
      { id: 'marcenaria', status: 'done',    plannedStart: '2026-02-02', plannedEnd: '2026-03-06', actualStart: '2026-02-02', actualEnd: '2026-03-06', deviationDays: 0 },
      { id: 'pintura',    status: 'done',    plannedStart: '2026-03-09', plannedEnd: '2026-04-10', actualStart: '2026-03-09', actualEnd: '2026-04-15', deviationDays: 5 },
      { id: 'costura',    status: 'active',  plannedStart: '2026-04-13', plannedEnd: '2026-05-22', actualStart: '2026-04-18', actualEnd: null,         deviationDays: 5 },
      { id: 'fibra',      status: 'pending', plannedStart: '2026-05-25', plannedEnd: '2026-06-19', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'chicote',    status: 'pending', plannedStart: '2026-06-22', plannedEnd: '2026-07-10', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'entrega',    status: 'pending', plannedStart: '2026-07-13', plannedEnd: '2026-07-31', actualStart: null,         actualEnd: null,         deviationDays: 0 },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 3. Schaefer 660 — 66ft — Sucesso de mercado
  // Comprimento: 20,08 m · Boca: 5,05 m · Lotação: 20 · Noite: 8+2
  // Motor: Volvo Penta IPS1050/1200
  // ─────────────────────────────────────────────────────────
  {
    id: 'hull-6601',
    name: 'Schaefer 660',
    model: 'Linha Schaefer — 660 · 66 pés',
    project: 'HULL-6601',
    client: 'Marina Costa Azul',
    specs: {
      length: '20,08 m · 66 ft',
      beam: 'Boca 5,05 m',
      motor: 'Volvo Penta IPS1050/1200',
      capacity: 'Lotação 20 · Noite 8+2',
    },
    description: 'Varandas laterais garantem 25% mais espaço na praça de popa. 4 camarotes com entrada independente para suíte master.',
    imageUrl: WIX_BASE + '3eff267db70342a9960a44b591696b47~mv2.jpg' + WIX_FMT_JPG,
    pageUrl: 'https://www.schaeferyachts.com.br/schaefer-660',
    currentWeek: 11,
    totalWeeks: 16,
    progress: 91,
    plannedProgress: 90,
    color: '#10b981',
    stages: [
      { id: 'marcenaria', status: 'done',    plannedStart: '2026-01-05', plannedEnd: '2026-01-23', actualStart: '2026-01-05', actualEnd: '2026-01-22', deviationDays: -1 },
      { id: 'pintura',    status: 'done',    plannedStart: '2026-01-26', plannedEnd: '2026-02-13', actualStart: '2026-01-26', actualEnd: '2026-02-12', deviationDays: -1 },
      { id: 'costura',    status: 'done',    plannedStart: '2026-02-16', plannedEnd: '2026-03-06', actualStart: '2026-02-16', actualEnd: '2026-03-06', deviationDays: 0 },
      { id: 'fibra',      status: 'done',    plannedStart: '2026-03-09', plannedEnd: '2026-03-27', actualStart: '2026-03-09', actualEnd: '2026-03-27', deviationDays: 0 },
      { id: 'chicote',    status: 'done',    plannedStart: '2026-03-30', plannedEnd: '2026-04-17', actualStart: '2026-03-30', actualEnd: '2026-04-17', deviationDays: 0 },
      { id: 'entrega',    status: 'active',  plannedStart: '2026-04-20', plannedEnd: '2026-05-29', actualStart: '2026-04-20', actualEnd: null,         deviationDays: 0 },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 4. Schaefer 600 — 59.3ft — Líder de segmento
  // Comprimento: 18,08 m · Boca: 4,96 m · Lotação: 18 · Noite: 6+2
  // Motor: Volvo Penta IPS950
  // ─────────────────────────────────────────────────────────
  {
    id: 'hull-6001',
    name: 'Schaefer 600',
    model: 'Linha Schaefer — 600 · 59 pés',
    project: 'HULL-6001',
    client: 'Delta Yachts Corp.',
    specs: {
      length: '18,08 m · 59,3 ft',
      beam: 'Boca 4,96 m',
      motor: 'Volvo Penta IPS950',
      capacity: 'Lotação 18 · Noite 6+2',
    },
    description: 'Nasceu para liderar. Balcões laterais retráteis entregam espaço de convivência nunca visto antes. Um novo conceito de espaço e tecnologia.',
    imageUrl: WIX_BASE + '495c1beb547e46229a4d35a97eab6bc3~mv2.jpg' + WIX_FMT_JPG,
    pageUrl: 'https://www.schaeferyachts.com.br/schaefer-600',
    currentWeek: 4,
    totalWeeks: 14,
    progress: 28,
    plannedProgress: 42,
    color: '#ef4444',
    stages: [
      { id: 'marcenaria', status: 'done',    plannedStart: '2026-02-02', plannedEnd: '2026-02-27', actualStart: '2026-02-02', actualEnd: '2026-03-06', deviationDays: 7 },
      { id: 'pintura',    status: 'delayed', plannedStart: '2026-03-02', plannedEnd: '2026-03-27', actualStart: '2026-03-09', actualEnd: null,         deviationDays: 9 },
      { id: 'costura',    status: 'pending', plannedStart: '2026-03-30', plannedEnd: '2026-04-24', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'fibra',      status: 'pending', plannedStart: '2026-04-27', plannedEnd: '2026-05-22', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'chicote',    status: 'pending', plannedStart: '2026-05-25', plannedEnd: '2026-06-12', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'entrega',    status: 'pending', plannedStart: '2026-06-15', plannedEnd: '2026-06-26', actualStart: null,         actualEnd: null,         deviationDays: 0 },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 5. Schaefer 450 — 45ft — Classe e requinte no flybridge
  // Comprimento: 13,66 m · Boca: 4,26 m · Lotação: 14 · Noite: 4+1
  // ─────────────────────────────────────────────────────────
  {
    id: 'hull-4501',
    name: 'Schaefer 450',
    model: 'Linha Schaefer — 450 · 45 pés',
    project: 'HULL-4501',
    client: 'Armadores do Sul S.A.',
    specs: {
      length: '13,66 m · 45 ft',
      beam: 'Boca 4,26 m',
      motor: 'Motores de centro',
      capacity: 'Lotação 14 · Noite 4+1',
    },
    description: 'Vista pro mar invade as manhãs pela suíte master a meia-nau. Flybridge com novo padrão de classe e requinte para 45 pés.',
    imageUrl: WIX_BASE + '7a7ec1ac44784c7d94a8c84dd7ba719f~mv2.jpg' + WIX_FMT_JPG, // hero da página 450
    currentWeek: 7,
    totalWeeks: 10,
    progress: 60,
    plannedProgress: 55,
    color: '#f59e0b',
    stages: [
      { id: 'marcenaria', status: 'done',    plannedStart: '2026-02-23', plannedEnd: '2026-03-13', actualStart: '2026-02-23', actualEnd: '2026-03-13', deviationDays: 0 },
      { id: 'pintura',    status: 'done',    plannedStart: '2026-03-16', plannedEnd: '2026-04-03', actualStart: '2026-03-16', actualEnd: '2026-04-07', deviationDays: 4 },
      { id: 'costura',    status: 'done',    plannedStart: '2026-04-06', plannedEnd: '2026-04-24', actualStart: '2026-04-09', actualEnd: '2026-04-29', deviationDays: 5 },
      { id: 'fibra',      status: 'active',  plannedStart: '2026-04-27', plannedEnd: '2026-05-22', actualStart: '2026-05-04', actualEnd: null,         deviationDays: 7 },
      { id: 'chicote',    status: 'pending', plannedStart: '2026-05-25', plannedEnd: '2026-06-12', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'entrega',    status: 'pending', plannedStart: '2026-06-15', plannedEnd: '2026-06-26', actualStart: null,         actualEnd: null,         deviationDays: 0 },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 6. Schaefer 380 — 38ft — Design e sofisticação acessíveis
  // Comprimento: 11,80 m · Boca: 3,69 m · Lotação: 14 · Noite: 4
  // ─────────────────────────────────────────────────────────
  {
    id: 'hull-3801',
    name: 'Schaefer 380',
    model: 'Linha Schaefer — 380 · 38 pés',
    project: 'HULL-3801',
    client: 'Pacific Ventures Inc.',
    specs: {
      length: '11,80 m · 38,71 ft',
      beam: 'Boca 3,69 m',
      motor: 'Motores de popa',
      capacity: 'Lotação 14 · Noite 4',
    },
    description: 'Duas varandas retráteis, praça de popa integrada ao cockpit, 1,90m de pé direito e passagem interna à proa. Design sem concessões.',
    imageUrl: WIX_BASE + '7b403cec772b4306835fa637335bae6f~mv2.jpg' + WIX_FMT_JPG, // hero da página 380
    currentWeek: 2,
    totalWeeks: 8,
    progress: 15,
    plannedProgress: 14,
    color: '#3b82f6',
    stages: [
      { id: 'marcenaria', status: 'active',  plannedStart: '2026-05-04', plannedEnd: '2026-05-29', actualStart: '2026-05-04', actualEnd: null,         deviationDays: 0 },
      { id: 'pintura',    status: 'pending', plannedStart: '2026-06-01', plannedEnd: '2026-06-19', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'costura',    status: 'pending', plannedStart: '2026-06-22', plannedEnd: '2026-07-10', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'fibra',      status: 'pending', plannedStart: '2026-07-13', plannedEnd: '2026-07-24', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'chicote',    status: 'pending', plannedStart: '2026-07-27', plannedEnd: '2026-08-07', actualStart: null,         actualEnd: null,         deviationDays: 0 },
      { id: 'entrega',    status: 'pending', plannedStart: '2026-08-10', plannedEnd: '2026-08-21', actualStart: null,         actualEnd: null,         deviationDays: 0 },
    ],
  },
];

// Derive health status from progress vs planned
function getHealthStatus(boat) {
  const delta = boat.progress - boat.plannedProgress;
  const deviationPct = Math.abs(delta) / boat.plannedProgress * 100;
  if (delta >= 0) return 'healthy';         // on track or ahead
  if (deviationPct <= 15) return 'warning'; // 0-15% behind
  return 'critical';                        // >15% behind
}

// Calculate global KPIs
function getGlobalKPIs(boats) {
  const total = boats.length;
  const delayed = boats.filter(b => {
    const h = getHealthStatus(b);
    return h === 'warning' || h === 'critical';
  }).length;
  const critical = boats.filter(b => getHealthStatus(b) === 'critical').length;
  const avgProgress = Math.round(boats.reduce((s, b) => s + b.progress, 0) / total);
  var delayedStages = [];
  boats.forEach(function(b) {
    b.stages.forEach(function(s) {
      if (s.deviationDays > 0) delayedStages.push(s.deviationDays);
    });
  });
  var avgDeviation = delayedStages.length > 0
    ? Math.round(delayedStages.reduce(function(a, v) { return a + v; }, 0) / delayedStages.length)
    : 0;

  let factoryStatus = 'healthy';
  if (critical > 0) factoryStatus = 'critical';
  else if (delayed > 0) factoryStatus = 'warning';

  return { total, delayed, critical, avgProgress, avgDeviation, factoryStatus };
}

// Format date for display
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// ── ORDENS DE PRODUÇÃO (mock) ─────────────────────────────────
// Campos: op, item, seq, produto, prevIni, entrega, armazem, dtEmissao, qtdProduzida, dtRealFim
// dtRealFim: null = pendente | ISO date = concluída
var PRODUCTION_ORDERS = {

  // ── Schaefer 26M ────────────────────────────────────────────
  'hull-2601': {
    marcenaria: [
      { op:'26010A', item:'01', seq:'001', produto:'SY26M-CAB-SALAO',    prevIni:'2026-01-05', entrega:'2026-01-10', armazem:'01', dtEmissao:'2025-11-12', qtdProduzida:1, dtRealFim:'2026-01-10' },
      { op:'26010A', item:'02', seq:'002', produto:'SY26M-CAB-SUITE1',   prevIni:'2026-01-05', entrega:'2026-01-12', armazem:'01', dtEmissao:'2025-11-12', qtdProduzida:1, dtRealFim:'2026-01-12' },
      { op:'26010A', item:'03', seq:'003', produto:'SY26M-CAB-SUITE2',   prevIni:'2026-01-08', entrega:'2026-01-15', armazem:'01', dtEmissao:'2025-11-12', qtdProduzida:1, dtRealFim:'2026-01-15' },
      { op:'26010A', item:'04', seq:'004', produto:'SY26M-CAB-COZINHA',  prevIni:'2026-01-12', entrega:'2026-01-20', armazem:'01', dtEmissao:'2025-11-12', qtdProduzida:1, dtRealFim:'2026-01-21' },
      { op:'26010A', item:'05', seq:'005', produto:'SY26M-CAB-COCKPIT',  prevIni:'2026-01-20', entrega:'2026-01-27', armazem:'01', dtEmissao:'2025-11-15', qtdProduzida:1, dtRealFim:'2026-01-28' },
      { op:'26010A', item:'06', seq:'006', produto:'SY26M-CAB-BANHEIRO1',prevIni:'2026-01-22', entrega:'2026-01-30', armazem:'02', dtEmissao:'2025-11-15', qtdProduzida:2, dtRealFim:'2026-01-30' },
    ],
    pintura: [
      { op:'26020A', item:'01', seq:'001', produto:'SY26M-PINT-FUNDO',   prevIni:'2026-02-02', entrega:'2026-02-07', armazem:'02', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-02-07' },
      { op:'26020A', item:'02', seq:'002', produto:'SY26M-PINT-CASCO',   prevIni:'2026-02-07', entrega:'2026-02-14', armazem:'02', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-02-15' },
      { op:'26020A', item:'03', seq:'003', produto:'SY26M-PINT-SUPEST',  prevIni:'2026-02-14', entrega:'2026-02-21', armazem:'02', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-02-22' },
      { op:'26020A', item:'04', seq:'004', produto:'SY26M-PINT-DECK',    prevIni:'2026-02-21', entrega:'2026-02-27', armazem:'02', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-03-01' },
      { op:'26020A', item:'05', seq:'005', produto:'SY26M-PINT-ANTIVEGET',prevIni:'2026-02-24', entrega:'2026-02-27', armazem:'02', dtEmissao:'2025-12-05', qtdProduzida:1, dtRealFim:'2026-03-01' },
    ],
    costura: [
      { op:'26030A', item:'01', seq:'001', produto:'SY26M-CST-ESTOFOS-S1',prevIni:'2026-03-04', entrega:'2026-03-10', armazem:'03', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-03-11' },
      { op:'26030A', item:'02', seq:'002', produto:'SY26M-CST-ESTOFOS-S2',prevIni:'2026-03-04', entrega:'2026-03-12', armazem:'03', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-03-13' },
      { op:'26030A', item:'03', seq:'003', produto:'SY26M-CST-CORTINAS',  prevIni:'2026-03-10', entrega:'2026-03-18', armazem:'03', dtEmissao:'2026-01-10', qtdProduzida:6, dtRealFim:'2026-03-18' },
      { op:'26030A', item:'04', seq:'004', produto:'SY26M-CST-COLCHOES',  prevIni:'2026-03-12', entrega:'2026-03-20', armazem:'03', dtEmissao:'2026-01-10', qtdProduzida:4, dtRealFim:'2026-03-20' },
      { op:'26030A', item:'05', seq:'005', produto:'SY26M-CST-COCKPIT',   prevIni:'2026-03-20', entrega:'2026-03-27', armazem:'03', dtEmissao:'2026-01-15', qtdProduzida:1, dtRealFim:'2026-03-29' },
      { op:'26030A', item:'06', seq:'006', produto:'SY26M-CST-SUN-DECK',  prevIni:'2026-03-22', entrega:'2026-03-29', armazem:'03', dtEmissao:'2026-01-15', qtdProduzida:1, dtRealFim:'2026-03-29' },
    ],
    fibra: [
      { op:'26040A', item:'01', seq:'001', produto:'SY26M-FIB-CASCO',    prevIni:'2026-03-30', entrega:'2026-04-07', armazem:'04', dtEmissao:'2026-02-01', qtdProduzida:1, dtRealFim:'2026-04-07' },
      { op:'26040A', item:'02', seq:'002', produto:'SY26M-FIB-CONVEZ',   prevIni:'2026-04-03', entrega:'2026-04-10', armazem:'04', dtEmissao:'2026-02-01', qtdProduzida:1, dtRealFim:'2026-04-10' },
      { op:'26040A', item:'03', seq:'003', produto:'SY26M-FIB-SUPEREST', prevIni:'2026-04-07', entrega:'2026-04-14', armazem:'04', dtEmissao:'2026-02-01', qtdProduzida:1, dtRealFim:'2026-04-14' },
      { op:'26040A', item:'04', seq:'004', produto:'SY26M-FIB-REPARO',   prevIni:'2026-04-14', entrega:'2026-04-17', armazem:'04', dtEmissao:'2026-02-05', qtdProduzida:1, dtRealFim:'2026-04-17' },
    ],
    chicote: [
      { op:'26050A', item:'01', seq:'001', produto:'SY26M-CHI-MOTOR1',   prevIni:'2026-04-22', entrega:'2026-04-28', armazem:'05', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-04-29' },
      { op:'26050A', item:'02', seq:'002', produto:'SY26M-CHI-MOTOR2',   prevIni:'2026-04-22', entrega:'2026-04-28', armazem:'05', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-04-30' },
      { op:'26050A', item:'03', seq:'003', produto:'SY26M-CHI-PAINEL',   prevIni:'2026-04-28', entrega:'2026-05-05', armazem:'05', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-05-05' },
      { op:'26050A', item:'04', seq:'004', produto:'SY26M-CHI-ELÉTRICA', prevIni:'2026-05-02', entrega:'2026-05-09', armazem:'05', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:null },
      { op:'26050A', item:'05', seq:'005', produto:'SY26M-CHI-HIDRÁULIC',prevIni:'2026-05-05', entrega:'2026-05-12', armazem:'05', dtEmissao:'2026-02-10', qtdProduzida:0, dtRealFim:null },
      { op:'26050A', item:'06', seq:'006', produto:'SY26M-CHI-NAVEGAC',  prevIni:'2026-05-09', entrega:'2026-05-15', armazem:'05', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
    ],
    entrega: [
      { op:'26060A', item:'01', seq:'001', produto:'SY26M-ENT-VISTORIA', prevIni:'2026-05-18', entrega:'2026-05-22', armazem:'01', dtEmissao:'2026-03-15', qtdProduzida:0, dtRealFim:null },
      { op:'26060A', item:'02', seq:'002', produto:'SY26M-ENT-SEGURO',   prevIni:'2026-05-20', entrega:'2026-05-25', armazem:'01', dtEmissao:'2026-03-15', qtdProduzida:0, dtRealFim:null },
      { op:'26060A', item:'03', seq:'003', produto:'SY26M-ENT-TREINAMT', prevIni:'2026-05-25', entrega:'2026-05-30', armazem:'01', dtEmissao:'2026-03-15', qtdProduzida:0, dtRealFim:null },
      { op:'26060A', item:'04', seq:'004', produto:'SY26M-ENT-DOCS',     prevIni:'2026-05-28', entrega:'2026-06-02', armazem:'01', dtEmissao:'2026-03-15', qtdProduzida:0, dtRealFim:null },
      { op:'26060A', item:'05', seq:'005', produto:'SY26M-ENT-COMISS',   prevIni:'2026-06-02', entrega:'2026-06-05', armazem:'01', dtEmissao:'2026-03-15', qtdProduzida:0, dtRealFim:null },
    ],
  },

  // ── Schaefer 770 ────────────────────────────────────────────
  'hull-7701': {
    marcenaria: [
      { op:'77010A', item:'01', seq:'001', produto:'SY770-CAB-SALAO',    prevIni:'2026-02-02', entrega:'2026-02-09', armazem:'01', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-02-09' },
      { op:'77010A', item:'02', seq:'002', produto:'SY770-CAB-MASTER',   prevIni:'2026-02-09', entrega:'2026-02-18', armazem:'01', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-02-18' },
      { op:'77010A', item:'03', seq:'003', produto:'SY770-CAB-CABINE2',  prevIni:'2026-02-16', entrega:'2026-02-25', armazem:'01', dtEmissao:'2025-12-01', qtdProduzida:1, dtRealFim:'2026-02-25' },
      { op:'77010A', item:'04', seq:'004', produto:'SY770-CAB-COZINHA',  prevIni:'2026-02-23', entrega:'2026-03-03', armazem:'01', dtEmissao:'2025-12-05', qtdProduzida:1, dtRealFim:'2026-03-03' },
      { op:'77010A', item:'05', seq:'005', produto:'SY770-CAB-HELM',     prevIni:'2026-03-02', entrega:'2026-03-06', armazem:'01', dtEmissao:'2025-12-05', qtdProduzida:1, dtRealFim:'2026-03-06' },
    ],
    pintura: [
      { op:'77020A', item:'01', seq:'001', produto:'SY770-PINT-FUNDO',   prevIni:'2026-03-09', entrega:'2026-03-14', armazem:'02', dtEmissao:'2026-01-05', qtdProduzida:1, dtRealFim:'2026-03-14' },
      { op:'77020A', item:'02', seq:'002', produto:'SY770-PINT-CASCO',   prevIni:'2026-03-14', entrega:'2026-03-24', armazem:'02', dtEmissao:'2026-01-05', qtdProduzida:1, dtRealFim:'2026-03-25' },
      { op:'77020A', item:'03', seq:'003', produto:'SY770-PINT-SUPEST',  prevIni:'2026-03-24', entrega:'2026-04-03', armazem:'02', dtEmissao:'2026-01-05', qtdProduzida:1, dtRealFim:'2026-04-05' },
      { op:'77020A', item:'04', seq:'004', produto:'SY770-PINT-DECK',    prevIni:'2026-04-03', entrega:'2026-04-12', armazem:'02', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-04-15' },
      { op:'77020A', item:'05', seq:'005', produto:'SY770-PINT-ANTIVEGET',prevIni:'2026-04-10', entrega:'2026-04-15', armazem:'02', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-04-15' },
    ],
    costura: [
      { op:'77030A', item:'01', seq:'001', produto:'SY770-CST-MASTER',   prevIni:'2026-04-18', entrega:'2026-04-27', armazem:'03', dtEmissao:'2026-02-01', qtdProduzida:1, dtRealFim:null },
      { op:'77030A', item:'02', seq:'002', produto:'SY770-CST-CABINE2',  prevIni:'2026-04-22', entrega:'2026-05-01', armazem:'03', dtEmissao:'2026-02-01', qtdProduzida:0, dtRealFim:null },
      { op:'77030A', item:'03', seq:'003', produto:'SY770-CST-SALON',    prevIni:'2026-04-27', entrega:'2026-05-06', armazem:'03', dtEmissao:'2026-02-01', qtdProduzida:0, dtRealFim:null },
      { op:'77030A', item:'04', seq:'004', produto:'SY770-CST-COCKPIT',  prevIni:'2026-05-04', entrega:'2026-05-13', armazem:'03', dtEmissao:'2026-02-05', qtdProduzida:0, dtRealFim:null },
      { op:'77030A', item:'05', seq:'005', produto:'SY770-CST-COLCHOES', prevIni:'2026-05-08', entrega:'2026-05-17', armazem:'03', dtEmissao:'2026-02-05', qtdProduzida:0, dtRealFim:null },
      { op:'77030A', item:'06', seq:'006', produto:'SY770-CST-SUNDECK',  prevIni:'2026-05-13', entrega:'2026-05-22', armazem:'03', dtEmissao:'2026-02-10', qtdProduzida:0, dtRealFim:null },
    ],
    fibra: [
      { op:'77040A', item:'01', seq:'001', produto:'SY770-FIB-CASCO',    prevIni:'2026-05-25', entrega:'2026-06-03', armazem:'04', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'77040A', item:'02', seq:'002', produto:'SY770-FIB-CONVEZ',   prevIni:'2026-06-01', entrega:'2026-06-10', armazem:'04', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'77040A', item:'03', seq:'003', produto:'SY770-FIB-REPARO',   prevIni:'2026-06-10', entrega:'2026-06-19', armazem:'04', dtEmissao:'2026-03-05', qtdProduzida:0, dtRealFim:null },
    ],
    chicote: [
      { op:'77050A', item:'01', seq:'001', produto:'SY770-CHI-MOTOR',    prevIni:'2026-06-22', entrega:'2026-06-29', armazem:'05', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
      { op:'77050A', item:'02', seq:'002', produto:'SY770-CHI-PAINEL',   prevIni:'2026-06-29', entrega:'2026-07-06', armazem:'05', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
      { op:'77050A', item:'03', seq:'003', produto:'SY770-CHI-ELÉTRICA', prevIni:'2026-07-01', entrega:'2026-07-10', armazem:'05', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
    ],
    entrega: [
      { op:'77060A', item:'01', seq:'001', produto:'SY770-ENT-VISTORIA', prevIni:'2026-07-13', entrega:'2026-07-17', armazem:'01', dtEmissao:'2026-04-15', qtdProduzida:0, dtRealFim:null },
      { op:'77060A', item:'02', seq:'002', produto:'SY770-ENT-DOCS',     prevIni:'2026-07-17', entrega:'2026-07-22', armazem:'01', dtEmissao:'2026-04-15', qtdProduzida:0, dtRealFim:null },
      { op:'77060A', item:'03', seq:'003', produto:'SY770-ENT-COMISS',   prevIni:'2026-07-22', entrega:'2026-07-31', armazem:'01', dtEmissao:'2026-04-15', qtdProduzida:0, dtRealFim:null },
    ],
  },

  // ── Schaefer 660 ────────────────────────────────────────────
  'hull-6601': {
    marcenaria: [
      { op:'66010A', item:'01', seq:'001', produto:'SY660-CAB-SALAO',    prevIni:'2026-01-05', entrega:'2026-01-10', armazem:'01', dtEmissao:'2025-11-01', qtdProduzida:1, dtRealFim:'2026-01-10' },
      { op:'66010A', item:'02', seq:'002', produto:'SY660-CAB-MASTER',   prevIni:'2026-01-07', entrega:'2026-01-14', armazem:'01', dtEmissao:'2025-11-01', qtdProduzida:1, dtRealFim:'2026-01-13' },
      { op:'66010A', item:'03', seq:'003', produto:'SY660-CAB-COZINHA',  prevIni:'2026-01-12', entrega:'2026-01-19', armazem:'01', dtEmissao:'2025-11-01', qtdProduzida:1, dtRealFim:'2026-01-18' },
      { op:'66010A', item:'04', seq:'004', produto:'SY660-CAB-BANHEIRO', prevIni:'2026-01-16', entrega:'2026-01-22', armazem:'01', dtEmissao:'2025-11-05', qtdProduzida:2, dtRealFim:'2026-01-22' },
      { op:'66010A', item:'05', seq:'005', produto:'SY660-CAB-HELM',     prevIni:'2026-01-19', entrega:'2026-01-23', armazem:'01', dtEmissao:'2025-11-05', qtdProduzida:1, dtRealFim:'2026-01-22' },
    ],
    pintura: [
      { op:'66020A', item:'01', seq:'001', produto:'SY660-PINT-FUNDO',   prevIni:'2026-01-26', entrega:'2026-01-30', armazem:'02', dtEmissao:'2025-11-20', qtdProduzida:1, dtRealFim:'2026-01-30' },
      { op:'66020A', item:'02', seq:'002', produto:'SY660-PINT-CASCO',   prevIni:'2026-01-30', entrega:'2026-02-06', armazem:'02', dtEmissao:'2025-11-20', qtdProduzida:1, dtRealFim:'2026-02-05' },
      { op:'66020A', item:'03', seq:'003', produto:'SY660-PINT-DECK',    prevIni:'2026-02-06', entrega:'2026-02-12', armazem:'02', dtEmissao:'2025-11-20', qtdProduzida:1, dtRealFim:'2026-02-12' },
      { op:'66020A', item:'04', seq:'004', produto:'SY660-PINT-ANTIVEGET',prevIni:'2026-02-10', entrega:'2026-02-13', armazem:'02', dtEmissao:'2025-11-25', qtdProduzida:1, dtRealFim:'2026-02-12' },
    ],
    costura: [
      { op:'66030A', item:'01', seq:'001', produto:'SY660-CST-MASTER',   prevIni:'2026-02-16', entrega:'2026-02-23', armazem:'03', dtEmissao:'2025-12-10', qtdProduzida:1, dtRealFim:'2026-02-23' },
      { op:'66030A', item:'02', seq:'002', produto:'SY660-CST-SALON',    prevIni:'2026-02-20', entrega:'2026-02-27', armazem:'03', dtEmissao:'2025-12-10', qtdProduzida:1, dtRealFim:'2026-02-27' },
      { op:'66030A', item:'03', seq:'003', produto:'SY660-CST-COCKPIT',  prevIni:'2026-02-25', entrega:'2026-03-04', armazem:'03', dtEmissao:'2025-12-10', qtdProduzida:1, dtRealFim:'2026-03-04' },
      { op:'66030A', item:'04', seq:'004', produto:'SY660-CST-COLCHOES', prevIni:'2026-02-27', entrega:'2026-03-06', armazem:'03', dtEmissao:'2025-12-15', qtdProduzida:3, dtRealFim:'2026-03-06' },
    ],
    fibra: [
      { op:'66040A', item:'01', seq:'001', produto:'SY660-FIB-CASCO',    prevIni:'2026-03-09', entrega:'2026-03-16', armazem:'04', dtEmissao:'2026-01-05', qtdProduzida:1, dtRealFim:'2026-03-16' },
      { op:'66040A', item:'02', seq:'002', produto:'SY660-FIB-CONVEZ',   prevIni:'2026-03-16', entrega:'2026-03-23', armazem:'04', dtEmissao:'2026-01-05', qtdProduzida:1, dtRealFim:'2026-03-23' },
      { op:'66040A', item:'03', seq:'003', produto:'SY660-FIB-SUPEST',   prevIni:'2026-03-23', entrega:'2026-03-27', armazem:'04', dtEmissao:'2026-01-05', qtdProduzida:1, dtRealFim:'2026-03-27' },
    ],
    chicote: [
      { op:'66050A', item:'01', seq:'001', produto:'SY660-CHI-MOTOR',    prevIni:'2026-03-30', entrega:'2026-04-06', armazem:'05', dtEmissao:'2026-01-20', qtdProduzida:1, dtRealFim:'2026-04-06' },
      { op:'66050A', item:'02', seq:'002', produto:'SY660-CHI-PAINEL',   prevIni:'2026-04-06', entrega:'2026-04-13', armazem:'05', dtEmissao:'2026-01-20', qtdProduzida:1, dtRealFim:'2026-04-13' },
      { op:'66050A', item:'03', seq:'003', produto:'SY660-CHI-ELÉTRICA', prevIni:'2026-04-10', entrega:'2026-04-17', armazem:'05', dtEmissao:'2026-01-20', qtdProduzida:1, dtRealFim:'2026-04-17' },
    ],
    entrega: [
      { op:'66060A', item:'01', seq:'001', produto:'SY660-ENT-VISTORIA', prevIni:'2026-04-20', entrega:'2026-04-24', armazem:'01', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-04-24' },
      { op:'66060A', item:'02', seq:'002', produto:'SY660-ENT-INSTAL',   prevIni:'2026-04-24', entrega:'2026-05-01', armazem:'01', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:null },
      { op:'66060A', item:'03', seq:'003', produto:'SY660-ENT-SEGURO',   prevIni:'2026-05-01', entrega:'2026-05-10', armazem:'01', dtEmissao:'2026-02-10', qtdProduzida:0, dtRealFim:null },
      { op:'66060A', item:'04', seq:'004', produto:'SY660-ENT-TREINAMT', prevIni:'2026-05-10', entrega:'2026-05-20', armazem:'01', dtEmissao:'2026-02-15', qtdProduzida:0, dtRealFim:null },
      { op:'66060A', item:'05', seq:'005', produto:'SY660-ENT-DOCS',     prevIni:'2026-05-18', entrega:'2026-05-25', armazem:'01', dtEmissao:'2026-02-15', qtdProduzida:0, dtRealFim:null },
      { op:'66060A', item:'06', seq:'006', produto:'SY660-ENT-COMISS',   prevIni:'2026-05-25', entrega:'2026-05-29', armazem:'01', dtEmissao:'2026-02-15', qtdProduzida:0, dtRealFim:null },
    ],
  },

  // ── Schaefer 600 (CRÍTICO) ───────────────────────────────────
  'hull-6001': {
    marcenaria: [
      { op:'60010A', item:'01', seq:'001', produto:'SY600-CAB-SALAO',    prevIni:'2026-02-02', entrega:'2026-02-09', armazem:'01', dtEmissao:'2025-11-15', qtdProduzida:1, dtRealFim:'2026-02-10' },
      { op:'60010A', item:'02', seq:'002', produto:'SY600-CAB-CABINE1',  prevIni:'2026-02-09', entrega:'2026-02-16', armazem:'01', dtEmissao:'2025-11-15', qtdProduzida:1, dtRealFim:'2026-02-17' },
      { op:'60010A', item:'03', seq:'003', produto:'SY600-CAB-CABINE2',  prevIni:'2026-02-16', entrega:'2026-02-23', armazem:'01', dtEmissao:'2025-11-15', qtdProduzida:1, dtRealFim:'2026-02-25' },
      { op:'60010A', item:'04', seq:'004', produto:'SY600-CAB-COZINHA',  prevIni:'2026-02-20', entrega:'2026-02-27', armazem:'01', dtEmissao:'2025-11-20', qtdProduzida:1, dtRealFim:'2026-03-02' },
      { op:'60010A', item:'05', seq:'005', produto:'SY600-CAB-HELM',     prevIni:'2026-02-25', entrega:'2026-03-04', armazem:'01', dtEmissao:'2025-11-20', qtdProduzida:1, dtRealFim:'2026-03-06' },
    ],
    pintura: [
      { op:'60020A', item:'01', seq:'001', produto:'SY600-PINT-FUNDO',   prevIni:'2026-03-09', entrega:'2026-03-14', armazem:'02', dtEmissao:'2025-12-10', qtdProduzida:1, dtRealFim:null },
      { op:'60020A', item:'02', seq:'002', produto:'SY600-PINT-CASCO',   prevIni:'2026-03-14', entrega:'2026-03-21', armazem:'02', dtEmissao:'2025-12-10', qtdProduzida:0, dtRealFim:null },
      { op:'60020A', item:'03', seq:'003', produto:'SY600-PINT-SUPEST',  prevIni:'2026-03-21', entrega:'2026-03-27', armazem:'02', dtEmissao:'2025-12-10', qtdProduzida:0, dtRealFim:null },
      { op:'60020A', item:'04', seq:'004', produto:'SY600-PINT-DECK',    prevIni:'2026-03-25', entrega:'2026-03-27', armazem:'02', dtEmissao:'2025-12-15', qtdProduzida:0, dtRealFim:null },
    ],
    costura: [
      { op:'60030A', item:'01', seq:'001', produto:'SY600-CST-CABINE1',  prevIni:'2026-03-30', entrega:'2026-04-07', armazem:'03', dtEmissao:'2026-01-05', qtdProduzida:0, dtRealFim:null },
      { op:'60030A', item:'02', seq:'002', produto:'SY600-CST-CABINE2',  prevIni:'2026-04-07', entrega:'2026-04-14', armazem:'03', dtEmissao:'2026-01-05', qtdProduzida:0, dtRealFim:null },
      { op:'60030A', item:'03', seq:'003', produto:'SY600-CST-SALON',    prevIni:'2026-04-14', entrega:'2026-04-21', armazem:'03', dtEmissao:'2026-01-05', qtdProduzida:0, dtRealFim:null },
      { op:'60030A', item:'04', seq:'004', produto:'SY600-CST-COCKPIT',  prevIni:'2026-04-21', entrega:'2026-04-24', armazem:'03', dtEmissao:'2026-01-10', qtdProduzida:0, dtRealFim:null },
    ],
    fibra: [
      { op:'60040A', item:'01', seq:'001', produto:'SY600-FIB-CASCO',    prevIni:'2026-04-27', entrega:'2026-05-05', armazem:'04', dtEmissao:'2026-02-01', qtdProduzida:0, dtRealFim:null },
      { op:'60040A', item:'02', seq:'002', produto:'SY600-FIB-CONVEZ',   prevIni:'2026-05-05', entrega:'2026-05-14', armazem:'04', dtEmissao:'2026-02-01', qtdProduzida:0, dtRealFim:null },
      { op:'60040A', item:'03', seq:'003', produto:'SY600-FIB-SUPEST',   prevIni:'2026-05-14', entrega:'2026-05-22', armazem:'04', dtEmissao:'2026-02-05', qtdProduzida:0, dtRealFim:null },
    ],
    chicote: [
      { op:'60050A', item:'01', seq:'001', produto:'SY600-CHI-MOTOR',    prevIni:'2026-05-25', entrega:'2026-06-01', armazem:'05', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'60050A', item:'02', seq:'002', produto:'SY600-CHI-PAINEL',   prevIni:'2026-06-01', entrega:'2026-06-08', armazem:'05', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'60050A', item:'03', seq:'003', produto:'SY600-CHI-ELÉTRICA', prevIni:'2026-06-05', entrega:'2026-06-12', armazem:'05', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
    ],
    entrega: [
      { op:'60060A', item:'01', seq:'001', produto:'SY600-ENT-VISTORIA', prevIni:'2026-06-15', entrega:'2026-06-18', armazem:'01', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
      { op:'60060A', item:'02', seq:'002', produto:'SY600-ENT-DOCS',     prevIni:'2026-06-18', entrega:'2026-06-22', armazem:'01', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
      { op:'60060A', item:'03', seq:'003', produto:'SY600-ENT-COMISS',   prevIni:'2026-06-22', entrega:'2026-06-26', armazem:'01', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
    ],
  },

  // ── Schaefer 450 ────────────────────────────────────────────
  'hull-4501': {
    marcenaria: [
      { op:'45010A', item:'01', seq:'001', produto:'SY450-CAB-SALAO',    prevIni:'2026-02-23', entrega:'2026-02-28', armazem:'01', dtEmissao:'2025-12-15', qtdProduzida:1, dtRealFim:'2026-02-28' },
      { op:'45010A', item:'02', seq:'002', produto:'SY450-CAB-MASTER',   prevIni:'2026-02-28', entrega:'2026-03-06', armazem:'01', dtEmissao:'2025-12-15', qtdProduzida:1, dtRealFim:'2026-03-06' },
      { op:'45010A', item:'03', seq:'003', produto:'SY450-CAB-COZINHA',  prevIni:'2026-03-04', entrega:'2026-03-10', armazem:'01', dtEmissao:'2025-12-15', qtdProduzida:1, dtRealFim:'2026-03-10' },
      { op:'45010A', item:'04', seq:'004', produto:'SY450-CAB-BANHEIRO', prevIni:'2026-03-07', entrega:'2026-03-13', armazem:'01', dtEmissao:'2025-12-20', qtdProduzida:1, dtRealFim:'2026-03-13' },
    ],
    pintura: [
      { op:'45020A', item:'01', seq:'001', produto:'SY450-PINT-FUNDO',   prevIni:'2026-03-16', entrega:'2026-03-20', armazem:'02', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-03-20' },
      { op:'45020A', item:'02', seq:'002', produto:'SY450-PINT-CASCO',   prevIni:'2026-03-20', entrega:'2026-03-27', armazem:'02', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-03-28' },
      { op:'45020A', item:'03', seq:'003', produto:'SY450-PINT-SUPEST',  prevIni:'2026-03-27', entrega:'2026-04-03', armazem:'02', dtEmissao:'2026-01-10', qtdProduzida:1, dtRealFim:'2026-04-05' },
      { op:'45020A', item:'04', seq:'004', produto:'SY450-PINT-DECK',    prevIni:'2026-04-01', entrega:'2026-04-07', armazem:'02', dtEmissao:'2026-01-15', qtdProduzida:1, dtRealFim:'2026-04-07' },
    ],
    costura: [
      { op:'45030A', item:'01', seq:'001', produto:'SY450-CST-MASTER',   prevIni:'2026-04-09', entrega:'2026-04-16', armazem:'03', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-04-17' },
      { op:'45030A', item:'02', seq:'002', produto:'SY450-CST-SALON',    prevIni:'2026-04-14', entrega:'2026-04-21', armazem:'03', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-04-22' },
      { op:'45030A', item:'03', seq:'003', produto:'SY450-CST-COCKPIT',  prevIni:'2026-04-20', entrega:'2026-04-27', armazem:'03', dtEmissao:'2026-02-10', qtdProduzida:1, dtRealFim:'2026-04-28' },
      { op:'45030A', item:'04', seq:'004', produto:'SY450-CST-COLCHOES', prevIni:'2026-04-24', entrega:'2026-04-29', armazem:'03', dtEmissao:'2026-02-15', qtdProduzida:2, dtRealFim:'2026-04-29' },
    ],
    fibra: [
      { op:'45040A', item:'01', seq:'001', produto:'SY450-FIB-CASCO',    prevIni:'2026-05-04', entrega:'2026-05-10', armazem:'04', dtEmissao:'2026-02-20', qtdProduzida:1, dtRealFim:null },
      { op:'45040A', item:'02', seq:'002', produto:'SY450-FIB-CONVEZ',   prevIni:'2026-05-08', entrega:'2026-05-15', armazem:'04', dtEmissao:'2026-02-20', qtdProduzida:0, dtRealFim:null },
      { op:'45040A', item:'03', seq:'003', produto:'SY450-FIB-SUPEST',   prevIni:'2026-05-13', entrega:'2026-05-19', armazem:'04', dtEmissao:'2026-02-20', qtdProduzida:0, dtRealFim:null },
      { op:'45040A', item:'04', seq:'004', produto:'SY450-FIB-REPARO',   prevIni:'2026-05-18', entrega:'2026-05-22', armazem:'04', dtEmissao:'2026-02-25', qtdProduzida:0, dtRealFim:null },
    ],
    chicote: [
      { op:'45050A', item:'01', seq:'001', produto:'SY450-CHI-MOTOR',    prevIni:'2026-05-25', entrega:'2026-06-01', armazem:'05', dtEmissao:'2026-03-10', qtdProduzida:0, dtRealFim:null },
      { op:'45050A', item:'02', seq:'002', produto:'SY450-CHI-PAINEL',   prevIni:'2026-06-01', entrega:'2026-06-08', armazem:'05', dtEmissao:'2026-03-10', qtdProduzida:0, dtRealFim:null },
      { op:'45050A', item:'03', seq:'003', produto:'SY450-CHI-ELÉTRICA', prevIni:'2026-06-05', entrega:'2026-06-12', armazem:'05', dtEmissao:'2026-03-10', qtdProduzida:0, dtRealFim:null },
    ],
    entrega: [
      { op:'45060A', item:'01', seq:'001', produto:'SY450-ENT-VISTORIA', prevIni:'2026-06-15', entrega:'2026-06-18', armazem:'01', dtEmissao:'2026-04-05', qtdProduzida:0, dtRealFim:null },
      { op:'45060A', item:'02', seq:'002', produto:'SY450-ENT-DOCS',     prevIni:'2026-06-18', entrega:'2026-06-22', armazem:'01', dtEmissao:'2026-04-05', qtdProduzida:0, dtRealFim:null },
      { op:'45060A', item:'03', seq:'003', produto:'SY450-ENT-COMISS',   prevIni:'2026-06-22', entrega:'2026-06-26', armazem:'01', dtEmissao:'2026-04-05', qtdProduzida:0, dtRealFim:null },
    ],
  },

  // ── Schaefer 380 ────────────────────────────────────────────
  'hull-3801': {
    marcenaria: [
      { op:'38010A', item:'01', seq:'001', produto:'SY380-CAB-SALAO',    prevIni:'2026-05-04', entrega:'2026-05-08', armazem:'01', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'38010A', item:'02', seq:'002', produto:'SY380-CAB-MASTER',   prevIni:'2026-05-08', entrega:'2026-05-14', armazem:'01', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'38010A', item:'03', seq:'003', produto:'SY380-CAB-COZINHA',  prevIni:'2026-05-13', entrega:'2026-05-19', armazem:'01', dtEmissao:'2026-03-01', qtdProduzida:0, dtRealFim:null },
      { op:'38010A', item:'04', seq:'004', produto:'SY380-CAB-BANHEIRO', prevIni:'2026-05-18', entrega:'2026-05-22', armazem:'01', dtEmissao:'2026-03-05', qtdProduzida:0, dtRealFim:null },
      { op:'38010A', item:'05', seq:'005', produto:'SY380-CAB-HELM',     prevIni:'2026-05-22', entrega:'2026-05-27', armazem:'01', dtEmissao:'2026-03-05', qtdProduzida:0, dtRealFim:null },
      { op:'38010A', item:'06', seq:'006', produto:'SY380-CAB-DETALHES', prevIni:'2026-05-26', entrega:'2026-05-29', armazem:'01', dtEmissao:'2026-03-05', qtdProduzida:0, dtRealFim:null },
    ],
    pintura: [
      { op:'38020A', item:'01', seq:'001', produto:'SY380-PINT-FUNDO',   prevIni:'2026-06-01', entrega:'2026-06-05', armazem:'02', dtEmissao:'2026-03-20', qtdProduzida:0, dtRealFim:null },
      { op:'38020A', item:'02', seq:'002', produto:'SY380-PINT-CASCO',   prevIni:'2026-06-05', entrega:'2026-06-12', armazem:'02', dtEmissao:'2026-03-20', qtdProduzida:0, dtRealFim:null },
      { op:'38020A', item:'03', seq:'003', produto:'SY380-PINT-DECK',    prevIni:'2026-06-12', entrega:'2026-06-19', armazem:'02', dtEmissao:'2026-03-20', qtdProduzida:0, dtRealFim:null },
    ],
    costura: [
      { op:'38030A', item:'01', seq:'001', produto:'SY380-CST-MASTER',   prevIni:'2026-06-22', entrega:'2026-06-29', armazem:'03', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
      { op:'38030A', item:'02', seq:'002', produto:'SY380-CST-SALON',    prevIni:'2026-06-29', entrega:'2026-07-06', armazem:'03', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
      { op:'38030A', item:'03', seq:'003', produto:'SY380-CST-COCKPIT',  prevIni:'2026-07-03', entrega:'2026-07-10', armazem:'03', dtEmissao:'2026-04-01', qtdProduzida:0, dtRealFim:null },
    ],
    fibra: [
      { op:'38040A', item:'01', seq:'001', produto:'SY380-FIB-CASCO',    prevIni:'2026-07-13', entrega:'2026-07-17', armazem:'04', dtEmissao:'2026-04-15', qtdProduzida:0, dtRealFim:null },
      { op:'38040A', item:'02', seq:'002', produto:'SY380-FIB-CONVEZ',   prevIni:'2026-07-17', entrega:'2026-07-22', armazem:'04', dtEmissao:'2026-04-15', qtdProduzida:0, dtRealFim:null },
      { op:'38040A', item:'03', seq:'003', produto:'SY380-FIB-REPARO',   prevIni:'2026-07-20', entrega:'2026-07-24', armazem:'04', dtEmissao:'2026-04-15', qtdProduzida:0, dtRealFim:null },
    ],
    chicote: [
      { op:'38050A', item:'01', seq:'001', produto:'SY380-CHI-MOTOR',    prevIni:'2026-07-27', entrega:'2026-08-01', armazem:'05', dtEmissao:'2026-05-01', qtdProduzida:0, dtRealFim:null },
      { op:'38050A', item:'02', seq:'002', produto:'SY380-CHI-PAINEL',   prevIni:'2026-08-01', entrega:'2026-08-05', armazem:'05', dtEmissao:'2026-05-01', qtdProduzida:0, dtRealFim:null },
      { op:'38050A', item:'03', seq:'003', produto:'SY380-CHI-ELÉTRICA', prevIni:'2026-08-04', entrega:'2026-08-07', armazem:'05', dtEmissao:'2026-05-01', qtdProduzida:0, dtRealFim:null },
    ],
    entrega: [
      { op:'38060A', item:'01', seq:'001', produto:'SY380-ENT-VISTORIA', prevIni:'2026-08-10', entrega:'2026-08-13', armazem:'01', dtEmissao:'2026-05-15', qtdProduzida:0, dtRealFim:null },
      { op:'38060A', item:'02', seq:'002', produto:'SY380-ENT-DOCS',     prevIni:'2026-08-13', entrega:'2026-08-17', armazem:'01', dtEmissao:'2026-05-15', qtdProduzida:0, dtRealFim:null },
      { op:'38060A', item:'03', seq:'003', produto:'SY380-ENT-COMISS',   prevIni:'2026-08-17', entrega:'2026-08-21', armazem:'01', dtEmissao:'2026-05-15', qtdProduzida:0, dtRealFim:null },
    ],
  },
};
