# Kramfors Skog AB

Company website for tree felling, forest management, and land clearing in Kramfors. Built with React (Vite) and PocketBase for contact form inquiries.

## Requirements

- Node.js 22+ (see `.nvmrc`)
- macOS: the project downloads a native PocketBase binary on first setup (the export ships a Linux binary only)

## Quick start

```bash
npm install
npm run dev
```

- **Website:** http://localhost:3000
- **PocketBase admin:** http://localhost:8090/_/

The contact form sends inquiries via [EmailJS](https://www.emailjs.com/).

### EmailJS setup

1. Copy `.env.example` to `.env` in the **project root** (same folder as `package.json`).
2. Add your **Public Key** from [EmailJS Account](https://dashboard.emailjs.com/admin/account):

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. On Render, add the same variable to the **static site** (`kramforsskog-web`) and redeploy.

Service ID `service_ziaqn1n` and template `template_27wh01k` are configured in code.

## Environment

Copy or edit `.env` in the project root:

```
PB_ENCRYPTION_KEY=<exactly 32 characters>
PB_SUPERUSER_EMAIL=admin@example.com
PB_SUPERUSER_PASSWORD=your-secure-password
```

If you deploy from [Hostinger Horizons](https://horizons.hostinger.com), use the encryption key from your Horizons project settings. The exported `pb_data.horizons-export-backup` folder is encrypted with that key and is kept for reference only.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start web app (port 3000) and PocketBase (port 8090) |
| `npm run build` | Production build → `dist/apps/web` |
| `npm run lint` | ESLint for the web app |

## Project structure

```
apps/web/          React frontend (Vite, Tailwind, shadcn/ui)
apps/pocketbase/   PocketBase API, migrations, and hooks
```

## Deploy (Render)

See **[DEPLOY.md](./DEPLOY.md)** for connecting GitHub to Render and deploying with `render.yaml`.

Repository: https://github.com/velvetfasion-a11y/Kramforsskog
