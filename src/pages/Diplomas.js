import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import diplomas from "../data/diplomas";
import rpLogo from "../assets/rp-logo.png";
import heroImage from "../assets/img-main.jpg";

function Diplomas() {
  const [search, setSearch] = useState("");

  return (
    <div className="layout">
      <header className="hero">
        <img src={rpLogo} alt="RP Logo" className="logo" />
        <div className="hero-text">
          <h1>School of Infocomm</h1>
          <p>Explore diplomas and courses offered at Republic Polytechnic</p>
        </div>
        <img src={heroImage} alt="Campus" className="hero-img" />
      </header>

      <section className="content">
        <input
          className="search"
          placeholder="Search diplomas"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="card-grid">
          {diplomas
            .filter(d =>
              d.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(d => (
              <Link key={d.id} to={d.id} className="card">
                <h3>{d.name}</h3>
              </Link>
            ))}
        </div>

        <Outlet />
      </section>
    </div>
  );
}

export default Diplomas;
