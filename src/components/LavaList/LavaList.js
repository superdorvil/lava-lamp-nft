import React from 'react';
import Modal from 'react-modal';
import {
  LavaListShelf,
  Container,
  CustomStyles,
  IconContainer,
} from './LavaListElements';
import shelf from '../../images/Shelf.jpg';
import Icon from '../Icon';
import {ICONS} from '../../constants/icons';

Modal.setAppElement("#root");

function LavaList({isOpen, toggleModal}) {
  return (
    <>
      {
        isOpen ?
          <IconContainer>
            <Icon icon={ICONS.CLOSE} iconColor='#FFFFFF' />
          </IconContainer> :
          <></>
      }
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={CustomStyles}
      >
        <LavaListShelf src={shelf} />
      </Modal>
    </>
  );
}

export default LavaList;
