import { renderTheme } from '../../styles/RenderTheme';

import { GridText } from '.';

import mock from './mock';

describe('<GridText />', () => {
  it('should render grid text with background', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid text without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
