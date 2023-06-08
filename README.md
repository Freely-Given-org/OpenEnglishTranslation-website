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
