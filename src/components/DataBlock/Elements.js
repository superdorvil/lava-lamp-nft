import styled from 'styled-components';

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 0.4vw;
  border-style: solid;
  border-color: transparent;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${props => props.lightColor}, ${props => props.darkColor}) border-box;
  width: 9.0625vw;
  height: 8.33vw;
  margin-right: .75vw;
  margin-left: .75vw;
  border-radius: 1.5625vw;
  background-color: #000000;
`;

export const TraitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 0.4vw;
  border-style: solid;
  border-color: transparent;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${props => props.lightColor}, ${props => props.darkColor}) border-box;
  padding-top: 1.875vw;
  padding-bottom: 1.5vw;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  margin-right: 1.15vw;
  margin-left: 1.15vw;
  border-radius: 1.5625vw;
`;

export const PowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 0.4vw;
  border-style: solid;
  background-color: transparent;
  padding-top: 1.875vw;
  padding-bottom: 1.5vw;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  margin-right: 1.15vw;
  margin-left: 1.15vw;
  border-radius: 1.5625vw;
`;

export const Data = styled.p`
  font-family: Montserrat;
  font-size: 3vw;
  color: #FFFFFF;
`;

export const DataUnit = styled.p`
  font-size: 1.25vw;
  font-family: Montserrat-bold;
  color: #FFFFFF;
`;
