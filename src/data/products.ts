
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Rice (5kg)",
    price: 350,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "grains",
    description: "Premium quality basmati rice, perfect for everyday meals."
  },
  {
    id: "2",
    name: "Wheat Flour (1kg)",
    price: 50,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "grains",
    description: "Finely milled wheat flour for chapatis and bread."
  },
  {
    id: "3",
    name: "Tomatoes (1kg)",
    price: 40,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "vegetables",
    description: "Fresh, ripe tomatoes from local farmers."
  },
  {
    id: "4",
    name: "Potatoes (1kg)",
    price: 30,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "vegetables",
    description: "Fresh potatoes perfect for curries and fries."
  },
  {
    id: "5",
    name: "Onions (1kg)",
    price: 35,
    image: "https://images.unsplash.com/photo-1618512496248-a3e6c75abf7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "vegetables",
    description: "Fresh red onions, essential for Indian cooking."
  },
  {
    id: "6",
    name: "Mustard Oil (1L)",
    price: 160,
    image: "https://images.unsplash.com/photo-1589020573052-e8bed8656dc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "oils",
    description: "Pure mustard oil with authentic flavor."
  },
  {
    id: "7",
    name: "Turmeric Powder (100g)",
    price: 40,
    image: "https://images.unsplash.com/photo-1615485925876-87e0daacbee6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "spices",
    description: "Pure turmeric powder for cooking and medicinal use."
  },
  {
    id: "8",
    name: "Red Chili Powder (100g)",
    price: 50,
    image: "https://images.unsplash.com/photo-1558804754-9e97f632e5ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "spices",
    description: "Hot and vibrant red chili powder."
  },
  {
    id: "9",
    name: "Garam Masala (50g)",
    price: 60,
    image: "https://images.unsplash.com/photo-1600093668669-e85a68484337?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "spices",
    description: "Aromatic blend of ground spices for Indian cuisine."
  },
  {
    id: "10",
    name: "Moong Dal (500g)",
    price: 80,
    image: "https://images.unsplash.com/photo-1598363220135-9e8860096c5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "pulses",
    description: "Yellow moong dal, perfect for soups and curries."
  },
  {
    id: "11",
    name: "Toor Dal (500g)",
    price: 90,
    image: "https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "pulses",
    description: "Split pigeon peas, commonly used in sambar."
  },
  {
    id: "12",
    name: "Milk (1L)",
    price: 60,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "dairy",
    description: "Fresh, pasteurized milk delivered daily."
  },
  {
    id: "13",
    name: "Curd (400g)",
    price: 40,
    image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "dairy",
    description: "Creamy yogurt made from fresh milk."
  },
  {
    id: "14",
    name: "Paneer (200g)",
    price: 80,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "dairy",
    description: "Fresh cottage cheese, ideal for curries and snacks."
  },
  {
    id: "15",
    name: "Sugar (1kg)",
    price: 45,
    image: "https://images.unsplash.com/photo-1584726727277-8moreover 01ge518523b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "essentials",
    description: "Refined white sugar for your daily needs."
  },
  {
    id: "16",
    name: "Salt (1kg)",
    price: 20,
    image: "https://images.unsplash.com/photo-1519543292127-5c69f9b9a560?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "essentials",
    description: "Iodized salt for cooking and seasoning."
  }
];

export const categories: Category[] = [
  {
    id: "grains",
    name: "Grains & Flours",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "vegetables",
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "oils",
    name: "Oils",
    image: "https://images.unsplash.com/photo-1589020573052-e8bed8656dc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "spices",
    name: "Spices",
    image: "https://images.unsplash.com/photo-1558804754-9e97f632e5ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "pulses",
    name: "Pulses & Lentils",
    image: "https://images.unsplash.com/photo-1598363220135-9e8860096c5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "dairy",
    name: "Dairy Products",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "essentials",
    name: "Daily Essentials",
    image: "https://images.unsplash.com/photo-1584726727277-801ge518523b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export const storeInfo = {
  name: "Shah Kirana",
  address: "123 Main Street, New Delhi, India",
  phone: "+91 98765 43210",
  email: "contact@shahkirana.com",
  hours: {
    monday: "9:00 AM - 8:00 PM",
    tuesday: "9:00 AM - 8:00 PM",
    wednesday: "9:00 AM - 8:00 PM",
    thursday: "9:00 AM - 8:00 PM",
    friday: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 9:00 PM",
    sunday: "10:00 AM - 6:00 PM",
  },
  about: "Shah Kirana is a family-owned grocery store serving the local community for over 25 years. We offer fresh produce, groceries, and household items at competitive prices. Our commitment to quality and customer service has made us a trusted name in the neighborhood."
};
