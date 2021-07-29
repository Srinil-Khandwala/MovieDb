import React from 'react';
// Styles
import { Wrapper, Image } from './Actor.style';
//prop-type
import PropType from 'prop-types';

const Actor = ({ name, character, imageUrl, clickable }) => (
  <Wrapper onClick={() => openInNewTab(name)}>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

const openInNewTab = (name) => {
  var win = window.open(`https://en.wikipedia.org/wiki/${name}`, '_blank');
  win.focus();
};

Actor.propType = {
  name: PropType.string,
  character: PropType.string,
  imageUrl: PropType.string,
};

export default Actor;
