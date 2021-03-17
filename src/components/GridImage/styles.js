import styled, { css } from 'styled-components';

import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacing.sizes.huge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.sizes.xmedium};
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    transition: all 200ms ease-in;

    &:hover {
      transform: scale(1.1) rotate(5deg);
    }
  `}
`;
