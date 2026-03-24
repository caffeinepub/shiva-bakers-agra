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

// New cake images (uploaded batch 2)
const IMG_MAKEUP =
  "/assets/uploads/img20250319204701_01-019d1fce-e9a6-7388-b782-897a4d3e7c7d-1.jpg";
const IMG_OREO =
  "/assets/uploads/img20250307193128_01-019d1fce-ea65-700c-8442-906913789553-2.jpg";
const IMG_GYM =
  "/assets/uploads/img20250304183636_01-019d1fce-ea63-724a-b998-26715f4afa35-3.jpg";
const IMG_MICKEY =
  "/assets/uploads/img20250103181348_01-019d1fce-eaf1-76fc-9ea4-9be31f464fdb-4.jpg";
const IMG_ANNIVERSARY25 =
  "/assets/uploads/screenshot_2025-02-25-18-15-53-26_6012fa4d4ddec268fc5c7112cbb265e7-019d1fce-eb61-7618-95e6-2d05c83454cf-5.jpg";
const IMG_FLORAL =
  "/assets/uploads/img20250110221541_01-019d1fce-ec58-716c-af47-fade8059877c-6.jpg";
const IMG_JUNGLE =
  "/assets/uploads/img20241210175826_01-019d1fce-edd0-73ae-9370-db235dae36f2-7.jpg";
const IMG_PHOTO =
  "/assets/uploads/img20250119180355_01-019d1fce-f383-724b-aeb5-778767cb22e9-8.jpg";
const IMG_DUCATI =
  "/assets/uploads/img20250306170433_01-019d1fce-f400-7389-9cee-fa153bdcf7a4-9.jpg";
const IMG_POPGIRL =
  "/assets/uploads/img20241121210157-019d1fce-f557-769c-bf59-e33018d366eb-10.jpg";
const IMG_GOLDFACE =
  "/assets/uploads/img20250203185038-019d1fce-fa6a-717e-8520-6f12c50b8232-11.jpg";

// Pastry flavour images
const IMG_ECLAIR = "/assets/generated/eclair-pastry.dim_600x600.jpg";
const IMG_FRUIT_TART = "/assets/generated/fruit-tart-pastry.dim_600x600.jpg";
const IMG_BROWNIE =
  "/assets/generated/chocolate-brownie-pastry.dim_600x600.jpg";

