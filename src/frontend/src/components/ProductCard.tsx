import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

const STARS = [1, 2, 3, 4, 5];

interface Props {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 1 }: Props) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<"half" | "full" | "unit">(
    product.priceHalf ? "half" : "unit",
  );

  const getPrice = () => {
    if (selectedSize === "half") return product.priceHalf!;
    if (selectedSize === "full") return product.priceFull!;
    return product.priceUnit!;
  };

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md card-hover border border-border"
      data-ocid={`shop.item.${index}`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {product.isPopular && (
          <span className="absolute top-2 left-2 bg-gold text-brown-dark text-xs font-bold px-2 py-0.5 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-brown-dark text-sm mb-1 truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {STARS.map((n) => (
            <Star
              key={n}
              className={`w-3 h-3 ${
                n <= Math.floor(product.rating)
                  ? "fill-gold text-gold"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            {product.rating}
          </span>
        </div>

        {product.priceHalf && (
          <div className="flex gap-1 mb-3">
            <button
              type="button"
              onClick={() => setSelectedSize("half")}
              className={`flex-1 text-xs py-1 rounded-lg border font-medium transition-colors ${
                selectedSize === "half"
                  ? "bg-brown-primary text-white border-brown-primary"
                  : "border-border text-muted-foreground hover:border-brown-primary"
              }`}
            >
              ½ Kg — ₹{product.priceHalf}
            </button>
            <button
              type="button"
              onClick={() => setSelectedSize("full")}
              className={`flex-1 text-xs py-1 rounded-lg border font-medium transition-colors ${
                selectedSize === "full"
                  ? "bg-brown-primary text-white border-brown-primary"
                  : "border-border text-muted-foreground hover:border-brown-primary"
              }`}
            >
              1 Kg — ₹{product.priceFull}
            </button>
          </div>
        )}

        {product.priceUnit && (
          <p className="text-lg font-bold text-gold mb-3">
            ₹{product.priceUnit} / {product.unit}
          </p>
        )}

        <Button
          className="w-full bg-gold hover:bg-gold-dark text-brown-dark font-semibold text-sm"
          onClick={() => addItem(product, selectedSize)}
          data-ocid={`shop.primary_button.${index}`}
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Add to Cart — ₹{getPrice()}
        </Button>
      </div>
    </div>
  );
}
