import Home from '.';
import { renderTheme } from '../../styles/RenderTheme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
