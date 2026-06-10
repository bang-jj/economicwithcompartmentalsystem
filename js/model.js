/**
 * 關稅貿易五隔室 ODE 模型（與 Word 文件一致）
 */
function derivatives(state, params) {
  const { X, F, I, Y, M } = state;
  const { E0, tau, beta, a, b, c, d, e, dX, dF, dI, dY, dM } = params;
  const inlet = E0 * (1 - beta * tau);
  return {
    dX: inlet - a * X - dX * X,
    dF: a * X + e * M - b * F - dF * F,
    dI: b * F - c * I - dI * I,
    dY: c * I - d * Y - dY * Y,
    dM: d * Y - e * M - dM * M,
  };
}

function addState(s, d) {
  return { X: s.X + d.dX, F: s.F + d.dF, I: s.I + d.dI, Y: s.Y + d.dY, M: s.M + d.dM };
}
function scale(k, f) {
  return { dX: k.dX * f, dF: k.dF * f, dI: k.dI * f, dY: k.dY * f, dM: k.dM * f };
}

function rk4Step(state, params, dt) {
  const k1 = derivatives(state, params);
  const k2 = derivatives(addState(state, scale(k1, dt / 2)), params);
  const k3 = derivatives(addState(state, scale(k2, dt / 2)), params);
  const k4 = derivatives(addState(state, scale(k3, dt)), params);
  return {
    X: state.X + (dt / 6) * (k1.dX + 2 * k2.dX + 2 * k3.dX + k4.dX),
    F: state.F + (dt / 6) * (k1.dF + 2 * k2.dF + 2 * k3.dF + k4.dF),
    I: state.I + (dt / 6) * (k1.dI + 2 * k2.dI + 2 * k3.dI + k4.dI),
    Y: state.Y + (dt / 6) * (k1.dY + 2 * k2.dY + 2 * k3.dY + k4.dY),
    M: state.M + (dt / 6) * (k1.dM + 2 * k2.dM + 2 * k3.dM + k4.dM),
  };
}

function clampState(s) {
  return { X: Math.max(0, s.X), F: Math.max(0, s.F), I: Math.max(0, s.I), Y: Math.max(0, s.Y), M: Math.max(0, s.M) };
}

function simulate(initial, params, years, dt = 0.05) {
  const steps = Math.ceil(years / dt);
  const times = [0];
  const series = { X: [initial.X], F: [initial.F], I: [initial.I], Y: [initial.Y], M: [initial.M] };
  let state = { ...initial };
  for (let i = 1; i <= steps; i++) {
    state = clampState(rk4Step(state, params, dt));
    times.push(i * dt);
    series.X.push(state.X); series.F.push(state.F); series.I.push(state.I); series.Y.push(state.Y); series.M.push(state.M);
  }
  return { times, series };
}

const DEFAULT_PARAMS = { E0: 100, tau: 0.1, beta: 2, a: 0.5, b: 0.4, c: 0.6, d: 0.3, e: 0.5, dX: 0.1, dF: 0.08, dI: 0.12, dY: 0.15, dM: 0.1 };
const DEFAULT_INITIAL = { X: 50, F: 80, I: 60, Y: 100, M: 30 };
