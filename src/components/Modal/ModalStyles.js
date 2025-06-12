import styled from "styled-components";
import { Form, Field } from "formik";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;


const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  width: 320px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledField = styled(Field)`
  width: 100%; // ✅ Esto hace que ocupe todo el ancho disponible
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;


const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #f0c040;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d1a82f;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #eee;
  color: #333;

  &:hover {
    background-color: #ccc;
  }
`;

// ✅ Exportar todo
export {
  ModalOverlay,
  ModalContainer,
  StyledForm,
  StyledField,
  ErrorText,
  Button,
  SecondaryButton
};
