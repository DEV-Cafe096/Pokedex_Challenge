// src/hooks/usePokemon.js
import { useState, useEffect } from "react";
import { getPokemons } from "../services/pokeAPI";

export const usePokemon = () => {
    const [pokemonData, setPokemonsData] = useState([]);
    const [filteredPokemonData, setFilteredPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            try {
                const data = await getPokemons(151, 0);
                const pokemonPromises = data.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const details = await response.json();
                    return {
                        ...pokemon,
                        types: details.types.map(type => type.type.name),
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
        }

        setQuery('');
    };

    const handleResetSearch = () => {
        setFilteredPokemonData(pokemonData);
        setQuery('');
    };

    const handleTypeChange = (event) => {
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
        handleSearch,
        handleResetSearch,
        handleTypeChange,
        selectedType,
    };
};
