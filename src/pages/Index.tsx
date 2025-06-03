
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Excellence } from "@/components/Excellence";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Introduction } from "@/components/Introduction";
import { Products } from "@/components/Products";
import { ProductCategories } from "@/components/ProductCategories";
import { Video } from "@/components/Video";
import { Footer } from "@/components/Footer";
import { SearchProvider } from "@/contexts/SearchContext";

const Index = () => {
  return (
    <SearchProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Introduction />
        <Services />
        <Products />
        <ProductCategories />
        <Excellence />
        <Video />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </SearchProvider>
  );
};

export default Index;
