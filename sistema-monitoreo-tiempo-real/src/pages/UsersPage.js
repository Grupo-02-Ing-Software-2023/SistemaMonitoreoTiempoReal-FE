import UsersTable from "../components/Users/UsersTable";
import { Link } from "react-router-dom";

const UsersPage = () => {
    return(
        <div className="container">
            <h1 className="text-center">Listado de Usuarios</h1>
            <div>
        <Link to="/new-user" className="btn btn-primary btn-lg shadow">
          Agregar Usuario
        </Link>
      </div>
            <div>
                <UsersTable />
            </div>
        </div>
    );
};

export default UsersPage;