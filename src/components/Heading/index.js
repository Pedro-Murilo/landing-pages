import P from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  darkTheme = true,
  size = 'huge',
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
  darkTheme: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: P.bool,
};
