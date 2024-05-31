import { useContext, useEffect, useState } from "react";
import useWeatherForecast from "../../hooks/useWeatherForecast";
import { WeatherContext } from "../../utils/weatherContext";

const Navbar = () => {
  const { setDay } = useContext(WeatherContext);
  const { weather } = useWeatherForecast();
  const [dateAfterTomorrow, setDateAfterTomorrow] = useState('')

  

  useEffect(()=>{
    if (weather){
      try{  
         const date = weather.forecast.forecastday[2].date;
        // console.log(date);
        setDateAfterTomorrow(date);
      } catch(error){
        console.error('Error fetching the date from the API', error)
      }
   
    }
  })

  function getDayOfWeek(dateString: string): string {
    const date = new Date(dateString);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getUTCDay()];
  }
  
  const dayAfterTomorrow = getDayOfWeek;
  
  const dayOfWeek = dateAfterTomorrow ? dayAfterTomorrow(dateAfterTomorrow) : '';
  console.log(dayOfWeek); // This will log the day of the week for the date after tomorrow
  



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
        className="text-center text-lg text-yellow-200 h-10 w-32 bg-slate-400 rounded-md shadow-md hover:bg-slate-500 m-2"
        onClick={() => setDay("dayAfterTommorrow")}
      >
        {dayOfWeek}
      </button>
    </div>
  );
};

export default Navbar;
