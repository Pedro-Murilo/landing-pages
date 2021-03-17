import P from 'prop-types';
import { Container, Image, ImageContainer, TextContainer } from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container background={background}>
        <TextContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
};
