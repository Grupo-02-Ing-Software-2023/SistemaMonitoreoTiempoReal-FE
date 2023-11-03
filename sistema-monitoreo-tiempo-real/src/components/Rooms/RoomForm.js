import React, { useState, useEffect } from "react";

const RoomForm = () => {
  const [state, setState] = useState({
    cod_sala: "",
    nom_sala: "",
    categoria_sala: "",
  });

  const [token, setToken] = useState(""); // Define the token state variable

  useEffect(() => {
    // Obtener el token del local storage en un efecto separado
    const storedToken = JSON.parse(sessionStorage.getItem('token'));
    if (storedToken) {
      setToken(storedToken.token);
    }
  }, []);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      cod_sala: state.cod_sala,
      nom_sala: state.nom_sala,
      categoria_sala: state.categoria_sala,
    };

    fetch("https://igf-backend-production.up.railway.app/api/salas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token, // Add the token to the headers
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          alert("Guardado Exitosamente");
          setState({
            cod_sala: "",
            nom_sala: "",
            categoria_sala: "",
          });
        } else {
          alert("Error al guardar");
          setState({
            cod_sala: "",
            nom_sala: "",
            categoria_sala: "",
          });
        }
      })
      .catch((error) => {
        console.error("API Request Error: ", error);
        alert("Error al guardar");
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Nueva Sala</h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>
                <label htmlFor="cod_sala">Código Sala:</label>
              </strong>
              <input
                type="text"
                name="cod_sala"
                value={state.cod_sala}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="nom_sala">Nombre Sala:</label>
              </strong>
              <input
                type="text"
                name="nom_sala"
                value={state.nom_sala}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="categoria_sala">Categoria Sala:</label>
              </strong>
              <input
                type="text"
                name="categoria_sala"
                value={state.categoria_sala}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Guardar
            </button>
          </form>
        </div>
        <div className="col-6">
          <div className="text-center">
            <img
              className="align-center"
              src="/new-employee.png"
              alt="Rooms Index"
              style={{ width: "750px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomForm;