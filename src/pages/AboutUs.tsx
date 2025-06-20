import Hero from "@/components/aboutUs/Hero";
import heroImage from "/images/aboutHero.png";
import { SolveProblem } from "@/components/aboutUs/SolveProblem";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* CTA Section */}
    </>
  );
};

export default AboutUs;
