import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GoArrowUpRight } from "react-icons/go";

interface Stat {
  title: string;
}

interface HeroProps {
  heroImage: string;
}

const stats: Stat[] = [
  { title: "Lybia Floods Kills Thousands" },
  { title: "Lybia Floods Kills Thousands" },
  { title: "Lybia Floods Kills Thousands" },
];

export const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section
      className="relative min-h-screen flex items-start justify-center bg-cover bg-center flex-col px-4 sm:px-8 md:px-16 lg:px-24 pt-28 sm:pt-36 md:pt-44"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl text-white w-full">
        <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-8 text-white/90 text-left">
          About Ayikaguard
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-fade-in text-left leading-tight md:leading-[4rem]">
          Our Vision
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-white/90 text-left max-w-3xl">
          To raise awareness and improve understanding of climate change and
          sustainability through data-driven education, real-time environmental
          insights, and community participation—starting in Nigeria, expanding
          across Africa, and reaching the world.
        </p>
      </div>

      {/* Climate Stats Cards */}
      <div className="pt-20 sm:pt-32 md:pt-40 w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-transparent border-0 border-t border-t-white text-white rounded-none"
            >
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-extrabold mb-2 text-sm sm:text-base">
                  {stat.title}
                </h3>
                <div className="flex items-center gap-1 text-xs sm:text-sm font-bold text-white/80">
                  <span>Read More</span>
                  <GoArrowUpRight />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
