import axios from 'axios';
import { getPreciseLocation } from './getLocation';

export const getWeatherApi = async () => {
  try {
    const data = await getPreciseLocation();
    if (Array.isArray(data)) {
      const [lat, long] = data;
      const apiCall = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${long}&lang=pl&appid=${process.env.WEATHER}`;
      console.log(apiCall);
      const weather = await axios.get(apiCall);

      return weather.data;
    }
  } catch (error) {
    console.log('get weather error');
  }
};
