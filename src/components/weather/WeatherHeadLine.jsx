import { useContext } from "react";
import CloudImage from "../../assets/cloud.svg";
import HazeImage from '../../assets/haze.svg';
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

const WeatherHeadLine = () => {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, location, time, climate } = weatherData;

  const getWeatherIcon = (climate)=>{
    switch (climate) {
      case "Rain":
        return RainIcon
        case "Clouds":
          return CloudImage;
      case "Clear":
          return SunnyIcon;
      case "Snow":
          return SnowIcon;
      case "Thunder":
          return ThunderIcon;
      case "Fog":
          return HazeImage;
      case "Haze":
          return HazeImage;
      case "Mist":
          return HazeImage;

      default:
          return SunnyIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
