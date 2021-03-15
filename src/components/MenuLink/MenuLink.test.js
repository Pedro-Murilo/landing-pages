import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(
      <MenuLink link="http://github.com/Pedro-Murilo/">children</MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://github.com/Pedro-Murilo/" newTab={true}>
        children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(
      <MenuLink link="http://github.com/Pedro-Murilo/" newTab={false}>
        children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'children' }))
      .toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        color: #06cf32;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #e34040;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://github.com/Pedro-Murilo/"
        target="_self"
      >
        children
      </a>
    `);
  });
});
