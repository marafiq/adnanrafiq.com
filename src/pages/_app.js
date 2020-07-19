import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { Global, css } from '@emotion/core';
import theme from "../styles/theme";
function GlobalStyle(childern) {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      >
        {childern}
      </Global>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <CSSReset />
        <GlobalStyle/>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
