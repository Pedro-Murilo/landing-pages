import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { Menu } from '.';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>children</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
