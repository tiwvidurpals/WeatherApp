import useWeatherForecast from "../../../hooks/useWeatherForecast";
import weatherImage from "../../images/weatherImage.jpg";

const Home = () => {
  const { weather, isLoading, error } = useWeatherForecast();
  console.log(weather);
  return (
    <div
      style={{ backgroundImage: `url(${weatherImage})` }}
      className="bg-no-repeat bg-cover bg-center h-screen"
    >
      <div className="flex flex-col items-center justify-center content-around bg-opacity-50 bg-black py-48">
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
              Today's Max:{" "}
              <span className="font-medium">
                {weather && (
                  <>{weather.forecast?.forecastday[0].day.maxtemp_c}</>
                )}
              </span>
            </h3>
            <h3 className="text-lg text-gray-600">
              Today's Min:{" "}
              <span className="font-medium">
                {weather && (
                  <>{weather.forecast?.forecastday[0].day.mintemp_c}</>
                )}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
