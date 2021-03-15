import { renderTheme } from '../../styles/RenderTheme';
import { screen } from '@testing-library/react';

import { NavLink } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLink />', () => {
  it('should render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getByText(/link 5/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
