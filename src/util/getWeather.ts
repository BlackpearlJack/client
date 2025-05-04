// lib/getWeather.ts
import { WeatherData } from "@/config/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getWeather(city: string): Promise<WeatherData | null> {
  try {
    const response = await fetch(`${API_URL}?city=${city}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();

    return {
      temperature: data.temperature,
      unit: data.unit,
      condition: data.condition,
      icon: data.icon,
      location: data.location,
      region: data.region,
      country: data.country,
    };
  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
}
