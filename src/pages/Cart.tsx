
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { t } = useLanguage();
  const { items, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = () => {
    // In a real app, this would submit to Supabase or WhatsApp API
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      toast.success("Order placed successfully! We'll contact you soon.");
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Calculate delivery fee and total
  const deliveryFee = cartTotal > 500 ? 0 : 40;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-2">{t("cart")}</h1>
      <Link to="/products" className="text-kirana-primary hover:text-green-600 inline-flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Continue Shopping
      </Link>

      {items.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="font-medium text-lg">{t("cartItems")} ({items.length})</h2>
              </div>
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="font-medium text-lg mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-kirana-primary">Free</span>
                    ) : (
                      `₹${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <div className="text-xs text-gray-500">
                    Free delivery on orders over ₹500
                  </div>
                )}
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-medium text-lg">
                  <span>{t("orderTotal")}</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                onClick={handlePlaceOrder}
                disabled={isSubmitting}
                className="w-full bg-kirana-primary hover:bg-green-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {t("placeOrder")}
                  </>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full mt-3"
                disabled={isSubmitting}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">{t("emptyCart")}</h3>
          <p className="text-gray-500 mb-6">Browse our products and add items to your cart</p>
          <Button asChild className="bg-kirana-primary hover:bg-green-600">
            <Link to="/products">
              Browse Products
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
