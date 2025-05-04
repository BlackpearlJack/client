export type WeatherData = {
    temperature: number;
    unit: "C" | "F";
    condition: string;
    location: string;
    region?: string;
    country: string;
    icon?: string;
}

export type WeatherDetails = {
    wind_speed: number;
    humidity: number;
    cloudy: number;
    rain: number;
    visibility: number;
}