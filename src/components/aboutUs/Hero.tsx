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
      className="relative min-h-screen flex items-start justify-center  bg-cover bg-center flex-col px-24 pt-44"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl text-white ">
        <p className="text-lg mb-8 text-white/90 text-left">About Ayikaguard</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in text-left leading-[4rem]">
          Our Vision
        </h1>
        <p className="text-lg mb-8 text-white/90 text-left">
          To raise awareness and improve understanding of climate change and
          sustainability through data-driven education, real-time environmental
          insights, and community participation—starting in Nigeria, expanding
          across Africa, and reaching the world.
          <span className="block">action and change across Africa.</span>
        </p>
      </div>

      {/* Climate Stats Cards */}
      <div className="pt-40">
        <div className="max-w-4xl mx-auto grid grid-cols- md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-transparent border-0 border-t border-t-white text-white rounded-none"
            >
              <CardContent className="p-4">
                <h3 className="font-extrabold mb-2">{stat.title}</h3>
                <div className="flex items-center gap text-sm font-bold text-white/80">
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
