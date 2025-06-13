import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import CardProduct from "../CardProduct/CardProduct";
import ProductModal from "../ProductModal/ProductModal";
import {
  FeaturedSection,
  ProductsGrid,
  ViewMoreButton,
  Title,
} from "./FeaturedProductsStyles";

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const featured = products
    .filter(product =>
      ["Notebooks", "Smartphones", "Hogar", "Audio"].includes(product.category)
    )
    .slice(0, 4);

  return (
    <FeaturedSection>
      <Title>Productos Destacados</Title>

      <ProductsGrid>
        {featured.map(product => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={{ cursor: "pointer" }}
          >
            <CardProduct
              name={product.name}
              price={product.price}
              image={
                Array.isArray(product.images)
                  ? product.images[0]
                  : product.image || "" 
              }
            />
          </div>
        ))}
      </ProductsGrid>

      <ViewMoreButton onClick={() => navigate("/products")}>
        Más productos...
      </ViewMoreButton>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </FeaturedSection>
  );
};

export default FeaturedProducts;
