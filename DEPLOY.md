# Deploy to Render + GitHub

Repo: [github.com/velvetfasion-a11y/Kramforsskog](https://github.com/velvetfasion-a11y/Kramforsskog)

This project deploys as **two Render services** (defined in `render.yaml`):

| Service | Type | Purpose |
|---------|------|---------|
| `kramforsskog-web` | Static site | React website (CDN) |
| `kramforsskog-api` | Web service | PocketBase (contact form API) |

---

## 1. Push code to GitHub

From your project folder:

```bash
git remote -v
# Should show: https://github.com/velvetfasion-a11y/Kramforsskog.git

git push origin main
```

If push fails, sign in to GitHub in the terminal or use GitHub Desktop.

---

## 2. Connect GitHub to Render

1. Open [dashboard.render.com](https://dashboard.render.com)
2. **Account Settings → GitHub** → connect your GitHub account
3. If the repo is under an organization (`velvetfasion-a11y`), click **Configure** on GitHub and grant Render access to that org/repos

Without org access, Render will not see `velvetfasion-a11y/Kramforsskog`.

---

## 3. Deploy with Blueprint (recommended)

1. **New → Blueprint**
2. Connect repository: `velvetfasion-a11y/Kramforsskog`
3. Branch: `main`
4. Render reads `render.yaml` and creates both services
5. When prompted, set these **secret** environment variables for `kramforsskog-api`:

| Variable | Example | Notes |
|----------|---------|--------|
| `PB_ENCRYPTION_KEY` | 32 random characters | Must be **exactly 32** characters |
| `PB_SUPERUSER_EMAIL` | you@email.com | PocketBase admin login |
| `PB_SUPERUSER_PASSWORD` | strong password | PocketBase admin login |

6. Click **Apply** and wait for both services to deploy (first build ~5–10 min)

Your site URL will be like `https://kramforsskog-web.onrender.com`.

---

## 4. Manual setup (if Blueprint does not appear)

### Static site (`kramforsskog-web`)

- **New → Static Site** → connect repo
- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist/apps/web`
- **Environment variable:**
  - `VITE_POCKETBASE_URL` = `https://kramforsskog-api.onrender.com` (use your real API URL)
- **Redirect/Rewrite:** `/*` → `/index.html` (for client-side routing)

### Web service (`kramforsskog-api`)

- **New → Web Service** → same repo
- **Root directory:** `apps/pocketbase`
- **Build command:** `chmod +x ./scripts/install-pocketbase.sh && ./scripts/install-pocketbase.sh`
- **Start command:** `./pocketbase serve --http=0.0.0.0:$PORT --encryptionEnv=PB_ENCRYPTION_KEY --dir=./pb_data --migrationsDir=./pb_migrations --hooksDir=./pb_hooks --hooksWatch=false`
- **Health check path:** `/api/health`
- Add the three `PB_*` env vars from the table above

---

## 5. Verify deployment

1. Open the static site URL — homepage loads
2. Open `https://<api-host>/api/health` — should return `"API is healthy"`
3. Submit the contact form — should show success toast
4. PocketBase admin: `https://<api-host>/_/` — log in with superuser credentials

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Render does not list the repo | Grant Render access to the `velvetfasion-a11y` org on GitHub |
| API build fails on `pocketbase` | Build uses `install-pocketbase.sh` to download Linux binary (macOS binary in git is not used on Render) |
| `cipher: message authentication failed` | Wrong `PB_ENCRYPTION_KEY` length or value; create a new 32-char key and redeploy (resets DB) |
| Contact form fails (CORS/network) | Ensure `VITE_POCKETBASE_URL` on the static site matches the API `onrender.com` URL (with `https://`) |
| Free tier sleeps | First visit after idle may take ~30s to wake |

---

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

Open http://localhost:3000
