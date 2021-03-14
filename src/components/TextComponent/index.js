import P from 'prop-types';
import { Container } from './styles';

export const TextComponent = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
