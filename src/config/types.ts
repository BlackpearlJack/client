// Weather API configuration types

// WeatherData type to represent weather information
export type WeatherData = {
    temperature: number;
    unit: "C" | "F";
    condition: string;
    location: string;
    region?: string;
    country: string;
    icon?: string;
}

// WeatherDetails type to represent detailed weather information
export type WeatherDetails = {
    wind_speed: number;
    humidity: number;
    cloudy: number;
    rain: number;
    visibility: number;
}