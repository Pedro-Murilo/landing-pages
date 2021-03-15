import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { NavLink } from '.';

describe('<NavLink />', () => {
  it('should render', () => {
    renderTheme(<NavLink>children</NavLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
