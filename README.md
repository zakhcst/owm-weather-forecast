# 5 day weather forecast every 3 hours from Open Weather Map

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo

```bash
# clone repo
$ git clone https://github.com/zakhcst/owm-weather-forecast.git

# change directory to your app
$ cd owm-weather-forecast

# install the dependencies with npm
$ npm install

# start webpack development server serving from public/
$ npm start

# or start local express server serving from dist/
$ cd express-serve-dist
$ npm start

# or build the project to firebase/dist/
$ npm run build
```

Go to [http://localhost:8080](http://localhost:8080) in your browser.

Or go to https://owm-weather-forecast.firebaseapp.com

# Getting Started

AngularJS(1.6.9) + webpack(2.2.0) version shows the Open wheather map 5 day forecast.
The app can fetch the data set on the app server.
If server data is not found it will get the data from OWM servers.
The registered account has a limitations for up to 60 requests per minute in its free quota and if the quota is exceeded will be locked.

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)

![alt text](https://raw.githubusercontent.com/zakhcst/owm-weather-forecast/master/src/public/preview.png)