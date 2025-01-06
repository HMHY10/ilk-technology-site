import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";

const ProductPage = () => {
  const { category } = useParams();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="section-title mb-8">{category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
          <p className="text-lg text-gray-600">
            Product details for {category} will be displayed here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;