import { renderTheme } from '../../styles/RenderTheme';

import { Base } from '.';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
