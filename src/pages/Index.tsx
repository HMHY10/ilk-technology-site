import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Excellence } from "@/components/Excellence";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Introduction } from "@/components/Introduction";
import { Products } from "@/components/Products";
import { ProductSelection } from "@/components/ProductSelection";
import { Video } from "@/components/Video";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Introduction />
      <Services />
      <Products />
      <ProductSelection />
      <Excellence />
      <Video />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;