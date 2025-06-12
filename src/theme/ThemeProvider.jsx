import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import colors from "./colors";
import fonts from "./fonts";

const theme = { colors, fonts };

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
