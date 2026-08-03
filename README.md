# StubFolio website

The framework-free static marketing site for StubFolio.

## Structure

- `index.html` contains the marketing page and its SEO metadata.
- `terms.html` contains the standalone Terms of Use page.
- `styles.css` contains all responsive styling.
- `script.js` only controls the mobile navigation.
- `images/` and `fonts/` contain local assets.
- `robots.txt`, `sitemap.xml`, and `site.webmanifest` support search and platform integration.
- `.nojekyll` keeps GitHub Pages in plain static-file mode.

There is no package manager, framework, build step, server runtime, or deployment workflow.

## Local preview

From this directory, run any static file server. For example:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## GitHub Pages

In the repository settings, set Pages to deploy from the `main` branch and the repository root. The checked-in files are the deployable site.

The site uses `https://stubfolio.karmaacademy.com.au/` as its canonical production URL. Keep the canonical tags, Open Graph URLs, `robots.txt`, and `sitemap.xml` aligned when the production domain changes.
