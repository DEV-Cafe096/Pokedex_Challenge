import PropTypes from "prop-types";
import { Container, Button, BackButton, Logo } from "../styles/styles-home";
import BurguerMenu from "../components/BurguerMenu";
import SearchBar from "../components/SearchBar";
import TypeDropdown from "../components/TypeDropdown";
import PokemonGrid from "../components/PokemonGrid";
import LoadingSpinner from "../components/Spinner";
import TopButton from "../components/TopButton";
import backButtonImage from "../assets/icons/Letter-X-icon_34793.ico";

const HomeRender = ({
    isDarkTheme,
    toggleTheme,
    toggleAudio,
    handleChangeLanguage,
    language,
    t,
    query,
    setQuery,
    handleSearch,
    handleKeyPress,
    selectedType,
    handleTypeChange,
    pokemonTypes,
    isSearching,
    handleResetSearch,
    isLoading,
    filteredPokemonData,
    itemsToShow,
    setItemsToShow,
}) => (
    <Container>
        <BurguerMenu
            isDarkTheme={isDarkTheme}
            toggleTheme={toggleTheme}
            toggleAudio={toggleAudio}
            handleChangeLanguage={handleChangeLanguage}
            language={language}
            t={t}
        />
        <Logo src="/src/assets/logo.svg" />
        <SearchBar
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
            handleKeyPress={handleKeyPress}
        />
        <TypeDropdown
            selectedType={selectedType}
            handleTypeChange={handleTypeChange}
            pokemonTypes={pokemonTypes}
            currentLanguage={language}
        />
        {isSearching && (
            <BackButton onClick={handleResetSearch}>
                <img src={backButtonImage} alt="Return" />
            </BackButton>
        )}
        {isLoading ? (
            <LoadingSpinner />
        ) : (
            <>
                <PokemonGrid
                    pokemonData={filteredPokemonData}
                    itemsToShow={itemsToShow}
                />
                {itemsToShow < filteredPokemonData.length && (
                    <Button onClick={() => setItemsToShow(itemsToShow + 10)}>
                        {t("Show more")}
                    </Button>
                )}
            </>
        )}
        <TopButton />
    </Container>
);

HomeRender.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    toggleAudio: PropTypes.func.isRequired,
    handleChangeLanguage: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    selectedType: PropTypes.string.isRequired,
    handleTypeChange: PropTypes.func.isRequired,
    pokemonTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    isSearching: PropTypes.bool.isRequired,
    handleResetSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    filteredPokemonData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            types: PropTypes.arrayOf(PropTypes.string).isRequired,
            imageUrl: PropTypes.string,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    itemsToShow: PropTypes.number.isRequired,
    setItemsToShow: PropTypes.func.isRequired,
};

export default HomeRender;
