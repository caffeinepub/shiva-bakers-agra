import { Input } from "@/components/ui/input";
import { useSearch } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { categories, products } from "../data/products";
import type { Category } from "../data/products";

export function Shop() {
  const searchParams = useSearch({ from: "/shop" });
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (searchParams.category) {
      setActiveCategory(searchParams.category as Category);
    }
  }, [searchParams.category]);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pb-safe min-h-screen">
      <div className="bg-brown-primary text-white py-8 px-4 text-center">
        <h1 className="font-serif text-3xl font-bold mb-1">Our Products</h1>
        <p className="text-white/70 text-sm">
          Fresh cakes, pastries &amp; more — delivered to your door
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-white"
            data-ocid="shop.search_input"
          />
        </div>

        <div className="overflow-x-auto mb-8 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {(
              ["All", ...categories.map((c) => c.name)] as ("All" | Category)[]
            ).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                  activeCategory === cat
                    ? "bg-brown-primary text-white border-brown-primary"
                    : "bg-white text-brown-dark border-border hover:border-brown-primary"
                }`}
                data-ocid="shop.tab"
              >
                {cat === "All"
                  ? "🎂 All"
                  : `${categories.find((c) => c.name === cat)?.icon ?? ""} ${cat}`}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="shop.empty_state">
            <p className="text-muted-foreground text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <ProductCard product={p} index={i + 1} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
