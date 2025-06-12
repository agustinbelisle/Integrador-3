import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const InputField = styled.input`
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Exo 2 Bold', sans-serif;
  width: 100%;
  resize: none;

  &:focus {
    outline: none;
    border-color: #f0c040;
    box-shadow: 0 0 0 2px rgba(240, 192, 64, 0.2);
  }

  /* Si es un textarea */
  &[name="message"] {
    min-height: 120px;
    line-height: 1.5;
  }
`;

export const SubmitButton = styled.button`
  background-color: #f0c040;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Exo 2 Bold', sans-serif;

  &:hover {
    background-color: #e6b938;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #d9534f;
  font-size: 0.9rem;
  margin-top: -0.8rem;
  margin-bottom: -0.5rem;
`;

