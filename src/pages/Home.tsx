import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "/images/hero.png";
import firstpage from "/images/firstpage.png";
import second from "/images/second.png";
import communityImage from "/images/communityImage.png";
import {
  CloudRain,
  Thermometer,
  Wind,
  Eye,
  BookOpen,
  Users,
  TrendingUp,
  Play,
  ArrowRight,
  Globe,
  Lightbulb,
  Heart,
} from "lucide-react";
import { learningModules } from "@/lib/data";
import Hero from "@/components/home/Hero";
import { FeatureCard } from "@/components/home/FeatureCard";
import { LearnByPlaying } from "@/components/home/LearnByPlaying";
import { CommunityCTA } from "@/components/home/CommunityCTA";

const Home = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const weatherData = [
    {
      label: "Temperature",
      value: "33°C",
      icon: Thermometer,
      trend: "+2°C",
      location: "Partly cloudy",
    },
    {
      label: "Air Quality",
      value: "78",
      icon: Wind,
      trend: "Good",
      location: "AQI Moderate",
    },
    {
      label: "Wind Speed",
      value: "12 km/h",
      icon: Wind,
      trend: "Low",
      location: "Wind",
    },
    {
      label: "UV Index",
      value: "High",
      icon: Eye,
      trend: "8/10",
      location: "UV Light protection recommended",
    },
    {
      label: "Humidity",
      value: "72%",
      icon: CloudRain,
      trend: "Normal",
      location: "Humidity",
    },
    {
      label: "Precipitation",
      value: "10%",
      icon: CloudRain,
      trend: "Low",
      location: "Precipitation",
    },
  ];

  const features = [
    {
      title: "Track Climate Changes Live",
      description: "Instant Updates on temperature, rainfall, forest and more.",
      buttonText: "View Live Data",
    },
    {
      title: "Quick Country weather stats.",
      description: "Analyse weather change and investigate trends in Africa.",
      buttonText: "Explore Trend",
    },
    {
      title: "Track Climate Changes Live",
      description: "Instant Updates on temperature, rainfall, forest and more.",
      buttonText: "View Live Data",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero heroImage={heroImage} />

      {/* Live Data Section */}
      <section className="py-20 bg-white">
        <div className="flex md:flex-row flex-col items-center justify-center gap-10  max-w-7xl mx-auto px-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
            />
          ))}
        </div>
      </section>
      <section className="py-20 bg-white">
        <LearnByPlaying firstpage={firstpage} second={second} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Begin Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sign up for a personalized learning experience. Track your progress,
            unlock achievements, and explore climate topics.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-[#3AAAD9] text-[#3AAAD9] bg-transparent px-8 py-4"
          >
            Create an Account
          </Button>
        </div>
        <CommunityCTA communityImage={communityImage} />
      </section>

      {/* Final CTA */}
      <section className="py-5 flex items-center justify-center mx-4 md:mx-60 my-10 bg-[#8BB0C51A] text-center rounded-md">
        <div className="px-4 md:px-0">
          <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-6">
            Ready to make a real difference?
          </h2>
          <Button
            size="lg"
            variant="outline"
            className="border-[#3AAAD9] text-[#3AAAD9] bg-transparent px-4 md:px-8 py-2 md:py-4 w-full md:w-auto"
          >
            Get Started for free
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
