import React from 'react';
//style
import { Wrapper, Content } from './MovieInfoBar.style';
//helper
import { calcTime, convertMoney } from '../../helpers';
//prop-type
import PropType from 'prop-types';

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className='column'>
          <p>Run Time : {calcTime(time)}</p>
        </div>
        <div className='column'>
          <p>Budget : {convertMoney(budget)}</p>
        </div>
        <div className='column'>
          <p>Revenue : {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

MovieInfoBar.propType = {
  time: PropType.number,
  budget: PropType.number,
  revenue: PropType.number,
};

export default MovieInfoBar;
