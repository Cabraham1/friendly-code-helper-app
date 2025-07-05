import React from "react";

export interface Article {
  id: string;
  title: string;
  image?: string; // Made optional since some cards use bgColor instead
  bgColor?: string; // For cards with solid color backgrounds
}

export interface ArticlesSectionProps {
  title: string;
  articles: Article[];
  className?: string;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  title,
  articles,
  className = "",
}) => {
  const renderArticle = (article: Article) => (
    <div
      key={article.id}
      className="relative rounded-xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: article.bgColor || "transparent",
        minHeight: "140px",
      }}
    >
      {/* Background Image or Color */}
      {article.image && !article.bgColor && (
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient background if image fails
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.style.background =
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            }}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <h3 className="text-white text-lg font-semibold text-center">
          {article.title}
        </h3>
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Section Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{title}</h2>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map(renderArticle)}
      </div>
    </div>
  );
};

export default ArticlesSection;
