import React from 'react';
import {Container} from './Elements';

function Button({description, dark, buttonPressed}) {
  return (
    <Container
      onClick={(e) => {
        e.preventDefault();
        buttonPressed();
      }}
      dark={dark}>
      {description}
    </Container>
  );
}

export default Button;
