import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GoArrowUpRight } from "react-icons/go";

interface Stat {
  title: string;
  reads: string;
}

interface HeroProps {
  heroImage: string;
}

const stats: Stat[] = [
  { title: "Lybia Floods Kills Thousands", reads: "1.2k" },
  { title: "Lybia Floods Kills Thousands", reads: "856" },
  { title: "Lybia Floods Kills Thousands", reads: "2.1k" },
];

export const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center  bg-cover bg-center flex-col px-24 pt-44"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-4xl text-white ">
        <p className="text-lg mb-8 text-white/90 text-left">Live Data</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in text-left leading-[4rem]">
          Get real-time live data
        </h1>
        <p className="text-lg mb-8 text-white/90 text-left">
          To raise awareness and improve understanding of climate change and
          sustainability through data-driven education, real-time environmental
          insights, and community participation—starting in Nigeria, expanding
          across Africa, and reaching the world.
        </p>
        <div className="flex flex-row gap-4 items-start">
          <Button
            size="lg"
            className="bg-[#3AAAD9] hover:bg-[#3AAAD9] text-white hover:text-black px-8 py-4"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
