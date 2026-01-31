import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import levoriaLogo from "@/assets/levoria-logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Team", href: "#team" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <img
              src={levoriaLogo}
              alt="Levoria"
              className="h-8 lg:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-1"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
