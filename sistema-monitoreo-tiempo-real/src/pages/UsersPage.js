import UsersTable from "../components/Users/UsersTable";

const UsersPage = () => {
    return(
        <div className="container">
            <h1 className="text-center">Listado de Usuarios</h1>
            <div>
                <button className="btn btn-primary btn-lg shadow"> Nuevo Usuario </button>
            </div>
            <div>
                <UsersTable />
            </div>
        </div>
    );
};

export default UsersPage;