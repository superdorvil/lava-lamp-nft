import styled from 'styled-components';

export const StyledButton = styled.button`
  border-width: 4px;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: Bangers;
  cursor: pointer;
  background: transparent;
  font-size: 48px;
  padding: 12px;
  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
  @media screen and (max-width: 800px) {
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
    color: #000000;
  }
`;
