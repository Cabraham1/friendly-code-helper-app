import { Hero } from "@/components/learn/Hero";
import LearningSection from "@/components/learn/LearningSection";
import ContinueLearningSection from "@/components/learn/ContinueLearningSection";
import ArticlesSection from "@/components/learn/ArticlesSection";
import heroImage from "/images/hero.png"; // Using existing hero image
import {
  popularModules,
  quizModules,
  continueModules,
  articles,
} from "@/lib/data";

const Learn = () => {
  return (
    <>
      <Hero heroImage={heroImage} />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Popular Section */}
        <LearningSection
          title="Popular"
          cards={popularModules}
          className="mb-16"
        />

        {/* Quiz Section */}
        <LearningSection title="Quiz" cards={quizModules} />

        {/* Continue Learning Section */}
        <ContinueLearningSection
          title="Continue Learning"
          cards={continueModules}
          className="mb-16"
        />

        {/* Articles Section */}
        <ArticlesSection
          title="Articles"
          articles={articles}
          className="mb-16"
        />
      </div>
    </>
  );
};

export default Learn;
