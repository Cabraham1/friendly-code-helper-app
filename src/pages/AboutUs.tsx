import Hero from "@/components/aboutUs/Hero";
import heroImage from "/images/aboutHero.png";
import { SolveProblem } from "@/components/aboutUs/SolveProblem";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinUs } from "@/components/aboutUs/JoinUs";
import { CommunityCTA } from "@/components/aboutUs/CommunityCTA";
import { Who } from "@/components/aboutUs/who";

export const learningModules = [
  {
    title: "Live Climate Data Visualization and localized insights",
    description:
      "Make environmental trends tangible, focusing first on Nigeria, with the ability to expand across Africa and globally",
    image: "/images/solution1.png",
  },
  {
    title: "Interactive Learning Modules",
    description: "quizzes, mini-games, and multimedia lessons",
    image: "/images/solution2.png",
  },
  {
    title: "Community Engagement",
    description:
      "Users can comment, share resources, and contribute educational content",
    image: "/images/solution3.png",
  },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero heroImage={heroImage} />

      {/* problrm section */}
      <section className="py-20 bg-white">
        <SolveProblem
          firstpage="/images/aboutFirst.png"
          second="/images/aboutSecond.png"
        />
      </section>
      <section className="py-20 px-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningModules.map((module, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-500">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <JoinUs
          firstpage="/images/aboutOffice1.png"
          second="/images/aboutOffice2.png"
        />
      </section>

      <section className="py-5 bg-white">
        <CommunityCTA communityImage="/images/Dashboard.png" />
      </section>

      <section className="py-20 bg-white">
        <Who
          firstpage="/images/aboutPeople2.png"
          second="/images/aboutPeople1.png"
        />
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

export default AboutUs;
