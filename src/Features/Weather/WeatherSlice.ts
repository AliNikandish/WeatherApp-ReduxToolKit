import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { WeatherState, weatherDataType } from '../../Types/WeatherTypes';
import API_KEY from '../../apiKey';



const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};



export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather', async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  return response.data;
});


const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action:PayloadAction<weatherDataType>) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default WeatherSlice.reducer;