import axios from "axios";
import i18n from "../i18n";

//Funcao para capitar a primeira letra em maiuscula
export const capitalizeFirstLetter = (str) => {
if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
return ''; 

};


// Função para pegar todos os pokémons
export const getPokemons = async (limit, offset) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
            params: {
                limit: limit,
                offset: offset,
            },
        });

        // Mapeia os resultados e capitaliza o nome de cada Pokémon  (agora DENTRO do try)
        const pokemonsCapitalized = response.data.results.map(pokemon => ({
            ...pokemon,
            name: capitalizeFirstLetter(pokemon.name)
        }));

        response.data.results = pokemonsCapitalized; // Substitui a lista original
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Pokemons:", error);
        return null; // Ou throw error; para lançar a exceção
    }
};



// Função para pegar detalhes do pokémon pelo ID
export const getPokemonById = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar detalhes do Pokémon:", error);
    }
};



export const getDescriptions = async (abilities, moves) => {
    try {
        const languageCode = i18n.language;  // Define o idioma com base no i18n
        const abilityPromises = abilities.map(async (ability) => {
            const response = await fetch(ability.ability.url);
            const data = await response.json();
            const effectEntry = data.effect_entries.find(entry => entry.language.name === languageCode);
            const description = effectEntry ? effectEntry.effect : 'Descrição não disponível';
            const truncatedDescription = description.length > 100 ? description.slice(0, 89) + '...' : description;
            return { name: ability.ability.name, description: truncatedDescription };
        });

        const movePromises = moves.map(async (move) => {
            const response = await fetch(move.move.url);
            const data = await response.json();
            const effectEntry = data.effect_entries.find(entry => entry.language.name === languageCode);
            const description = effectEntry ? effectEntry.effect : 'Descrição não disponível';
            const truncatedDescription = description.length > 100 ? description.slice(0, 89) + '...' : description;
            return { name: move.move.name, description: truncatedDescription };
        });

        const abilitiesWithDescriptions = await Promise.all(abilityPromises);
        const movesWithDescriptions = await Promise.all(movePromises);

        return { abilitiesWithDescriptions, movesWithDescriptions };
    } catch (error) {
        console.error("Erro ao buscar descrições:", error);
        return { abilitiesWithDescriptions: [], movesWithDescriptions: [] };
    }
};


