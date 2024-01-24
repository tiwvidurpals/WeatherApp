import React, { useEffect, useState } from "react";
import useWeatherForecast from "../hooks/useWeatherForecast";

export const WeatherContext = React.createContext<any>(null);

const DataProvider = ({ children }) => {
  const [day, setDay] = useState<"today" | "tommorrow">("today");

  return (
    <WeatherContext.Provider value={{ day, setDay }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default DataProvider;
