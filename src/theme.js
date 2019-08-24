import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1c86ff"
    },
    secondary: {
      main: "#1d3557"
    },
    error: {
      main: red.A400
    },
    paper: "#fff"
  }
});

export default theme;
