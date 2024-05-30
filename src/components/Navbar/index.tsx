import { useContext, useEffect } from "react";
import useWeatherForecast from "../../hooks/useWeatherForecast";
import { WeatherContext } from "../../utils/weatherContext";

const Navbar = () => {
  const { setDay } = useContext(WeatherContext);
  const { weather } = useWeatherForecast();

  

  useEffect(()=>{
    if (weather){
      console.log(weather);
      const dateDayAfterTomorrow = Date(weather.forecast.forecastday[2].date)
      console.log(dateDayAfterTomorrow)
    }
  })

  return (
    <div className="flex flex-wrap justify-evenly bg-blue-400 p-1">
      <button
        className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={() => setDay("today")}
      >
        Today
      </button>
      <button
        className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={() => setDay("tommorrow")}
      >
        Tomorrow
      </button>
      <button
        className="text-center text-lg text-yellow-200 h-10 w-64 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={() => setDay("dayAfterTommorrow")}
      >
        Day After Tomorrow
      </button>
    </div>
  );
};

export default Navbar;
