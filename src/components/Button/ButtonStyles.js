import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  ${({ variant }) => {
    switch (variant) {
      case "secondary":
        return `background: #555; color: white;`;
      case "danger":
        return `background: #e74c3c; color: white;`;
      default:
        return `background: #007bff; color: white;`;
    }
  }}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;
