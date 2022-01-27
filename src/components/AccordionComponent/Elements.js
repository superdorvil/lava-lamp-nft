import styled from 'styled-components';

export const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

export const Description = styled.p`
  display: flex;
  justify-content: flex-start;
  font-family: Montserrat-Bold;
  font-size: 1.6vw;
  width: 55vw;
  color: #FFFFFF;
  margin-left: 3vw;
  margin-top: 0.5vw;
  margin-bottom: 2.5vw;
  line-height: 2vw;
`;

export const Trigger = styled.p`
  margin-top: 2.5vw;
  margin-left: 2vw;
  margin-bottom: 2.5vw;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  font-family: Bangers;
  font-size: 2.4vw;
  color: #FFFFFF;
`;

export const OpenIcon = styled.div`
  margin-right: 2vw;
  background-color: #515151;
  border-radius: 3.75vw;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #515151;
`;
