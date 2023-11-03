import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const DeleteButton = ({ userId, handleDeleteUser }) => (
  <button className="btn btn-danger btn-sm m-1" onClick={() => handleDeleteUser(userId)}>
    Eliminar
  </button>
);

const columns = [
  {
    name: "Nombre de Sala",
    selector: (row) => row.nom_sala,
  },
  {
    name: "Opciones de Gestión",
    cell: (row) => (
      <div className="d-flex" style={{ width: "100%", justifyContent: "space-between" }}>
        <button className="btn btn-outline-primary btn-sm m-1">Ver</button>
        <button className="btn btn-outline-secondary btn-sm m-1">Editar</button>
        <DeleteButton userId={row._id} handleDeleteUser={row.handleDeleteUser} />
      </div>
    ),
  },
];

const RoomsTable = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();

  // Obtener el token del local storage en un efecto separado
  useEffect(() => {
    const storedToken = JSON.parse(sessionStorage.getItem('token'));

    setToken(storedToken.token);
  }, []);

  // Realizar la solicitud a la API una vez que el token esté disponible
  useEffect(() => {
    if (token) {
      axios.get('https://igf-backend-production.up.railway.app/api/salas/', {
        headers: {
          'x-token': token,
        },
      })
      .then((response) => {
        setData(response.data.salas);
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
    }
  }, [token]);

  return (
    <div className="mt-4 shadow">
      <DataTable columns={columns} data={data} customStyles={{
        header: {
          style: {
            fontWeight: 'bold',
          },
        },
      }} />
    </div>
  );
};

export default RoomsTable;