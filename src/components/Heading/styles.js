import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.xmedium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.big};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, darkTheme, size, uppercase }) => css`
    color: ${darkTheme ? theme.colors.red : theme.colors.green};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
