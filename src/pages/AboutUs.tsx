import Hero from "@/components/aboutUs/Hero";
import heroImage from "/images/aboutHero.png";
import { SolveProblem } from "@/components/aboutUs/SolveProblem";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero heroImage={heroImage} />

      {/* problrm section */}
      <section className="py-20 bg-white">
        <SolveProblem
          firstpage="/images/firstpage.png"
          second="/images/second.png"
        />
      </section>
    </>
  );
};

export default AboutUs;
