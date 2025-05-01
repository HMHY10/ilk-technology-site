
import { HeroSection } from "./arneg/HeroSection";
import { IntroductionSection } from "./arneg/IntroductionSection";
import { AuthenticitySection } from "./arneg/AuthenticitySection";
import { ProductCategories } from "./arneg/ProductCategories";
import { CallToAction } from "./arneg/CallToAction";

export const ArnegPage = () => {
  return (
    <>
      <HeroSection 
        backgroundImage="/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png"
        title="Arneg Products"
        description="Discover our complete range of high-quality, Italian-crafted commercial refrigeration solutions"
        logoImage="/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png"
      />

      <IntroductionSection 
        title="Who is Arneg?"
        subtitle="Craftsmanship and Innovation Define Arneg"
        description="They are a dynamic international collective proudly established on every continent and a cutting-edge industrial organisation. At their core, they are not just a group of professionals; they are visionaries with an artisan spirit. Their unwavering commitment to excellence fuels the passion for perfecting every detail. They are driven by a relentless pursuit of progress and innovation, ensuring they meet and exceed your expectations."
      />

      <AuthenticitySection 
        title="Embrace Italian Authenticity"
        paragraphs={[
          "At the heart of their identity lies the rich tapestry of Italian style, elegance, and tradition. Italian style is not just a visual aesthetic; it embodies passion, blending heart and mind, intuition with technology, and authenticity with exquisite attention to detail.",
          "This philosophy has been their guiding star since its inception, inspiring them to craft products that seamlessly meld performance with sustainability, all while exuding beauty and innovative design.",
          "Join us in celebrating a legacy of creativity and excellence that defines true Italian authenticity."
        ]}
      />

      <ProductCategories />

      <CallToAction 
        title="Need Help Choosing the Right Solution?"
        description="Our team of experts is ready to assist you in finding the perfect Arneg product for your specific needs."
        buttonText="Contact Our Team"
      />
    </>
  );
};
