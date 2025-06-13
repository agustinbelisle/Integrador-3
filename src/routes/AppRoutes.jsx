import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import CheckoutPage from "../pages/Checkout";
import CartPage from "../pages/Cart";
import Login from "../pages/Login";  
import PrivateRoute from "./PrivateRoute";
import ProductPage from "../pages/ProductPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} /> 
      
      <Route 
        path="/checkout" 
        element={<PrivateRoute element={<CheckoutPage />} />} 
      />

      <Route path="/producto/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
