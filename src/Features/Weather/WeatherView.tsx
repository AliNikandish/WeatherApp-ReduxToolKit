import {  useAppSelector } from "../../App/hooks";
import { stateType } from "../../Types/WeatherTypes";

import Button from "../../Components/Button";
import SearchBar from "../../Components/SearchBar";
import Card from "../../Components/Card";
import Error from "../../Components/Error";

function WeatherView() {
  const weatherData = useAppSelector((state: stateType) =>state.weather.weatherData);
  const error = useAppSelector((state: stateType) => state.weather.error);

  console.log(weatherData)
  
  return (
    <div className=" flex flex-col justify-center items-center">
      <h2 className="mt-5 text-slate-900 font-VazirBold text-3xl text-center">آب و هوا</h2>

      <SearchBar/>
     
      {error &&
      <>
      <Error/>
      </>
       }
      {weatherData && (
       
        <>
          <Card/>
         <Button lat={weatherData.coord.lat} lon={weatherData.coord.lon}/>
        
        </>
      )}

       

    </div>
  );
}

export default WeatherView;