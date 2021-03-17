import P from 'prop-types';
import { Container } from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
