import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import diplomas from "../data/diplomas";

function Diplomas() {
  const [search, setSearch] = useState("");

  return (
    <div className="page">
      <h1>School of Infocomm Diplomas</h1>

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
    </div>
  );
}

export default Diplomas;
