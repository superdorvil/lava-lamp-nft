import React, { useState } from 'react';
import Icon from '../Icon';
import {ICONS} from '../../constants';
import {
  Container,
  OpenIcon,
  Trigger,
  ItemContainer,
  Description,
  Divider,
} from './Elements';

const AccordionComponent = ({data}) => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
      <Container>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Divider />
              <ItemContainer onClick={() => toggle(index)} key={index}>
                <Trigger>{item.question}</Trigger>
                {clicked === index ?
                  <OpenIcon>
                    <Icon icon={ICONS.MINUS} iconColor={"#FFFFFF"} width={3.75} height={3.75} />
                  </OpenIcon> :
                  <OpenIcon>
                    <Icon icon={ICONS.PLUS} iconColor={"#FFFFFF"} width={3.75} height={3.75} />
                  </OpenIcon>}
              </ItemContainer>
              {clicked === index ? (
                <Description>
                  {item.answer}
                </Description>
              ) : null}
            </div>
          );
        })}
        <Divider />
      </Container>

  );
};

export default AccordionComponent;
