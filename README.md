# Startup details

## Start front end
```js
// in the frontend dir to start
pm2 start npm -- start
// same dir to rebuild the app
npm build
```
### Notes
the blogs will rebuild theme self every hour. if you want to update sooner you will need to restart

## start backend
```js
// in the backend dir
python manage.py startapp backend
```

## start database
```js
// in the root dir
docker compose up
```