
import { Separator } from "@/components/ui/separator";
import { ProductCategory, ProductCategoryProps } from "./ProductCategory";
import { Refrigerator, Package, ShoppingCart, DoorClosed } from "lucide-react";

export const ProductCategories = () => {
  // Product category data
  const productCategories: ProductCategoryProps[] = [
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-6 text-center">Explore Our Product Range</h2>
        <h3 className="text-xl md:text-2xl text-center text-primary mb-12 font-heading">
          Sectors We Cater To As An Arneg Partner
        </h3>
        
        <div className="grid grid-cols-1 gap-12">
          {productCategories.map((category, index) => (
            <div key={category.id}>
              <ProductCategory {...category} isReversed={index % 2 !== 0} />
              
              {/* Add a separator except for the last item */}
              {index < productCategories.length - 1 && (
                <Separator className="w-full mt-12 mb-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
