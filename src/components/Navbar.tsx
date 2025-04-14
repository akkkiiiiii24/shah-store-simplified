
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Menu, X, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-kirana-primary">Shah <span className="text-kirana-secondary">Kirana</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-kirana-primary transition-colors">
              {t("home")}
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-kirana-primary transition-colors">
              {t("products")}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-kirana-primary transition-colors">
              {t("contact")}
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-kirana-primary transition-colors">
              {t("admin")}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hidden md:flex"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1">{language === "en" ? "हिंदी" : "EN"}</span>
            </Button>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-kirana-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/admin">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4 space-y-3">
            <Link
              to="/"
              className="block px-2 py-1 text-gray-600 hover:text-kirana-primary"
              onClick={toggleMenu}
            >
              {t("home")}
            </Link>
            <Link
              to="/products"
              className="block px-2 py-1 text-gray-600 hover:text-kirana-primary"
              onClick={toggleMenu}
            >
              {t("products")}
            </Link>
            <Link
              to="/contact"
              className="block px-2 py-1 text-gray-600 hover:text-kirana-primary"
              onClick={toggleMenu}
            >
              {t("contact")}
            </Link>
            <Link
              to="/admin"
              className="block px-2 py-1 text-gray-600 hover:text-kirana-primary"
              onClick={toggleMenu}
            >
              {t("admin")}
            </Link>
            <div className="flex items-center px-2 py-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language === "en" ? "हिंदी" : "EN"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
