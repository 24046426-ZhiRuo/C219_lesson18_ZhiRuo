import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function Favourites() {
  const { favourites, removeFavourite } = useContext(FavouritesContext);

  return (
    <div className="page">
      <h1>My Favourites</h1>

      {favourites.length === 0 && (
        <p>You have not added any favourite modules yet.</p>
      )}

      {favourites.map((module) => (
        <div key={module.id} className="card">
          <h3>{module.title}</h3>

          {module.diploma && (
            <p>
              <strong>Diploma:</strong> {module.diploma}
            </p>
          )}

          <button
            className="remove-btn"
            onClick={() => removeFavourite(module.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
