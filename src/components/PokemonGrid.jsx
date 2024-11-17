import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { PokemonList, PokemonLink, PokemonCard, PokemonImage, PokemonName } from "../styles/styles-home";

const PokemonGrid = ({ pokemonData, itemsToShow }) => (
  <PokemonList>
    {pokemonData.slice(0, itemsToShow).map((pokemon) => (
      <PokemonLink as={Link} to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
        <PokemonCard>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonImage src={pokemon.imageUrl} alt={pokemon.name} />
        </PokemonCard>
      </PokemonLink>
    ))}
  </PokemonList>
);

PokemonGrid.propTypes = {
  pokemonData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemsToShow: PropTypes.number.isRequired,
};

export default PokemonGrid;