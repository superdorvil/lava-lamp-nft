import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    margin-top: 42px;
    margin-bottom: 70px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 42px;
    margin-bottom: 70px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 24px;
    margin-bottom: 70px;
  }
`;

export const Image = styled.img`
  height: 280px;
  width: 450px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 60px;
  @media screen and (max-width: 1024px) {
    margin-top: 70px;
    margin-bottom: 0px;
    margin-right: 0px;
    height: 340px;
    width: 550px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 70px;
    margin-bottom: 0px;
    margin-right: 0px;
    height: 275px;
    width: 450px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 70px;
    margin-bottom: 0px;
    margin-right: 0px;
    height: 180px;
    width: 290px;
  }
`;

export const Divider = styled.div`
  height: 2px;
  background-color: #FFFFFF;
`;

export const Header = styled.p`
  margin-bottom:18px;
  font-size: 36px;
  font-family: Bangers;
  font-weight: 'bold';
  color: #FFFFFF;
  margin-right: 30px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 18px;
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    /*margin-bottom: 16px;
    font-size: 24px;*/
  }
  @media screen and (max-width: 480px) {

  }
`;

export const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 18px;
  width: 450px;
  font-size: 14px;
  font-family: Montserrat-Bold;
  color: #FFFFFF;
  @media screen and (max-width: 1024px) {
    margin-bottom: 18px;
    width: 550px;
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 18px;
    width: 450px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 18px;
    width: 290px;
    font-size: 14px;
  }
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
  margin-left: 20px;
  width: 450px;
  color: white;
  @media screen and (max-width: 1024px) {
    width: 550px;
  }
  @media screen and (max-width: 600px) {
    width: 450px;
  }
  @media screen and (max-width: 480px) {
    width: 290px;
  }
`;

export const UnorderedList = styled.ul``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 14px;
`;
