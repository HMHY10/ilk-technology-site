import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { category } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title mb-8">{category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
      <p className="text-lg text-gray-600">
        Product details for {category} will be displayed here.
      </p>
    </div>
  );
};

export default ProductPage;