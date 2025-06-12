import LoginForm from "../components/LoginForm/LoginForm";
import { useLocation } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  // Si viene de checkout, location.state?.from tendrá "/checkout"
  const from = location.state?.from || "/";

  return (
    <div style={{ marginTop: "80px", display: "flex", justifyContent: "center" }}>
      <LoginForm from={from} />
    </div>
  );
};

export default LoginPage;
