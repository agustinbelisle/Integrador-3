import styled from "styled-components";

export const AboutContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 6rem auto;

  h2,
  h1 {
    font-size: 2.2rem;
    color: #333;
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-family: "Exo 2 Bold", sans-serif;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 1rem;
    text-align: center;
    max-width: 600px;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: rgba(0, 119, 255, 0.85);
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-family: 'Exo 2 Bold', sans-serif;
    backdrop-filter: blur(2px);

    &:hover {
      background-color: rgba(0, 119, 255, 1);
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 4px 12px rgba(0, 119, 255, 0.4);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin: 4rem auto;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1.8rem;
    }

    li {
      font-size: 1rem;
    }

    button {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 3rem auto;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    li {
      font-size: 0.95rem;
    }

    button {
      padding: 8px 18px;
      font-size: 0.9rem;
    }
  }
`;
