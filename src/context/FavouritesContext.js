import { createContext, useState } from "react";

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(module) {
    setFavourites([...favourites, module]);
  }

  function removeFavourite(id) {
    setFavourites(favourites.filter(m => m.id !== id));
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
