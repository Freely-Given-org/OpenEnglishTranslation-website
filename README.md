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

## start backend
```js
// in the backend/backend folder
// Note: the backend/backend/backend folder seems to need to be deleted first
//	i.e., from backend/backend: rm -r backend
python manage.py startapp backend
```

## start database
```js
// in the root dir
sudo docker-compose up &
```
