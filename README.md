# Static website

Build the current Astro website from this repository's root directory. Use
Node.js 24.22.2 and its bundled npm 11.19.1 to match the website builds.
If you use nvm, run `nvm install` and `nvm use` first.

```sh
npm ci
npm run build
npm run lint
npm run format:check
```

GitHub Actions selects its Node.js version directly in
`.github/workflows/buildWebApp.yml` and installs the versions recorded in
`package-lock.json`. After changing dependencies, commit the updated lockfile too.

Cloudflare Pages reads `.nvmrc`. If the Pages project has a `NODE_VERSION`
environment variable, remove it or keep it in sync with `.nvmrc` in both
production and preview settings. Keep the Node.js version in the GitHub workflow
in sync too.

For future upgrades, check that the chosen Node.js version has a
[`nodenv/node-build` definition](https://github.com/nodenv/node-build/tree/master/share/node-build)
and that Node.js and its bundled npm satisfy the minimums in `package.json`.
Run the checks above with the new versions.

## PDF downloads

The PDFs are hosted under `https://Freely-Given.org/OBD/OET/Downloads/`.
`src/pages/Resources/Downloads.astro` uses the generated
`src/data/oet-pdfs.json` catalogue to display links, sizes and page counts.
The large PDFs are not part of this website's build or deployment.

Run `make PDF` from the sibling `OpenEnglishTranslation--OET/scripts/`
folder to refresh the PDFs and catalogue, or let the normal `make` build do
it. The batch script and publication profile live in `BibleTypesetter/`.
Commit the small JSON catalogue with this website after regeneration; it is
excluded from Prettier because it is generated deterministically by Python.
Publish OBD's `htmlPages/OET/Downloads/` folder through the normal OBD hosting
process before deploying changed links here.

## Search identity and discovery

`astro.config.mjs` sets `https://openenglishtranslation.bible/` as the public
site address. The shared `Base.astro` layout uses it for canonical URLs and
social-sharing metadata. The homepage also declares the site name as
**Open English Translation**, with **OET** as its alternate name, using
`WebSite` structured data. The 404 page is marked `noindex` and has no canonical.

The official `@astrojs/sitemap` integration generates `dist/sitemap-index.xml`
and its child sitemap during each build, including new pages automatically and
excluding the error page. `src/pages/robots.txt.ts` generates a static
`dist/robots.txt` that advertises the sitemap using the same configured address.
Publish these files with the rest of `dist/`; do not edit generated files.

After deployment, verify the public sitemap and submit
`https://openenglishtranslation.bible/sitemap-index.xml` in Google Search
Console. The separate OBD reader remains at
`https://freely-given.org/OBD/OET/` with its own canonical URL.

# Startup details

## Start front end
```js
// in the frontend dir to rebuild the app
npm run build
// in the frontend dir to start
pm2 start npm -- start
```

### Notes
The blogs will rebuild themselves every hour -- if you want to update sooner you will need to restart


## start database
```js
// in the root dir
sudo docker-compose up
```

## start backend
```js
// in the backend/backend folder
python manage.py check
python manage.py migrate
python manage.py runserver
```
