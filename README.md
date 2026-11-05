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
