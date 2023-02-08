import styled from "styled-components";

export const ButtonStyled = styled.button`
  -webkit-user-select: none;
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  border-radius: 0.5rem;
  border: 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  touch-action: manipulation;
  user-select: none;
  width: 100%;

  &:hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;
