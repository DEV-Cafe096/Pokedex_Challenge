import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';
import lightImage from '../assets/LightTheme.gif';
import darkImage from '../assets/DarkTheme.gif'

// Definindo os temas claro e escuro
const lightTheme = {
    // background: "#fff",
    text: "#000",
    cardBackground: "#ecd6b5a6",
    buttonBackground: "#fff",
    buttonShowmore: "#ECD5C5",
    backgroundImage: lightImage, 
    borderColor: "#D6A5E3",
    buttonHoverBackground: "#bc6ed1",
    typeBackground: '#ffffff',  // Definir cor de fundo para o tipo do Pokémon no tema claro
    typeColor: '#000000',  // Cor de texto para o tipo
    drawerBackground: "#D6A5E3", // Cor do Drawer no tema claro
    drawerHover: "#bc6ed1",
    topBtn: "#EDDBD0",
    colorbtnTop: "#000000"
};

const darkTheme = {
    // background: "#000000",
    text: "#fff",
    cardBackground: "#001",
    buttonBackground: "#5000ac",
    buttonShowmore: "#5000ac",
    backgroundImage: darkImage,
    borderColor: "#5000ac",
    buttonHoverBackground: "#333",
    typeBackground: '#5000ac',  // Cor de fundo para o tipo do Pokémon no tema escuro
    typeColor: '#ffffff',  // Cor de texto para o tipo no tema escuro
    drawerBackground: "#5000ac", // Cor do Drawer no tema escuro
    drawerHover: "#333",
    topBtn: "#5000ac",
    colorbtnTop: "#ffffff"
    
};

// Criando o contexto de tema
export const ThemeContext = createContext();

// Criando o provedor de tema
export const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // Alterna entre os temas
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Tipando a prop children (com PropTypes se não estiver usando TypeScript)
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
