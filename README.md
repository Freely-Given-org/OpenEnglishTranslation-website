# Static website

Build the current Astro website from this repository's root directory. Use the
Node.js version in `.nvmrc` and npm 9.6.5 or newer. If you use nvm, run `nvm install`
and `nvm use` first.

```sh
npm ci
npm run build
npm run lint
npm run format:check
```

GitHub Actions reads the same `.nvmrc` file and installs the versions recorded in
`package-lock.json`. After changing dependencies, commit the updated lockfile too.

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
