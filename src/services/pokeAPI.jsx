import axios from "axios";
import i18n from "../i18n";
// Função para pegar todos os pokémons
export const getPokemons = async (limit, offset) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
            params: {
                limit: limit,
                offset: offset,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Pokemons:", error);
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

// Função para pegar descrições das habilidades e movimentos
// export const getDescriptions = async (abilities, moves) => {
//     try {
//         const abilityPromises = abilities.map(async (ability) => {
//             const response = await fetch(ability.ability.url);
//             const data = await response.json();  // Corrigido: primeiro aguardar a conversão para JSON
//             const description = data.effect_entries[0]?.effect || 'Descrição não disponível';
//             const truncatedDescription = description.length > 100 ? description.slice(0, 89) + '...' : description;
//             return { name: ability.ability.name, description: truncatedDescription }; // Pega a descrição da primeira entrada
//         });

//         const movePromises = moves.map(async (move) => {
//             const response = await fetch(move.move.url);
//             const data = await response.json();  // Corrigido: primeiro aguardar a conversão para JSON
//             const description = data.effect_entries[0]?.effect || 'Descrição não disponível';
//             const truncatedDescription = description.length > 100 ? description.slice(0, 89) + '...' : description;
//             return { name: move.move.name, description: truncatedDescription }; // Pega a descrição da primeira entrada
//         });

//         const abilitiesWithDescriptions = await Promise.all(abilityPromises);
//         const movesWithDescriptions = await Promise.all(movePromises);

//         return { abilitiesWithDescriptions, movesWithDescriptions };
//     } catch (error) {
//         console.error("Erro ao buscar descrições:", error);
//         return { abilitiesWithDescriptions: [], movesWithDescriptions: [] }; // Retorna arrays vazios em caso de erro
//     }
// };

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


