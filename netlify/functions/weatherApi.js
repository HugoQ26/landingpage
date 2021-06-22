const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=Opole&units=metric&lang=pl&appid=${process.env.WEATHER}`;
    console.log(apiCall);
    console.log('apiCalaaaaaaaaaaaaaaaaal');
    const weather = await axios.get(apiCall);
    console.log('🚀 ~ file: weatherApi.js ~ line 9 ~ weather', weather);
    // return JSON.stringify(weather.data);
    // return JSON.stringify({ martin: 'marcin' });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello World' }),
    };
  } catch (error) {
    console.log('get weather error', error);
  }
};
