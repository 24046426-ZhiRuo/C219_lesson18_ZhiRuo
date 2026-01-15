import { useParams } from "react-router-dom";
import { useContext } from "react";
import diplomas from "../data/diplomas";
import { FavouritesContext } from "../context/FavouritesContext";

function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();
  const { addFavourite } = useContext(FavouritesContext);

  const diploma = diplomas.find(d => d.id === diplomaId);
  const module = diploma.modules.find(m => m.id === moduleId);

  return (
  <div className="card">
    <h3>{module.title}</h3>
    <p>{module.description}</p>
    <button className="primary" onClick={() => addFavourite(module)}>
      Add to Favourites
    </button>
  </div>
);

}

export default ModuleDetails;
