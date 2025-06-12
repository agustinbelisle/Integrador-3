import styled, { createGlobalStyle } from "styled-components";

export const ProductInfo = styled.div`
  font-size: 1rem;
`;

export const TotalAmount = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #007bff;
  margin-top: 20px;
`;

export const ConfirmButton = styled.button`
  margin-top: 30px;
  padding: 12px 24px;
  background-color: rgba(0, 119, 255, 0.85);
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: 'Exo 2 Bold', sans-serif;
  backdrop-filter: blur(2px);

  &:hover {
    background-color: rgba(0, 119, 255, 1);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 4px 12px rgba(0, 119, 255, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 8px 18px;
    margin-bottom: 40px;
  }
`;

export const PaymentOptions = styled.div`
  margin-top: 20px;
`;

export const PaymentOptionItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.active ? "#f5faff" : "transparent")};
  border-left: ${(props) => (props.active ? "4px solid #007bff" : "4px solid transparent")};
  padding-left: 16px;
  border-radius: 5px;

  &:last-child {
    border-bottom: none;
  }

  transition: background-color 0.2s ease, border-left 0.2s ease;
`;

export const PaymentLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input {
    margin-right: 10px;
  }

  svg {
    font-size: 2rem;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;
  margin-top: 10px;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 90%;
    max-width: 300px;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  margin-top: 40px;

  @media (max-width: 640px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

@media (max-width: 480px) {
  background: none;
  padding: 0;
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: none;
  text-align: center;
}


`;

export const RightPanel = styled.div`
  width: 350px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }

@media (max-width: 480px) {
  background: none;
  padding: 0;
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: none;
  text-align: center;
}



`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;

  flex-grow: 1;
  overflow-y: auto;
  max-height: 300px;
`;

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;



// NUEVO: Estilos responsivos para tipografía general en móviles
export const ResponsiveText = createGlobalStyle`
  @media (max-width: 480px) {
    body {
      font-size: 16px;
    }
  }
`;
