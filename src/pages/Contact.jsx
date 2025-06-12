import ContactForm from "../components/ContactForm/ContactForm";
import styled from "styled-components";
import { Mail, Phone, MapPin } from "lucide-react";

const PageContainer = styled.main`
  margin-top: 6rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
  color: #555;
`;

const InfoSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Contact = () => {
  return (
    <PageContainer>
      <Title>
        <Mail size={28} />
        Contacto
      </Title>
      <Description>
        ¿Tenés alguna pregunta, sugerencia o consulta? Completá el formulario y te responderemos lo antes posible.
      </Description>
      <ContactForm />
      <InfoSection>
        <div>
          <Mail size={20} /> contacto@tutienda.com
        </div>
        <div>
          <Phone size={20} /> +54 9 11 1234 5678
        </div>
        <div>
          <MapPin size={20} /> Buenos Aires, Argentina
        </div>
      </InfoSection>
    </PageContainer>
  );
};

export default Contact;
