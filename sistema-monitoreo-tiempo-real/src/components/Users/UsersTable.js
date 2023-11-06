import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import DataTable from "react-data-table-component";
import axios from "axios";

const DetailsButton = ({ userId, handleDeleteUser, setSelectedUserId }) => (
  <button className="btn btn-primary btn-sm m-1" onClick={() => setSelectedUserId(userId)}>
    Ver
  </button>
);

const DeleteButton = ({ userId, handleDeleteUser }) => (
  <button className="btn btn-danger btn-sm m-1" onClick={() => handleDeleteUser(userId)}>
    Eliminar
  </button>
);

const columns = [
  {
    name: "Usuario",
    selector: "nom_usuario",
  },
  {
    name: "Correo",
    selector: "email",
  },
  {
    name: "Opciones de Gestión",
    cell: (row) => (
      <div className="d-flex" style={{ width: "100%", justifyContent: "space-between" }}>
        <DetailsButton userId={row._id} handleDeleteUser={row.handleDeleteUser} setSelectedUserId={row.setSelectedUserId} />
        <button className="btn btn-outline-secondary btn-sm m-1">Editar</button>
        <DeleteButton userId={row._id} handleDeleteUser={row.handleDeleteUser} />
      </div>
    ),
  },
];

const UsersTable = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const apiUrl = 'https://igf-backend-production.up.railway.app/api/usuarios/';

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
      .get(apiUrl, {
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        setData(
          response.data.usuarios.map((user) => ({ ...user, handleDeleteUser, setSelectedUserId }))
        );
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  };

  const handleDeleteUser = (userId) => {
    axios
      .delete(apiUrl + userId, {
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        console.log("Usuario eliminado con éxito");
        fetchData();
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario", error);
      });
  };

  const conditionalRowStyles = [
    {
      when: (row) => row._id === "some-condition",
      style: {
        backgroundColor: "rgba(255, 0, 0, 0.3)",
      },
    },
  ];

  return (
    <div className="mt-4 shadow">
      <DataTable columns={columns} data={data} conditionalRowStyles={conditionalRowStyles} />
      {selectedUserId && <UserDetails userId={selectedUserId} token={token} />}
    </div>
  );
};

export default UsersTable;
