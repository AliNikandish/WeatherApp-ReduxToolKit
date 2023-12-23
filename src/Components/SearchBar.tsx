import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../App/hooks';
import { fetchWeather } from '../Features/Weather/WeatherSlice';
import { stateType } from '../Types/WeatherTypes';

function SearchBar() {

  const [city, setCity] = useState("");
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state: stateType) => state.weather.loading);

  const handleFetchWeather = () => {
    if (city.trim() !== "") {
      dispatch(fetchWeather(city));
    }
  };
  
  return (
    <div className="mt-10 w-[360px] md:w-[600px] lg:w-[800px]">
    <input
          className=" rounded-md p-2 w-[280px] md:w-[510px] lg:w-[710px] outline-none"
          type="text"
          placeholder="نام شهر را وارد کنید"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="mr-1 absolute text-slate-50 bg-blue-500  py-[10px] md:py-2 px-1 md:px-4 rounded-md text-sm" onClick={handleFetchWeather} disabled={loading}>
          {loading ? "جست و جو ..." : "پیدا کردن"}
        </button>
   </div>
  )
}

export default SearchBar