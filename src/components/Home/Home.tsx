import { useEffect, useState } from "react";
import { useTheme } from "@hooks/useTheme";
import { useAudio } from "@hooks/useAudio";
import { useTranslation } from "react-i18next";
import HomeRender from "@components/Home/HomeRender";
import { usePokemon } from "@hooks/usePokemon";

interface PokemonType {
    [key: string]: string;
}

export const Home: React.FC = () => {
    const { t } = useTranslation();
    const { isDarkTheme, toggleTheme } = useTheme();
    const { toggleAudio } = useAudio();

    const {
        pokemonData,
        filteredPokemonData,
        isLoading,
        query,
        setQuery,
        handleSearch,
        handleResetSearch,
        handleTypeChange,
        selectedType,
    } = usePokemon();

    const [itemsToShow, setItemsToShow] = useState<number>(10);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [pokemonTypes, setPokemonTypes] = useState<PokemonType>({});

    const getPokemonTypes = async (): Promise<PokemonType> => {
        try {
            const module = await import(`../../locales/en/pokemonTypes.json`);
            return module.default;
        } catch (error) {
            console.error("Erro ao carregar os tipos de Pokémon:", error);
            return {};
        }
    };

    useEffect(() => {
        const fetchTypes = async () => {
            const types = await getPokemonTypes();
            setPokemonTypes(types);
        };
        fetchTypes();
    }, []);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <HomeRender
            isDarkTheme={isDarkTheme}
            toggleTheme={toggleTheme}
            toggleAudio={toggleAudio}
            t={t}
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
            handleKeyPress={handleKeyPress}
            selectedType={selectedType}
            handleTypeChange={handleTypeChange}
            pokemonTypes={Object.keys(pokemonTypes)}
            isSearching={isSearching}
            handleResetSearch={handleResetSearch}
            isLoading={isLoading}
            filteredPokemonData={filteredPokemonData}
            itemsToShow={itemsToShow}
            setItemsToShow={setItemsToShow}
        />
    );
};

export default Home;
