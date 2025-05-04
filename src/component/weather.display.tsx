"use client";

import { useEffect, useState } from "react";
import WeatherCard from "./weather.card";
import { WeatherData } from '../config/types';
import { getWeather } from "@/util/getWeather";


const WeatherDisplay = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWeather("Nairobi").then((data) => {
      setWeather(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-10">
      {loading ? (
        <p>Loading weather...</p>
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <p>Failed to load weather data.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
