import React from 'react';
import { Container, Description } from './ButtonElements';

function Button({description, color, disabled}) {
  if (disabled) {
    return <></>;
  }

  return (
    <Container>
      <Description type='submit' value={description} color={color} />
    </Container>
  );
}

export default Button;
