import React from "react";
import { Users, BookOpen } from "lucide-react";

export interface ContinueLearningCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  progress: number; // 0-100
  totalChapters: number;
  enrolledCount: number;
}

export interface ContinueLearningSectionProps {
  title: string;
  cards: ContinueLearningCard[];
  className?: string;
}

const ContinueLearningSection: React.FC<ContinueLearningSectionProps> = ({
  title,
  cards,
  className = "",
}) => {
  const renderCard = (card: ContinueLearningCard) => (
    <div
      key={card.id}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to gradient background if image fails
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).parentElement!.style.background =
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
          }}
        />

        {/* Progress Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
          {card.progress}% left
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${card.categoryColor}`}
          >
            {card.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {card.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${100 - card.progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{card.enrolledCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{card.totalChapters} Chapters</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(renderCard)}
      </div>
    </div>
  );
};

export default ContinueLearningSection;
