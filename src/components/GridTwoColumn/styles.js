import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacing.sizes.medium};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacing.sizes.xmedium};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacing.sizes.medium};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${() => css``}
`;

export const Image = styled.img`
  ${() => css``}
`;
