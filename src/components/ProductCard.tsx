
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 text-gray-800">{product.name}</h3>
        <p className="text-kirana-primary font-bold mb-2">₹{product.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-kirana-primary hover:bg-green-600 text-white"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {t("addToCart")}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
