import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Cookies from "./pages/Cookies";
import WhatsNext from "./pages/WhatsNext";
import Attractions from "./pages/Attraction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/city/:slug" element={<CityPage />} />
          <Route path="/city/:slug/attractions" element={<Attractions />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/whatsnext" element={<WhatsNext/>} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;