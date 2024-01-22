//App.tsx

import { useEffect } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard';
import { SetStateAction, useState} from 'react';
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

  function handlePokemonChange(newIndex: SetStateAction<number>) {
    setPokemonIndex(newIndex);
  }
  // Utilisez useEffect pour afficher l'alerte au démarrage
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);  
  
  return (
    <div>
      
      <NavBar pokemonList={pokemonList} onPokemonChange={handlePokemonChange} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
