import "./PokemonSearch.css";

const PokemonSearch = ({ setSearchTerm }) => {
    return (
        <div className='pokemon-search'>
            <input
                type='text'
                placeholder='Search Pokémon'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default PokemonSearch;
