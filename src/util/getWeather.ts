// Weather API fetcher
import { WeatherData } from "@/config/types";

// Fetches weather data from the API
// The API URL is expected to be set in the environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function to fetch weather data from the API
export async function getWeather(city: string): Promise<WeatherData | null> {
  try {
    // Fetch weather data from the API using the provided city name
    // The API is expected to return a JSON response with weather details
    const response = await fetch(`${API_URL}?city=${city}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    // Parse the JSON response to extract weather data
    // The expected structure of the response is defined in the WeatherData type
    const data = await response.json();

    // Return the parsed weather data
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
