import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import FavouritesProvider from "./context/FavouritesContext";

function App() {
  return (
    <BrowserRouter>
      <FavouritesProvider>
        <Navbar />
        <AppRoutes />
      </FavouritesProvider>
    </BrowserRouter>
  );
}

export default App;
