import React from "react";

export interface LearningCard {
  id: string;
  title: string;
  description: string;
  image: string;
  type?: "lesson" | "quiz";
  questionsCount?: number;
  category?: string;
}

export interface LearningSectionProps {
  title: string;
  cards: LearningCard[];
  className?: string;
}

const LearningSection: React.FC<LearningSectionProps> = ({
  title,
  cards,
  className = "",
}) => {
  const renderCard = (card: LearningCard) => (
    <div
      key={card.id}
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex gap-4">
        {/* Card Image */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center overflow-hidden">
            {card.image ? (
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient background if image fails
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="text-2xl">
                {card.type === "quiz" ? "🧠" : "📚"}
              </div>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1">
          {/* Category/Type Badge */}
          {card.category && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                {card.category}
              </span>
            </div>
          )}

          {/* Card Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {card.title}
          </h3>

          {/* Card Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {card.description}
          </p>

          {/* Quiz Info (if applicable) */}
          {card.type === "quiz" && card.questionsCount && (
            <div className="text-sm text-gray-500">
              {card.questionsCount} Questions
            </div>
          )}
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

export default LearningSection;
