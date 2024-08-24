import Select from "react-select";
import "./PokemonTypeFilter.css";

const PokemonTypeFilter = ({ types, setSelectedType }) => {
    const options = types.map((type) => ({
        value: type.name,
        label: type.name.charAt(0).toUpperCase() + type.name.slice(1),
    }));

    return (
        <div className='pokemon-type-filter'>
            <Select
                options={options}
                onChange={(option) =>
                    setSelectedType(option ? option.value : "")
                }
                placeholder='Select Type'
            />
        </div>
    );
};

export default PokemonTypeFilter;
