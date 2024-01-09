import axios from "axios";
import { useEffect, useState } from "react";

const weatherApi = axios.create({
  baseURL: "https://weatherbit-v1-mashape.p.rapidapi.com",
  params: {
    lat: "38.5",
    lon: "-78.5",
  },
  headers: {
    "X-RapidAPI-Key": "4c50da5040mshf75aa74f17a1faap1bb575jsn94ac27ca284b",
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
});

const useWeatherForecast = () => {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState("/forecast/daily");

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
  console.log(weather);
  return <div>Text for the custom Hook!</div>;
};

export default useWeatherForecast;
