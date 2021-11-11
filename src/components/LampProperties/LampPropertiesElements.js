import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #000000;
  padding-bottom: 60px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 60px;
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 60px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding-bottom: 60px;
  }
`;

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 70px;
  margin-left: 30px;
  margin-right: 30px;
  height: 145px;
  width: 300px;
  @media screen and (max-width: 1024px) {
    margin-top: 70px;
    margin-left: 20px;
    margin-right: 20px;
    height: 110px;
    width: 225px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 55px;
    margin-left: 16px;
    margin-right: 16px;
    height: 80px;
    width: 165px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
    height: 162px;
    width: 340px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
    height: 140px;
    width: 290px;
  }
`;

export const Header = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 36px;
  font-family: Bangers;
  font-weight: 'bold';
  color: #FFFFFF;
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 36px;
  }
`;

export const Info = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  width: 300px;
  font-size: 14px;
  font-family: Montserrat;
  color: #FFFFFF;
  @media screen and (max-width: 1024px) {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 225px;
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 165px;
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 340px;
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 290px;
    font-size: 12px;
  }
`;
