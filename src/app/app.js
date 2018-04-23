import angular from 'angular';

import constants from './app.constants';
import weatherForecast from '../components/weather-forecast5/weather-forecast';

const requires = [
  'weatherForecastModule'
];

let app = {
  template: require('./app.html'),
  controller:  'AppCtrl'
};
class AppCtrl {}

const moduleName = 'app';

const mainModule = angular.module(moduleName, requires)
  .constant('AppConstants', constants)
  .component('app', app)
  .controller('AppCtrl', AppCtrl);

export default moduleName;
