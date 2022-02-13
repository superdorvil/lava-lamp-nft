import styled from 'styled-components';
import {COLORS} from '../../constants';

export const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 7vw;
  margin-bottom: 3vw;
`;

export const Container = styled.div`
  width: 56vw;
  height: 13vw;
  border-width: .5vw;
  border-style: solid;
  border-color: transparent;
  border-radius: 15vw;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, #25BC46, #71FF30) border-box;
  background-color: purple;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  font-family: Bangers;
  font-size: 3.65vw;
  color: #FFFFFF;
`;

export const Description = styled.p`
  padding-top: .175vw;
  padding-bottom: .175vw;
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  text-align: center;
  font-family: Montserrat;
  font-size: 1.15vw;
  width: 38vw;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  display: flex;
  justify-content: center;
  font-family: Montserrat-Bold;
  font-size: 1.25vw;
  color: #FFFFFF;
`;

export const MetaHero = styled.img`
  height: 10vw;
  width: 10vw;
  margin-left: 1vw;
`;
