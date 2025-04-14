
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/contexts/CartContext";
import { products as initialProducts, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Trash2, Plus, ArrowLeft, Loader2, LogOut } from "lucide-react";
import { toast } from "sonner";

// Simplified admin authentication (in a real app, use Supabase Auth)
const ADMIN_CREDENTIALS = {
  email: "admin@shahkirana.com",
  password: "admin123"
};

const Admin = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  const [productForm, setProductForm] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    image: "",
    category: "",
    description: ""
  });

  // Load products on mount (in real app, fetch from Supabase)
  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (loginForm.email === ADMIN_CREDENTIALS.email && 
          loginForm.password === ADMIN_CREDENTIALS.password) {
        setIsLoggedIn(true);
        toast.success("Welcome to Admin Dashboard");
      } else {
        toast.error("Invalid email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({
      email: "",
      password: ""
    });
    toast.info("You've been logged out");
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductForm(prev => ({ 
      ...prev, 
      [name]: name === "price" ? parseFloat(value) : value 
    }));
  };

  const handleCategoryChange = (value: string) => {
    setProductForm(prev => ({ ...prev, category: value }));
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setProductForm({
      name: "",
      price: 0,
      image: "",
      category: "",
      description: ""
    });
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setProductForm({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description
    });
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const handleProductSubmit = () => {
    setIsLoading(true);
    
    // Validate form
    if (!productForm.name || !productForm.price || !productForm.category) {
      toast.error("Please fill all required fields");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call to save product
    setTimeout(() => {
      if (selectedProduct) {
        // Update existing product
        setProducts(prevProducts => 
          prevProducts.map(p => 
            p.id === selectedProduct.id ? { ...productForm, id: selectedProduct.id } : p
          )
        );
        toast.success(`Product "${productForm.name}" updated successfully`);
      } else {
        // Add new product
        const newProduct = {
          ...productForm,
          id: `${Date.now()}`
        };
        setProducts(prev => [...prev, newProduct]);
        toast.success(`Product "${productForm.name}" added successfully`);
      }
      
      setIsDialogOpen(false);
      setIsLoading(false);
    }, 1000);
  };

  const handleDeleteProduct = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (selectedProduct) {
        setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
        toast.success(`Product "${selectedProduct.name}" deleted successfully`);
      }
      setIsDeleteDialogOpen(false);
      setSelectedProduct(null);
      setIsLoading(false);
    }, 1000);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="container-custom max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
              <p className="text-gray-600">Sign in to access the dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  placeholder="admin@shahkirana.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  placeholder="•••••••"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  (Default: admin@shahkirana.com / admin123)
                </p>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-kirana-primary hover:bg-green-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/")}
                className="text-kirana-primary hover:underline text-sm inline-flex items-center"
              >
                <ArrowLeft className="h-3 w-3 mr-1" />
                Back to store
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your store products and inventory</p>
        </div>
        
        <Button
          variant="outline"
          onClick={handleLogout}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          {t("logout")}
        </Button>
      </div>
      
      <Tabs defaultValue="products" className="mb-8">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders" disabled>Orders</TabsTrigger>
          <TabsTrigger value="customers" disabled>Customers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="mt-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold text-lg">Manage Products</h2>
              <Button className="bg-kirana-primary hover:bg-green-600 gap-1" onClick={handleAddProduct}>
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableCaption>A list of your products.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map(product => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="w-12 h-12 rounded overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{categories.find(c => c.id === product.category)?.name || product.category}</TableCell>
                      <TableCell className="text-right">₹{product.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            onClick={() => handleEditProduct(product)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="icon" 
                            variant="ghost"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleDeleteClick(product)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Add/Edit Product Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>
              {selectedProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name*
              </label>
              <Input
                id="name"
                name="name"
                value={productForm.name}
                onChange={handleProductChange}
                placeholder="Enter product name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)*
              </label>
              <Input
                id="price"
                name="price"
                type="number"
                value={productForm.price}
                onChange={handleProductChange}
                placeholder="0.00"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category*
              </label>
              <Select 
                value={productForm.category} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <Input
                id="image"
                name="image"
                value={productForm.image}
                onChange={handleProductChange}
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter a URL for the product image
              </p>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                value={productForm.description}
                onChange={handleProductChange}
                placeholder="Enter product description"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleProductSubmit} 
              disabled={isLoading}
              className="bg-kirana-primary hover:bg-green-600"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Product"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Are you sure you want to delete{" "}
              <span className="font-medium">{selectedProduct?.name}</span>? This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteProduct}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
