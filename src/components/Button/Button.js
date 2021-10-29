import React from 'react';
import { Container, Description, StyledButton } from './ButtonElements';

function Button({description, color, disabled, buttonPressed}) {
  if (disabled) {
    return <></>;
  }

  return (
    <StyledButton
      onClick={(e) => {
        e.preventDefault();
        buttonPressed();
      }}
      color={color}
    >
    {description}
    </StyledButton>
  );

  return (
    <Container>
      <Description type='submit' value={description} color={color} />
    </Container>
  );
}

export default Button;
