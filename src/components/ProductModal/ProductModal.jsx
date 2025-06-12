import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalClose,
  ProductImage,
  ProductInfo,
  PriceTag,
  InfoSection,
} from "./ProductModalStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    onClose();
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalClose onClick={onClose}>&times;</ModalClose>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          style={{ width: "100%", maxWidth: "400px", marginBottom: "1rem" }}
        >
          <SwiperSlide>
            <ProductImage
              src={mainImage}
              alt={product.name}
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </SwiperSlide>
        </Swiper>

        {/* Miniaturas */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Miniatura ${i + 1}`}
              width={60}
              height={60}
              onClick={() => setMainImage(img)}
              style={{
                border: mainImage === img ? "2px solid black" : "1px solid gray",
                borderRadius: "5px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Info */}
        <ProductInfo>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <PriceTag>${product.price}</PriceTag>

          <InfoSection>
            <label>
              Cantidad:
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                <button type="button" onClick={handleDecrease}>
                  −
                </button>
                <input type="number" value={quantity} readOnly />
                <button type="button" onClick={handleIncrease}>
                  +
                </button>
              </div>
            </label>

            <button onClick={handleAddToCart}>Agregar al carrito</button>
          </InfoSection>
        </ProductInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductModal;

