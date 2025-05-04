// This file contains the function to fetch weather information from the API.
import { WeatherDetails } from "@/config/types";

// Fetches weather data from the API
// The API URL is expected to be set in the environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// function to fetch weather information details from the API using the provided city name
export async function getWeatherInfo(city: string): Promise<WeatherDetails | null> {
  try {    
    // Fetch weather data from the API using the provided city name
    // The API is expected to return a JSON response with weather details
    const response = await fetch(`${API_URL}/details?city=${city}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    // Parse the JSON response to extract weather data
    // The expected structure of the response is defined in the WeatherData type
    const data = await response.json();

    // Return the parsed weather data
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
