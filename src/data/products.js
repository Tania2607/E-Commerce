const products = [
  // Men's Collection
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$89.99",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "men",
    rating: 4.5,
    description: "A timeless classic denim jacket perfect for casual outings. Made from premium cotton denim with a comfortable fit and durable construction. Features classic button closure, chest pockets, and a versatile design that pairs well with any outfit.",
    features: ["100% Cotton Denim", "Classic Fit", "Machine Washable", "Chest Pockets", "Button Closure"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Casual Cotton Shirt",
    price: "$49.99",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "men",
    rating: 4.3,
    description: "Comfortable and breathable cotton shirt perfect for everyday wear. Features a relaxed fit and soft fabric that keeps you comfortable all day long.",
    features: ["100% Cotton", "Relaxed Fit", "Breathable Fabric", "Easy Care", "Versatile Style"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Formal Business Suit",
    price: "$299.99",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "men",
    rating: 4.8,
    description: "Professional business suit crafted from premium wool blend fabric. Perfect for business meetings, formal events, and special occasions.",
    features: ["Wool Blend Fabric", "Tailored Fit", "Two-Piece Set", "Dry Clean Only", "Professional Look"],
    sizes: ["38", "40", "42", "44", "46", "48"]
  },
  {
    id: 4,
    name: "Casual Chinos",
    price: "$69.99",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "men",
    rating: 4.2,
    description: "Versatile chino pants that bridge the gap between casual and formal wear. Made from comfortable cotton twill with a modern slim fit.",
    features: ["Cotton Twill", "Slim Fit", "Belt Loops", "Side Pockets", "Versatile Style"],
    sizes: ["30", "32", "34", "36", "38", "40"]
  },
  {
    id: 5,
    name: "Leather Boots",
    price: "$159.99",
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "men",
    rating: 4.6,
    description: "Premium leather boots built for durability and style. Features genuine leather construction with comfortable cushioned sole.",
    features: ["Genuine Leather", "Cushioned Sole", "Durable Construction", "Lace-Up Design", "All-Season Wear"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: 6,
    name: "Polo T-Shirt",
    price: "$39.99",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "men",
    rating: 4.1,
    description: "Classic polo shirt made from soft cotton pique fabric. Perfect for casual and semi-formal occasions with its timeless design.",
    features: ["Cotton Pique", "Classic Collar", "Three-Button Placket", "Regular Fit", "Easy Care"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  // Women's Collection
  {
    id: 7,
    name: "Elegant Summer Dress",
    price: "$79.99",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "women",
    rating: 4.7,
    description: "Beautiful summer dress perfect for warm weather occasions. Features a flattering silhouette and breathable fabric for all-day comfort.",
    features: ["Lightweight Fabric", "Flattering Fit", "Breathable Material", "Easy Care", "Versatile Style"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Casual Blouse",
    price: "$59.99",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "women",
    rating: 4.4,
    description: "Stylish casual blouse that pairs perfectly with jeans or skirts. Made from soft, comfortable fabric with elegant detailing.",
    features: ["Soft Fabric", "Elegant Design", "Comfortable Fit", "Machine Washable", "Versatile Styling"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 9,
    name: "Designer Handbag",
    price: "$199.99",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "women",
    rating: 4.9,
    description: "Luxurious designer handbag crafted from premium materials. Features multiple compartments and elegant hardware for the modern woman.",
    features: ["Premium Materials", "Multiple Compartments", "Elegant Hardware", "Adjustable Strap", "Designer Quality"],
    sizes: ["One Size"]
  },
  {
    id: 10,
    name: "High Heels",
    price: "$129.99",
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "women",
    rating: 4.3,
    description: "Elegant high heels perfect for special occasions and professional settings. Features comfortable padding and stable heel design.",
    features: ["Comfortable Padding", "Stable Heel", "Premium Materials", "Elegant Design", "Non-Slip Sole"],
    sizes: ["5", "6", "7", "8", "9", "10"]
  },
  {
    id: 11,
    name: "Denim Jeans",
    price: "$89.99",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "women",
    rating: 4.5,
    description: "Classic denim jeans with a modern fit. Made from premium denim with stretch for comfort and movement.",
    features: ["Premium Denim", "Stretch Fabric", "Modern Fit", "Five-Pocket Design", "Durable Construction"],
    sizes: ["24", "26", "28", "30", "32", "34"]
  },
  {
    id: 12,
    name: "Silk Scarf",
    price: "$45.99",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "women",
    rating: 4.2,
    description: "Luxurious silk scarf with beautiful patterns. Perfect accessory to elevate any outfit with elegance and style.",
    features: ["100% Silk", "Beautiful Patterns", "Versatile Styling", "Soft Texture", "Premium Quality"],
    sizes: ["One Size"]
  },

  // Children's Collection
  {
    id: 13,
    name: "Kids' Colorful T-Shirt",
    price: "$24.99",
    image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "children",
    rating: 4.6,
    description: "Fun and colorful t-shirt perfect for active kids. Made from soft, comfortable cotton that's gentle on sensitive skin.",
    features: ["100% Cotton", "Soft Fabric", "Colorful Design", "Machine Washable", "Comfortable Fit"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"]
  },
  {
    id: 14,
    name: "Children's Denim Overalls",
    price: "$39.99",
    image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "children",
    rating: 4.5,
    description: "Adorable denim overalls perfect for playtime and casual outings. Features adjustable straps and durable construction.",
    features: ["Durable Denim", "Adjustable Straps", "Multiple Pockets", "Easy Care", "Comfortable Fit"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7"]
  },
  {
    id: 15,
    name: "Kids' Sneakers",
    price: "$49.99",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "children",
    rating: 4.7,
    description: "Comfortable and durable sneakers designed for active kids. Features cushioned sole and breathable materials.",
    features: ["Cushioned Sole", "Breathable Materials", "Durable Construction", "Easy Velcro Closure", "Non-Slip Sole"],
    sizes: ["10", "11", "12", "13", "1", "2", "3"]
  },
  {
    id: 16,
    name: "Summer Shorts",
    price: "$29.99",
    image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    category: "children",
    rating: 4.3,
    description: "Comfortable summer shorts perfect for warm weather play. Made from lightweight, breathable fabric.",
    features: ["Lightweight Fabric", "Elastic Waistband", "Side Pockets", "Machine Washable", "Comfortable Fit"],
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"]
  }
];

export default products;