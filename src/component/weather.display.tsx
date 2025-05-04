import WeatherCard from "./weather.card";

const WeatherDisplay = () => {
  return (
    <div className="p-10">
      <WeatherCard
        temperature={25}
        unit="C"
        condition="Cloudy"
        location="New York"
        region="NY"
        icon="/cloudy.svg" // Example icon path, replace with actual icon URL
      />
    </div>
  );
};

export default WeatherDisplay;
