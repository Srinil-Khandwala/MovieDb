import React from 'react';
//style
import { Wrapper, Content } from '../Grid/Grid.styles';
//prop-type
import PropType from 'prop-types';

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>

      <Content>{children}</Content>
    </Wrapper>
  );
};

Grid.propType = {
  header: PropType.string,
  children: PropType.array,
};

export default Grid;
