import axios from "axios";
import { useEffect, useState } from "react";
import useCityStore from '../zustand/store';



const getWeatherFromAPI = (coordinates) => {
  const coords = coordinates;
  return axios.create({
    baseURL: "http://api.weatherapi.com/v1",
    params: {
      key: "5d56bd2dae224a7581552817241601", 
      q: coordinates,
      days: "3",
    },
  });
};



const useWeatherForecast = () => {
  const { coordinates } = useCityStore();
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getWeather() {
      try {
        setIsLoading(true);
        const weatherApi = getWeatherFromAPI(coordinates);
        const response = await weatherApi.get("/forecast.json");
        setWeather(response.data);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    }
    
    if (coordinates) {
      getWeather();
    }
  }, [coordinates]);

  return { weather, isLoading, error };
};

export default useWeatherForecast;
