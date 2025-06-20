import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { to: "/about-us", label: "About Us" },
    { to: "/live-data", label: "Live Data" },
    { to: "/learn", label: "Learn" },
    { to: "/dummy", label: "Dummy" },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          AyikaGuard
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white/80">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "transition-colors",
                isActiveLink(link.to)
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-0 text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[380px] bg-slate-900">
              <div className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={cn(
                      "text-lg transition-colors",
                      isActiveLink(link.to)
                        ? "text-white font-medium"
                        : "text-white/80 hover:text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <select className="bg-transparent border-none text-white mt-2">
                  <option>Nigeria</option>
                </select>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Get Started Button */}
        <div className="hidden md:flex items-center space-x-4">
          <select className="bg-transparent border-none text-white">
            <option>Nigeria</option>
          </select>
          <Button className="hidden md:flex bg-[#3AAAD9] hover:bg-transparent hover:border hover:border-black text-white hover:text-black transition-colors duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
