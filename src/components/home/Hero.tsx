import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl px-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in text-left leading-[4rem]">
          Empowering Africa Through{" "}
          <span className="block">Climate Knowledge.</span>
        </h1>
        <p className="text-xl mb-8 text-white/90 text-left">
          Real-time climate insights and interactive learning to spark
          awareness, action and change across Africa.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-start">
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
          {stats.map((stat, index) => (
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
  );
};

export default Hero;
