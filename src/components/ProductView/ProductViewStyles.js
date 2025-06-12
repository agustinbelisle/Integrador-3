import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  margin-top: 100px;
  padding-bottom: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SidebarWrapper = styled.aside`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 60vh;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
