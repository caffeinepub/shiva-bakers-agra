import { type ReactNode, createContext, useContext, useState } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  size: "half" | "full" | "unit";
  qty: number;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: "half" | "full" | "unit") => void;
  removeItem: (productId: number, size: string) => void;
  updateQty: (productId: number, size: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, size: "half" | "full" | "unit") => {
    const price =
      size === "half"
        ? product.priceHalf!
        : size === "full"
          ? product.priceFull!
          : product.priceUnit!;

    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.size === size,
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === size
            ? { ...i, qty: i.qty + 1 }
            : i,
        );
      }
      return [...prev, { product, size, qty: 1, price }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: number, size: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.size === size)),
    );
  };

  const updateQty = (productId: number, size: string, qty: number) => {
    if (qty <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.size === size ? { ...i, qty } : i,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        total,
        count,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
