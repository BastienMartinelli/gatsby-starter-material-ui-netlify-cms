import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = {
  palette: {
    primary: {
      main: "#1c86ff"
    },
    secondary: {
      main: "#1cff95"
    },
    error: {
      main: red.A400
    },
    paper: "#fff"
  }
};

// A custom theme for this app
const muiTheme = createMuiTheme(theme);

export default muiTheme;
