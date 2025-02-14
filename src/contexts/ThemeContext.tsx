import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import lightImage from '@assets/01.jpg';
import darkImage from '../assets/02.jpg';

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
    cardBackground: "#002",
    buttonBackground: "#203A8F",
    buttonShowmore: "#002",
    backgroundImage: darkImage,
    borderColor: "#203A8F",
    buttonHoverBackground: "#333",
    typeBackground: '#203A8F',
    typeColor: '#ffffff',
    drawerBackground: "#203A8F",
    drawerHover: "#333",
    topBtn: "#203A8F",
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


