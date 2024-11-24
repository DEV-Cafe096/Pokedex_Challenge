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
    const languageCode = i18n.language;
    console.log("Idioma selecionado:", languageCode);

    try {
        const abilityPromises = abilities.map(async (ability) => {
            try {
                const response = await fetch(ability.ability.url);
                const data = await response.json();
                const description = await getAbilityDescription(data, languageCode);
                return { name: ability.ability.name, description: description };
            } catch (error) {
                console.error(`Erro ao buscar descrição da habilidade ${ability.ability.name}:`, error);
                return { name: ability.ability.name, description: i18n.t('erro_ao_buscar_descricao') };
            }
        });

        const movePromises = moves.map(async (move) => {
            try {
                const response = await fetch(move.move.url);
                const data = await response.json();
                const description = await getMoveDescription(data, languageCode);
                return { name: move.move.name, description: description };
            } catch (error) {
                console.error(`Erro ao buscar descrição do movimento ${move.move.name}:`, error);
                return { name: move.move.name, description: i18n.t('erro_ao_buscar_descricao') };
            }
        });

        const abilitiesWithDescriptions = await Promise.all(abilityPromises);
        const movesWithDescriptions = await Promise.all(movePromises);

        return { abilitiesWithDescriptions, movesWithDescriptions };
    } catch (error) {
        console.error("Erro geral ao buscar descrições:", error);
        return { abilitiesWithDescriptions: [], movesWithDescriptions: [] };
    }
};


const getAbilityDescription = async (data, languageCode) => {
    return await getDescription(data.effect_entries, languageCode, 'effect');
}

const getMoveDescription = async (data, languageCode) => {
    return await getDescription(data.flavor_text_entries, languageCode, 'flavor_text');
}

const getDescription = async (entries, languageCode, field) => {
    if (!entries) return i18n.t('descricao_indisponivel');

    const ptEntry = entries.find(entry => entry.language.name === languageCode);
    if (ptEntry && ptEntry[field]) return ptEntry[field];

    const enEntry = entries.find(entry => entry.language.name === 'en');
    if (enEntry && enEntry[field]) return enEntry[field];

    return i18n.t('descricao_indisponivel');
};