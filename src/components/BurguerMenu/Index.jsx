import { useState } from "react";
import {   List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EnglishFlagIcon from '../../assets/icons/en.png';
import PortugueseFlagIcon from '../../assets/icons/pt.png';
import SunIcon from '@mui/icons-material/WbSunny'; // Icone para tema claro
import MoonIcon from '@mui/icons-material/NightsStay'; // Icone para tema escuro
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Ícone de música
import PropTypes from "prop-types";
import { BurguerButton, StyledDrawer } from "../../styles/style-burguer-button";
import i18n from "../../i18n"


const BurguerMenu = ({ isDarkTheme, toggleTheme, toggleAudio, t }) => {
    // Estado para controlar o menu hamburguer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const changeLanguage = (language) => i18n.changeLanguage(language);


    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <>
            {/* Botão para abrir o menu hamburguer */}
            <BurguerButton edge="start"  aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon style={{ fontSize: '2.5em' }}/>
            </BurguerButton>

            {/* Menu Drawer */}
            <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {/* Alternar tema */}
                    <ListItem button onClick={toggleTheme}>
                        <ListItemIcon>
                            {isDarkTheme ? <MoonIcon /> : <SunIcon />}
                        </ListItemIcon>
                        <ListItemText primary={isDarkTheme ? t("Dark Theme") : t("Light Theme")} />
                    </ListItem>

                    {/* Alternar idioma para inglês */}
                    <ListItem button onClick={() => changeLanguage('en')}>
                        <ListItemIcon>
                            <img src={EnglishFlagIcon} alt="English" width={24} height={24} />
                        </ListItemIcon>
                        <ListItemText primary="English" />
                    </ListItem>

                    {/* Alternar idioma para português */}
                    <ListItem button onClick={() => changeLanguage('pt')}>
                        <ListItemIcon>
                            <img src={PortugueseFlagIcon} alt="Português" width={24} height={24} />
                        </ListItemIcon>
                        <ListItemText primary="Português" />
                    </ListItem>

                    {/* Alternar música */}
                    <ListItem button onClick={toggleAudio}>
                        <ListItemIcon>
                            <MusicNoteIcon />
                        </ListItemIcon>
                        <ListItemText primary={t("Música")} />
                    </ListItem>
                </List>
            </StyledDrawer>
        </>
    );
};

BurguerMenu.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    toggleAudio: PropTypes.func.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
    
};


export default BurguerMenu;