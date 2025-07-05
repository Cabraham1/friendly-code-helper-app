import Hero from "@/components/liveData/Hero";
import WeatherMap from "@/components/liveData/WeatherMap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Description } from "@radix-ui/react-toast";
import { CloudRain, Thermometer, Wind, Eye } from "lucide-react";

const LiveData = () => {
  const weatherData = [
    {
      label: "Temperature",
      value: "33°C",
      icon: Thermometer,
      trend: "+2°C",
      location: "Partly cloudy",
      description: "Stay hydrated today",
    },
    {
      label: "Air Quality",
      value: "78",
      icon: Wind,
      trend: "Good",
      location: "AQI Moderate",
      description: " Air quality is acceptable.",
    },
    {
      label: "Wind Speed",
      value: "12 km/h",
      icon: Wind,
      trend: "Low",
      location: "Wind",
      description: "Secure items. Avoid open spaces in strong winds.",
    },
    {
      label: "UV Index",
      value: "High",
      icon: Eye,
      trend: "8/10",
      location: "UV Light protection recommended",
      description: "Avoid direct sun between 11 AM–3 PM",
    },
    {
      label: "Humidity",
      value: "72%",
      icon: CloudRain,
      trend: "Normal",
      location: "Humidity",
      description: "High humidity slows sweat evaporation.",
    },
    {
      label: "Precipitation",
      value: "10%",
      icon: CloudRain,
      trend: "Low",
      location: "Precipitation",
      description: "Carry rain gear. Watch for flood warnings.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section>
        <Hero heroImage="/images/liveData.png" />
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {weatherData.map((data, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow bg-[#E0F6FF] duration-300 hover-scale"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3AAAD9] mb-1">
                    {data.value}
                  </h3>
                  <data.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-600 mb-2">
                  {data.location}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mb-2">
                  {data.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <WeatherMap />
      </section>
    </>
  );
};

export default LiveData;
