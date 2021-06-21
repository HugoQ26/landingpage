import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchWeather } from './weatherSlice';
const Weather = () => {
  const weather = useAppSelector((state) => state.weather.weather.main);

  const city = useAppSelector((state) => state.weather.weather.name);
  const { feels_like, humidity } = weather;

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchWeather());
  };

  return (
    <div>
      <button onClick={handleClick}>Pogoda</button>
      Temperatura {feels_like}C, wilgotność {humidity} %, miejscowość: {city}
    </div>
  );
};

export default Weather;
