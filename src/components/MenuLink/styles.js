import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing.sizes.small};
    color: ${theme.colors.green};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.red};
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
