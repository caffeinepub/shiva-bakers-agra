import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactItems = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "Dayanand Nagar, Naglapadi, Agra, Uttar Pradesh 282002",
    href: undefined as string | undefined,
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+91-6395716310",
    href: "tel:+916395716310",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+91-6395716310",
    href: "https://wa.me/916395716310",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: "Instagram",
    value: "@_shiva.bakers_",
    href: "https://www.instagram.com/_shiva.bakers_",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "shibabakersagra@gmail.com",
    href: "mailto:shibabakersagra@gmail.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Hours",
    value: "Open daily: 9 AM – 10 PM",
    href: undefined,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Message from Website*\n\n*Name:* ${form.name}\n*Mobile:* ${form.mobile}\n*Message:* ${form.message}`,
    );
    window.open(`https://wa.me/916395716310?text=${text}`, "_blank");
    toast.success("Message sent via WhatsApp!");
    setForm({ name: "", mobile: "", message: "" });
  };

  return (
    <div className="pb-safe min-h-screen">
      <div className="bg-brown-primary text-white py-10 px-4 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-white/70">We'd love to hear from you!</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-2xl font-bold text-brown-dark mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4 mb-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-pastel flex items-center justify-center text-brown-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="text-brown-dark font-medium hover:text-gold transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-brown-dark font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a href="tel:+916395716310">
              <Button
                className="w-full bg-brown-primary hover:bg-brown-dark text-white"
                data-ocid="contact.primary_button"
              >
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </Button>
            </a>
            <a
              href="https://wa.me/916395716310"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                data-ocid="contact.secondary_button"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 border border-border shadow-sm space-y-4"
            data-ocid="contact.modal"
          >
            <h3 className="font-serif text-xl font-bold text-brown-dark">
              Send a Message
            </h3>
            <div>
              <Label>Your Name *</Label>
              <Input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full name"
                data-ocid="contact.input"
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
                data-ocid="contact.input"
              />
            </div>
            <div>
              <Label>Message *</Label>
              <Textarea
                required
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="How can we help you?"
                rows={4}
                data-ocid="contact.textarea"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-brown-dark font-bold py-6"
              data-ocid="contact.submit_button"
            >
              📱 Send via WhatsApp
            </Button>
          </form>

          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.6!2d78.0082!3d27.1767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEwJzM2LjEiTiA3OMKwMDAnMjkuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shiva Bakers Agra Location — Dayanand Nagar, Naglapadi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
