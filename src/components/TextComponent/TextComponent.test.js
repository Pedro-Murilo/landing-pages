import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
