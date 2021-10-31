import styled from 'styled-components';

export const StyledButton = styled.button`
  align-self: center;
  display: flex;
  justify-content: center;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 12px;
  /*border-color: {props => props.color};*/
  color: #FFFFFF;
  font-size: 15px;
  font-family: Montserrat;
  background:
    linear-gradient(90deg, #000000, #000000) padding-box,
    linear-gradient(90deg, ${props => props.lightColor}, ${props => props.darkColor}) border-box;
`;
