"use client";
import LocationSearch from "@/component/location.search";
import WeatherDisplay from "@/component/weather.display";
import { WeatherData, WeatherDetails } from "@/config/types";
import { getWeather } from "@/util/getWeather";
import { getWeatherInfo } from "@/util/getWeatherInfo";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (location: string) => {
    setLoading(true);
    const [summary, details] = await Promise.all([
      getWeather(location),
      getWeatherInfo(location),
    ]);
    setWeather(summary);
    setWeatherDetails(details);
    setLoading(false);
  };

  useEffect(() => {
    fetchWeatherData("Nairobi");
  }, []);
  
  return (
    <div
      className="flex flex-col lg:flex-row h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('weather.jpg')` }}
    >
      {/* weather display section */}
      <div className="flex w-full lg:w-2/3 p-6 overflow-y-auto items-center justify-center">
      <WeatherDisplay weather={weather} loading={loading} />
      </div>
      <div className="w-full lg:w-1/3 p-6 bg-black/50 backdrop:blur">
      <LocationSearch
          onSelectCity={fetchWeatherData}
          details={weatherDetails}
          loading={loading}
        />
      </div>
    </div>
  );
}
