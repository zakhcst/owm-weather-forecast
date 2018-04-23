// Generate icon url
// Images are cached by the browser
export default class WeatherIconService {
  constructor(AppConstants) {
  'ngInject'
     this._AppConstants = AppConstants;
  }

  iconUrl(source, iconCode) {
    return this._AppConstants[source + 'IconsUrl'] + iconCode + '.png';
  }
}
