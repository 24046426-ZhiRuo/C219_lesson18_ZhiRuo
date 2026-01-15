import { Link } from "react-router-dom";
import logo from "../assets/rp-logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="RP Logo" className="logo" />

      <div>
        <Link to="/">Home</Link>
        <Link to="/diplomas">Diplomas</Link>
        <Link to="/register">Register</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/faq">FAQ</Link>

      </div>
    </nav>
  );
}

export default Navbar;
