import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  padding: 30px;
  position: relative;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  &:hover {
    opacity: 0.7;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export const ProductInfo = styled.div`
  text-align: center;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: #333;
    font-weight: 300;
    font-family: "Exo 2", sans-serif;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const PriceTag = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  color: #007bff;
  font-family: "Exo 2", sans-serif;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    width: 100%;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }

  input {
    width: 60px;
    padding: 0.4rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  button {
    width: 60%;
    padding: 0.6rem 2rem;
    font-size: 1.1rem;
    font-weight: 500;
    font-family: "Exo 2", sans-serif;
    background: linear-gradient(135deg, #f6d365 0%, #f0c040 100%);
    color: #333;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease, opacity 0.3s ease;

    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.75;
    }
  }
`;
