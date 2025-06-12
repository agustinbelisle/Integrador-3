import {
  CartContainer,
  ProductList,
  ProductItem,
  ProductInfo,
  Quantity,
  QuantityButton,
  RemoveButton,
  ButtonsRow,
  ClearCartButton,
  CheckoutButton,
  TotalAmount,
} from "./CartStyles";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, removeOneItem, clearCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: "/checkout" } });
    }
  };

  return (
    <CartContainer>
      <h2>Carrito de Compras</h2>

      <ProductList>
        {cartItems.length === 0 && <p>Tu carrito está vacío.</p>}

        {cartItems.map((product) => (
          <ProductItem key={product.id}>
            <ProductInfo>
              {product.name}
              <Quantity>
                <QuantityButton onClick={() => dispatch(removeOneItem(product.id))}>-</QuantityButton>
                {product.quantity}
                <QuantityButton onClick={() => dispatch(addToCart({ product, quantity: 1 }))}>+</QuantityButton>
              </Quantity>
            </ProductInfo>

            <RemoveButton onClick={() => dispatch(removeItem(product.id))}>Eliminar</RemoveButton>
          </ProductItem>
        ))}
      </ProductList>

      <TotalAmount>Total: ${total.toFixed(2)}</TotalAmount>

      <ButtonsRow>
        <ClearCartButton onClick={() => dispatch(clearCart())}>Vaciar carrito</ClearCartButton>
        <CheckoutButton onClick={handleCheckout}>Ir al checkout</CheckoutButton>
      </ButtonsRow>
    </CartContainer>
  );
};

export default Cart;

