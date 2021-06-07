import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#37006a'
        },
        secondary: {
            main: '7f4a8c'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#4c8c4a'
        },
    },
});

export default theme;