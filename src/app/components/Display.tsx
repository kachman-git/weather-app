import React from "react";
import { WeatherData } from "../../../types/weather";

type WeatherDataProps = {
  weatherData: WeatherData | null;
};

const Display = ({ weatherData }: WeatherDataProps) => {
  return (
    <div className="mt-7 text-white text-xl space-y-6">
      {weatherData?.sys?.country ? (
        <p>
          <span className="text-orange-500 font-semibold">Country Code: </span>
          {weatherData?.sys?.country}
        </p>
      ) : (
        <p className="text-center text-orange-500 font-semibold text-2xl">
          Country Or City Not Found. <br /> Make Sure You Input Valid Country
          And City.
        </p>
      )}
      {weatherData?.wind?.speed && (
        <p>
          <span className="text-orange-500 font-semibold">Speed: </span>
          {weatherData?.wind?.speed}
        </p>
      )}
      {weatherData?.main?.temp && (
        <p>
          <span className="text-orange-500 font-semibold">Temperature: </span>
          {weatherData?.main?.temp} &deg;C
        </p>
      )}
      {weatherData?.coord?.lat && (
        <p>
          <span className="text-orange-500 font-semibold">Latitude: </span>
          {weatherData?.coord?.lat}
        </p>
      )}
      {weatherData?.coord?.lon && (
        <p>
          <span className="text-orange-500 font-semibold">Longnitude: </span>
          {weatherData?.coord?.lon}
        </p>
      )}
    </div>
  );
};

export default Display;
