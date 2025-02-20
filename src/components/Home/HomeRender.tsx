import { FC } from "react";
import { Container, Button, BackButton, Logo } from "./style";
import BurguerMenu from "../BurguerMenu/Index";
import SearchBar from "@components/SearchBar/Index";
import Filter from "../Filter/Index";
import PokemonGrid from "../PokemonGrid/Index";
import LoadingSpinner from "@components/Spinner/Index";
import TopButton from "../TopButton/Index";
import backButtonImage from "../../assets/icons/Letter-X-icon_34793.ico";
import LogoPokemon from "../../assets/logo.svg";




interface HomeRenderProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    toggleAudio: () => void;
    handleChangeLanguage?: () => void;
    language?: string;
    t: (key: string) => string;
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    selectedType: string;
    handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    pokemonTypes: string[];
    isSearching: boolean;
    handleResetSearch: () => void;
    isLoading: boolean;
    filteredPokemonData: any[]; // Substitua `any` pelo tipo correto dos dados do Pokémon, se disponível
    itemsToShow: number;
    setItemsToShow: (items: number) => void;
}

const HomeRender: FC<HomeRenderProps> = ({
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
        <Logo src={LogoPokemon} />
        <SearchBar
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
            handleKeyPress={handleKeyPress}
        />
        <Filter
            selectedType={selectedType}
            handleTypeChange={handleTypeChange}
            pokemonTypes={pokemonTypes}
            currentLanguage={language ?? "en"}
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

export default HomeRender;
