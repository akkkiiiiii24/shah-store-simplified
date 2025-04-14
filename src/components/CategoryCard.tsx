
import { Link } from "react-router-dom";
import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/products?category=${category.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="h-36 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
        <div className="p-3 bg-gradient-to-r from-kirana-primary/90 to-kirana-primary text-white">
          <h3 className="font-medium text-center">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
