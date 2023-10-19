import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Código",
    selector: (row) => row.id,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
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
    fecha: "10/18/2023",
    estado: "Finalizada"
  },
  {
    id: 2,
    fecha: "10/18/2023",
    estado: "Finalizada"
  },
  {
    id: 3,
    fecha: "10/18/2023",
    estado: "Finalizada"
  },
  {
    id: 4,
    fecha: "10/18/2023",
    estado: "Finalizada"
  },
];

const SessionsTable = () => {
  return (
    <div className="mt-4">
        <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SessionsTable;
