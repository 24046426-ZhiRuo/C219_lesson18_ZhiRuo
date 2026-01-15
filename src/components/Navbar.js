import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/diplomas">Diplomas</Link>
      <Link to="/register">Register</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/favourites">Favourites</Link>

    </nav>
  );
}

export default Navbar;

