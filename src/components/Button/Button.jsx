import { StyledButton } from "./ButtonStyles";

const Button = ({ text, onClick, variant = "primary", disabled }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
