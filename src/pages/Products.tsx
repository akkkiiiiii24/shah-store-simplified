
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Products = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Reset search when navigating to page with category param
  useEffect(() => {
    if (categoryParam && !selectedCategories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  // Apply filters whenever search or categories change
  useEffect(() => {
    let result = products;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategories]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSearchParams({});
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">{t("products")}</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <form onSubmit={handleSearch} className="flex-grow">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </form>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" /> Filters
                {selectedCategories.length > 0 && (
                  <span className="bg-kirana-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {selectedCategories.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>
                  Narrow down your product search with these filters.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center gap-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="cursor-pointer"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {(searchQuery || selectedCategories.length > 0) && (
            <Button variant="ghost" onClick={clearFilters}>
              Clear
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters Display */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategories.map((categoryId) => {
            const category = categories.find((c) => c.id === categoryId);
            return (
              category && (
                <div
                  key={categoryId}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <span>{category.name}</span>
                  <button
                    onClick={() => handleCategoryChange(categoryId)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
              )
            );
          })}
          {selectedCategories.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-kirana-primary text-sm hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-700">No products found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
