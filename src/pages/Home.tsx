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

  const learningModules = [
    {
      title: "Energy & Emissions",
      description:
        "Understanding carbon footprints and renewable energy solutions",
      image:
        "https://images.unsplash.com/photo-1497436072909-f5e4be442838?w=300&h=200&fit=crop",
      duration: "45 min",
      level: "Beginner",
    },
    {
      title: "Climate Science Basics",
      description: "Core concepts of climate change and global warming",
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=300&h=200&fit=crop",
      duration: "60 min",
      level: "Intermediate",
    },
    {
      title: "Sustainable Agriculture",
      description: "Climate-smart farming practices for Africa",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
      duration: "30 min",
      level: "Advanced",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Empowering Africa Through Climate Knowledge.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
            Real-time climate insights and interactive learning to spark
            awareness, action and change across Africa.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4"
            >
              Explore Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4"
            >
              See Live Data
            </Button>
          </div>
        </div>

        {/* Climate Stats Cards */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Lybia Floods Kills Thousands", reads: "1.2k" },
              { title: "Lybia Floods Kills Thousands", reads: "856" },
              { title: "Lybia Floods Kills Thousands", reads: "2.1k" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{stat.title}</h3>
                  <p className="text-sm text-white/80">
                    Read More → {stat.reads}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Data Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Track Climate Changes Live
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instant updates on temperature, rainfall, forest and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {weatherData.map((data, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 hover-scale"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <data.icon className="h-8 w-8 text-blue-500" />
                    <Badge variant="secondary">{data.trend}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {data.value}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{data.location}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Live Data
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Map Placeholder */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-8 text-center">
              <Globe className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Global Climate Map
              </h3>
              <p className="text-gray-600 mb-6">
                Interactive visualization of real-time climate data across
                Africa and beyond.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Explore Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learn by playing
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Explore quizzes and challenges designed to teach you about
                climate change while having fun.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Earn badges</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Level up as you learn</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Challenge your friends and classmates
                  </span>
                </li>
              </ul>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Start Playing
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-100 rounded-lg p-4 text-center">
                    <BookOpen className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      Learning Modules
                    </span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      Progress Tracking
                    </span>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Community</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <Play className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">
                      Interactive Games
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningModules.map((module, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{module.level}</Badge>
                    <Badge variant="secondary">{module.duration}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <Button variant="outline" className="w-full">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Join a Growing Climate Action Community
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Connect with like-minded individuals, join discussions, share
                local solutions, and participate in real-world challenges that
                make an impact.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Get Me Interested
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-white/20 rounded-full"
                    ></div>
                  ))}
                </div>
                <p className="text-center text-blue-100">
                  Join thousands of climate advocates making a difference
                </p>
              </div>
            </div>
          </div>
        </div>
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
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4"
          >
            Create an account
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to make a real difference?
          </h2>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4"
          >
            Join us now
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
