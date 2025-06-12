import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import products from "../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();

  if (!product) return <p>Producto no encontrado.</p>;

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  // Estilos para botones dorado y azul claro
  const buttonStyle = {
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  };

  const qtyButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#F6D365", // dorado claro
    color: "#444",
    padding: "0.4rem 0.8rem",
    fontSize: "1.2rem",
    userSelect: "none",
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4A90E2", // azul claro
    color: "white",
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
  };

  // Layout condicional segun ancho
  const isMobile576 = windowWidth <= 576;
  const isTablet768 = windowWidth <= 768;

  return (
    <div
      style={{
        display: isMobile576 ? "block" : "flex",
        gap: "2rem",
        padding: "2rem",
        paddingTop: "4rem",
        justifyContent: "center",
        alignItems: isMobile576 ? "center" : "flex-start",
      }}
    >
      {/* Miniaturas */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile576 ? "row" : "column",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: isMobile576 ? "wrap" : "nowrap",
          marginBottom: isMobile576 ? "1rem" : "0",
        }}
      >
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Miniatura ${i + 1}`}
            width={60}
            style={{
              border: mainImage === img ? "2px solid black" : "1px solid gray",
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Imagen principal e info */}
      <div
        style={{
          flex: 1,
          maxWidth: isTablet768 ? "300px" : "600px",
          margin: "0 auto",
          textAlign: isMobile576 ? "center" : "left",
        }}
      >
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          style={{
            maxWidth: "100%",
            marginBottom: "1rem",
          }}
        >
          <SwiperSlide>
            <img
              src={mainImage}
              alt={product.name}
              style={{
                width: "100%",
                objectFit: "contain",
                maxHeight: isTablet768 ? "300px" : "400px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            />
          </SwiperSlide>
        </Swiper>

        <h1 style={{ fontWeight: 500, fontSize: "1.9rem" }}>{product.name}</h1>
        <p>{product.description}</p>
        <p style={{ fontWeight: 500, fontSize: "1.5rem",color:" #007bff", margin: "20px 0 20px 0" }}>${product.price}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
            justifyContent: isMobile576 ? "center" : "flex-start",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            style={{
              ...qtyButtonStyle,
              opacity: quantity <= 1 ? 0.5 : 1,
              pointerEvents: quantity <= 1 ? "none" : "auto",
            }}
          >
            −
          </button>
          <input
            type="number"
            readOnly
            value={quantity}
            style={{
              width: "50px",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              padding: "4px",
              userSelect: "none",
            }}
          />
          <button onClick={handleIncrease} style={qtyButtonStyle}>
            +
          </button>

          <button onClick={handleAddToCart} style={addButtonStyle}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
