import styled from 'styled-components';

export const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Trigger = styled.p`
  margin-top: 2vw;
  margin-left: 1.75vw;
  margin-bottom: 2vw;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  font-family: Bangers;
  font-size: 2vw;
  color: #FFFFFF;
`;

export const Description = styled.p`
  display: flex;
  justify-content: flex-start;
  font-family: Montserrat-Bold;
  font-size: 1.25vw;
  width: 40vw;
  color: #FFFFFF;
  margin-left: 3vw;
  margin-top: 0.5vw;
  margin-bottom: 2.5vw;
  line-height: 2vw;
`;

export const OpenIcon = styled.div`
  background-color: #515151;
  border-radius: 24px;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #515151;
`;
