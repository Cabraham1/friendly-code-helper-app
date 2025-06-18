import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">AyikaGuard</div>
        <div className="hidden md:flex items-center space-x-8 text-white/80">
          <a href="#" className="hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Live Data
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Learn
          </a>
          <select className="bg-transparent border-none text-white">
            <option>Nigeria</option>
          </select>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Header;
