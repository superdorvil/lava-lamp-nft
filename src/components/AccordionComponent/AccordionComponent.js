import React from 'react';
import {
  Container,
  ItemContainer,
  Trigger,
  Description,
  OpenIcon,
  Divider,
} from './Elements';
import Icon from '../Icon';
import {ICONS} from '../../constants';
import Collapsible from 'react-collapsible';
// { useState }
// triggerStates[i].true ? ICONS.PLUS : ICONS.MINUS

function AccordionComponent({triggers, descriptions}) {
  const length = triggers.length;
  const accordion = [];
  /*let initialTriggerState = [];
  for (let i = 0; i < length; i++) {
    initialTriggerState.push(false);
  }

  const [triggerStates, setTriggers] = useState(initialTriggerState);
  const openTrigger = ({index}) => {
    let newTriggerStates = initialTriggerState;
    newTriggerStates[index] = true;
    setTriggers(newTriggerStates);

    triggerStates.forEach((item, i) => {
      console.log(item);
    });
  }
  const closeTrigger = ({index}) => {
    let newTriggerStates = initialTriggerState;
    newTriggerStates[index] = false;
    setTriggers(newTriggerStates);

    triggerStates.forEach((item, i) => {
      console.log(item);
    });
  }*/

  for (let i = 0; i < length; i++) {
    accordion.push(
      <div key={i}>
        <Divider />
        <Collapsible trigger={
          <ItemContainer>
            <Trigger>{triggers[i]}</Trigger>
            <OpenIcon>
              <Icon icon={ICONS.PLUS} iconColor={"#FFFFFF"} width={24} height={24} />
            </OpenIcon>
          </ItemContainer>
        }>
          <Description>{descriptions[i]}</Description>
        </Collapsible>
      </div>
    );
  }

  if (triggers.length !== descriptions.length) {
    return <></>;
  }

  return (
    <Container>
      {accordion}
      <Divider />
    </Container>
  );
}

export default AccordionComponent;
