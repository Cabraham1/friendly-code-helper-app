import { Loader } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
      <Loader className="w-8 h-8 animate-spin text-white" />
    </div>
  );
};
