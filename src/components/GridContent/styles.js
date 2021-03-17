import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.sizes.huge} 0;
  `}
`;
