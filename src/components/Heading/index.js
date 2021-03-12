import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  darkTheme = true,
  size = 'big',
  as = 'h1',
  uppercase = false,
}) => {
  return (
    <Title darkTheme={darkTheme} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  darkTheme: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
  uppercase: P.bool.isRequired,
};
