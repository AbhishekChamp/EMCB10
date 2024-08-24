import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonSearch from "./components/PokemonSearch";
import PokemonTypeFilter from "./components/PokemonTypeFilter";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/pokemon?limit=100`,
                );
                const pokemonPromises = data.results.map(async (pokemon) => {
                    const pokemonData = await axios.get(pokemon.url);
                    return pokemonData.data;
                });
                const detailedPokemons = await Promise.all(pokemonPromises);
                setPokemons(detailedPokemons);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };

        const fetchTypes = async () => {
            try {
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/type`,
                );
                setTypes(data.results);
            } catch (error) {
                console.error("Error fetching Pokémon types:", error);
            }
        };

        fetchPokemons();
        fetchTypes();
    }, []);

    const filterPokemons = () => {
        return pokemons
            .filter((pokemon) =>
                pokemon.name.includes(searchTerm.toLowerCase()),
            )
            .filter((pokemon) => {
                if (!selectedType) return true;
                return pokemon.types.some(
                    (type) => type.type.name === selectedType,
                );
            });
    };

    return (
        <Router>
            <div className='App'>
                <h1 style={{ textAlign: "center" }}>Pokémon App</h1>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <PokemonSearch setSearchTerm={setSearchTerm} />
                                <PokemonTypeFilter
                                    types={types}
                                    setSelectedType={setSelectedType}
                                />
                                <PokemonList pokemons={filterPokemons()} />
                            </>
                        }
                    />
                    <Route path='/pokemon/:id' element={<PokemonDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
