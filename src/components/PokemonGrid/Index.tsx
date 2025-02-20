import { Link } from "react-router-dom";
import { PokemonList, PokemonLink, PokemonCard, PokemonImage, PokemonName } from "@components/PokemonGrid/style";


interface PokemonGridProps {
  pokemonData: any[];
  itemsToShow: number;
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemonData, itemsToShow }) => (
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



export default PokemonGrid;