import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-animate';
import 'angular-aria';
import '../../../node_modules/angular-material/angular-material.css';
import '../../style/app.css';

import '../../services/index';

const requires = [
  'ngMaterial',
  'app.services'
];

let weatherForecast5Component = {
  template: require('./weather-forecast.html'),
  controller: 'weatherForecast5Ctrl',
  controllerAs: 'weatherForecast5Ctrl'
};

class WeatherForecast5Ctrl {
  constructor($window, $q, WeatherIcon, WeatherDataFetch, WeatherDataReformat, AppConstants) {
    const self = this;
    this.weatherDataFetch = WeatherDataFetch;
    this.weatherDataReformat = WeatherDataReformat;
    this.weatherIcon = WeatherIcon;
    this.hourBGTemplate = AppConstants.hourBGTemplate;
    this.hourTemplate = AppConstants.hourTemplate;

    $q.when(this.weatherDataFetch.get())
      .then((data) => self.weatherDataReformat.update(data))
      .then((data) => {
        self.weatherData = data;
      })
      .catch((err) => {
        $window.alert(err);
      });

  }
}

const moduleName = 'weatherForecastModule';

const weatherForecastModule = angular.module(moduleName, requires)
  .component('weatherForecast', weatherForecast5Component)
  .controller('weatherForecast5Ctrl', WeatherForecast5Ctrl);

export default moduleName;

