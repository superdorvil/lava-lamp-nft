import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const Image = styled.img`
  height: 342px;
  width: 555px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 60px;
`;

export const Divider = styled.div`
  height: 2px;
  background-color: #FFFFFF;
`;

export const Header = styled.p`
  margin-top: 0px;
  margin-bottom:18px;
  font-size: 36px;
  font-family: Bangers;
  font-weight: 'bold';
  color: #FFFFFF;
`;

export const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 18px;
  width: 555px;
  font-size: 14px;
  font-family: Montserrat-Bold;
  color: #FFFFFF;
`;

export const NormalText = styled.p`
  display: inline;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  font-family: Montserrat;
  color: #FFFFFF;
`;

export const BoldText = styled.p`
  display: inline;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  font-family: Montserrat-Bold;
  color: #FFFFFF;
`;

export const ItalicsText = styled.p`
  display: inline;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 12px;
  font-family: Montserrat-Italic;
  color: #FFFFFF;
`;

export const InfoContainer = styled.li`
  width: 555px;
  color: white;
`;

export const UnorderedList = styled.ul``;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;
