
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LayoutGrid } from "@/components/ui/layout-grid";

const MultiDoorCabinet = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Multi-Door Refrigerated Display Cabinet
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Premium multi-door refrigerated display cabinet designed for optimal food preservation and visual appeal. Perfect for retail environments.
      </p>
    </div>
  );
};

const VerticalDisplay = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Vertical Refrigerated Display
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Elegant vertical refrigerated display with excellent energy efficiency and modern design for commercial spaces.
      </p>
    </div>
  );
};

const CommercialRefrigerator = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Commercial Refrigerator
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Heavy-duty commercial refrigerator built for high-volume operations with reliable temperature control.
      </p>
    </div>
  );
};

const GlassDoorRefrigerator = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Glass Door Refrigerator
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Stylish glass door refrigerator offering excellent product visibility while maintaining optimal cooling performance.
      </p>
    </div>
  );
};

const CurvedGlassDisplay = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Curved Glass Display
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Sophisticated curved glass display cabinet that enhances product presentation with panoramic viewing angles.
      </p>
    </div>
  );
};

const OpenFrontDisplay = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Open Front Display
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Open front refrigerated display for easy customer access while maintaining consistent cooling temperatures.
      </p>
    </div>
  );
};

const IslandRefrigerator = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Island Refrigerator
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Central island refrigerator perfect for large retail spaces, providing 360-degree product access.
      </p>
    </div>
  );
};

const UprightShowcase = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Upright Showcase
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Premium upright showcase with advanced cooling technology and elegant design for premium retail environments.
      </p>
    </div>
  );
};

const DeliCounterDisplay = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Deli Counter Display
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Professional deli counter display designed for fresh food presentation with easy access for staff and customers.
      </p>
    </div>
  );
};

const refrigeratedCabinetsCards = [
  {
    id: 1,
    content: <MultiDoorCabinet />,
    className: "md:col-span-2",
    thumbnail: "/lovable-uploads/9b00431c-c58d-4449-9d3f-4b1d8975b460.png",
  },
  {
    id: 2,
    content: <VerticalDisplay />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <CommercialRefrigerator />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <GlassDoorRefrigerator />,
    className: "md:col-span-2",
    thumbnail: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <CurvedGlassDisplay />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <OpenFrontDisplay />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    content: <IslandRefrigerator />,
    className: "md:col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    content: <UprightShowcase />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    content: <DeliCounterDisplay />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const ArnegRefrigeratedCabinetsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button variant="outline" className="mb-4 bg-white text-primary border-primary hover:bg-primary hover:text-white" asChild>
              <Link to="/products/arneg">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Arneg Products
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4 text-primary">Refrigerated Cabinets</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our complete range of premium refrigerated display cabinets designed for optimal food preservation and visual appeal. Click on each product to see detailed information.
            </p>
          </div>
          
          <div className="h-[80vh] w-full border border-gray-200 rounded-lg overflow-hidden">
            <LayoutGrid cards={refrigeratedCabinetsCards} />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Click on each product to see detailed information. Each cabinet is designed with Italian craftsmanship and cutting-edge technology.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
