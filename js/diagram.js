function renderFlowDiagram(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `<svg viewBox="0 0 920 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="五隔室系統流向圖">
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2d6a4f"/></marker>
    <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#c1121f"/></marker>
  </defs>
  <rect x="20" y="30" width="180" height="70" rx="10" fill="#fff3cd" stroke="#c9a227" stroke-width="2"/>
  <text x="110" y="58" text-anchor="middle" font-size="14" font-weight="700">外生輸入</text>
  <text x="110" y="80" text-anchor="middle" font-size="13" fill="#4a5f4a">E₀(1 − βτ)</text>
  <rect x="260" y="150" width="120" height="64" rx="10" fill="#d8f3dc" stroke="#52b788" stroke-width="2"/>
  <text x="320" y="178" text-anchor="middle" font-size="15" font-weight="700">X</text>
  <text x="320" y="198" text-anchor="middle" font-size="12" fill="#4a5f4a">出口收入</text>
  <rect x="430" y="150" width="120" height="64" rx="10" fill="#b7e4c7" stroke="#40916c" stroke-width="2"/>
  <text x="490" y="178" text-anchor="middle" font-size="15" font-weight="700">F</text>
  <text x="490" y="198" text-anchor="middle" font-size="12" fill="#4a5f4a">外匯存底</text>
  <rect x="600" y="150" width="120" height="64" rx="10" fill="#95d5b2" stroke="#2d6a4f" stroke-width="2"/>
  <text x="660" y="178" text-anchor="middle" font-size="15" font-weight="700">I</text>
  <text x="660" y="198" text-anchor="middle" font-size="12" fill="#4a5f4a">國內投資</text>
  <rect x="770" y="150" width="120" height="64" rx="10" fill="#74c69d" stroke="#1b4332" stroke-width="2"/>
  <text x="830" y="178" text-anchor="middle" font-size="15" font-weight="700">Y</text>
  <text x="830" y="198" text-anchor="middle" font-size="12" fill="#4a5f4a">國民所得</text>
  <rect x="600" y="300" width="120" height="64" rx="10" fill="#a7e3c4" stroke="#40916c" stroke-width="2"/>
  <text x="660" y="328" text-anchor="middle" font-size="15" font-weight="700">M</text>
  <text x="660" y="348" text-anchor="middle" font-size="12" fill="#4a5f4a">進口支出</text>
  <line x1="200" y1="95" x2="290" y2="150" stroke="#c1121f" stroke-width="2.2" marker-end="url(#arrow-red)"/>
  <text x="205" y="115" font-size="12" fill="#c1121f">關稅 τ 壓低流入</text>
  <line x1="380" y1="182" x2="425" y2="182" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arrow)"/><text x="392" y="172" font-size="12" fill="#2d6a4f">aX</text>
  <line x1="550" y1="182" x2="595" y2="182" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arrow)"/><text x="562" y="172" font-size="12" fill="#2d6a4f">bF</text>
  <line x1="720" y1="182" x2="765" y2="182" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arrow)"/><text x="732" y="172" font-size="12" fill="#2d6a4f">cI</text>
  <line x1="830" y1="214" x2="660" y2="295" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arrow)"/><text x="760" y="260" font-size="12" fill="#2d6a4f">dY</text>
  <path d="M 600 332 C 520 332, 480 220, 490 214" fill="none" stroke="#2d6a4f" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="500" y="290" font-size="12" fill="#2d6a4f">eM（回流外匯）</text>
  <text x="250" y="250" font-size="11" fill="#888">δₓX</text>
  <line x1="290" y1="220" x2="270" y2="250" stroke="#aaa" stroke-dasharray="4 3" marker-end="url(#arrow)"/>
  <text x="470" y="250" font-size="11" fill="#888">δ_F F</text>
  <line x1="490" y1="220" x2="470" y2="250" stroke="#aaa" stroke-dasharray="4 3" marker-end="url(#arrow)"/>
  <text x="640" y="250" font-size="11" fill="#888">δ_I I</text>
  <line x1="660" y1="220" x2="640" y2="250" stroke="#aaa" stroke-dasharray="4 3" marker-end="url(#arrow)"/>
  <text x="810" y="250" font-size="11" fill="#888">δ_Y Y</text>
  <line x1="830" y1="220" x2="810" y2="250" stroke="#aaa" stroke-dasharray="4 3" marker-end="url(#arrow)"/>
  <text x="700" y="390" font-size="11" fill="#888">δ_M M</text>
  <line x1="660" y1="364" x2="680" y2="390" stroke="#aaa" stroke-dasharray="4 3" marker-end="url(#arrow)"/>
</svg>`;
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach((a) => {
    if (a.dataset.page === page) a.classList.add('active');
  });
}
