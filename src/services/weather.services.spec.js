import app from '../app/app';

import sampleData from '../public/uk-london@2018-04-04.json';
import Promise from 'bluebird'

describe('Weather Forecast Module', () => {

  describe('weatherForecast5Ctrl', () => {
    let ctrl;
  	let originalJasmineTimeout;

    beforeAll(() => {
      originalJasmineTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });
    	
    beforeEach(() => {
      angular.mock.module(app);
      angular.mock.inject(($controller) => {
        // ctrl = $controller('AppCtrl', {});
        ctrl = $controller('weatherForecast5Ctrl', {});
      });
    });

    it('should compose the icon url', () => {
      expect(ctrl.weatherIcon.iconUrl('origin', '01d')).toBe('/icons/01d.png');
    });


    it('should receive data from WeatherDataFetch', (done) => {
    	spyOn(ctrl.weatherDataFetch, 'get').and.returnValue(Promise.resolve(sampleData));

  	 	ctrl.weatherDataFetch.get().then((downloadedData) => { 
      	expect(downloadedData.cod).toBe('200');
	    	done();
    	});
    });

    it('should reformat data from WeatherDataFetch for the view', (done) => {
    	spyOn(ctrl.weatherDataFetch, 'get').and.returnValue(Promise.resolve(sampleData));

  	 	ctrl.weatherDataFetch.get()
      .then((data) => ctrl.weatherDataReformat.update(data))
      .then((data) => {
      	expect(data.listByDate).toBeDefined();
	    	done();
    	});
    });

    afterAll(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeout;
    });

  });
});


