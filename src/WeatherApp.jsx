import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState({
        city :"indore",
        temp: 30,
        temp_max: 32.2,
        temp_min: 29,
        humidity: 47,
        feelsLike: 29,
        weather: 'few clouds',
      });

const updataInfo = (result) =>{
    setWeatherInfo(result);
}

  return (
    <>
      <SearchBox updataInfo={updataInfo} ></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </>
  );
}