import axios from "axios";
import { useEffect, useState } from "react";

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    Key: "5d56bd2dae224a7581552817241601",
    q: "51.0447, -114.0719",
    days: "3",
  },
});

const useWeatherForecast = () => {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState("/forecast.json");

  useEffect(() => {
    async function getWeather() {
      try {
        setIsLoading(true);
        const response = await weatherApi.get(currentPage);
        setWeather(response.data);
        setIsLoading(false);
      } catch (e: any) {
        setError(e.message);
        setIsLoading(false);
      }
    }
    getWeather();
  }, [currentPage]);
  // console.log(weather);
  return { weather, isLoading, error };
};

export default useWeatherForecast;
