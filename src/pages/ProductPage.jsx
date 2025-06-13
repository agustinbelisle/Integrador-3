import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import products from "../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();

  if (!product) return <p>Producto no encontrado.</p>;

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [hoveredButton, setHoveredButton] = useState(null);
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
    toast.success(`${quantity} × ${product.name} agregado al carrito`, {
      icon: "🛒",
    });
  };

  const buttonStyle = {
    cursor: "pointer",
    borderRadius: "6px",
    border: "none",
    fontWeight: "500",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const qtyButtonStyle = (isHovered) => ({
    ...buttonStyle,
    backgroundColor: isHovered ? "#f7c654" : "#F6D365",
    color: "#444",
    padding: "0.4rem 0.8rem",
    fontSize: "1.2rem",
  });

  const addButtonStyle = (isHovered) => ({
    ...buttonStyle,
    backgroundColor: isHovered ? "#357bd8" : "#4A90E2",
    color: "white",
    padding: "0.6rem 1.2rem",
    fontSize: "1rem",
  });

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

    <p
      style={{
        fontSize: "1.2rem",
        color: "#666",
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      {product.description}
    </p>

    <p
      style={{
        fontWeight: 500,
        fontSize: "1.5rem",
        color: "#007bff",
        marginBottom: "20px",
      }}
    >
      ${product.price}
    </p>


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
              ...qtyButtonStyle(hoveredButton === "decrease"),
              opacity: quantity <= 1 ? 0.5 : 1,
              pointerEvents: quantity <= 1 ? "none" : "auto",
            }}
            onMouseEnter={() => setHoveredButton("decrease")}
            onMouseLeave={() => setHoveredButton(null)}
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

          <button
            onClick={handleIncrease}
            style={qtyButtonStyle(hoveredButton === "increase")}
            onMouseEnter={() => setHoveredButton("increase")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            +
          </button>

          <button
            onClick={handleAddToCart}
            style={addButtonStyle(hoveredButton === "add")}
            onMouseEnter={() => setHoveredButton("add")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
