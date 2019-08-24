import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1c86ff"
    },
    secondary: {
      main: "#0a39c9"
    },
    error: {
      main: red.A400
    },
    background: "#fff"
  }
});

export default theme;
