import React from 'react';
//link
import { Link } from 'react-router-dom';
//style
import { Image } from './Thumb.styles';
//prop
import PropType from 'prop-types';

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

Thumb.propType = {
  image: PropType.string,
  movieId: PropType.number,
  clickable: PropType.bool,
};

export default Thumb;
