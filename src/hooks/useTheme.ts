
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = (): { isDarkTheme: boolean; toggleTheme: () => void } => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
