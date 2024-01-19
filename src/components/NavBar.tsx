// Définis une interface pour les types de props
interface NavBarProps {
  goToPrevious: () => void;
  goToNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}
// Utilisation de l'interface NavBarProps pour typer les props de NavBar
const NavBar: React.FC<NavBarProps> = ({ goToPrevious, goToNext, canGoPrevious, canGoNext }) => {
  return (
    <nav>
      {canGoPrevious && <button onClick={goToPrevious}>Précédent</button>}
      {canGoNext && <button onClick={goToNext}>Suivant</button>}
    </nav>
  );
};

export default NavBar;