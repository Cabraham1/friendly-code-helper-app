import { LearningCard } from "@/components/learn/LearningSection";
import { ContinueLearningCard } from "@/components/learn/ContinueLearningSection";
import { Article } from "@/components/learn/ArticlesSection";

export const learningModules = [
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

export const features = [
  {
    title: "Track Climate Changes Live",
    description: "Instant Updates on temperature, rainfall, forest and more.",
    buttonText: "View Live Data",
  },
  {
    title: "Quick Country weather stats.",
    description: "Analyse weather change and investigate trends in Africa.",
    buttonText: "Explore Trend",
  },
  {
    title: "Track Climate Changes Live",
    description: "Instant Updates on temperature, rainfall, forest and more.",
    buttonText: "View Live Data",
  },
];

// Popular learning modules data
export const popularModules: LearningCard[] = [
  {
    id: "1",
    title: "Energy & Emission",
    description:
      "Learn about energy production and major sources of greenhouse gas emission.",
    image: "/images/firstpage.png",
    category: "Energy & Emission",
    type: "lesson",
  },
  {
    id: "2",
    title: "Climate Science Basics",
    description:
      "Understanding the fundamental principles of climate change and global warming.",
    image: "/images/second.png",
    category: "Climate Science",
    type: "lesson",
  },
  {
    id: "3",
    title: "Renewable Energy Solutions",
    description:
      "Explore sustainable energy alternatives and their impact on climate change.",
    image: "/images/solution1.png",
    category: "Renewable Energy",
    type: "lesson",
  },
];

// Quiz modules data
export const quizModules: LearningCard[] = [
  {
    id: "quiz-1",
    title: "Humidity & Weather Patterns",
    description: "Test your knowledge about humidity and climate patterns",
    image: "/images/solution2.png",
    category: "Humidity",
    type: "quiz",
    questionsCount: 12,
  },
  {
    id: "quiz-2",
    title: "Air Quality Assessment",
    description:
      "Evaluate your understanding of air pollution and quality metrics",
    image: "/images/solution3.png",
    category: "Air Quality",
    type: "quiz",
    questionsCount: 15,
  },
  {
    id: "quiz-3",
    title: "Wind & Atmospheric Science",
    description: "Challenge yourself on wind patterns and atmospheric dynamics",
    image: "/images/liveData.png",
    category: "Wind",
    type: "quiz",
    questionsCount: 10,
  },
];

// Continue learning modules data
export const continueModules: ContinueLearningCard[] = [
  {
    id: "continue-1",
    title: "Energy & Emission",
    description:
      "Learn about energy production and major sources of greenhouse gas emission.",
    image: "/images/Dashboard.png",
    category: "Weather",
    categoryColor: "bg-green-100 text-green-800",
    progress: 20, // 20% left to complete
    totalChapters: 12,
    enrolledCount: 40,
  },
  {
    id: "continue-2",
    title: "Energy & Emission",
    description:
      "Learn about energy production and major sources of greenhouse gas emission.",
    image: "/images/aboutHero.png",
    category: "Sun",
    categoryColor: "bg-orange-100 text-orange-800",
    progress: 20, // 20% left to complete
    totalChapters: 12,
    enrolledCount: 40,
  },
  {
    id: "continue-3",
    title: "Energy & Emission",
    description:
      "Learn about energy production and major sources of greenhouse gas emission.",
    image: "/images/communityImage.png",
    category: "Sea Level",
    categoryColor: "bg-blue-100 text-blue-800",
    progress: 20, // 20% left to complete
    totalChapters: 12,
    enrolledCount: 40,
  },
];

// Articles data
export const articles: Article[] = [
  {
    id: "article-1",
    title: "Nigeria Heatwaves",
    image: "/images/aboutFirst.png", // Using existing image
  },
  {
    id: "article-2",
    title: "African Leaders",
    image: "/images/aboutSecond.png", // Using existing image
  },
  {
    id: "article-3",
    title: "Sea Levels",
    bgColor: "#4A90E2", // Blue background as shown in the image
  },
  {
    id: "article-4",
    title: "African Leaders",
    bgColor: "#7ED321", // Green background as shown in the image
  },
];
