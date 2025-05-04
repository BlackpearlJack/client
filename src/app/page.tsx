import LocationSearch from "@/component/location.search";
import WeatherDisplay from "@/component/weather.display";
import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* weather display section */}
      <div className="w-2/3 bg-cover bg-center">
        <WeatherDisplay />
      </div>
      <div className="w-1/3 p-6 glass">
        <LocationSearch />
      </div>
    </div>
  );
}
