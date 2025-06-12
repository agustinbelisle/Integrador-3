// src/Components/LoginForm/LoginFormStyles.js
import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledField = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const ToggleButton = styled.button`
  margin-top: 1rem;
  background: transparent;
  color: #0077cc;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;
