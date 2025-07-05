import { useState } from "react";
import axios from "axios";

const WEATHER_API_KEY = "833d1728664eb4e79cf6ca955167067a";

type WeatherData = {
  name: string;
  lat: number;
  lon: number;
  temp: number;
  humidity: number;
  uv: number;
  aqi: string;
};

const fetchLocationCoordinates = async (query: string) => {
  const res = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${WEATHER_API_KEY}`
  );
  if (res.data.length === 0) throw new Error("Location not found");
  const { name, lat, lon, country } = res.data[0];
  return { name: `${name}, ${country}`, lat, lon };
};

const fetchWeatherDetails = async (lat: number, lon: number) => {
  const [weatherRes, uvRes, aqiRes] = await Promise.all([
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    ),
    axios.get(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    ),
    axios.get(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    ),
  ]);

  const aqiVal = aqiRes.data.list[0].main.aqi;
  const aqiLabel = ["Good", "Fair", "Moderate", "Poor", "Very Poor"][
    aqiVal - 1
  ];

  return {
    temp: weatherRes.data.main.temp,
    humidity: weatherRes.data.main.humidity,
    uv: uvRes.data.value,
    aqi: `${aqiVal * 25} (${aqiLabel})`,
  };
};

export default function WeatherMap() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [mapType, setMapType] = useState<"satellite" | "terrain" | "roadmap">(
    "satellite"
  );

  const handleSearch = async () => {
    try {
      const { name, lat, lon } = await fetchLocationCoordinates(input);
      const weatherDetails = await fetchWeatherDetails(lat, lon);
      setWeather({
        name,
        lat,
        lon,
        ...weatherDetails,
      });
    } catch (err) {
      alert("Could not fetch weather data. Try another location.");
    }
  };

  return (
    <div className="w-full min-h-screen relative">
      <h1 className="text-xl font-semibold mb-4 px-4 pt-4">
        Global Climate Map
      </h1>

      <div className="absolute z-[1000] top-16 left-4 bg-white p-3 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            placeholder="Enter city or zip"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-48"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {/* Map Type Selector */}
        <div className="flex gap-1">
          <button
            onClick={() => setMapType("satellite")}
            className={`px-3 py-1 text-xs rounded ${
              mapType === "satellite"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Satellite
          </button>
          <button
            onClick={() => setMapType("terrain")}
            className={`px-3 py-1 text-xs rounded ${
              mapType === "terrain"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Terrain
          </button>
          <button
            onClick={() => setMapType("roadmap")}
            className={`px-3 py-1 text-xs rounded ${
              mapType === "roadmap"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Roadmap
          </button>
        </div>
      </div>

      {/* Map Container - Full Screen Height */}
      <div
        className="w-full px-4 pb-4"
        style={{ height: "calc(100vh - 120px)" }}
      >
        <div className="w-full h-full rounded-xl shadow-xl overflow-hidden bg-gray-100 relative">
          {weather ? (
            <>
              {/* Static Map Tiles - Full Size */}
              <div className="w-full h-full relative bg-blue-50">
                {/* Create a grid of map tiles for better coverage */}
                <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                  {Array.from({ length: 9 }, (_, index) => {
                    const row = Math.floor(index / 3) - 1;
                    const col = (index % 3) - 1;

                    // Calculate tile coordinates
                    const zoom = 12;
                    const centerX = Math.floor(
                      ((weather.lon + 180) / 360) * Math.pow(2, zoom)
                    );
                    const centerY = Math.floor(
                      ((1 -
                        Math.log(
                          Math.tan((weather.lat * Math.PI) / 180) +
                            1 / Math.cos((weather.lat * Math.PI) / 180)
                        ) /
                          Math.PI) /
                        2) *
                        Math.pow(2, zoom)
                    );

                    const tileX = centerX + col;
                    const tileY = centerY + row;

                    let tileUrl = "";
                    if (mapType === "satellite") {
                      // Use Esri satellite imagery
                      tileUrl = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${tileY}/${tileX}`;
                    } else if (mapType === "terrain") {
                      // Use OpenTopoMap for terrain
                      tileUrl = `https://tile.opentopomap.org/${zoom}/${tileX}/${tileY}.png`;
                    } else {
                      // Use OpenStreetMap for roadmap
                      tileUrl = `https://tile.openstreetmap.org/${zoom}/${tileX}/${tileY}.png`;
                    }

                    return (
                      <div key={index} className="relative overflow-hidden">
                        <img
                          src={tileUrl}
                          alt={`Map tile ${index}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to a solid color if tile fails
                            (e.target as HTMLElement).style.backgroundColor =
                              "#e5e7eb";
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Center Location Marker */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="w-8 h-8 bg-red-500 rounded-full border-3 border-white shadow-xl animate-pulse"></div>
                    <div className="absolute -top-2 -left-2 w-12 h-12 bg-red-500/30 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>

              {/* Map Type Indicator */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-medium">
                {mapType.charAt(0).toUpperCase() + mapType.slice(1)} View
              </div>

              {/* Weather info overlay */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-sm">
                <h2 className="font-bold text-xl mb-4 text-blue-600">
                  🌍 {weather.name}
                </h2>
                <div className="grid grid-cols-1 gap-3 text-base">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Temperature:</span>
                    <span className="text-orange-600 font-bold text-lg">
                      {weather.temp}°C
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Humidity:</span>
                    <span className="text-blue-600 font-semibold">
                      {weather.humidity}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">UV Index:</span>
                    <span className="text-yellow-600 font-semibold">
                      {weather.uv}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">AQI:</span>
                    <span className="text-green-600 font-semibold">
                      {weather.aqi}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-6">
                  🗺️ Interactive Weather Map
                </h2>
                <p className="text-xl mb-4">
                  Search for any city to see its location and weather data
                </p>
                <p className="text-lg">
                  Enter a city name in the search box above
                </p>
              </div>

              {/* Default world map placeholder */}
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌍</div>
                  <p className="text-gray-600 text-lg font-medium">World Map</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
