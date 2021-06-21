import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherApi } from '../../utils/getWeather';

const weatherType = {
  coord: {
    lon: -122.08,
    lat: 37.39,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  visibility: 16093,
  wind: {
    speed: 1.5,
    deg: 350,
  },
  clouds: {
    all: 1,
  },
  dt: 1560350645,
  sys: {
    type: 1,
    id: 5122,
    message: 0.0139,
    country: 'US',
    sunrise: 1560343627,
    sunset: 1560396563,
  },
  timezone: -25200,
  id: 420006353,
  name: 'Mountain View',
  cod: 200,
};

interface InitialState {
  weather: typeof weatherType;
}
const initialState: InitialState = {
  weather: { ...weatherType },
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchbycoords',
  async () => {
    try {
      const response = await getWeatherApi();
      return response;
    } catch (error) {
      console.log('fetchweather slice error', error);
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      console.log('builder addCase erprr');
    });
  },
});

// export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
