# Static website

Build the current Astro website from this repository's root directory. Use
Node.js 24.22.0 to match Cloudflare Pages and GitHub Actions, with npm 9.6.5 or
newer. If you use nvm, run `nvm install` and `nvm use` first.

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

Node.js 24.22.0 is a temporary compatibility pin: as of 22 October 2026,
Cloudflare's upstream `node-build` definitions include it but do not yet include
the newly released security patches 22.23.4 or 24.22.1. Move to 24.22.1 or a later
patched release once the installer supports it. Verify the installer definition
and run the checks above before changing the pins.

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
