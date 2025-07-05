import { Button } from "@/components/ui/button";
import heroImage from "/images/hero.png";
import firstpage from "/images/firstpage.png";
import second from "/images/second.png";
import communityImage from "/images/communityImage.png";
import { features } from "@/lib/data";
import Hero from "@/components/home/Hero";
import { FeatureCard } from "@/components/home/FeatureCard";
import { LearnByPlaying } from "@/components/home/LearnByPlaying";
import { CommunityCTA } from "@/components/home/CommunityCTA";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero heroImage={heroImage} />

      {/* Live Data Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto px-4 sm:px-6">
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

      {/* Learning Modules Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <LearnByPlaying firstpage={firstpage} second={second} />
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Begin Your Learning Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Sign up for a personalized learning experience. Track your progress,
            unlock achievements, and explore climate topics.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-[#3AAAD9] text-[#3AAAD9] bg-transparent px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Create an Account
          </Button>
        </div>
        <CommunityCTA communityImage={communityImage} />
      </section>

      {/* Final CTA */}
      <section className="py-4 sm:py-5 flex items-center justify-center mx-4 sm:mx-8 md:mx-40 lg:mx-60 my-6 sm:my-10 bg-[#8BB0C51A] text-center rounded-md">
        <div className="px-4 md:px-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
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
