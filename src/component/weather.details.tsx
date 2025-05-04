import { Details } from "@/config/types";

interface WeatherDetailsProps {
  details: Details;
}

const WeatherDetails = () => {
  return (
    <div className="text-white">
      <h3 className="uppercase mb-2 text-sm">Weather Details</h3>
      <div className="flex justify-between mb-1">
        <span>Cloudy</span>
        <span></span>
      </div>
      <div className="flex justify-between mb-1">
        <span>Humidity</span>
        <span>62%</span>
      </div>
      <div className="flex justify-between">
        <span>Wind</span>
        <span>8km/h</span>
      </div>
    </div>
  );
};

export default WeatherDetails;
