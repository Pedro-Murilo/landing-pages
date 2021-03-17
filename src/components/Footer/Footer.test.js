import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Oie</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Oie' })).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
