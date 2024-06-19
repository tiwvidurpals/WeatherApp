import axios from "axios";
import { useEffect, useState } from "react";
import useCityStore from '../zustand/store';

const getWeatherFromAPI = (coordinates) => {
  return axios.create({
    baseURL: "http://api.weatherapi.com/v1",
    params: {
      key: "5d56bd2dae224a7581552817241601", 
      q: coordinates,
      days: "3",
    },
  });
};

// Coordinates for different cities
// q: "51.0447, -114.0719", // Calgary
// q: "27.7172, 85.3240", // Kathmandu
// q: "28.2096, 83.9856", // Pokhara
// q: "27.9772, 83.7677", // Waling
// q: "49.8954, -97.1385", // Winnipeg
// q: "37.0165, -7.9352", // Faro
// q: "32.8140, -96.9489", // Irving

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