export const categories: { name: Category; image: string; icon: string }[] = [
  { name: "Birthday Cakes", image: IMG_MAKEUP, icon: "🎂" },
  { name: "Anniversary Cakes", image: IMG_ANNIVERSARY25, icon: "💕" },
  { name: "Custom Cakes", image: IMG_GYM, icon: "✨" },
  {
    name: "Pastries",
    image: IMG_ECLAIR,
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
    image: IMG_OREO,
    priceHalf: 349,
    priceFull: 649,
    description:
      "Rich dark chocolate layers with Oreo topping and silky truffle cream frosting.",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 2,
    name: "Makeup Birthday Cake",
    category: "Birthday Cakes",
    image: IMG_MAKEUP,
    priceHalf: 449,
    priceFull: 849,
    description:
      "Gorgeous pink cake with makeup-themed toppers — perfect for her special day.",
    rating: 4.7,
    isPopular: true,
  },
  {
    id: 3,
    name: "Kids Theme Cake",
    category: "Birthday Cakes",
    image: IMG_MICKEY,
    priceHalf: 399,
    priceFull: 749,
    description:
      "Fun character cakes for kids — Mickey, jungle animals, and more themes available.",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 4,
    name: "Jungle Animals Cake",
    category: "Birthday Cakes",
    image: IMG_JUNGLE,
    priceHalf: 379,
    priceFull: 699,
    description:
      "Adorable blue jungle theme cake with cartoon animal toppers — kids love it!",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Floral Birthday Cake",
    category: "Birthday Cakes",
    image: IMG_FLORAL,
    priceHalf: 349,
    priceFull: 649,
    description:
      "Colorful cream flower cake with vibrant rose swirls and cherry garnish.",
    rating: 4.6,
  },
  {
    id: 6,
    name: "25th Anniversary Cake",
    category: "Anniversary Cakes",
    image: IMG_ANNIVERSARY25,
    priceHalf: 699,
    priceFull: 1299,
    description:
      "Elegant 3-tier silver jubilee cake with fresh roses and gold butterfly décor.",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 7,
    name: "Golden Elegance Cake",
    category: "Anniversary Cakes",
    image: IMG_GOLDFACE,
    priceHalf: 549,
    priceFull: 999,
    description:
      "Sophisticated gold face art cake with red roses — for a truly premium celebration.",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Photo Cake",
    category: "Custom Cakes",
    image: IMG_PHOTO,
    priceHalf: 599,
    priceFull: 1099,
    description: "Edible photo print on premium cake. Any photo, any message.",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 9,
    name: "Gym Theme Cake",
    category: "Custom Cakes",
    image: IMG_GYM,
    priceHalf: 499,
    priceFull: 949,
    description:
      "Custom fitness-themed cake for gym lovers — 'No Pain No Gain' with dumbbell toppers.",
    rating: 4.8,
  },
  {
    id: 10,
    name: "Ducati Bike Cake",
    category: "Custom Cakes",
    image: IMG_DUCATI,
    priceHalf: 549,
    priceFull: 1049,
    description:
      "Stunning pink Ducati-themed cake for bike enthusiasts — unique and unforgettable.",
    rating: 5.0,
  },
  {
    id: 11,
    name: "Pop Art Girl Cake",
    category: "Custom Cakes",
    image: IMG_POPGIRL,
    priceHalf: 599,
    priceFull: 1099,
    description:
      "Vibrant pop-art themed 2-tier cake with comic style art — wow factor guaranteed!",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Éclair Pastry",
    category: "Pastries",
    image: IMG_ECLAIR,
    priceUnit: 49,
    unit: "each",
    description: "Light choux pastry filled with cream and chocolate glaze.",
    rating: 4.7,
  },
  {
    id: 13,
    name: "Fruit Tart",
    category: "Pastries",
    image: IMG_FRUIT_TART,
    priceUnit: 59,
    unit: "each",
    description:
      "Buttery tart shell with custard cream and fresh seasonal fruits.",
    rating: 4.8,
  },
  {
    id: 14,
    name: "Chocolate Brownie",
    category: "Pastries",
    image: IMG_BROWNIE,
    priceUnit: 39,
    unit: "each",
    description: "Dense, fudgy homestyle chocolate brownie baked fresh daily.",
    rating: 4.6,
  },
  {
    id: 15,
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
    id: 16,
    name: "Birthday Balloon Set",
    category: "Party Decoration Items",
    image: "/assets/generated/party-items.dim_600x600.jpg",
    priceUnit: 149,
    unit: "set",
    description: "12 colorful helium-quality balloons with ribbon and pump.",
    rating: 4.4,
  },
  {
    id: 17,
    name: "Butter Cookies 500g",
    category: "Biscuits",
    image: "/assets/generated/biscuits.dim_600x600.jpg",
    priceUnit: 199,
    unit: "box",
    description: "Melt-in-mouth pure butter cookies baked fresh in-store.",
    rating: 4.7,
  },
  {
    id: 18,
    name: "Chocolate Chip Cookies 400g",
    category: "Biscuits",
    image: "/assets/generated/biscuits.dim_600x600.jpg",
    priceUnit: 229,
    unit: "box",
    description: "Crispy cookies loaded with premium chocolate chips.",
    rating: 4.8,
  },
  {
    id: 19,
    name: "Mango Milkshake",
    category: "Cold Drinks",
    image: "/assets/generated/mango-milkshake.dim_400x400.jpg",
    priceUnit: 99,
    unit: "glass",
    description:
      "Thick creamy Alphonso mango milkshake, chilled to perfection.",
    rating: 4.9,
  },
  {
    id: 20,
    name: "Cold Coffee",
    category: "Cold Drinks",
    image: "/assets/generated/cold-coffee.dim_400x400.jpg",
    priceUnit: 89,
    unit: "glass",
    description: "Strong cold brew coffee blended with ice cream and milk.",
    rating: 4.7,
  },
  {
    id: 21,
    name: "Fresh Lime Soda",
    category: "Cold Drinks",
    image: "/assets/generated/fresh-lime-soda.dim_400x400.jpg",
    priceUnit: 59,
    unit: "glass",
    description: "Refreshing lime soda with mint, sweet or salted as you like.",
    rating: 4.5,
  },
  {
    id: 22,
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
    id: 23,
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
