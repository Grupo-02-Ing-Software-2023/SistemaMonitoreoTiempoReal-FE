import RoomsTable from "../components/Rooms/RoomsTable";
import { Link } from "react-router-dom";

const RoomsPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Listado de Salas</h1>
      <div>
        <div>
          <Link to="/new-room" className="btn btn-primary btn-lg shadow">
            Agregar Sala
          </Link>
        </div>
        <RoomsTable />
      </div>
    </div>
  );
};

export default RoomsPage;
