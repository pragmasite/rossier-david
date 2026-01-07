import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t, otherLangs } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#a-propos" },
    { label: t.nav.services, href: "#nos-vins" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex flex-col">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Rossier
          </span>
          <span className={`text-xs tracking-widest font-medium ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            {t.nav.profession}
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? "text-primary" : "text-white"}`}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            {otherLangs.map((other) => (
              <Link
                key={other.lang}
                to={other.path}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                <Globe className="h-4 w-4" />
                {other.lang.toUpperCase()}
              </Link>
            ))}
          </div>

          <Button asChild className="ml-4">
            <a href="tel:+41792041745" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-medium md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t pt-4 flex gap-2">
                {otherLangs.map((other) => (
                  <Link
                    key={other.lang}
                    to={other.path}
                    className="text-sm font-medium text-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {other.lang.toUpperCase()}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full">
                <a href="tel:+41792041745">
                  <Phone className="h-4 w-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
