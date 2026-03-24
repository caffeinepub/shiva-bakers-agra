# Shiva Bakers Agra

## Current State
Full 7-page bakery website is live. Home page exists with hero, categories, offer banner, featured products, reviews, and gallery. A separate Contact page handles map/contact. StickyBottomBar has WhatsApp/Call/Instagram. Footer shows hours as 9 AM–10 PM.

## Requested Changes (Diff)

### Add
- "Why Choose Us" section on Home page with 6 feature cards
- Inline contact section on Home page: WhatsApp CTA, Call button, Google Maps embed, business hours (11 AM–11 PM)
- Chocolate Cakes and Photo Cakes as landing page display categories

### Modify
- Hero headline → "Fresh & Premium Cakes for Every Celebration"
- Hero subheadline → "Order delicious eggless cakes with beautiful packaging at affordable prices"
- Hero primary CTA → "Order on WhatsApp" (links to WhatsApp)
- Home categories grid → show 6 specific: Birthday, Anniversary, Chocolate, Custom, Photo, Pastries
- Business hours → 11 AM to 11 PM (footer, contact section, anywhere shown)

### Remove
- Nothing removed

## Implementation Plan
1. Update Home.tsx: fix hero headline/subheadline/CTA, update categories display to 6 specific ones, add Why Choose Us section, add contact section
2. Update Footer.tsx: fix hours to 11 AM – 11 PM
3. Add Chocolate Cakes and Photo Cakes image references for landing categories
