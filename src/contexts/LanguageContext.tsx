
import React, { createContext, useState, useContext } from "react";

type Language = "en" | "hi";

type TranslationKey = 
  | "home" 
  | "products" 
  | "cart" 
  | "contact" 
  | "login" 
  | "addToCart" 
  | "removeFromCart" 
  | "placeOrder" 
  | "orderTotal"
  | "storeHours"
  | "address"
  | "phone"
  | "email"
  | "categories"
  | "featuredProducts"
  | "aboutUs"
  | "orderNow"
  | "quantity"
  | "price"
  | "admin"
  | "logout"
  | "emptyCart"
  | "cartItems"
  | "checkout";

interface Translations {
  en: Record<TranslationKey, string>;
  hi: Record<TranslationKey, string>;
}

const translations: Translations = {
  en: {
    home: "Home",
    products: "Products",
    cart: "Cart",
    contact: "Contact",
    login: "Login",
    addToCart: "Add to Cart",
    removeFromCart: "Remove",
    placeOrder: "Place Order",
    orderTotal: "Order Total",
    storeHours: "Store Hours",
    address: "Address",
    phone: "Phone",
    email: "Email",
    categories: "Categories",
    featuredProducts: "Featured Products",
    aboutUs: "About Us",
    orderNow: "Order Now",
    quantity: "Quantity",
    price: "Price",
    admin: "Admin",
    logout: "Logout",
    emptyCart: "Your cart is empty",
    cartItems: "Cart Items",
    checkout: "Checkout",
  },
  hi: {
    home: "होम",
    products: "उत्पाद",
    cart: "कार्ट",
    contact: "संपर्क",
    login: "लॉगिन",
    addToCart: "कार्ट में जोड़ें",
    removeFromCart: "हटाएं",
    placeOrder: "ऑर्डर करें",
    orderTotal: "कुल राशि",
    storeHours: "दुकान का समय",
    address: "पता",
    phone: "फोन",
    email: "ईमेल",
    categories: "श्रेणियाँ",
    featuredProducts: "विशेष उत्पाद",
    aboutUs: "हमारे बारे में",
    orderNow: "अभी ऑर्डर करें",
    quantity: "मात्रा",
    price: "मूल्य",
    admin: "एडमिन",
    logout: "लॉगआउट",
    emptyCart: "आपका कार्ट खाली है",
    cartItems: "कार्ट आइटम",
    checkout: "चेकआउट",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
