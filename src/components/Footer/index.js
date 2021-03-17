import P from 'prop-types';
import { Container } from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
