import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchSnapshot();
  });
});
