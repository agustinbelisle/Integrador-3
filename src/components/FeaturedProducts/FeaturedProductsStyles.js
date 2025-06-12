import styled from "styled-components";

export const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f9f9f9;
  margin-bottom: 0.2rem;
`;

export const Title = styled.h2`
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: 400;
  font-family: '', sans-serif;
`;

export const ProductsGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`;

export const ViewMoreButton = styled.button`
  background-color: rgba(0, 119, 255, 0.85);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 8px;
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
    font-size: 0.9rem;
  }
`;

