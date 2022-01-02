import styled from 'styled-components';

export const LavaListImage = styled.img`
  height: ${props => props.height}vw;
  width: ${props => props.width}vw;
`;

export const LavaPoolBreakdownImage = styled.img`
  height: ${props => props.height}vw;
  width: ${props => props.width}vw;
  @media screen and (orientation: landscape) {
    height: ${props => props.height}vh;
    width: ${props => props.width}vh;
  }
`;

export const IconContainer = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
`;

export const CustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    padding: 0,
    border: 0,
    backgroundColor: '',
  },
  overlay: {
    backgroundColor: '#00000070',
    padding: 0,
    margin: 0,
    border: 0,
  }
};
