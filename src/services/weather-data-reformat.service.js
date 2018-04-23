import angular from 'angular';

// Reformat data for the view
export default class WeatherDataReformatService {

  update(data) {
    data = data || {list: []};
    data.listByDate = data.list.reduce((accumulator, item) => {
      let dateObj = new Date(item.dt*1000);
      let hour = dateObj.getUTCHours();
      let date = dateObj.setHours(0); 

      if (accumulator[date]) {
        accumulator[date][hour] = item;
      } else {
        accumulator[date] = {};
        accumulator[date][hour] = item;
      }
      return accumulator;
    }, {});

    return data;
  }
}
