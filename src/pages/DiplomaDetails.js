import { useParams, Link, Outlet } from "react-router-dom";
import diplomas from "../data/diplomas";

function DiplomaDetails() {
  const { diplomaId } = useParams();
  const diploma = diplomas.find(d => d.id === diplomaId);

  return (
    <div>
      <h2>{diploma.name}</h2>

      {diploma.modules.map(m => (
        <div key={m.id} className="card">
          <Link to={m.id}>{m.title}</Link>
        </div>
      ))}

      <Outlet />
    </div>
  );
}

export default DiplomaDetails;
