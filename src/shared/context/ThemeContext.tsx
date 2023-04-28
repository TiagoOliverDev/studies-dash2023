import { createContext, useCallback, useState, useMemo, useContext } from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";

import { DarkTheme, LightTheme } from "./../themes";


interface IThemeContextData {
    themeName: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext({} as IThemeContextData);

interface IThemeProviderProps {
    children: React.ReactNode;
};

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {

    const [themeName, setThemeName] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === "light" ? "dark" : "light");
    }, []);

    const theme = useMemo(() => {
        if (themeName === "light") return LightTheme;

        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box
                    width="100vw"
                    height="100vh"
                    bgcolor={theme.palette.background.default}
                    sx={{
                        transition: ".3s"
                    }}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
