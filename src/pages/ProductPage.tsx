
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
  
  // Render specific page content based on the category
  const renderPageContent = () => {
    switch (category) {
      case "arneg":
        return <ArnegPage />;
      default:
        return (
          <div className="container mx-auto px-4 py-16">
            <h1 className="section-title mb-8">{pageTitle}</h1>
            <p className="text-lg text-gray-600">
              Product details for {category} will be displayed here.
            </p>
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
