import { Routes, Route } from "react-router-dom";
import Diplomas from "../pages/Diplomas";
import DiplomaDetails from "../pages/DiplomaDetails";
import ModuleDetails from "../pages/ModuleDetails";
import Register from "../pages/Register";
import FAQ from "../pages/FAQ";
import Favourites from "../pages/Favourites";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Diplomas />} />
      <Route path="/diplomas" element={<Diplomas />}>
        <Route path=":diplomaId" element={<DiplomaDetails />}>
          <Route path=":moduleId" element={<ModuleDetails />} />
        </Route>
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default AppRoutes;
