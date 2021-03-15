import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink>children</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
