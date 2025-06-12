import Checkout from "../components/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <h1
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontWeight: 400
        }}
      >
        Finalizar Compra
      </h1>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Checkout />
      </div>
    </>
  );
};

export default CheckoutPage;
