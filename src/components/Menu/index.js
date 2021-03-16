import P from 'prop-types';
import { Container } from './styles';

export const Menu = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
};
