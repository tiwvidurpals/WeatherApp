import { useContext, useEffect, useState } from "react";
import useWeatherForecast from "../../../hooks/useWeatherForecast";
import weatherImage from "../../images/weatherImage.jpg";
import { WeatherContext } from "../../../utils/weatherContext";

const Home = () => {
  const { weather } = useWeatherForecast();
  const { day } = useContext(WeatherContext);
  const [dayWeather, setDayWeather] = useState<any>();

  console.log(weather, day);

  // console.log(dayWeather);

  function getDayindex(day: any) {
    if (day === "today") {
      return 0;
    }
    if (day === "tommorrow") {
      return 1;
    }
    if (day === "dayAfterTommorrow") {
      return 2;
    }
    return 0;
  }

  useEffect(() => {
    if (weather) {
      setDayWeather(weather.forecast.forecastday[getDayindex(day)].day);
    }
  }, [day, weather]);

  return (
    <div
      style={{ backgroundImage: `url(${weatherImage})` }}
      className="bg-no-repeat bg-cover bg-center h-screen"
    >
      <div className="flex flex-col items-center justify-center content-around bg-opacity-50 bg-black py-48">
        <div className="flex ">hey</div>
        <h1 className="text-4xl font-bold text-yellow-200 mb-6">
          Weather Info
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-800">
            Location: {weather && <>{weather?.location.name}</>}
          </h2>
          <div className="mt-4">
            <h2 className="text-xl text-gray-700">
              Current Temperature:{" "}
              <span className="font-semibold">
                {weather && <>{weather?.current.temp_c}</>}
              </span>
            </h2>
            <h2 className="text-xl text-gray-700">
              Feels like Temperature:{" "}
              <span className="font-semibold">
                {weather && <>{weather?.current.feelslike_c}</>}
              </span>
            </h2>
            <h3 className="text-lg text-gray-600 mt-2">
              Max:{" "}
              <span className="font-medium">
                {weather && <>{dayWeather?.maxtemp_c}</>}
              </span>
            </h3>

            <h3 className="text-lg text-gray-600">
              Min:{" "}
              <span className="font-medium">
                {weather && <>{dayWeather?.mintemp_c}</>}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
