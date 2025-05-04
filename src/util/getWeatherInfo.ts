import { WeatherDetails } from "@/config/types";

// lib/getWeather.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getWeatherInfo(city: string): Promise<WeatherDetails | null> {
  try {
    const response = await fetch(`${API_URL}/details?city=${city}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();

    return {
      wind_speed: data.wind_speed,
      humidity: data.humidity,
      cloudy: data.cloudy,
      rain: data.rain,
      visibility: data.visibility,
    };
    
  } catch (error) {
    console.error("Weather fetch error:", error);
    return null;
  }
}
