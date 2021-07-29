import { Content, Wrapper, Text } from '../HeroImage/Heroimage.styles';
//prop-type
import PropType from 'prop-types';

const HeroImage = ({ image, title, text }) => {
  return (
    <>
      <Wrapper image={image}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <p>{text}</p>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
};

HeroImage.propType = {
  title: PropType.string,
  text: PropType.string,
  image: PropType.string,
};

export default HeroImage;
