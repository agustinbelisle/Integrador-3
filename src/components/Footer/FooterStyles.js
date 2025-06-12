import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem 4rem;
  margin-top: auto;
  width: 100%;
  min-height: 100px;
  box-sizing: border-box;

  @media (max-width: 576px) {
    padding: 1rem 2rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  min-width: 120px;

  img {
    width: 120px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  gap: 6rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #ccc;
  }

  a {
    color: #aaa;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 576px) {
    h4 {
      font-size: 1rem;
    }

    a {
      font-size: 0.9rem;
    }
  }
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

  a {
    color: #aaa;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    gap: 0.8rem;
  }
`;
