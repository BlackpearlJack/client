"use client";

import { FaSearch } from "react-icons/fa";
import WeatherInfo from "./weather.details";
import { WeatherDetails } from "@/config/types";
import { useState } from "react";

interface LocationSearchProps {
  onSelectCity: (city: string) => void;
  details: WeatherDetails | null;
  loading: boolean;
}

const LocationSearch = ({ onSelectCity, details, loading }: LocationSearchProps) => {
  
  // State to manage the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Predefined list of cities for quick selection
  const cities = ["Nairobi", "Kisumu", "Mombasa", "Cairo"];

  // Function to handle the search action when the user clicks the search button
  const handleSearch = () => {
    const term = searchTerm.trim();
    if (!term) return;
    onSelectCity(term);
    setSearchTerm("");
  };

  // Function to handle the selection of a city from the predefined list
  const handleCityClick = (city: string) => {
    onSelectCity(city);
  };

  return (
    <>
      <div className="flex items-center border-b pb-2 mb-4">
        {/* search input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Another Location"
          className="bg-transparent flex-1 outline-none text-white placeholder-white"
        />
        {/* search button */}
        <button
          className="bg-orange-500 p-2 rounded"
          title="Search"
          onClick={handleSearch}
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      <ul className="space-y-2 mb-6 text-white">        
        {/* List of predefined cities for quick selection */}
        {cities.map((city) => (
          <li
            key={city}
            className="hover:underline cursor-pointer"
            onClick={() => handleCityClick(city)}
          >
            {city}
          </li>
        ))}
      </ul>

      {/* Display loading message or weather details */}
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        details && <WeatherInfo details={details} />
      )}
    </>
  );
};

export default LocationSearch;
