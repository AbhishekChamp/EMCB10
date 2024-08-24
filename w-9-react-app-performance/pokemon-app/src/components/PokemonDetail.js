import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./PokemonDetail.css";

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API_URL}/pokemon/${id}`,
                );
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching Pokémon details:", error);
            }
        };

        fetchPokemon();
    }, [id]);

    if (!pokemon)
        return (
            <p style={{ background: "#f8d5a3", textAlign: "center" }}>
                Loading...
            </p>
        );

    return (
        <div className='pokemon-detail'>
            <Link to='/' className='back-button'>
                Back to List
            </Link>
            <h1>{pokemon.name}</h1>
            <img
                src={`${process.env.REACT_APP_IMAGE_URL}/${pokemon.id}.png`}
                alt={pokemon.name}
                className='pokemon-image'
            />
            <p>
                <strong>Height:</strong> {pokemon.height / 10} m
            </p>
            <p>
                <strong>Weight:</strong> {pokemon.weight / 10} kg
            </p>
            <p>
                <strong>Types:</strong>{" "}
                {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
            <p>
                <strong>Abilities:</strong>{" "}
                {pokemon.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")}
            </p>
        </div>
    );
};

export default PokemonDetail;
