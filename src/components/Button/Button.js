import React from 'react';
import { StyledButton } from './ButtonElements';

function Button({description, lightColor, darkColor, disabled, buttonPressed}) {
  if (disabled) {
    return <></>;
  }

  return (
    <StyledButton
      onClick={(e) => {
        e.preventDefault();
        buttonPressed();
      }}
      lightColor={lightColor}
      darkColor={darkColor}
    >
    {description}
    </StyledButton>
  );
}

export default Button;
