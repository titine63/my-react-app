//NavBar.tsx

import React from 'react';

// Définition de l'interface pour un Pokémon individuel
interface Pokemon {
  name: string;
  imgSrc?: string; // imgSrc est optionnel
}

// Définition de l'interface pour les props de NavBar
interface NavBarProps {
  pokemonList: Pokemon[];
  onPokemonChange: (index: number) => void;
}

const NavBar: React.FC<NavBarProps> = ({ pokemonList, onPokemonChange }) => {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onPokemonChange(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
