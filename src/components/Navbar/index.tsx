import { useState } from "react";
import useWeatherForecast from "../../hooks/useWeatherForecast";

type WeatherInfo = {
  currentTemperature: number;
  feelsLikeTemperature: number;
  maxTemperature: number;
  minTemperature: number;
};

const Navbar = () => {
  const { weather } = useWeatherForecast();

  const [todayWeather, setTodayWeather] = useState<WeatherInfo | null>(null);
  const [tomorrowWeather, setTomorrowWeather] = useState<WeatherInfo | null>(
    null
  );
  const [dayAfterTomorrowWeather, setDayAfterTomorrowWeather] =
    useState<WeatherInfo | null>(null);
  const [currentWeather, setCurrentWeather] = useState<WeatherInfo | null>(
    null
  );

  if (weather) {
    const todayData: WeatherInfo = {
      currentTemperature: weather.current.temp_c,
      feelsLikeTemperature: weather.current.feelslike_c,
      maxTemperature: weather.forecast?.forecastday[0].day.maxtemp_c,
      minTemperature: weather.forecast?.forecastday[0].day.mintemp_c,
    };

    const tomorrowData: WeatherInfo = {
      currentTemperature: weather.current.temp_c,
      feelsLikeTemperature: weather.current.feelslike_c,
      maxTemperature: weather.forecast?.forecastday[1].day.maxtemp_c,
      minTemperature: weather.forecast?.forecastday[1].day.mintemp_c,
    };

    const dayAfterTomorrowData: WeatherInfo = {
      currentTemperature: weather.current.temp_c,
      feelsLikeTemperature: weather.current.feelslike_c,
      maxTemperature: weather.forecast?.forecastday[2].day.maxtemp_c,
      minTemperature: weather.forecast?.forecastday[2].day.mintemp_c,
    };

    setTodayWeather(todayData);
    setTomorrowWeather(tomorrowData);
    setDayAfterTomorrowWeather(dayAfterTomorrowData);
    setCurrentWeather(todayData);
  }

  const showTodayWeather = () => {
    setCurrentWeather(todayWeather);
  };

  const showTomorrowWeather = () => {
    setCurrentWeather(tomorrowWeather);
  };

  const showDayAfterTomorrowWeather = () => {
    setCurrentWeather(dayAfterTomorrowWeather);
  };

  return (
    <div className="flex flex-wrap justify-evenly bg-blue-400 p-1">
      <button
        className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={showTodayWeather}
      >
        Today
      </button>
      <button
        className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={showTomorrowWeather}
      >
        Tomorrow
      </button>
      <button
        className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={showDayAfterTomorrowWeather}
      >
        Day After Tomorrow
      </button>
    </div>
  );
};

export default Navbar;
