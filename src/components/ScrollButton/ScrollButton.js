import React from 'react';
import {Container} from './Elements';

function Button({description, dark}) {
  return (
    <Container
      to={description}
      smooth={true}
      duration={500}
      exact='true'
      dark={dark}>
      {description}
    </Container>
  );
}

export default Button;
