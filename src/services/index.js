import angular from 'angular';

// Create the services module
let servicesModule = angular.module('app.services', []);

import WeatherDataFetchService from './weather-data-fetch.service';
servicesModule.service('WeatherDataFetch', WeatherDataFetchService);

import WeatherDataReformatService from './weather-data-reformat.service';
servicesModule.service('WeatherDataReformat', WeatherDataReformatService);

import WeatherIconService from './weather-icon.service';
servicesModule.service('WeatherIcon', WeatherIconService);

export default servicesModule;
