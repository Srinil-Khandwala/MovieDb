import React from 'react';
//style
import { Wrapper, Content } from '../BreadCrumb/BreadCrumb.style';
//link
import { Link } from 'react-router-dom';
//prop-type
import PropType from 'prop-types';

const BreadCrumb = ({ movieTitle }) => {
  return (
    <>
      <Wrapper>
        <Content>
          <Link to='/'>
            <span>Home</span>
          </Link>
          <span> | </span>
          <span>{movieTitle}</span>
        </Content>
      </Wrapper>
    </>
  );
};

BreadCrumb.propType = {
  movieTitle: PropType.string,
};

export default BreadCrumb;
