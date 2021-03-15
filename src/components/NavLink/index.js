import P from 'prop-types';
import { Container } from './styles';

import { MenuLink } from '../MenuLink';

export const NavLink = ({ links = [] }) => {
  return (
    <Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ).isRequired,
};
