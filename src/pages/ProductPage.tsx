
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ArnegPage } from "@/components/product-pages/ArnegPage";

const ProductPage = () => {
  const { category } = useParams();
  const [pageTitle, setPageTitle] = useState("");
  
  useEffect(() => {
    // Format the category name for display (capitalize and replace dashes)
    if (category) {
      setPageTitle(category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    }
  }, [category]);
  
  // Render specific page content based on the category or brand
  const renderPageContent = () => {
    switch (category) {
      case "arneg":
        return <ArnegPage />;
      case "commercial-refrigeration":
        // For the commercial refrigeration category, we'll redirect to Arneg for now
        // In a real application, this would show a category overview page
        return <ArnegPage />;
      default:
        return (
          <div className="container mx-auto px-4 py-16">
            <h1 className="section-title mb-8">{pageTitle}</h1>
            <p className="text-lg text-gray-600 mb-6">
              Product details for {pageTitle} will be displayed here.
            </p>
            {category === "oscartielle" && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-700">Oscartielle product information coming soon. Please check back later.</p>
              </div>
            )}
            {category === "intrac" && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-yellow-700">INTRAC product information coming soon. Please check back later.</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {renderPageContent()}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
