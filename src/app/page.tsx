"use client";
import LocationSearch from "@/component/location.search";
import WeatherDisplay from "@/component/weather.display";
import { WeatherData, WeatherDetails } from "@/config/types";
import { getWeather } from "@/util/getWeather";
import { getWeatherInfo } from "@/util/getWeatherInfo";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null); // Initialize weather state with null
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails | null>(null); // Initialize weather details state with null
  const [loading, setLoading] = useState(false); // Initialize loading state

  // Function to fetch weather data for a given location
  // This function uses the getWeather and getWeatherInfo functions to fetch weather data
  // and weather details respectively
  const fetchWeatherData = async (location: string) => {
    setLoading(true);
    const [summary, details] = await Promise.all([getWeather(location), getWeatherInfo(location)]);
    setWeather(summary);
    setWeatherDetails(details);
    setLoading(false);
  };

  // Fetch weather data for Nairobi on initial load
  useEffect(() => {
    fetchWeatherData("Nairobi");
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('weather.jpg')` }}
    >
      {/* weather display section */}
      {/* This section is responsible for displaying the weather information */}
      {/* It uses the WeatherDisplay component to show the weather data */}
      <div className="flex w-full lg:w-2/3 p-6 overflow-y-auto items-center justify-center">
        <WeatherDisplay weather={weather} loading={loading} />
      </div>

      {/* location search section */}
      {/* This section is responsible for searching and displaying weather details */}
      {/* It uses the LocationSearch component to allow users to search for different locations */}
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
