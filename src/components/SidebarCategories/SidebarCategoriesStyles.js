import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 220px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: "Segoe UI", sans-serif;
  font-weight: 500;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: #333;
    font-weight: 500;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
    padding: 6px;
    border-radius: 6px;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  @media (max-width: 1024px) {
    width: 320px;
    margin: 0 auto 2rem auto; /* centrar y separar abajo */
    padding: 20px 25px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: none;
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const CategoriesWrapper = styled.div`
  display: grid;
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;



export const CheckboxInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

export const CategoryLabelWrapper = styled.span`
  font-size: 1rem;
  color: #555;

  @media (max-width: 1024px) {
    width: 120px; /* Para que queden dos columnas con espacio */
    text-align: left;
  }
`;
