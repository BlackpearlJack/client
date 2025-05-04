import LocationSearch from "@/component/location.search";
import WeatherDisplay from "@/component/weather.display";

export default function Home() {
  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('weather.jpg')` }}
    >
      {/* weather display section */}
      <div className="w-2/3">
        <WeatherDisplay />
      </div>
      <div className="w-1/3 p-6 bg-black/50 backdrop:blur">
        <LocationSearch />
      </div>
    </div>
  );
}
