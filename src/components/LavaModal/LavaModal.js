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
import lavaList from '../../images/LavaList.png';
import lavaPoolBreakdown from '../../images/LavaPoolBreakdown.png';

Modal.setAppElement("#root");

function LavaModal({state, toggleModal}) {
  if (state === STATES.modal.lavaList) {
    return (
      <>
        <IconContainer>
          <Icon
            icon={ICONS.CLOSE}
            iconColor='#FFFFFF'
            width={10}
            height={10}
            highlight={true}
          />
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
        <Icon
          icon={ICONS.CLOSE}
          iconColor='#FFFFFF'
          width={15}
          height={15}
          highlight={true}
        />
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
