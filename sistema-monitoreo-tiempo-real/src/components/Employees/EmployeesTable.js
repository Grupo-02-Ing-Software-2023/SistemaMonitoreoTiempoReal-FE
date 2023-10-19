import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Código",
    selector: (row) => row.id,
  },
  {
    name: "Usuario",
    selector: (row) => row.nombre,
  },
  {
    name: "Opciones de Gestión",
    cell: (row) => (
      <div className="d-flex" style={{width: '100%', justifyContent: 'space-between'}}>
        <button className="btn btn-outline-primary btn-sm m-1">Ver</button>
        <button className="btn btn-outline-secondary btn-sm m-1">Editar</button>
        <button className="btn btn-danger btn-sm m-1">Eliminar</button>
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    nombre: "Jesus Palacios",
    opciones: "Ver - Editar - Eliminar",
  },
  {
    id: 2,
    nombre: "William Aguirre",
    opciones: "Ver - Editar - Eliminar",
  },
  {
    id: 3,
    nombre: "Kevin Lemus",
    opciones: "Ver - Editar - Eliminar",
  },
  {
    id: 4,
    nombre: "Marlon Corea",
    opciones: "Ver - Editar - Eliminar",
  },
];

const EmployeesTable = () => {
  return (
    <div className="mt-4 shadow">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default EmployeesTable;
