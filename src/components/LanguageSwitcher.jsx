import PropTypes from 'prop-types';
import { ThemeButton, LanguageSwitcherContainer } from "../styles/styles-home";
import englishFlag from "../assets/icons/en.png";
import portugueseFlag from "../assets/icons/pt.png";

const LanguageSwitcher = ({ onChangeLanguage }) => {
    return (
        <LanguageSwitcherContainer>
            <ThemeButton onClick={() => onChangeLanguage("en")}>
                <img src={englishFlag} alt="English" />
            </ThemeButton>
            <ThemeButton onClick={() => onChangeLanguage("pt")}>
                <img src={portugueseFlag} alt="Português" />
            </ThemeButton>
        </LanguageSwitcherContainer>
    );
};

LanguageSwitcher.propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
};

export default LanguageSwitcher;