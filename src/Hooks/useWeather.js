import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const {selectedLocation} = useContext(LocationContext)
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudTemperature: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  console.log(selectedLocation);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetched weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudTemperature: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };

      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(()=>{

    setLoading({
      ...loading,
      state:true,
      message:"Finding Location..."
    })

    if(selectedLocation.latitude && selectedLocation.longitude){
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude)
    }else{
      
      navigator.geolocation.getCurrentPosition((position)=>{
        fetchWeatherData(position.coords.latitude, position.coords.longitude)
      })
    }
  },[selectedLocation.latitude, selectedLocation.longitude])

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
