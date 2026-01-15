import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function Favourites() {
  const { favourites, removeFavourite } = useContext(FavouritesContext);

  return (
    <div className="page">
      <h1>Favourite Courses</h1>

      {favourites.map(m => (
        <div key={m.id} className="card">
          <h3>{m.title}</h3>
          <button onClick={() => removeFavourite(m.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
