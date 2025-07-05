import React from "react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  className?: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[#E0F6FF] p-8 flex flex-col justify-between min-h-[300px] border",
        className
      )}
    >
      <div>
        <h3 className="text-2xl font-bold leading-snug text-black">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>

      <div className="flex justify-start">
        <button
          onClick={onClick}
          className="mt-8 px-4 py-2 border border-sky-200 text-sky-900 rounded-md hover:bg-sky-200 hover:border-sky-400 transition-all duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
