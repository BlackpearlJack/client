import { WeatherData } from "@/config/types";
import Image from "next/image";

type WeatherCardProps = {
  weather: WeatherData;
};

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className="card glass w-72 p-2.5 text-base-content shadow-md shadow-base-200">
      <div className="flex justify-between items-center">
        {/* Temperature Block */}
        <div>
          <div className="text-5xl font-bold leading-tight">
            {weather.temperature}
            <span className="text-2xl align-top">°</span>
            <span className="ml-1">{weather.unit}</span>
          </div>
        </div>

        {/* Weather Icon and Condition */}
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          <Image
            width={64}
            height={64}
            src={weather.icon || "/globe.svg"}
            alt="Weather Icon"
            className="object-contain"
          />
          <div className="card-title capitalize text-base font-semibold">
            {weather.condition || "Unknown"}
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="mt-4">
        <div className="text-md font-medium truncate">{weather.location}</div>
        <div className="text-sm text-base-content/60">
          {[weather.region, weather.country].filter(Boolean).join(", ")}
        </div>
      </div>
    </div>
  );
}
