# Rice Platform V1

Static responsive website for `riceplatform.org`.

## Files

- `index.html` — homepage structure
- `styles.css` — responsive design and dark mode
- `script.js` — mobile navigation, theme toggle, donation placeholder

## Run locally

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to Cloudflare Pages

1. Upload these files to a GitHub repository.
2. Open Cloudflare Dashboard.
3. Go to **Workers & Pages**.
4. Choose **Create application → Pages → Connect to Git**.
5. Select the repository.
6. Framework preset: **None**.
7. Build command: leave blank.
8. Build output directory: `/`.
9. Deploy.
10. Add `riceplatform.org` as the custom domain.

## Before production

Replace placeholder links, download URLs, news content, donation integration, and social links.
