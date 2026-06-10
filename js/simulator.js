const COLORS = { X: '#52b788', F: '#40916c', I: '#2d6a4f', Y: '#1b4332', M: '#74c69d' };
const LABELS = { X: '出口收入 X', F: '外匯存底 F', I: '國內投資 I', Y: '國民所得 Y', M: '進口支出 M' };

let chart;

function num(id) {
  return Number(document.getElementById(id).value);
}

function readParams() {
  return {
    E0: num('E0'), tau: num('tau'), beta: num('beta'),
    a: num('a'), b: num('b'), c: num('c'), d: num('d'), e: num('e'),
    dX: num('dX'), dF: num('dF'), dI: num('dI'), dY: num('dY'), dM: num('dM'),
  };
}

function readInitial() {
  return { X: num('X0'), F: num('F0'), I: num('I0'), Y: num('Y0'), M: num('M0') };
}

function updateSummary(result, params) {
  const last = (arr) => arr[arr.length - 1];
  const { series } = result;
  const inlet = params.E0 * (1 - params.beta * params.tau);
  document.getElementById('summary').innerHTML = `
    <p><strong>關稅壓低後的年流入：</strong>${inlet.toFixed(2)} 億元／年（基準 ${params.E0}，τ=${params.tau}，β=${params.beta}）</p>
    <p><strong>模擬終點（${num('years')} 年）存量：</strong>
      X=${last(series.X).toFixed(1)}、F=${last(series.F).toFixed(1)}、I=${last(series.I).toFixed(1)}、Y=${last(series.Y).toFixed(1)}、M=${last(series.M).toFixed(1)} 億元</p>`;
}

function runSimulation() {
  const years = num('years');
  const result = simulate(readInitial(), readParams(), years);
  const datasets = Object.keys(COLORS).map((key) => ({
    label: LABELS[key],
    data: result.times.map((t, i) => ({ x: t, y: result.series[key][i] })),
    borderColor: COLORS[key],
    backgroundColor: COLORS[key] + '33',
    tension: 0.2,
    pointRadius: 0,
    borderWidth: 2,
  }));

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById('mainChart'), {
    type: 'line',
    data: { datasets },
    options: {
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: { type: 'linear', title: { display: true, text: '時間（年）' } },
        y: { title: { display: true, text: '存量（億元）' }, beginAtZero: true },
      },
      plugins: { legend: { position: 'bottom' } },
    },
  });

  updateSummary(result, readParams());
}

function resetDefaults() {
  const fields = {
    E0: DEFAULT_PARAMS.E0, tau: DEFAULT_PARAMS.tau, beta: DEFAULT_PARAMS.beta,
    a: DEFAULT_PARAMS.a, b: DEFAULT_PARAMS.b, c: DEFAULT_PARAMS.c, d: DEFAULT_PARAMS.d, e: DEFAULT_PARAMS.e,
    dX: DEFAULT_PARAMS.dX, dF: DEFAULT_PARAMS.dF, dI: DEFAULT_PARAMS.dI, dY: DEFAULT_PARAMS.dY, dM: DEFAULT_PARAMS.dM,
    X0: DEFAULT_INITIAL.X, F0: DEFAULT_INITIAL.F, I0: DEFAULT_INITIAL.I, Y0: DEFAULT_INITIAL.Y, M0: DEFAULT_INITIAL.M,
    years: 20,
  };
  Object.entries(fields).forEach(([id, val]) => { document.getElementById(id).value = val; });
  runSimulation();
}

document.getElementById('runBtn').addEventListener('click', runSimulation);
document.getElementById('resetBtn').addEventListener('click', resetDefaults);
resetDefaults();
