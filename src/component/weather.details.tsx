import { WeatherDetails } from "@/config/types";

interface WeatherDetailsProps {
  details: WeatherDetails;
}

const WeatherInfo = ({ details }: WeatherDetailsProps) => {
  const weatherDetails = [
    { label: "Cloudiness", value: `${details.cloudy} %` },
    { label: "Humidity", value: `${details.humidity} %` },
    { label: "Wind Speed", value: `${details.wind_speed} m/s` },
    { label: "Rainfall", value: `${details.rain} mm` },
    { label: "Visibility", value: `${details.visibility} km` },
  ];

  return (
    <div className="card bg-transparent text-white shadow-md shadow-base-200">
      <div className="card-body">
        <h2 className="card-title text-orange-400">Weather Details</h2>
        <div className="grid grid-cols-1 gap-2 mt-2">
          {weatherDetails.map((detail, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 rounded"
            >
              <span className="font-medium">{detail.label}</span>
              <span className="badge badge-primary badge-outline">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
