import { createContext, useState } from "react";

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (module) => {
    const exists = favourites.find((item) => item.id === module.id);
    if (!exists) {
      setFavourites([...favourites, module]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((item) => item.id !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;
