import { Container } from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined';

export const GoTop = () => {
  return (
    <Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Container>
  );
};
