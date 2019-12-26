import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: {
            main: '#757575',
            light: '#a4a4a4',
            dark: '#494949'
        }
    }
}

export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);