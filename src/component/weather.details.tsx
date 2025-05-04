import { WeatherDetails } from "@/config/types";

interface WeatherDetailsProps {
  details: WeatherDetails;
}

const WeatherInfo = ({ details }: WeatherDetailsProps) => {
  const weatherDetails = [
    { label: "Cloudy", value: `${details.cloudy} %` },
    { label: "Humidity", value: `${details.humidity} %` },
    { label: "Wind", value: `${details.wind_speed} m/s` },
    { label: "Rain", value: `${details.rain} mm` },
    { label: "Visibility", value: `${details.visibility} km` },
  ];

  return (
    <div className="card bg-transparent shadow-xl text-white shadow-base-200">
      <div className="card-body p-6">
        <h3 className="card-title text-lg uppercase text-primary-content tracking-wider mb-3">
          Weather Details
        </h3>
        <ul className="space-y-2">
          {weatherDetails.map((detail, index) => (
            <li key={index} className="flex justify-between py-2 text-sm">
              <span className="text-gray-100">{detail.label}</span>
              <span className="font-medium text-gray-100">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
