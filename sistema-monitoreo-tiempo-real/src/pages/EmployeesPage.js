import EmployeesTable from "../components/Employees/EmployeesTable";
import { Link } from "react-router-dom";

const EmployeesPage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Listado de Empleados</h1>
      <div>
        <Link to="/new-employee" className="btn btn-primary btn-lg shadow">
          Agregar Empleado
        </Link>
      </div>
      <div>
        <EmployeesTable />
      </div>
    </div>
  );
};

export default EmployeesPage;
