import { useState } from "react";
import { useSelector } from "react-redux";
import {
  CheckoutContainer,
  LeftPanel,
  RightPanel,
  ProductList,
  ProductItem,
  ProductImage,
  TotalAmount,
  ConfirmButton,
  PaymentOptions,
  PaymentLabel,
  CardDetails,
  PaymentOptionItem,
  ResponsiveText
} from "./CheckoutStyles";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaGoogle } from "react-icons/fa";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvc: ""
  });

  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    alert(`Compra confirmada con método de pago: ${paymentMethod.toUpperCase()}`);
  };

  const isCardMethod = paymentMethod === "visa" || paymentMethod === "mastercard";

  return (
    <>
      <ResponsiveText />
      <CheckoutContainer>
        <LeftPanel>
          <h2>Resumen de Compra</h2>
          <ProductList>
            {cartItems.map((item) => (
              <ProductItem key={item.id}>
                <ProductImage
                  src={item.images?.[0] || "/assets/images/default.png"}
                  alt={item.name}
                />
                <div>
                  {item.name} x{item.quantity} - ${item.price * item.quantity}
                </div>
              </ProductItem>
            ))}
          </ProductList>
          <TotalAmount>Total: ${total.toFixed(2)}</TotalAmount>
        </LeftPanel>

        <RightPanel>
          <h4>Método de Pago</h4>
          <PaymentOptions>
            <PaymentOptionItem active={isCardMethod}>
              <PaymentLabel>
                <input
                  type="radio"
                  name="payment"
                  value="visa"
                  checked={paymentMethod === "visa"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <FaCcVisa /> <FaCcMastercard /> Tarjeta de crédito
              </PaymentLabel>

              {isCardMethod && (
                <CardDetails>
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    value={cardInfo.number}
                    onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Fecha de vencimiento (MM/AA)"
                    value={cardInfo.expiry}
                    onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="CVV / CVC"
                    value={cardInfo.cvc}
                    onChange={(e) => setCardInfo({ ...cardInfo, cvc: e.target.value })}
                  />
                </CardDetails>
              )}
            </PaymentOptionItem>

            <PaymentOptionItem active={paymentMethod === "gpay"}>
              <PaymentLabel>
                <input
                  type="radio"
                  name="payment"
                  value="gpay"
                  checked={paymentMethod === "gpay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <FaGoogle /> Google Pay
              </PaymentLabel>
            </PaymentOptionItem>

            <PaymentOptionItem active={paymentMethod === "paypal"}>
              <PaymentLabel>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <FaCcPaypal /> PayPal
              </PaymentLabel>
            </PaymentOptionItem>
          </PaymentOptions>

          <ConfirmButton onClick={handleConfirm}>
            Confirmar compra
          </ConfirmButton>
        </RightPanel>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
