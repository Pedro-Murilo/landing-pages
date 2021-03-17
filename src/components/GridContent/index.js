import P from 'prop-types';
import { Container, Html } from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading uppercase as="h2" colorDark={!background}>
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
