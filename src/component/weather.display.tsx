const WeatherDisplay = () => {
  return (
    <div className="p-10">
      <p className="text-sm uppercase">the.weather</p>
      <h1 className="text-7xl font-bold mt-10">16°</h1>
      <p className="text-3xl font-light">London</p>
      <p className="text-sm mt-2">06:09 - Monday, 9 Sep '19</p>
      <p className="flex items-center mt-4">
        <span className="mr-2">☁️</span> Cloudy
      </p>
    </div>
  );
};

export default WeatherDisplay;
