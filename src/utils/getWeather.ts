import axios from 'axios';
import { getPreciseLocation } from './getLocation';

const weatherApiKey = '4502f50f8d3d6a31afd458e4577e01b4';

export const getWeatherApi = async () => {
  try {
    const data = await getPreciseLocation();
    if (Array.isArray(data)) {
      const [lat, long] = data;
      const apiCall = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${long}&lang=pl&appid=${weatherApiKey}`;
      console.log(apiCall);
      const weather = await axios.get(apiCall);

      return weather.data;
    }
  } catch (error) {
    console.log('get weather error', error);
  }
};
