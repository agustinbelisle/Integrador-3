import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormContainer,
  InputField,
  SubmitButton,
  ErrorMessage,
} from "./ContactFormStyles";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Correo inválido")
        .required("El correo es obligatorio"),
      message: Yup.string().required("El mensaje no puede estar vacío"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSending(true);
      setSuccessMessage("");

      try {
            const result = await emailjs.send(
              "service_pmsn1hn",    
              "template_lday5k1",    
              {
                name: values.name,
                email: values.email,
                message: values.message,
              },
              "C7edt88N64rDGoUOh"  
            );

        setSuccessMessage("¡Mensaje enviado con éxito!");
        resetForm();
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        setSuccessMessage("Error al enviar el mensaje. Intenta nuevamente.");
      }

      setSending(false);
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputField
        type="text"
        name="name"
        placeholder="Nombre"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name && <ErrorMessage>{formik.errors.name}</ErrorMessage>}

      <InputField
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && <ErrorMessage>{formik.errors.email}</ErrorMessage>}

      <InputField
        as="textarea"
        name="message"
        placeholder="Mensaje"
        value={formik.values.message}
        onChange={formik.handleChange}
      />
      {formik.errors.message && <ErrorMessage>{formik.errors.message}</ErrorMessage>}

      <SubmitButton type="submit" disabled={sending}>
        {sending ? "Enviando..." : "Enviar"}
      </SubmitButton>

      {successMessage && <p>{successMessage}</p>}
    </FormContainer>
  );
};

export default ContactForm;