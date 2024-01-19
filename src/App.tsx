//App.tsx


import './App.css'
import PokemonCard from './components/PokemonCard';
import { useState} from 'react';
import NavBar from './components/NavBar';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  // Création de l'état pokemonIndex
  const [pokemonIndex, setPokemonIndex] = useState(0);

  // Fonction pour aller au Pokémon précédent
  const goToPrevious = () => {
    setPokemonIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : 0);
  };

  // Fonction pour aller au Pokémon suivant
  const goToNext = () => {
    setPokemonIndex(prevIndex => prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex);
  };

  return (
    <div>
      <NavBar 
        goToPrevious={goToPrevious} 
        goToNext={goToNext} 
        canGoPrevious={pokemonIndex > 0} 
        canGoNext={pokemonIndex < pokemonList.length - 1}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
