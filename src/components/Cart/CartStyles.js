import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
    font-family: 'Exo 2 Bold', sans-serif;
    color: #333;
  }
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  max-height: 300px;
  overflow-y: auto;
`;

export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const Quantity = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
  user-select: none;
`;

export const QuantityButton = styled.button`
  background-color: rgba(0, 123, 255, 0.85);
  border: none;
  color: white;
  font-weight: bold;
  padding: 6px 12px;
  margin: 0 4px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  font-family: 'Exo 2 Bold', sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(0, 123, 255, 1);
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.97);
  }
`;


export const RemoveButton = styled.button`
  background-color: rgba(240, 192, 64, 0.85);
  border: none;
  color: #333;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  font-family: 'Exo 2 Bold', sans-serif;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  margin-left: 10px;

  &:hover {
    background-color: rgba(240, 192, 64, 1);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.96);
  }
`;


export const TotalAmount = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 20px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

export const ClearCartButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  background-color: rgba(0, 123, 255, 0.85); 
  color: white;
  border: none;
  font-weight: 400;
  font-size: 1.1rem;
  font-family: 'Exo 2 Bold', sans-serif;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(0, 123, 255, 1);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const CheckoutButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  background-color: rgba(240, 192, 64, 0.85); 
  color: #333;
  border: none;
  font-weight: 400;
  font-size: 1.1rem;
  font-family: 'Exo 2 Bold', sans-serif;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(240, 192, 64, 1);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }
`;
