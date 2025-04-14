
import { useLanguage } from "@/contexts/LanguageContext";
import { products, categories, storeInfo } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Clock, Phone, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  const { t, language } = useLanguage();
  
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {language === "en" ? "Fresh Groceries Delivered to Your Doorstep" : "आपके द्वार पर ताजा किराना सामान"}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {language === "en" 
                  ? "Shah Kirana offers high-quality groceries, fresh produce, and daily essentials at competitive prices." 
                  : "शाह किराना उच्च गुणवत्ता वाले किराने का सामान, ताजे उत्पाद और दैनिक जरूरतों की वस्तुएं प्रतिस्पर्धी कीमतों पर प्रदान करता है।"}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-kirana-primary hover:bg-green-600">
                  <Link to="/products">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    {t("orderNow")}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-kirana-primary text-kirana-primary hover:bg-kirana-primary hover:text-white">
                  <Link to="/contact">
                    {t("contact")}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh groceries" 
                className="rounded-lg shadow-xl" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-kirana-primary font-medium">
                  <Clock className="h-5 w-5" />
                  <span>Fast Delivery</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 text-kirana-primary font-medium">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Quality Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t("categories")}</h2>
            <Link to="/products" className="text-kirana-primary hover:text-green-600 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{t("featuredProducts")}</h2>
            <Link to="/products" className="text-kirana-primary hover:text-green-600 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t("aboutUs")}</h2>
              <p className="text-gray-600 mb-6">
                {storeInfo.about}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-kirana-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">{t("storeHours")}</h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 9:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-kirana-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">{t("address")}</h4>
                    <p className="text-gray-600 text-sm">{storeInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-kirana-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">{t("phone")}</h4>
                    <p className="text-gray-600 text-sm">{storeInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Store interior" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
