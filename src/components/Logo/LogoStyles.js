
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: inline-block;

  &:hover,
  &:focus,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

export const LogoText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  background: linear-gradient(45deg, #ffd700, #ffcc00, #ffb700, #fff380, #ffe135);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
  margin: 0;

  @keyframes shine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;
