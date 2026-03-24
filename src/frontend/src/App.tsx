import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import { CartDrawer } from "./components/CartDrawer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StickyBottomBar } from "./components/StickyBottomBar";
import { CartProvider } from "./context/CartContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { CustomOrder } from "./pages/CustomOrder";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Offers } from "./pages/Offers";
import { Shop } from "./pages/Shop";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBottomBar />
      <CartDrawer />
      <Toaster />
    </CartProvider>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
  validateSearch: (s: Record<string, unknown>) => ({
    category: s.category as string | undefined,
  }),
});
const customOrderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/custom-order",
  component: CustomOrder,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});
const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/offers",
  component: Offers,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  customOrderRoute,
  galleryRoute,
  offersRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
