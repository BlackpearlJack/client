"use client";

import { FaSearch } from "react-icons/fa";
import WeatherInfo from "./weather.details";
import { WeatherDetails } from "@/config/types";
import { useState, useEffect } from "react";
import { getWeatherInfo } from "@/util/getWeatherInfo";

const LocationSearch = () => {
  const [weather, setWeather] = useState<WeatherDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState(["Birmingham", "Manchester", "New York", "California"]);

  useEffect(() => {
    getWeatherInfo("Nairobi").then((data) => {
      setWeather(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = () => {
    getWeatherInfo(searchTerm).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  const handleCityClick = (city: string) => {
    getWeatherInfo(city).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  return (
    <>
      <div className="flex items-center border-b pb-2 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Another Location"
          className="bg-transparent flex-1 outline-none text-white placeholder-white"
        />
        <button
          className="bg-orange-500 p-2 rounded"
          title="Search"
          onClick={handleSearch}
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      <ul className="space-y-2 mb-6 text-white">
        {cities.map((city) => (
          <li key={city} className="hover:underline cursor-pointer" onClick={() => handleCityClick(city)}>
            {city}
          </li>
        ))}
      </ul>

      {loading ? (
        <p>Loading...</p>
      ) : (
        weather && <WeatherInfo details={weather} />
      )}
    </>
  );
};

export default LocationSearch;