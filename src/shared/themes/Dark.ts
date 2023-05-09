import { createTheme } from "@mui/material"
import { cyan } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: "#540182",
            dark: "#540182",
            light: "#540182",
            contrastText: '#FFF'
        },

        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#FFF'
        },
        background: {
            default: "#202124",
            paper: "#303134"
        }
    }
});

