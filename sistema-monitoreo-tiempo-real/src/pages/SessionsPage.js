import SessionsTable from "../components/Sessions/SessionsTable";
import { Link } from "react-router-dom";

const SessionsPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Listado de Sesiones</h1>
      <div>
        <Link to="/new-session" className="btn btn-primary btn-lg shadow">
          Agregar Sesión
        </Link>
      </div>
      <div>
        <SessionsTable />
      </div>
    </div>
  );
};

export default SessionsPage;
