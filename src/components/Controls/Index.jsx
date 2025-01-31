import { ThemeButton, ThemeToggleContainer, MusicButton } from "../../styles/styles-home";
import lightIcon from "../assets/icons/sun.svg";
import darkIcon from "../assets/icons/moon_sleep_tired_away_boring_sticker_icon_258420.svg";
import musicIcon from "../assets/icons/library_music_16024.ico";
import PropTypes from 'prop-types';

const Controls = ({ isDarkTheme, toggleTheme, toggleAudio }) => (
    <>
        <ThemeToggleContainer>
            <ThemeButton onClick={() => toggleTheme(false)} disabled={!isDarkTheme}>
                <img src={lightIcon} alt="Tema Claro" />
            </ThemeButton>
            <ThemeButton onClick={() => toggleTheme(true)} disabled={isDarkTheme}>
                <img src={darkIcon} alt="Tema Escuro" />
            </ThemeButton>
        </ThemeToggleContainer>
        <MusicButton onClick={toggleAudio}>
            <img src={musicIcon} alt="Música" />
        </MusicButton>
    </>
);

Controls.propTypes = {	
    isDarkTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired, 
    toggleAudio: PropTypes.func.isRequired,
};

export default Controls;