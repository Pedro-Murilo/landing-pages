import { screen } from '@testing-library/dom';
import { Heading } from '.';
import { renderTheme } from '../../styles/RenderTheme';
import { theme } from '../../styles/theme';
import 'jest-styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.red,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading darkTheme>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.red,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="medium">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xmedium,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="big">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.big,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="huge">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.big,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h1">texto</Heading>);
    const h1 = container.querySelector('h1');

    expect(h1.tagName.toLowerCase()).toBe('h1');
  });
});
