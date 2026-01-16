import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Daily Words", href: "#daily-words" },
  { name: "Dictionary", href: "#dictionary" },
  { name: "Branches", href: "#branches" },
  { name: "Contact", href: "#inquiry" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "918299324931";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Global Spoken English" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span
              className={`text-xl md:text-2xl font-display font-bold transition-colors ${
                isScrolled ? "text-foreground" : "text-foreground"
              }`}
            >
              Global Spoken English
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-foreground" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg"
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-foreground hover:bg-muted"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg"
          >
            <div className="container px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg mt-2"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
