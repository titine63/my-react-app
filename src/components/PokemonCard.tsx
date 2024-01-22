//PokemonCard.tsx
import PropTypes from "prop-types";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PokemonCard = (props : any) => {
    console.log(props);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {pokemon} = props;

    
    return (
        <figure>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    }).isRequired
};



export default PokemonCard;

