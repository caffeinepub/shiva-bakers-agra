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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const flavors = [
  "Chocolate",
  "Vanilla",
  "Strawberry",
  "Butterscotch",
  "Black Forest",
  "Red Velvet",
];
const sizes = ["Half Kg (500g)", "1 Kg", "1.5 Kg", "2 Kg"];
const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Baby Shower",
  "Other",
];
const budgets = ["Under ₹500", "₹500–₹1000", "₹1000–₹2000", "Above ₹2000"];

export function CustomOrder() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    flavor: "",
    size: "",
    occasion: "",
    design: "",
    budget: "",
    date: "",
    time: "",
    address: "",
  });
  const [success, setSuccess] = useState(false);

  const update = (key: string, val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `*Custom Cake Order — Shiva Bakers Agra*\n\n*Name:* ${form.name}\n*Mobile:* ${form.mobile}\n*Flavor:* ${form.flavor}\n*Size:* ${form.size}\n*Occasion:* ${form.occasion}\n*Design:* ${form.design}\n*Budget:* ${form.budget}\n*Delivery Date:* ${form.date}\n*Time:* ${form.time}\n*Address:* ${form.address}`,
    );
    window.open(`https://wa.me/916395716310?text=${text}`, "_blank");
    setSuccess(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <div className="pb-safe min-h-screen">
      <div className="bg-brown-primary text-white py-10 px-4 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">
          Custom Cake Order
        </h1>
        <p className="text-white/70">
          Design your dream cake — we'll make it reality!
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-pink-light rounded-2xl p-4 mb-8 text-center border border-pink-pastel">
          <p className="text-brown-primary font-medium text-sm">
            🎨 Share your idea below and we'll create a custom design for you.
            Free consultation via WhatsApp!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white rounded-2xl p-6 shadow-sm border border-border"
          data-ocid="custom_order.modal"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Your Name *</Label>
              <Input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                data-ocid="custom_order.input"
              />
            </div>
            <div>
              <Label>Mobile Number *</Label>
              <Input
                required
                type="tel"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
                placeholder="+91 XXXXXXXXXX"
                data-ocid="custom_order.input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Cake Flavor *</Label>
              <Select required onValueChange={(v) => update("flavor", v)}>
                <SelectTrigger data-ocid="custom_order.select">
                  <SelectValue placeholder="Select flavor" />
                </SelectTrigger>
                <SelectContent>
                  {flavors.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Size *</Label>
              <Select required onValueChange={(v) => update("size", v)}>
                <SelectTrigger data-ocid="custom_order.select">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Occasion *</Label>
              <Select required onValueChange={(v) => update("occasion", v)}>
                <SelectTrigger data-ocid="custom_order.select">
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent>
                  {occasions.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Budget</Label>
              <Select onValueChange={(v) => update("budget", v)}>
                <SelectTrigger data-ocid="custom_order.select">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgets.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Design Description *</Label>
            <Textarea
              required
              value={form.design}
              onChange={(e) => update("design", e.target.value)}
              placeholder="Describe your cake design — theme, colors, message, decorations..."
              rows={4}
              data-ocid="custom_order.textarea"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>Delivery Date *</Label>
              <Input
                required
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                data-ocid="custom_order.input"
              />
            </div>
            <div>
              <Label>Delivery Time *</Label>
              <Input
                required
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                data-ocid="custom_order.input"
              />
            </div>
          </div>

          <div>
            <Label>Delivery Address *</Label>
            <Textarea
              required
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="Full delivery address in Agra"
              rows={2}
              data-ocid="custom_order.textarea"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-6"
              data-ocid="custom_order.submit_button"
            >
              📱 Order via WhatsApp
            </Button>
            <Button
              type="button"
              onClick={handleWhatsApp}
              className="bg-gold hover:bg-gold-dark text-brown-dark font-bold py-6"
              data-ocid="custom_order.secondary_button"
            >
              Get Free Quote
            </Button>
          </div>
        </form>
      </div>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className="text-center" data-ocid="custom_order.dialog">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-brown-primary">
              🎉 Request Sent!
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground py-4">
            Your custom cake request has been sent via WhatsApp. We'll contact
            you within 30 minutes to confirm your order!
          </p>
          <Button
            onClick={() => setSuccess(false)}
            className="bg-brown-primary hover:bg-brown-dark text-white"
            data-ocid="custom_order.close_button"
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
