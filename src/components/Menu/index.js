import P from 'prop-types';
import { useState } from 'react';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { Container, MenuContainer, Button } from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLink } from '../NavLink';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        aria-label="Open/Close menu"
        visible={visible}
        onClick={() => setVisible(true)}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container>
        <SectionContainer onClick={() => setVisible(false)} visible={visible}>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
