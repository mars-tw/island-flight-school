# 已合併至島嶼交通學院

此儲存庫保留為合併前的歷史來源。後續開發、模型與更新都在 [共同專案](https://github.com/mars-tw/taiwan-island-drive)。

**[直接玩合併版](https://mars-tw.github.io/taiwan-island-drive/flight/)** · [交通學院大廳](https://mars-tw.github.io/taiwan-island-drive/)

---

# 島嶼飛行學校 / Island Flight School

讓 3～5 歲孩子在台灣主題練習場認識起飛、轉彎與降落的親子手機 3D 遊戲。預設小小飛行員模式，提供 64px 以上大按鈕、簡短繁中語音與相同字幕；另有家長完整手動模式。Three.js、原創 Blender 高翼飛機、真正 IMG UV 材質、觸控操縱桿與動態六大儀表。程式、模型、貼圖及聲音程式採 MIT 開源。

[手機直接玩](https://mars-tw.github.io/island-flight-school/) · [公開原始碼](https://github.com/mars-tw/island-flight-school) · [下載完整開源包](https://mars-tw.github.io/island-flight-school/downloads/flight-school-source.zip)

網站已透過 GitHub Pages 公開，電腦不需要開機。使用 Safari 或 Chrome 可加入主畫面；第一次完整載入後，可離線遊玩。

## 可以玩什麼

- 花東海岸、縱谷練習場、澎湖離島：原創台灣主題地景，非測繪或真實機場資料。
- 海燕教練機與白鷺巡航機：共用原創高翼機體，有不同重量、推力與起飛速度設定；不對應任何品牌或認證機型。
- 滑行與起飛、空中導航、進場降落，以及自由飛行。
- 機外追蹤與 Blender 座艙視角，空速、姿態、高度、航向、升降率、RPM 六大儀表。
- 幼兒模式：推大油門、等速度足夠再按「抬頭起飛」，操作仍透過升力與力矩；導航可按「一起找路」、進場可按「一起降落」輔助，接地後孩子按住「慢慢停」。
- 語音每次只念一句，瀏覽器無可用語音時保留字幕；聲音按鈕可一併關掉語音與引擎聲。
- 家長手動模式的手機雙指操作：一指操縱桿，另一指油門、方向舵、襟翼、煞車。
- 穩定輔助可關閉，暫停、重新開始、課程成績保存在本機。無帳號、無廣告、無追蹤。
- PWA：第一次在線上完整載入後，HTTPS 網站可加入手機主畫面並離線使用。

## 開始玩

```sh
npm install
npm run dev
```

開啟 `http://localhost:5181/`。手機與電腦使用同一個 Wi-Fi，開啟 `http://電腦的區網IP:5181/`；HTTPS 公開部署入口由倉庫 Pages workflow 建置。iPhone 用 Safari「分享」→「加入主畫面」，Android 可用 Chrome 的安裝選項。

```sh
npm test
npm run build
node scripts/serve.mjs
```

Node.js 24 測試通過。`scripts/serve.mjs` 直接提供建好的 `dist/`，可設定 `FLIGHT_SCHOOL_PORT`。使用 PowerShell 執行 `scripts/package-source.ps1`，會產出 `release/flight-school-source.zip`，含可直接啟動的 dist、原始碼、真實 `.blend` 檔、建模腳本、GLB、IMG 貼圖、授權與測試。GitHub Pages workflow 會將 ZIP 放入網站 downloads 目錄。

## 操作與學習

| 操作 | 電腦 | 手機 |
| --- | --- | --- |
| 推桿／機頭下降 | ↑ / W | 操縱桿往上推 |
| 拉桿／機頭抬起 | ↓ / S | 操縱桿往下拉 |
| 機翼傾斜 | ← → / A D | 操縱桿左右移 |
| 方向舵、地面轉向 | Q / E | ◀ / ▶ |
| 加大／減小油門 | Shift / Ctrl | 油門滑桿 |
| 襟翼 0°、10°、20° | F | 襟翼按鈕 |
| 輪胎煞車 | Space 按住 | 煞車按住 |
| 機外／座艙 | C | 視角按鈕 |
| 暫停、再來一次 | Esc、R | 暫停及再練一次 |

空速的 KT 是「節」，高度 FT 是「呎」，升降率 FT/M 是「每分鐘呎」。航向 000° 向北、090° 向東。操縱桿先小幅操作；拉太多會增加迎角、降低速度，超過臨界迎角就會失速。襟翼讓低速時有更多升力，也帶來更多阻力。

第一堂必須在跑道抬頭起飛；只推油門跑到末端會提示重試，草地離地不給起飛課學分。自由模式仍可在草地起降。

第一堂：襟翼 10°、放開煞車、油門 100%，保持中線；教練機空速接近 56 節時輕拉，離地後收襟翼，爬升到 150 呎。巡航設定較重，約需 60 節。

第三堂從對正跑道的進場開始，初始約 66 節、269 呎、下降約 472 呎／分。依空速調整油門，利用小幅操縱桿調整下降；接地前輕拉、油門歸零，接地後按住煞車。PAPI 進場燈在約三度進場顯示二白二紅；四紅表示較低，四白表示較高。

## 飛行模型與教材來源

`src/physics.js` 使用公尺、秒、公斤、牛頓的 SI 單位。牛頓力積分包含質量、推力、重力、密度隨高度變化、動壓、升力、寄生與誘導阻力、側滑阻力、方向舵側力、迎角、失速後升力下降、襟翼升阻力變化、輪胎地面接觸及煞車。俯仰與滾轉用有限速率及回復力矩，傾斜機翼帶來曲線航跡，不是按鍵平移。固定 120 Hz 子步，長幀限制步長；風速與地速分開計算。

穩定輔助施加回復力矩幫助維持機翼水平與適當迎角；不直接改位置，也不代替油門、轉向或降落操作。進階模式關閉這項輔助。這是**教學簡化模型**，不含完整六自由度慣性張量、螺旋槳滑流、陣風、航管、完整引擎與航電系統，不能用於正式飛行訓練或規劃。參數為原創設定，並非特定飛機 POH。

概念核對使用 FAA 原始教材：[Pilot’s Handbook of Aeronautical Knowledge](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak) 中的 [飛行原理](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-4-principles-flight)、[空氣動力](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-5-aerodynamics-flight)、[飛行控制](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-6-flight-controls) 與 [飛行儀表](https://www.faa.gov/regulationspolicies/handbooksmanuals/aviation/phak/chapter-8-flight-instruments)。沒有複製教材圖像；所有模型、地景與儀表視覺均為原創。

## 模型與開源

- `blender/`：可編輯 `.blend`、建模與 UV 貼圖腳本。
- `public/textures/aircraft.png`：原創 ImageGen IMG atlas。
- `public/models/aircraft.glb`、`aircraft-cab.glb`：由 Blender 匯出，圖片貼圖內嵌，Y-up、+Z 前向。
- `src/`：飛行、任務、渲染、儀表、聲音、手機介面。
- `tests/flight.test.js`：單位、失速、重力、風、煞車、長步長，以及完整起飛／導航／降落流程。
- `public/THIRD_PARTY_NOTICES.txt`：Three.js MIT、Barlow Condensed OFL 字體授權。

歡迎開 issue 或 PR。修改飛行參數時請保留真實單位，並執行三課完整通關測試；新增素材請附來源及授權。程式採 MIT，第三方套件保留原授權。
