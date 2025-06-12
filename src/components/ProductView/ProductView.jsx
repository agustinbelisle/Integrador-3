import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../data/products";
import SidebarCategories from "../SidebarCategories/SidebarCategories";
import CardProduct from "../CardProduct/CardProduct";
import ProductModal from "../ProductModal/ProductModal";
import {
  Container,
  SidebarWrapper,
  CardsContainer,
} from "./ProductViewStyles";

const ProductView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleOpenModal = (product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  const allCategories = [...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((p) => selectedCategories.includes(p.category))
      : products;

  return (
    <Container>
      <SidebarWrapper>
        <SidebarCategories
          categories={allCategories}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </SidebarWrapper>

      <CardsContainer>
        {filteredProducts.length === 0 ? (
          <p>No hay productos para las categorías seleccionadas.</p>
        ) : (
          filteredProducts.map((product) => (
            <CardProduct
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              category={product.category}
              onClick={() => handleOpenModal(product)}
            />
          ))
        )}
      </CardsContainer>

      {modalProduct && (
        <ProductModal product={modalProduct} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default ProductView;
