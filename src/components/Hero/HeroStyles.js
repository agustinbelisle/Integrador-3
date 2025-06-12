import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  color: white;
  text-align: center;
    margin-top: 0.6rem; /* <-- agregá esta línea o modificá el valor */

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide {
    width: 100%;
    min-height: 600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: bold;
    margin-bottom: 2rem;
  }

  p {
    font-size: clamp(1.1rem, 3vw, 1.7rem);
    margin-bottom: 2.5rem;
    max-width: 700px;
  }

button {
  background-color: rgba(240, 192, 64, 0.85); /* Transparente */
  color: #333;
  padding: 1.2rem 2.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;

  &:hover {
    background-color: rgba(240, 192, 64, 1);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.97);
  }
}


  .swiper-pagination {
    bottom: 0 !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 40px;
    height: 40px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }

  @media (max-width: 768px) {
    button {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
      margin-bottom: 1.5rem;
    }


  }
`;
