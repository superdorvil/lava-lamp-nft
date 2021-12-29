import React from 'react';
import Modal from 'react-modal';
import {
  LavaImage,
  CustomStyles,
  IconContainer,
} from './ModalElements';
import Icon from '../Icon';
import {ICONS, STATES} from '../../constants';
import lavaList from '../../images/LavaList.svg';
import lavaPoolBreakdown from '../../images/LavaPoolBreakdown.svg';

Modal.setAppElement("#root");

function LavaModal({state, toggleModal}) {
  console.log(state);
  if (state === STATES.lavaList) {
    return (
      <>
        <IconContainer>
          <Icon icon={ICONS.CLOSE} iconColor='#FFFFFF' width={32} height={32} />
        </IconContainer>
        <Modal
          isOpen={true}
          onRequestClose={() => toggleModal({state: STATES.closed})}
          style={CustomStyles}>
          <LavaImage src={lavaList} />
        </Modal>;
      </>
    );
  } else if (state === STATES.lavaPoolBreakdown) {
    return(
      <>
        <IconContainer>
          <Icon icon={ICONS.CLOSE} iconColor='#FFFFFF' width={32} height={32} />
        </IconContainer>
        <Modal
          isOpen={true}
          onRequestClose={() => toggleModal({state: STATES.closed})}
          style={CustomStyles}>
          <LavaImage src={lavaPoolBreakdown} />
        </Modal>;
    </>
    );
  } else if (state === STATES.closed) {
    return(
      <></>
    );
  }
}

export default LavaModal;
