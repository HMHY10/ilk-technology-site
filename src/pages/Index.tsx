import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Excellence } from "@/components/Excellence";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Excellence />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;