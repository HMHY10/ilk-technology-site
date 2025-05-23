import { useState, useEffect } from "react";
import { Logo } from "./header/Logo";
import { Navigation } from "./header/Navigation";
import { SearchBar } from "./header/SearchBar";
import { ContactInfo } from "./header/ContactInfo";
import { MobileMenu } from "./header/MobileMenu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Logo />
          <div className="hidden md:block">
            <Navigation isScrolled={isScrolled} />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <SearchBar isScrolled={isScrolled} />
            </div>
            <ContactInfo isScrolled={isScrolled} />
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};