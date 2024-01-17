//PokemonCard.tsx

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
}


export default PokemonCard;

