
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart, CartItem as CartItemType } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { t } = useLanguage();
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (amount: number) => {
    const newQuantity = item.quantity + amount;
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 border-b">
      <div className="w-20 h-20 flex-shrink-0 mb-3 sm:mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="flex-grow px-4">
        <h3 className="font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-kirana-primary font-bold mt-1">₹{item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-3 sm:mt-0">
        <div className="flex items-center border rounded-md">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleQuantityChange(-1)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="px-3">{item.quantity}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleQuantityChange(1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="text-right sm:w-24">
          <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
