import { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EnglishFlagIcon from '../../assets/icons/en.png';
import PortugueseFlagIcon from '../../assets/icons/pt.png';
import SunIcon from '@mui/icons-material/WbSunny'; // Icone para tema claro
import MoonIcon from '@mui/icons-material/NightsStay'; // Icone para tema escuro
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Ícone de música
import { BurguerButton, StyledDrawer } from "@styles/style-burguer-button";
import i18n from "@i18n";

interface BurguerMenuProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    toggleAudio: () => void;
    t: (key: string) => string;
}

const BurguerMenu: React.FC<BurguerMenuProps> = ({ isDarkTheme, toggleTheme, toggleAudio, t }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const changeLanguage = (language: string) => i18n.changeLanguage(language);

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <>
            {/* Botão para abrir o menu hamburguer */}
            <BurguerButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon style={{ fontSize: '2.5em' }} />
            </BurguerButton>

            {/* Menu Drawer */}
            <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {/* Alternar tema */}
                    <ListItem onClick={toggleTheme}>
                        <ListItemIcon>
                            {isDarkTheme ? <MoonIcon /> : <SunIcon />}
                        </ListItemIcon>
                        <ListItemText primary={isDarkTheme ? t("Dark Theme") : t("Light Theme")} />
                    </ListItem>

                    {/* Alternar idioma para inglês */}
                    <ListItem onClick={() => changeLanguage('en')}>
                        <ListItemIcon>
                            <img src={EnglishFlagIcon} alt="English" width={24} height={24} />
                        </ListItemIcon>
                        <ListItemText primary="English" />
                    </ListItem>

                    {/* Alternar idioma para português */}
                    <ListItem onClick={() => changeLanguage('pt')}>
                        <ListItemIcon>
                            <img src={PortugueseFlagIcon} alt="Português" width={24} height={24} />
                        </ListItemIcon>
                        <ListItemText primary="Português" />
                    </ListItem>

                    {/* Alternar música */}
                    <ListItem onClick={toggleAudio}>
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

export default BurguerMenu;
