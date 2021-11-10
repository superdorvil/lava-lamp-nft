import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const LampContainer = styled.div`
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const LampImage = styled.img`
  height: 15vw;
  width: 15vw;
`;
