export type WeatherData = {
    temperature: number;
    unit: "C" | "F";
    condition: string;
    location: string;
    region?: string;
    country: string;
    icon?: string;
}