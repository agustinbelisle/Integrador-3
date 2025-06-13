import styled from "styled-components";

export const Card = styled.div`
  width: 220px;
  height: 380px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background-color: #f5f5f5;
  }

  .info {
    padding: 15px;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
    }

    span {
      font-weight: 500; 
      font-size: 1.1rem;
      color: #007bff;
    }
  }
`;
