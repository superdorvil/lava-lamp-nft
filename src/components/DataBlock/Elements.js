import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-style: solid;
  border-color: transparent;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${props => props.lightColor}, ${props => props.darkColor}) border-box;
  height: 124px;
  width: 124px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 30px;
  background-color: #000000;
  margin-right: 16px;
  margin-left: 16px;
  @media screen and (max-width: 800px) {
    border-radius: 20px;
    height: 100px;
    width: 100px;
    margin-right: 12px;
    margin-left: 12px;
  }
  @media screen and (max-width: 600px) {
    border-radius: 16px;
    height: 80px;
    width: 80px;
    margin-right: 12px;
    margin-left: 12px;
  }
  @media screen and (max-width: 480px) {
    border-radius: 12px;
    height: 60px;
    width: 60px;
    margin-right: 6px;
    margin-left: 6px;
  }
`;

export const Data = styled.p`
  font-family: Montserrat;
  font-size: 40px;
  color: #FFFFFF;
  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const DataUnit = styled.p`
  font-size: 20px;
  font-family: Montserrat-bold;
  color: #FFFFFF;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;
