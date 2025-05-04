import { WeatherData } from "@/config/types";
import Image from "next/image";

export default function WeatherCard(weather: WeatherData) {
  return (
    <div className="card glass w-72 p-4 text-base-content shadow-md">
      <div className="flex justify-between items-center">
        {/* Temperature Block */}
        <div>
          <div className="text-5xl font-bold leading-tight">
            {weather.temperature}
            <span className="text-2xl align-top">°</span>
            <span className="text-lg ml-1">{weather.unit}</span>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <Image
            width={64} // Set the desired width in pixels
            height={64} // Set the desired height in pixels
            src={weather.icon || "/globe.svg"}
            alt="Weather Icon"
            className="object-contain"
          />
          <div className="card-title capitalize">{weather.condition}</div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-4">
        <div className="text-md font-medium">{weather.location}</div>
        <div className="text-sm text-base-content/60">{weather.region}</div>
      </div>
    </div>
  );
}
