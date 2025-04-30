
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package, Refrigerator, ShoppingCart, DoorClosed } from "lucide-react";
import { Link } from "react-router-dom";

export const ArnegPage = () => {
  // Product category data
  const productCategories = [
    {
      id: "refrigerated-cabinets",
      title: "Refrigerated Cabinets",
      description: "Premium display solutions for food retail with optimal temperature control",
      icon: Refrigerator,
      subCategories: [
        { name: "Serve-over Counters", link: "/products/arneg/serve-over-counters" },
        { name: "Multi-deck Cabinets", link: "/products/arneg/multi-deck-cabinets" },
        { name: "Semi-verticals", link: "/products/arneg/semi-verticals" },
        { name: "Combined Islands", link: "/products/arneg/combined-islands" },
        { name: "Frozen Food Islands", link: "/products/arneg/frozen-food-islands" },
        { name: "Promotional Islands", link: "/products/arneg/promotional-islands" },
        { name: "Specialty Cabinets", link: "/products/arneg/specialty-cabinets" },
      ],
      image: "/lovable-uploads/00167a73-438d-4e7e-862d-31ff4ffcbdf2.png"
    },
    {
      id: "refrigeration-systems",
      title: "Refrigeration Systems",
      description: "Efficient and sustainable cooling solutions for commercial applications",
      icon: Package,
      subCategories: [
        { name: "CO₂ Refrigeration Systems", link: "/products/arneg/co2-refrigeration-systems" },
        { name: "Plug-in Systems", link: "/products/arneg/plug-in-systems" },
        { name: "Waterloop Systems", link: "/products/arneg/waterloop-systems" },
      ],
      image: "/lovable-uploads/4d5b979d-be0d-4bee-b458-3d6b9fa1dcb0.png"
    },
    {
      id: "furnishing-solutions",
      title: "Furnishing Solutions",
      description: "Complete retail environment solutions for supermarkets and specialty stores",
      icon: ShoppingCart,
      subCategories: [
        { name: "Check-out Counters", link: "/products/arneg/check-out-counters" },
        { name: "Shelving Systems", link: "/products/arneg/shelving-systems" },
        { name: "Trolleys & Baskets", link: "/products/arneg/trolleys-baskets" },
      ],
      image: "/lovable-uploads/93685d2f-0194-410b-8685-4e05f4c9cb43.png"
    },
    {
      id: "cold-rooms",
      title: "Cold Rooms and Doors",
      description: "Custom storage solutions for commercial and industrial applications",
      icon: DoorClosed,
      subCategories: [
        { name: "Commercial Cold Rooms", link: "/products/arneg/commercial-cold-rooms" },
        { name: "Industrial Cold Rooms", link: "/products/arneg/industrial-cold-rooms" },
        { name: "Cold Room Doors", link: "/products/arneg/cold-room-doors" },
      ],
      image: "/lovable-uploads/d47e8a46-3c00-48b8-8581-29ced4362b4c.png"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: `url(/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png)` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="section-title mb-6">
                Arneg Products
              </h1>
              <p className="text-lg mb-6">
                Discover our complete range of high-quality, Italian-crafted commercial refrigeration solutions
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
              <img 
                src="/lovable-uploads/e63e9e9f-0571-4e05-8534-92afe566ab01.png" 
                alt="Arneg Logo" 
                className="h-24 bg-white/10 p-4 rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction: Who is Arneg? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-6 text-center">Who is Arneg?</h2>
          <h3 className="text-xl md:text-2xl text-center text-primary mb-8 font-heading">
            Craftsmanship and Innovation Define Arneg
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              They are a dynamic international collective proudly established on every continent and a cutting-edge industrial organisation. 
              At their core, they are not just a group of professionals; they are visionaries with an artisan spirit. 
              Their unwavering commitment to excellence fuels the passion for perfecting every detail. 
              They are driven by a relentless pursuit of progress and innovation, ensuring they meet and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Italian Authenticity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-6 text-center">Embrace Italian Authenticity</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              At the heart of their identity lies the rich tapestry of Italian style, elegance, and tradition.
              Italian style is not just a visual aesthetic; it embodies passion, blending heart and mind, intuition with technology, 
              and authenticity with exquisite attention to detail.
            </p>
            <p className="text-lg mb-6">
              This philosophy has been their guiding star since its inception, inspiring them to craft products that 
              seamlessly meld performance with sustainability, all while exuding beauty and innovative design.
            </p>
            <p className="text-lg font-semibold mb-6 text-center">
              Join us in celebrating a legacy of creativity and excellence that defines true Italian authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-6 text-center">Explore Our Product Range</h2>
          <h3 className="text-xl md:text-2xl text-center text-primary mb-12 font-heading">
            Sectors We Cater To As An Arneg Partner
          </h3>
          
          <div className="grid grid-cols-1 gap-12">
            {productCategories.map((category, index) => (
              <div key={category.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
                <div className="md:w-1/2">
                  <Card className="overflow-hidden h-full border-none shadow-md">
                    <div className="relative h-64">
                      <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url(${category.image})` }}
                      >
                        <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <category.icon className="h-24 w-24 text-white" />
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-bold mb-4 text-primary flex items-center">
                    <category.icon className="h-6 w-6 mr-2 text-accent" />
                    {category.title}
                  </h4>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.subCategories.map((subcat, idx) => (
                      <Link 
                        key={idx} 
                        to={subcat.link}
                        className="block py-2 px-4 rounded-md transition-colors hover:bg-gray-100 flex items-center"
                      >
                        <ChevronRight className="h-5 w-5 text-accent mr-2" />
                        <span>{subcat.name}</span>
                      </Link>
                    ))}
                  </div>
                  
                  <Button className="mt-6 bg-accent hover:bg-accent/90" asChild>
                    <Link to={`/products/arneg/${category.id}`}>
                      View All {category.title}
                    </Link>
                  </Button>
                </div>
                
                {/* Add a separator except for the last item */}
                {index < productCategories.length - 1 && (
                  <Separator className="w-full mt-4 mb-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Need Help Choosing the Right Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to assist you in finding the perfect Arneg product for your specific needs.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact Our Team
          </Button>
        </div>
      </section>
    </>
  );
};
