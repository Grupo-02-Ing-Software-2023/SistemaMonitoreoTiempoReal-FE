import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const DeleteButton = ({ id, handleDeleteUser }) => (
  <button className="btn btn-danger btn-sm m-1" onClick={() => handleDeleteUser(id)}>
    Eliminar
  </button>
);

const columns = [
  {
    name: "Código",
    selector: (row) => row.cod_empleado,
  },
  {
    name: "DUI",
    selector: (row) => row.dui,
  },
  {
    name: "Usuario",
    selector: (row) => row.nom_empleado,
  },
  {
    name: "Opciones de Gestión",
    cell: (row) => (
      <div className="d-flex" style={{ width: "100%", justifyContent: "space-between" }}>
        <button className="btn btn-outline-primary btn-sm m-1">Ver</button>
        <button className="btn btn-outline-secondary btn-sm m-1">Editar</button>
        <DeleteButton id={row.cod_empleado} handleDeleteUser={row.handleDeleteUser} />
      </div>
    ),
  },
];

const EmployeesTable = () => {

  const [data, setData] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = JSON.parse(sessionStorage.getItem("token"));

    setToken(storedToken.token);
  }, []);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const fetchData = () => {
    axios
      .get("https://igf-backend-production.up.railway.app/api/empleados", {
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        setData(response.data.map((user) => ({ ...user, handleDeleteUser })));
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  };

  const handleDeleteUser = (userId) => {
    console.log(userId)
    axios
      .delete(`https://igf-backend-production.up.railway.app/api/empleados/${userId}`, {
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        console.log("Usuario eliminado con éxito");
        // Después de eliminar, volvemos a cargar los datos
        fetchData();
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario", error);
      });
  };

  const conditionalRowStyles = [
    {
      when: (row) => row._id === "some-condition", // Puedes agregar una condición para aplicar estilos específicos a las filas.
      style: {
        backgroundColor: "rgba(255, 0, 0, 0.3)",
      },
    },
  ];

  return (
    <div className="mt-4 shadow">
      <DataTable columns={columns} data={data} conditionalRowStyles={conditionalRowStyles} />
    </div>
  );
};

export default EmployeesTable;
