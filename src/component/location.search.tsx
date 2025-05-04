import { FaSearch } from "react-icons/fa";
import WeatherDetails from "./weather.details";

const LocationSearch = () => {
  return (
    <>
      <div className="flex items-center border-b pb-2 mb-4">
        <input
          type="text"
          placeholder="Another Location"
          className="bg-transparent flex-1 outline-none text-white placeholder-white"
        />
        <button className="bg-orange-500 p-2 rounded" title="Search">
          <FaSearch className="text-white" />
        </button>
      </div>

      <ul className="space-y-2 mb-6 text-white">
        {["Birmingham", "Manchester", "New York", "California"].map((city) => (
          <li key={city} className="hover:underline cursor-pointer">
            {city}
          </li>
        ))}
      </ul>

      <WeatherDetails />
    </>
  );
};

export default LocationSearch;
