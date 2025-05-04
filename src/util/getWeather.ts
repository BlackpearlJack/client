// lib/getWeather.ts
import { WeatherData } from "@/config/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getWeather(city: string): Promise<WeatherData | null> {
  try {
    const response = await fetch(`${API_URL}?city=${city}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();

    return {
      temperature: data.main.temp,
      unit: "C",
      condition: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      location: data.name,
      region: "", // OpenWeatherMap might not provide this directly
      country: data.sys.country,
    };
  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
}
