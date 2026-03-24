export type Category =
  | "Birthday Cakes"
  | "Anniversary Cakes"
  | "Custom Cakes"
  | "Pastries"
  | "Party Decoration Items"
  | "Biscuits"
  | "Cold Drinks"
  | "Gifts";

export interface Product {
  id: number;
  name: string;
  category: Category;
  image: string;
  priceHalf?: number;
  priceFull?: number;
  priceUnit?: number;
  unit?: string;
  description: string;
  rating: number;
  isPopular?: boolean;
}

export const categories: { name: Category; image: string; icon: string }[] = [
  {
    name: "Birthday Cakes",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
    icon: "🎂",
  },
  {
    name: "Anniversary Cakes",
    image: "/assets/generated/anniversary-cake.dim_600x600.jpg",
    icon: "💕",
  },
  {
    name: "Custom Cakes",
    image: "/assets/generated/custom-cake.dim_600x600.jpg",
    icon: "✨",
  },
  {
    name: "Pastries",
    image: "/assets/generated/pastries.dim_600x600.jpg",
    icon: "🥐",
  },
  {
    name: "Party Decoration Items",
    image: "/assets/generated/party-items.dim_600x600.jpg",
    icon: "🎉",
  },
  {
    name: "Biscuits",
    image: "/assets/generated/biscuits.dim_600x600.jpg",
    icon: "🍪",
  },
  {
    name: "Cold Drinks",
    image: "/assets/generated/cold-drinks.dim_600x600.jpg",
    icon: "🥤",
  },
  {
    name: "Gifts",
    image: "/assets/generated/gifts.dim_600x600.jpg",
    icon: "🎁",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Chocolate Truffle",
    category: "Birthday Cakes",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
    priceHalf: 349,
    priceFull: 649,
    description:
      "Rich dark chocolate layers with silky truffle cream frosting.",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 2,
    name: "Strawberry Dream",
    category: "Birthday Cakes",
    image: "/assets/generated/strawberry-cake.dim_600x600.jpg",
    priceHalf: 379,
    priceFull: 699,
    description:
      "Fresh strawberry layers with whipped cream and berry compote.",
    rating: 4.7,
    isPopular: true,
  },
  {
    id: 3,
    name: "Vanilla Bliss",
    category: "Birthday Cakes",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
    priceHalf: 349,
    priceFull: 649,
    description:
      "Classic vanilla sponge with buttercream frosting and sprinkles.",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Red Velvet Romance",
    category: "Anniversary Cakes",
    image: "/assets/generated/anniversary-cake.dim_600x600.jpg",
    priceHalf: 449,
    priceFull: 849,
    description:
      "Classic red velvet with cream cheese frosting and rose décor.",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 5,
    name: "White Forest Elegance",
    category: "Anniversary Cakes",
    image: "/assets/generated/anniversary-cake.dim_600x600.jpg",
    priceHalf: 479,
    priceFull: 899,
    description:
      "Layers of white chocolate mousse with cherry and whipped cream.",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Photo Cake",
    category: "Custom Cakes",
    image: "/assets/generated/custom-cake.dim_600x600.jpg",
    priceHalf: 599,
    priceFull: 1099,
    description: "Edible photo print on premium cake. Any photo, any message.",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 7,
    name: "Designer Fondant Cake",
    category: "Custom Cakes",
    image: "/assets/generated/custom-cake.dim_600x600.jpg",
    priceHalf: 699,
    priceFull: 1299,
    description: "Handcrafted fondant designs for any theme or occasion.",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Éclair Pastry",
    category: "Pastries",
    image: "/assets/generated/pastries.dim_600x600.jpg",
    priceUnit: 49,
    unit: "each",
    description: "Light choux pastry filled with cream and chocolate glaze.",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Fruit Tart",
    category: "Pastries",
    image: "/assets/generated/pastries.dim_600x600.jpg",
    priceUnit: 59,
    unit: "each",
    description:
      "Buttery tart shell with custard cream and fresh seasonal fruits.",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Chocolate Brownie",
    category: "Pastries",
    image: "/assets/generated/pastries.dim_600x600.jpg",
    priceUnit: 39,
    unit: "each",
    description: "Dense, fudgy homestyle chocolate brownie baked fresh daily.",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Party Pack Deluxe",
    category: "Party Decoration Items",
    image: "/assets/generated/party-items.dim_600x600.jpg",
    priceUnit: 299,
    unit: "set",
    description:
      "Complete party decoration set: balloons, streamers, candles & more.",
    rating: 4.5,
  },
  {
    id: 12,
    name: "Birthday Balloon Set",
    category: "Party Decoration Items",
    image: "/assets/generated/party-items.dim_600x600.jpg",
    priceUnit: 149,
    unit: "set",
    description: "12 colorful helium-quality balloons with ribbon and pump.",
    rating: 4.4,
  },
  {
    id: 13,
    name: "Butter Cookies 500g",
    category: "Biscuits",
    image: "/assets/generated/biscuits.dim_600x600.jpg",
    priceUnit: 199,
    unit: "box",
    description: "Melt-in-mouth pure butter cookies baked fresh in-store.",
    rating: 4.7,
  },
  {
    id: 14,
    name: "Chocolate Chip Cookies 400g",
    category: "Biscuits",
    image: "/assets/generated/biscuits.dim_600x600.jpg",
    priceUnit: 229,
    unit: "box",
    description: "Crispy cookies loaded with premium chocolate chips.",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Mango Milkshake",
    category: "Cold Drinks",
    image: "/assets/generated/cold-drinks.dim_600x600.jpg",
    priceUnit: 99,
    unit: "glass",
    description:
      "Thick creamy Alphonso mango milkshake, chilled to perfection.",
    rating: 4.9,
  },
  {
    id: 16,
    name: "Cold Coffee",
    category: "Cold Drinks",
    image: "/assets/generated/cold-drinks.dim_600x600.jpg",
    priceUnit: 89,
    unit: "glass",
    description: "Strong cold brew coffee blended with ice cream and milk.",
    rating: 4.7,
  },
  {
    id: 17,
    name: "Fresh Lime Soda",
    category: "Cold Drinks",
    image: "/assets/generated/cold-drinks.dim_600x600.jpg",
    priceUnit: 59,
    unit: "glass",
    description: "Refreshing lime soda with mint, sweet or salted as you like.",
    rating: 4.5,
  },
  {
    id: 18,
    name: "Premium Gift Hamper",
    category: "Gifts",
    image: "/assets/generated/gifts.dim_600x600.jpg",
    priceUnit: 499,
    unit: "box",
    description: "Curated hamper with cookies, chocolates & premium packaging.",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 19,
    name: "Sweet Box",
    category: "Gifts",
    image: "/assets/generated/gifts.dim_600x600.jpg",
    priceUnit: 199,
    unit: "box",
    description: "Assorted Indian sweets and mithai in a premium gift box.",
    rating: 4.6,
  },
];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Civil Lines, Agra",
    rating: 5,
    text: "Ordered a birthday cake for my son and the quality was outstanding! The chocolate truffle was absolutely divine. Same-day delivery was perfect.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Gupta",
    location: "Taj Ganj, Agra",
    rating: 5,
    text: "Best bakery in Agra! Their custom photo cake for our anniversary was beautiful and tasted amazing. The free gift packaging was a wonderful surprise.",
    avatar: "RG",
  },
  {
    id: 3,
    name: "Anita Singh",
    location: "Kamla Nagar, Agra",
    rating: 5,
    text: "Freshest cakes in Agra. The pastries and brownies are to die for. I order from here every week for my family. Highly recommend!",
    avatar: "AS",
  },
  {
    id: 4,
    name: "Vikram Agarwal",
    location: "Belanganj, Agra",
    rating: 4,
    text: "Excellent quality and very affordable prices. The WhatsApp ordering is super convenient. The red velvet cake was a hit at our office party!",
    avatar: "VA",
  },
  {
    id: 5,
    name: "Meera Joshi",
    location: "Sikandra, Agra",
    rating: 5,
    text: "Shiva Bakers has become our go-to bakery for all celebrations. The fondant cakes are works of art. Professional service and on-time delivery.",
    avatar: "MJ",
  },
];
