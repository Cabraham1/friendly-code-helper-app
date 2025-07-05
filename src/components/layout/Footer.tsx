import { Facebook, Instagram, Youtube, X as Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A8AAF] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          <h1 className="text-xl font-bold">AyikaGuard</h1>
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#">About Us</a>
            <a href="#">Dashboard</a>
            <a href="#">Live Data</a>
            <a href="#">Learn</a>
            <a href="#">Community</a>
            <a href="#">Help</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#">
              <Instagram size={18} />
            </a>
            <a href="#">
              <Facebook size={18} />
            </a>
            <a href="#">
              <Youtube size={18} />
            </a>
            <a href="#">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-white/80  pt-6">
          <p>© 2025 AyikaGuard</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
