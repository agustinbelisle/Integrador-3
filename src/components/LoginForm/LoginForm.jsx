// src/components/LoginForm/LoginForm.jsx
import React, { useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login, register, clearError } from "../../redux/slices/authSlice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  StyledForm,
  StyledField,
  ErrorText,
  Button,
  SecondaryButton,
} from "../Modal/ModalStyles";

const LoginForm = ({ from }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const [isRegisterMode, setIsRegisterMode] = React.useState(false);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("Requerido"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (isRegisterMode) {
      dispatch(register(values));
    } else {
      dispatch(login(values));
    }
    setSubmitting(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from);
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <div>
              <StyledField
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
              <ErrorMessage name="email" component={ErrorText} />
            </div>

            <div>
              <StyledField
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <ErrorMessage name="password" component={ErrorText} />
            </div>

            {error && <ErrorText>{error}</ErrorText>}

            <Button type="submit" disabled={isSubmitting}>
              {isRegisterMode ? "Registrarse" : "Iniciar sesión"}
            </Button>

            <SecondaryButton
              type="button"
              onClick={() => {
                setIsRegisterMode(!isRegisterMode);
                dispatch(clearError());
              }}
            >
              {isRegisterMode
                ? "¿Ya tenés cuenta? Iniciar sesión"
                : "¿No tenés cuenta? Registrate"}
            </SecondaryButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
