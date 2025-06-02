
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import { ArnegCategoryPage } from "./components/product-pages/ArnegCategoryPage";
import { ArnegRefrigeratedCabinetsPage } from "./components/product-pages/ArnegRefrigeratedCabinetsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path="/products/arneg/:categoryId" element={<ArnegCategoryPage />} />
          <Route path="/products/arneg/refrigerated-cabinets" element={<ArnegRefrigeratedCabinetsPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
