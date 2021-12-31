import React from 'react';
import Modal from 'react-modal';
import {
  LavaListImage,
  LavaPoolBreakdownImage,
  CustomStyles,
  IconContainer,
} from './Elements';
import Icon from '../Icon';
import {ICONS, STATES} from '../../constants';
import lavaList from '../../images/LavaList.svg';
import lavaPoolBreakdown from '../../images/LavaPoolBreakdown.svg';

Modal.setAppElement("#root");

function LavaModal({state, toggleModal}) {
  if (state === STATES.modal.lavaList) {
    return (
      <>
        <IconContainer>
          <Icon icon={ICONS.CLOSE} iconColor='#FFFFFF' width={32} height={32} />
        </IconContainer>
        <Modal
          isOpen={true}
          onRequestClose={() => toggleModal({state: STATES.modal.closed})}
          style={CustomStyles}>
          <LavaListImage width={80} height={50} src={lavaList} />
        </Modal>;
      </>
    );
  } else if (state === STATES.modal.lavaPoolBreakdown) {
    return(
      <>
        <IconContainer>
          <Icon icon={ICONS.CLOSE} iconColor='#FFFFFF' width={32} height={32} />
        </IconContainer>
        <Modal
          isOpen={true}
          onRequestClose={() => toggleModal({state: STATES.modal.closed})}
          style={CustomStyles}>
          <LavaPoolBreakdownImage width={75} height={75} src={lavaPoolBreakdown} />
        </Modal>;
    </>
    );
  } else if (state === STATES.modal.closed) {
    return(
      <></>
    );
  }
}

export default LavaModal;