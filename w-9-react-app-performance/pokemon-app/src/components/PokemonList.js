import { Link } from "react-router-dom";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
    return (
        <div className='pokemon-list'>
            {pokemons.length > 0 ? (
                pokemons.map((pokemon) => (
                    <Link
                        to={`/pokemon/${pokemon.id}`}
                        key={pokemon.id}
                        className='pokemon-card-link'
                    >
                        <div className='pokemon-card'>
                            <img
                                src={`${process.env.REACT_APP_IMAGE_URL}/${pokemon.id}.png`}
                                alt={pokemon.name}
                                className='pokemon-image'
                            />
                            <h2 className='pokemon-name'>{pokemon.name}</h2>
                            <p className='pokemon-types'>
                                Types:{" "}
                                {pokemon.types
                                    .map((type) => type.type.name)
                                    .join(", ")}
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No Pokémon found</p>
            )}
        </div>
    );
};

export default PokemonList;
