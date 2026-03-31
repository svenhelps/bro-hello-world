# Bro, Hello World

Tasteful and lightly funny GitHub Pages site for Sven, built as a zero-build
static project with plain HTML and CSS.

- Repo: https://github.com/svenhelps/bro-hello-world
- Live site: https://svenhelps.github.io/bro-hello-world/

## Project structure

- `index.html` contains the landing page markup and copy.
- `styles.css` contains the full visual design.
- `.nojekyll` keeps GitHub Pages in plain static-file mode.

## Run locally

Because this is a static site, there is no install step.

Open `index.html` directly in a browser, or serve the directory locally:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Deploy notes

GitHub Pages is configured to publish from the repository root on the `main`
branch.

Deployment flow:

```bash
git add index.html styles.css README.md .nojekyll
git commit -m "Update bro hello world site"
git push origin main
```

After pushing, GitHub Pages rebuilds automatically and serves the site at:

`https://svenhelps.github.io/bro-hello-world/`

You can inspect the current Pages configuration with:

```bash
gh api repos/svenhelps/bro-hello-world/pages
```
