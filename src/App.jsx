import { recetas } from "./data/recetas";
import RecetaCard from "./components/RecetaCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Recetario</h1>
        <p>{recetas.length} recetas disponibles</p>
      </header>

      <main className="lista">
        {recetas.map((receta) => (
          <RecetaCard key={receta.id} receta={receta} />
        ))}
      </main>
    </div>
  );
}

export default App;