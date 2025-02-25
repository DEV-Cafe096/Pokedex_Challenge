import { useState, useEffect } from "react";
import { getPokemons } from "@services/pokeAPI";

// Definindo interfaces para os tipos de dados
interface Pokemon {
    name: string;
    url: string;
    id: number;
    types: string[];
    imageUrl: string;
}

export const usePokemon = () => {
    const [pokemonData, setPokemonsData] = useState<Pokemon[]>([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            try {
                const data = await getPokemons(151, 0);
                const pokemonPromises = data.results.map(async (pokemon: Pokemon) => {
                    const response = await fetch(pokemon.url);
                    const details = await response.json();
                    return {
                        ...pokemon,
                        types: details.types.map((type: any) => type.type.name),
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
                console.error("Erro ao buscar Pokémons:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    const handleSearch = () => {
        if (query.trim() === '') {
            alert('Por favor, insira um nome ou ID do Pokémon para buscar.');
            setQuery('');
            return;
        }

        const lowercasedQuery = query.toLowerCase();
        const filteredPokemons = pokemonData.filter(pokemon =>
            pokemon.name.toLowerCase().includes(lowercasedQuery) ||
            pokemon.id === parseInt(lowercasedQuery)
        );

        if (filteredPokemons.length === 0) {
            alert('Pokémon não encontrado. Tente novamente!');
            setFilteredPokemonData(pokemonData);
        } else {
            setFilteredPokemonData(filteredPokemons);
            setIsSearching(true);
        }

        setQuery('');
    };

    const handleResetSearch = () => {
        setFilteredPokemonData(pokemonData);
        setIsSearching(false);
        setQuery('');
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = event.target.value;
        setSelectedType(selectedType);

        if (selectedType) {
            const filteredByType = pokemonData.filter(pokemon =>
                pokemon.types.includes(selectedType)
            );
            setFilteredPokemonData(filteredByType);
        } else {
            setFilteredPokemonData(pokemonData);
        }
    };

    return {
        pokemonData,
        filteredPokemonData,
        isLoading,
        query,
        setQuery,
        isSearching,
        handleSearch,
        handleResetSearch,
        handleTypeChange,
        selectedType,
    };
};
