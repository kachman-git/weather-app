"use client";
import React, { useEffect, useState } from "react";
import { WeatherData } from "../../../types/weather";
import Display from "./Display";

const Navbar = () => {
  const [country, setCountry] = useState("nigeria");
  const [city, setCity] = useState("lagos");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function weatherFecth() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      if (!res.ok) {
        setError("There was an error ");
      }
      const data: WeatherData = await res.json();
      setWeatherData(data);
      console.log(data);

      setIsLoading(false);
    } catch (error) {
      setError("There was an error ");
      setIsLoading(false);
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (country.length === 0 || city.length === 0) {
      return setError("Please Fill All Filled");
    }

    weatherFecth();
  };

  return (
    <div className="absolute z-50 container mx-auto p-9 ">
      {error && <p>{error}</p>}
      {isLoading && error ? (
        <div className="flex justify-center items-center h-screen">
          <div className="border border-b-4 border-t-4 border-dashed animate-spin w-12 h-12 rounded-full"></div>
        </div>
      ) : (
        <>
          <form className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="bg-orange-500 w-full md:w-1/2 2xl:w-3/12 py-3 rounded-md outline-none mt-7 text-white font-medium"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
          <div className="flex flex-col mt-3 justify-center items-start lg:items-center">
            <Display weatherData={weatherData} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
