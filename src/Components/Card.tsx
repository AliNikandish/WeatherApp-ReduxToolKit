import { CiTempHigh } from 'react-icons/ci'
import { FaTachometerAlt } from 'react-icons/fa'
import { GiPaperWindmill, GiWaterDrop } from 'react-icons/gi'
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi'
import { MdOutlineVisibility } from 'react-icons/md'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'
import { WiSunrise, WiSunset, WiWindBeaufort4 } from 'react-icons/wi'
import { useAppSelector } from '../App/hooks'
import { stateType } from '../Types/WeatherTypes'
import { convertKelvinToCentigrade, getHumidityValue, getSunTime, getVisibilityValue, getWindDirection, translateDescription } from '../Utils/Helpers'
import { WiHumidity } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";

function Card() {
    const weatherData = useAppSelector((state: stateType) =>state.weather.weatherData);

  return (

    <>
    
    {weatherData &&
    
    (
        <>
        <div className="mt-10 lg:w-[800px] md:w-[600px] w-[360px] h-[630px] md:h-[350px] bg-white rounded-md shadow-lg p-5 text-blue-950 ">
          
    <div className="text-slate-500 border-b pb-1 flex justify-between">
        <div className="text-slate-500">آب و هوای حال حاضر</div>
    </div>
    <div className="flex flex-col md:flex-row gap-x-10 lg:gap-x-32 gap-y-5 mt-2">
      <div className="">
        <p className="text-center text-xl">نام شهر به لاتین: {weatherData.name}</p>
        <div className="flex items-center gap-x-2">
          <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`} alt="" />
          <span className="text-6xl">{convertKelvinToCentigrade(weatherData.main.temp)}°</span>
        </div>
        <p className="text-center text-slate-500 text-2xl">{translateDescription(weatherData.weather[0].description)}</p>
      </div>
      <div>
          <div className="flex gap-x-1">
            <span><WiThermometer/></span> 
            دمای احساس شده : °{convertKelvinToCentigrade(weatherData.main.feels_like)}
          </div>
          <div>
            <div className="flex gap-x-1">
              <span><HiArrowNarrowUp/></span> 
              بالاترین دما : °{convertKelvinToCentigrade(weatherData.main.temp_max)}
            </div>
            <div className="flex gap-x-1">
              <span ><HiArrowNarrowDown/></span>  
              پایین ترین دما : °{convertKelvinToCentigrade(weatherData.main.temp_min)}
            </div>
          </div>
          <div className="flex gap-x-1">
            <span ><WiHumidity/></span> 
            رطوبت : {weatherData.main.humidity}% - {getHumidityValue(weatherData.main.humidity)}
          </div>
          <div className="flex gap-x-1">
            <span ><GiPaperWindmill/></span>
            جهت باد : {getWindDirection(weatherData.wind.deg)}
          </div>
          <div className="flex gap-x-1">
            <span ><WiWindBeaufort4/></span>
            <span>سرعت باد :</span>
            <span>km/h</span>
            <span> {(weatherData.wind.speed)}</span>
          </div>
          <div className="flex gap-x-1">
            <span ><FaTachometerAlt/></span>
            فشار : {weatherData.main.pressure} پاسکال 
          </div>
          <div className="flex gap-x-1">
            <span><MdOutlineVisibility/></span>
            دید : {getVisibilityValue(weatherData.visibility)}
          </div>
          <div>
            <div className="flex gap-x-1">
             <span ><WiSunrise/></span>
              طلوع آفتاب : {getSunTime(weatherData.sys.sunrise)}
            </div>
            <div className="flex gap-x-1">
              <span ><WiSunset/></span>
              غروب آفتاب : {getSunTime(weatherData.sys.sunset)}
            </div>
          </div>
          <div>
            <div className="flex gap-x-1">
            <span><TbWorldLatitude/></span>
            عرض جغرافیایی : {weatherData.coord.lat}
            </div>
            <div className="flex gap-x-1">
            <span><TbWorldLongitude/></span>
            طول جغرافیایی : {weatherData.coord.lon}
            </div>
          </div>
      </div>
    </div>
  </div>
        </>
    )
    }
    
    </>
  )
}

export default Card