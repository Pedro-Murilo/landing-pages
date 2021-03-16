import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render', () => {
    renderTheme(<SectionContainer>children</SectionContainer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
