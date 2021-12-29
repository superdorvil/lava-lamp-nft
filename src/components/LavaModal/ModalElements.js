import styled from 'styled-components';

export const LavaImage = styled.img`
  height: 546px;
  width: 875px;
  margin: 0px;
`;

export const IconContainer = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  padding: 0;
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
