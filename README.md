# 關稅五隔室動態模型 · 生物數學課程網站

以隔室 ODE 描述關稅對出口收入、外匯、投資、所得與進口支出的連鎖影響。網站含模型參考、主題介紹與互動模擬計算機。

## 頁面結構

| 頁面 | 檔案 | 內容 |
|------|------|------|
| 首頁 | `index.html` | 導覽與簡介 |
| 模型參考 | `reference.html` | 流向圖 + 方程式 + 符號（一頁查閱） |
| 主題介紹 | `intro.html` | 前情、目的、圖、方程式 |
| 模擬計算機 | `simulator.html` | 參數輸入與動態圖 |

## 本地預覽

直接用瀏覽器開啟 `index.html`，或使用本地伺服器（模組 import 建議用伺服器）：

```powershell
cd d:\bio-math-model
npx --yes serve .
```

然後開啟 http://localhost:3000

## 部署到 GitHub Pages

1. 在 GitHub 建立新 repository（例如 `tariff-compartment-model`）
2. 上傳此資料夾所有檔案
3. 到 **Settings → Pages**
4. **Source** 選 `Deploy from a branch`
5. **Branch** 選 `main`，資料夾選 `/ (root)`
6. 儲存後數分鐘內可於 `https://<你的帳號>.github.io/<repo名>/` 存取

### 命令列上傳範例

```powershell
cd d:\bio-math-model
git init
git add .
git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "Add tariff compartment model website"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名>.git
git push -u origin main
```

## 模型摘要

- **狀態變數**：X（出口收入）、F（外匯）、I（投資）、Y（所得）、M（進口）
- **關鍵輸入**：$E_0(1-\beta\tau)$ 進入 X；τ 為關稅率
- **求解**：RK4 數值積分（`js/model.js`）

## 技術

- 純靜態 HTML / CSS / JavaScript（無建置步驟）
- [KaTeX](https://katex.org/) 渲染方程式
- [Chart.js](https://www.chartjs.org/) 繪製模擬曲線
