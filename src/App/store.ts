import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import WeatherSlice from "../Features/Weather/WeatherSlice"
export const store = configureStore({
  reducer: {
    weather: WeatherSlice ,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
