"use client";

import WeatherCard from "./weather.card";
import { WeatherData } from "@/config/types";

interface WeatherDisplayProps {
  weather: WeatherData | null;
  loading: boolean;
}

const WeatherDisplay = ({ weather, loading }: WeatherDisplayProps) => {
  return (
    <div className="p-10">      
      {/* Display loading state or weather data */}
      {loading ? (
        <p className="text-white">Loading weather...</p>
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : (
        <p className="text-white">Failed to load weather data.</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
