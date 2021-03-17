import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    margin: ${({ theme }) => theme.spacing.sizes.xmedium} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacing.sizes.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacing.sizes.medium};
    padding: ${({ theme }) => theme.spacing.sizes.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export default GlobalStyles;
