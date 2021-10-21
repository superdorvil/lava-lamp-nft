import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #000000;
  padding-bottom: 120px;
`;

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  height: 17.5vh;
  width: 22vw;
`;

export const Header = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 36px;
  font-family: Bangers;
  font-weight: 'bold';
  color: #FFFFFF;
`;

export const Info = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  width: 22vw;
  font-size: 14px;
  font-family: Montserrat;
  color: #FFFFFF;
`;
