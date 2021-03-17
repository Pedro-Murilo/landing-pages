import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { Base } from '.';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base>children</Base>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
