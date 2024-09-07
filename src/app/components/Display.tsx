import React from "react";
import { WeatherData } from "../../../types/weather";

type WeatherDataProps = {
  weatherData: WeatherData | null;
};

const Display = ({ weatherData }: WeatherDataProps) => {
  return (
    <div className="mt-7 text-white text-xl space-y-6">
      {weatherData?.sys?.country && (
        <p>
          <span className="text-orange-500 font-semibold">Country: </span>
          {weatherData?.sys?.country}
        </p>
      )}
      {weatherData?.wind?.speed && (
        <p>
          <span className="text-orange-500 font-semibold">Speed: </span>
          {weatherData?.wind?.speed}
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
