import P from 'prop-types';
import { Container } from './styles';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
