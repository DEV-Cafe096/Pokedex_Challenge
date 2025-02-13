
import { useState, useEffect } from "react";
import { getPokemons } from "../../services/pokeAPI";
import { useTheme } from "../../hooks/useTheme";
import { useAudio } from "../../hooks/useAudio";
import { useTranslation } from "react-i18next";
import HomeRender from "./HomeRender";

export const Home = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
    const [pokemonData, setPokemonsData] = useState([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [pokemonTypes, setPokemonTypes] = useState({});

    const { isDarkTheme, toggleTheme } = useTheme();
    const { toggleAudio } = useAudio();

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    const getPokemonTypes = async () => {
        try {
            const module = await import(`../../locales/en/pokemonTypes.json`);
            return module.default;
        } catch (error) {
            console.error("Erro ao carregar os tipos de Pokémon:", error);
            return {};
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const types = await getPokemonTypes(i18n.language);
                setPokemonTypes(types);

                const data = await getPokemons(151, 0);
                const pokemonPromises = data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const details = await response.json();
                    return {
                        ...pokemon,
                        types: details.types.map((type) => type.type.name),
                        imageUrl:
                            details.sprites?.other.dream_world.front_default ||
                            details.sprites?.other.home.front_default ||
                            details.sprites?.other["official-artwork"].front_default ||
                            `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`,
                        id: details.id,
                    };
                });

                const pokemonDataWithImages = await Promise.all(pokemonPromises);
                setPokemonsData(pokemonDataWithImages);
                setFilteredPokemonData(pokemonDataWithImages);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [i18n.language]);

    const handleSearch = () => {
        if (query.trim() === "") {
            alert(t("Pokemon Not Found"));
            setQuery("");
            return;
        }

        const lowercasedQuery = query.toLowerCase();
        const filteredPokemons = pokemonData.filter(
            (pokemon) =>
                pokemon.name.toLowerCase().includes(lowercasedQuery) ||
                pokemon.id === parseInt(lowercasedQuery)
        );

        if (filteredPokemons.length === 0) {
            alert(t("pokemonNotFoundAlert"));
            setFilteredPokemonData(pokemonData);
        } else {
            setFilteredPokemonData(filteredPokemons);
            setIsSearching(true);
        }

        setQuery("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleResetSearch = () => {
        setFilteredPokemonData(pokemonData);
        setIsSearching(false);
        setQuery("");
    };

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setSelectedType(selectedType);

        if (selectedType) {
            const filteredByType = pokemonData.filter((pokemon) =>
                pokemon.types.includes(selectedType)
            );
            setFilteredPokemonData(filteredByType);
        } else {
            setFilteredPokemonData(pokemonData);
        }
    };

    return (
        <HomeRender
            isDarkTheme={isDarkTheme}
            toggleTheme={toggleTheme}
            toggleAudio={toggleAudio}
            handleChangeLanguage={handleChangeLanguage}
            language={language}
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


