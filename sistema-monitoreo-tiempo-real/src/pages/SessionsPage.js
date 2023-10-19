import SessionsTable from "../components/Sessions/SessionsTable";

const SessionsPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Listado de Sesiones</h1>
      <div>
        <button className="btn btn-primary btn-lg shadow">
          Nueva Sesión
        </button>
      </div>
      <div>
        <SessionsTable />
      </div>
    </div>
  );
};

export default SessionsPage;
