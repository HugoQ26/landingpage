import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchWeather } from './weatherSlice';
const Weather = () => {
  const weather = useAppSelector((state) => state.weather.weather.main);
  const city = useAppSelector((state) => state.weather.weather.name);
  const { feels_like, humidity } = weather;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div>
      Temperatura {feels_like}C, wilgotność {humidity} %, miejscowość: {city}
    </div>
  );
};

export default Weather;
