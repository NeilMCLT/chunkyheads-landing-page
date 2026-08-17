# ChunkyHeads Landing Page

Official coming-soon landing page for ChunkyHeads. The project is ready for a
private GitHub repository and automatic deployment to Cloudflare Workers.

## What you need

- GitHub account
- Cloudflare account
- `chunkyheadsph.com` added to Cloudflare
- Node.js 22 or newer for local development

## Upload to GitHub

1. Create a new **private** GitHub repository.
2. Extract this package and upload every file and folder, including `.github`.
3. Use `main` as the default branch.

If you are using Git locally:

```bash
git init
git add .
git commit -m "Launch ChunkyHeads landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Connect GitHub to Cloudflare

Create a Cloudflare API token using the **Edit Cloudflare Workers** template,
then add these two GitHub repository secrets under **Settings → Secrets and
variables → Actions**:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The included GitHub Actions workflow deploys automatically whenever code is
pushed to `main`. You can also run it manually from the repository's Actions
tab.

## Connect the domain

After the first successful deployment:

1. Open Cloudflare → **Workers & Pages** → `chunkyheads-ph`.
2. Open **Settings → Domains & Routes**.
3. Add `chunkyheadsph.com` as a custom domain.
4. Add `www.chunkyheadsph.com`, then redirect it to the main domain.

If the domain is registered at Hostinger, keep it there. Point its nameservers
to the pair assigned by Cloudflare. Before changing nameservers, copy any email
DNS records such as MX, SPF, DKIM, and DMARC into Cloudflare.

## Local preview

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

Do not commit API tokens, account credentials, `.env` files, `node_modules`, or
the generated `dist` folder.
