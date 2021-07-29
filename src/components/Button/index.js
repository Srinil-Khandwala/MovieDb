import React from 'react';
//style
import { Wrapper } from './Button.styles';
//prop-type
import PropType from 'prop-types';

const Button = ({ text, callback }) => {
  return (
    <Wrapper type='button' onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.propType = {
  text: PropType.string,
  callback: PropType.func,
};

export default Button;
