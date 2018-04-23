import angular from 'angular';

export default class WeatherDataFetchService {
  constructor(AppConstants, $http) {
    'ngInject'
    this._$http = $http;
    this._AppConstants = AppConstants;
  }

  get() {
    return this._$http({url: this._AppConstants.originDataUrl}).then(res => {
      return res.data;
    }, err => {
      if (err && err.status === 404) {
        return this._$http({url: this._AppConstants.owmDataUrl}).then(res => {
          return res.data;
        });
      } else {
        Promise.reject(err);
      }
    });
  }
}
