function renderFlowDiagram(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const uid = containerId.replace(/\W/g, '') || 'flow';

  el.innerHTML = `<svg viewBox="0 0 920 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="五隔室系統流向圖">
  <defs>
    <marker id="arr-${uid}" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2d6a4f"/></marker>
    <marker id="arr-red-${uid}" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#c1121f"/></marker>
  </defs>

  <!-- 外生輸入 -->
  <rect x="20" y="24" width="180" height="70" rx="10" fill="#fff3cd" stroke="#c9a227" stroke-width="2"/>
  <text x="110" y="52" text-anchor="middle" font-size="14" font-weight="700">外生輸入</text>
  <text x="110" y="74" text-anchor="middle" font-size="13" fill="#4a5f4a">E₀(1 − βτ)</text>

  <!-- 隔室 -->
  <rect x="260" y="130" width="120" height="64" rx="10" fill="#d8f3dc" stroke="#52b788" stroke-width="2"/>
  <text x="320" y="158" text-anchor="middle" font-size="15" font-weight="700">X</text>
  <text x="320" y="178" text-anchor="middle" font-size="12" fill="#4a5f4a">出口收入</text>

  <rect x="430" y="130" width="120" height="64" rx="10" fill="#b7e4c7" stroke="#40916c" stroke-width="2"/>
  <text x="490" y="158" text-anchor="middle" font-size="15" font-weight="700">F</text>
  <text x="490" y="178" text-anchor="middle" font-size="12" fill="#4a5f4a">外匯存底</text>

  <rect x="600" y="130" width="120" height="64" rx="10" fill="#95d5b2" stroke="#2d6a4f" stroke-width="2"/>
  <text x="660" y="158" text-anchor="middle" font-size="15" font-weight="700">I</text>
  <text x="660" y="178" text-anchor="middle" font-size="12" fill="#4a5f4a">國內投資</text>

  <rect x="770" y="130" width="120" height="64" rx="10" fill="#74c69d" stroke="#1b4332" stroke-width="2"/>
  <text x="830" y="158" text-anchor="middle" font-size="15" font-weight="700">Y</text>
  <text x="830" y="178" text-anchor="middle" font-size="12" fill="#4a5f4a">國民所得</text>

  <rect x="600" y="280" width="120" height="64" rx="10" fill="#a7e3c4" stroke="#40916c" stroke-width="2"/>
  <text x="660" y="308" text-anchor="middle" font-size="15" font-weight="700">M</text>
  <text x="660" y="328" text-anchor="middle" font-size="12" fill="#4a5f4a">進口支出</text>

  <!-- 關稅流入（標籤在箭頭上方，避免遮住 τ） -->
  <line x1="200" y1="94" x2="285" y2="128" stroke="#c1121f" stroke-width="2.2" marker-end="url(#arr-red-${uid})"/>
  <rect x="118" y="88" width="108" height="18" rx="3" fill="#fff" fill-opacity="0.92"/>
  <text x="172" y="101" text-anchor="middle" font-size="11" fill="#c1121f">關稅 τ 壓低流入</text>

  <!-- 主鏈通量：只標係數 -->
  <line x1="380" y1="162" x2="425" y2="162" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arr-${uid})"/>
  <rect x="394" y="142" width="18" height="16" rx="2" fill="#fff" fill-opacity="0.9"/>
  <text x="403" y="154" text-anchor="middle" font-size="12" font-weight="600" fill="#2d6a4f">a</text>

  <line x1="550" y1="162" x2="595" y2="162" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arr-${uid})"/>
  <rect x="564" y="142" width="18" height="16" rx="2" fill="#fff" fill-opacity="0.9"/>
  <text x="573" y="154" text-anchor="middle" font-size="12" font-weight="600" fill="#2d6a4f">b</text>

  <line x1="720" y1="162" x2="765" y2="162" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arr-${uid})"/>
  <rect x="734" y="142" width="18" height="16" rx="2" fill="#fff" fill-opacity="0.9"/>
  <text x="743" y="154" text-anchor="middle" font-size="12" font-weight="600" fill="#2d6a4f">c</text>

  <line x1="830" y1="194" x2="660" y2="276" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arr-${uid})"/>
  <rect x="748" y="218" width="16" height="16" rx="2" fill="#fff" fill-opacity="0.9"/>
  <text x="756" y="230" text-anchor="middle" font-size="12" font-weight="600" fill="#2d6a4f">d</text>

  <path d="M 600 312 C 520 312, 470 210, 490 194" fill="none" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arr-${uid})"/>
  <rect x="530" y="248" width="18" height="16" rx="2" fill="#fff" fill-opacity="0.9"/>
  <text x="539" y="260" text-anchor="middle" font-size="12" font-weight="600" fill="#2d6a4f">e</text>

  <!-- 自然耗散：標籤在箭頭側邊 -->
  <line x1="320" y1="194" x2="320" y2="238" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arr-${uid})"/>
  <text x="328" y="222" font-size="11" fill="#666">δ<tspan baseline-shift="sub" font-size="9">X</tspan></text>

  <line x1="490" y1="194" x2="490" y2="238" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arr-${uid})"/>
  <text x="452" y="222" text-anchor="end" font-size="11" fill="#666">δ<tspan baseline-shift="sub" font-size="9">F</tspan></text>

  <line x1="660" y1="194" x2="660" y2="238" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arr-${uid})"/>
  <text x="668" y="222" font-size="11" fill="#666">δ<tspan baseline-shift="sub" font-size="9">I</tspan></text>

  <line x1="848" y1="194" x2="848" y2="238" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arr-${uid})"/>
  <text x="856" y="222" font-size="11" fill="#666">δ<tspan baseline-shift="sub" font-size="9">Y</tspan></text>

  <line x1="660" y1="344" x2="660" y2="372" stroke="#aaa" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#arr-${uid})"/>
  <text x="672" y="362" font-size="11" fill="#666">δ<tspan baseline-shift="sub" font-size="9">M</tspan></text>
</svg>`;
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach((a) => {
    if (a.dataset.page === page) a.classList.add('active');
  });
}
