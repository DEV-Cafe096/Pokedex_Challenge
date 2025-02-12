import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import lightImage from '@assets/01.jpg';
import darkImage from '../assets/dark_theme.png';

const lightTheme = {
    text: "#000",
    cardBackground: "#ffffff96",
    buttonBackground: "#fff",
    buttonShowmore: "#ffffff96",
    backgroundImage: lightImage,
    borderColor: "#238ea9a0",
    buttonHoverBackground: "#218FAA",
    typeBackground: '#ffffff',
    typeColor: '#000000',
    drawerBackground: "#218FAA",
    drawerHover: "#ffffff96",
    topBtn: "#EDDBD0",
    colorbtnTop: "#000000"
};

const darkTheme = {
    text: "#fff",
    cardBackground: "#001",
    buttonBackground: "#5000ac",
    buttonShowmore: "#5000ac",
    backgroundImage: darkImage,
    borderColor: "#5000ac",
    buttonHoverBackground: "#333",
    typeBackground: '#5000ac',
    typeColor: '#ffffff',
    drawerBackground: "#5000ac",
    drawerHover: "#333",
    topBtn: "#5000ac",
    colorbtnTop: "#ffffff"
};

type ThemeContextType = {
    isDarkTheme: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeContext };


