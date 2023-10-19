import EmployeesTable from "../components/Employees/EmployeesTable";

const EmployeesPage = () => {
    return(
        <div className="container">
            <h1 className="text-center">Listado de Empleados</h1>
            <div>
                <button className="btn btn-primary btn-lg shadow"> Agregar Empleado </button>
            </div>
            <div>
                <EmployeesTable />
            </div>
        </div>
    );
};

export default EmployeesPage;