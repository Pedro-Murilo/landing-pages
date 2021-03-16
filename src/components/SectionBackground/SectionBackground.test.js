import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render', () => {
    renderTheme(<SectionBackground>children</SectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
