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
  align-items: flex-start; 
  z-index: 1000;
  overflow-y: auto;
  padding-bottom: 40px; 

  @media (max-width: 576px) {
    padding-bottom: 20px; 
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 510px; 
  width: 76.5%;    
  padding: 25.5px; 
  margin-top: 80px;  
  position: relative;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    max-width: 85%; 
    padding: 15px;  
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 8px; 
  right: 12.75px; 
  background: transparent;
  border: none;
  font-size: 2.2rem; 
  cursor: pointer;
  color: #333;

  @media (max-width: 576px) {
    font-size: 1.8rem; 
    top: 5px; 
    right: 10px; 
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ProductImage = styled.img`
  max-height: 425px; 
  width: auto;
  max-width: 85%;  
  object-fit: contain;
  display: block;
  margin: 0 auto;

  @media (max-width: 576px) {
    max-height: 300px; 
  }
`;

export const ProductInfo = styled.div`
  text-align: center;

  h2 {
    font-size: 1.53rem; 
    margin-bottom: 0.68rem; 
    color: #333;
    font-weight: 500;
    font-family: "Exo 2", sans-serif;

    @media (max-width: 576px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 0.85rem; 
    color: #555;
    margin-bottom: 0.85rem; 
    font-family: "Roboto", sans-serif;

    @media (max-width: 576px) {
      font-size: 0.75rem; 
    }
  }
`;

export const PriceTag = styled.span`
  font-size: 1.3rem; 
  font-weight: 500;
  color: #007bff;
  font-family: "Exo 2", sans-serif;

  @media (max-width: 576px) {
    font-size: 1.1rem; 
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem; 
  margin-top: 1.275rem; 
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.1rem; 
    width: 100%;
    align-items: center;
    font-family: "Roboto", sans-serif;

    @media (max-width: 576px) {
      font-size: 0.9rem; 
    }
  }

  input {
    width: 51px; 
    padding: 0.34rem; 
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    font-size: 1.1rem; 
    font-family: "Roboto", sans-serif;

    @media (max-width: 576px) {
      font-size: 0.9rem; 
      width: 40px; 
    }
  }

  button {
    width: 51%;
    padding: 0.51rem 1.7rem; 
    font-size: 1.1rem; 
    font-weight: 500;
    font-family: "Exo 2", sans-serif;
    background: linear-gradient(135deg, #f6d365 0%, #f0c040 100%);
    color: #333;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease, opacity 0.3s ease;

    @media (max-width: 576px) {
      font-size: 0.9rem; 
      padding: 0.4rem 1.2rem; 
    }

    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 0.75;
    }
  }
`;

export const ViewMoreButton = styled.button`
  width: 51%;
  padding: 0.51rem 1.7rem;  
  font-size: 1.1rem; 
  font-weight: 500;
  font-family: "Exo 2", sans-serif;
  background-color: #007bff; 
  color: white; 
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease, opacity 0.3s ease;

  @media (max-width: 576px) {
    font-size: 0.9rem; 
    padding: 0.4rem 1.2rem; 
  }

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.75;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 425px; 
  height: 100%;

  @media (max-width: 576px) {
    max-height: 300px;
  }
`;

