import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, clearCart, total } =
    useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    message: "",
    deliveryDate: "",
    deliveryTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Order - Shiva Bakers Agra*\n\n*Customer:* ${form.name}\n*Mobile:* ${form.mobile}\n*Address:* ${form.address}\n\n*Order Details:*\n${items.map((i) => `• ${i.product.name} (${i.size === "half" ? "Half Kg" : i.size === "full" ? "1 Kg" : i.product.unit}) x${i.qty} = ₹${i.price * i.qty}`).join("\n")}\n\n*Total: ₹${total}*\n*Message on Cake:* ${form.message || "None"}\n*Delivery Date:* ${form.deliveryDate}\n*Delivery Time:* ${form.deliveryTime}\n*Payment:* Cash on Delivery`,
    );
    window.open(`https://wa.me/916395716310?text=${text}`, "_blank");
    clearCart();
    setShowCheckout(false);
    setIsOpen(false);
    setShowConfirm(true);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md flex flex-col"
          data-ocid="cart.sheet"
        >
          <SheetHeader>
            <SheetTitle className="font-serif text-brown-primary">
              Your Cart
            </SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div
              className="flex-1 flex flex-col items-center justify-center gap-4"
              data-ocid="cart.empty_state"
            >
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-brown-primary hover:bg-brown-dark text-white"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-3 py-4">
                {items.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex items-center gap-3 bg-cream rounded-xl p-3"
                    data-ocid={`cart.item.${idx + 1}`}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-brown-dark truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.size === "half"
                          ? "Half Kg"
                          : item.size === "full"
                            ? "1 Kg"
                            : item.product.unit}
                      </p>
                      <p className="text-sm font-bold text-gold">
                        ₹{item.price}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-destructive"
                        data-ocid={`cart.delete_button.${idx + 1}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.qty - 1)
                          }
                          className="w-6 h-6 rounded-full bg-brown-primary text-white flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(item.product.id, item.size, item.qty + 1)
                          }
                          className="w-6 h-6 rounded-full bg-brown-primary text-white flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-brown-dark">Total</span>
                  <span className="text-gold">₹{total}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  💵 Cash on Delivery • Free delivery in Agra
                </p>

                {!showCheckout ? (
                  <Button
                    className="w-full bg-gold hover:bg-gold-dark text-brown-dark font-bold py-6"
                    onClick={() => setShowCheckout(true)}
                    data-ocid="cart.primary_button"
                  >
                    Proceed to Checkout
                  </Button>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label>Name *</Label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your full name"
                        data-ocid="checkout.input"
                      />
                    </div>
                    <div>
                      <Label>Mobile *</Label>
                      <Input
                        required
                        type="tel"
                        value={form.mobile}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, mobile: e.target.value }))
                        }
                        placeholder="+91 XXXXXXXXXX"
                        data-ocid="checkout.input"
                      />
                    </div>
                    <div>
                      <Label>Delivery Address *</Label>
                      <Textarea
                        required
                        value={form.address}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, address: e.target.value }))
                        }
                        placeholder="Full delivery address"
                        rows={2}
                        data-ocid="checkout.textarea"
                      />
                    </div>
                    <div>
                      <Label>Message on Cake</Label>
                      <Input
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        placeholder="e.g. Happy Birthday Priya!"
                        data-ocid="checkout.input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label>Delivery Date *</Label>
                        <Input
                          required
                          type="date"
                          value={form.deliveryDate}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              deliveryDate: e.target.value,
                            }))
                          }
                          data-ocid="checkout.input"
                        />
                      </div>
                      <div>
                        <Label>Time *</Label>
                        <Input
                          required
                          type="time"
                          value={form.deliveryTime}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              deliveryTime: e.target.value,
                            }))
                          }
                          data-ocid="checkout.input"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6"
                      data-ocid="checkout.submit_button"
                    >
                      📱 Order via WhatsApp
                    </Button>
                  </form>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="text-center" data-ocid="order.dialog">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-brown-primary">
              🎉 Order Sent!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <p className="text-muted-foreground">
              Your order has been sent via WhatsApp to Shiva Bakers Agra. Our
              team will confirm your order shortly!
            </p>
            <p className="text-sm font-medium text-gold">
              Payment: Cash on Delivery
            </p>
          </div>
          <Button
            onClick={() => setShowConfirm(false)}
            className="bg-brown-primary hover:bg-brown-dark text-white"
            data-ocid="order.close_button"
          >
            Continue Shopping
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
