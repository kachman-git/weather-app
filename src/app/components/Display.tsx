import React from "react";
import { WeatherData } from "../../../types/weather";

type WeatherDataProps = {
  weatherData: WeatherData | null;
};

const Display = ({ weatherData }: WeatherDataProps) => {
  return (
    <div className="mt-7 text-white text-xl space-y-6">
      <p>
        <span className="text-orange-500 font-semibold">Country: </span>
        {weatherData?.sys.country}
      </p>
      <p>
        <span className="text-orange-500 font-semibold">Speed: </span>
        {weatherData?.wind.speed}
      </p>
      <p>
        <span className="text-orange-500 font-semibold">Latitude: </span>
        {weatherData?.coord.lat}
      </p>
      <p>
        <span className="text-orange-500 font-semibold">Longnitude: </span>
        {weatherData?.coord.lon}
      </p>
    </div>
  );
};

export default Display;
