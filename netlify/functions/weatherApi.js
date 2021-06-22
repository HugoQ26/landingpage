const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=Opole&units=metric&lang=pl&appid=${process.env.WEATHER}`;
    console.log(apiCall);
    const weather = await axios.get(apiCall);

    return weather.data;
  } catch (error) {
    console.log('get weather error', error);
  }
};
