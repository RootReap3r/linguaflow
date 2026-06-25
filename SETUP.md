# LinguaFlow — GitHub Pages Setup

## Files in this folder
- `index.html` — the full app
- `manifest.json` — PWA config
- `sw.js` — service worker (offline support)
- `icon-192.png`, `icon-512.png`, `icon-180.png`, `icon-152.png` — app icons
- `icon.svg` — source icon

---

## Deploy to GitHub Pages (5 minutes)

### Step 1 — Create a GitHub account
Go to github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** button → **New repository**
2. Name it exactly: `linguaflow`
3. Set to **Public**
4. Click **Create repository**

### Step 3 — Upload files
1. Click **uploading an existing file** (shown on the empty repo page)
2. Drag ALL files from this folder into the upload area
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**
6. Wait ~60 seconds, then your URL appears:
   `https://YOUR-USERNAME.github.io/linguaflow`

---

## Install on iPhone (Safari only)

1. Open Safari on your iPhone
2. Go to your GitHub Pages URL
3. Tap the **Share** button (box with arrow pointing up)
4. Scroll down and tap **Add to Home Screen**
5. Name it **LinguaFlow** → tap **Add**

The app now appears on your home screen with the purple globe icon.
Opens fullscreen, no browser bar, like a native app.

---

## Add your API keys

When you open the app, tap **🔊 Browser voice** in the header to open Settings.
Add your keys there — they're saved to your device only.

- **Claude**: console.anthropic.com → API Keys
- **DeepSeek**: platform.deepseek.com → API Keys  
- **Qwen**: dashscope.aliyuncs.com → API Keys
- **ElevenLabs**: elevenlabs.io → Profile → API Key

---

## Notes
- Speech recognition works in Safari on iOS 15+
- Microphone permission: tap **Allow** when prompted on first use
- All API keys stored locally on your device (localStorage)
- App works offline for content already loaded; API features need internet
