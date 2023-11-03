import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const columns = [
  {
    name: "Inicio Sesión",
    selector: (row) => row.hora_inicio_sesion,
  },
  {
    name: "Fin Sesión",
    selector: (row) => row.hora_fin_sesion,
  },
  {
    name: 'Fecha Sesión',
    selector: (row) => row.fecha_sesion
  },
  {
    name: "Sala",
    selector: (row) => row.sala._id, // Access the _id property of the sala object
  },
  {
    name: "Opciones de Gestión",
    cell: (row) => (
      <div className="d-flex" style={{ width: '100%', justifyContent: 'space-between' }}>
        <button className="btn btn-outline-primary btn-sm m-1">Ver</button>
        <button className="btn btn-outline-secondary btn-sm m-1">Editar</button>
        <button className="btn btn-danger btn-sm m-1">Eliminar</button>
      </div>
    )
    },
];

const SessionsTable = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    const storedToken = JSON.parse(sessionStorage.getItem('token'));

    setToken(storedToken.token);
  }, []);

  useEffect(() => {
    if (token) {
      axios.get('https://igf-backend-production.up.railway.app/api/sesiones/', {
        headers: {
          'x-token': token,
        },
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data from the API", error);
        });
    }
  }, [token]);

  return (
    <div className="mt-4 shadow">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SessionsTable;