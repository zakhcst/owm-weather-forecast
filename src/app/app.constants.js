const AppConstants = {
  
  owmDataUrl: 'https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=a354c550c575036102a4dce8d36e75d1',

  // Reusing the data from own server for 3 hours until the next update
  // Assuming that the data is cached on app's server
  originDataUrl: 'uk-london@2018-04-05.json',

  owmIconsUrl: 'http://openweathermap.org/img/w/',
  // Icons can be cached on the server in /public/icons
  originIconsUrl: '/icons/',
  
  hourTemplate: [0, 3, 6, 9, 12, 15, 18, 21],
  hourBGTemplate: ['blue-900', 'blue-800', 'blue-500', 'blue-300', 'blue-100', 'blue-300', 'blue-500', 'blue-800']
};

export default AppConstants;
