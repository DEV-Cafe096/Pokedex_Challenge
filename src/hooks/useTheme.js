import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; 

export const useTheme = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext); 

    return {
        isDarkTheme,
        toggleTheme,
    };
};
