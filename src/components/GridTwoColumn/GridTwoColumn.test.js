import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { GridTwoColumn } from '.';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn>children</GridTwoColumn>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
