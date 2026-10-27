import { useState } from "react";

function RecetaCard({ receta }) {
  const [abierta, setAbierta] = useState(false);

  return (
    <article className="card">
      <h2>{receta.nombre}</h2>

      <p className="meta">
        Tiempo: {receta.tiempo} | Porciones: {receta.porciones} | Dificultad:{" "}
        {receta.dificultad}
      </p>

      <button onClick={() => setAbierta(!abierta)}>
        {abierta ? "Ocultar receta" : "Ver receta"}
      </button>

      {abierta && (
        <div className="detalle">
          <h3>Ingredientes</h3>
          <ul>
            {receta.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>

          <h3>Preparación</h3>
          <ol>
            {receta.pasos.map((paso, index) => (
              <li key={index}>{paso}</li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}

export default RecetaCard;