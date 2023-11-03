import React, { useState } from "react";

const EmployeeFormComponent = () => {
  const [state, setState] = useState({
    cod_empleado: "",
    nom_empleado: "",
    dui: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      cod_empleado: state.cod_empleado,
      nom_empleado: state.nom_empleado,
      dui: state.dui,
    };

    fetch("https://igf-backend-production.up.railway.app/api/empleados/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          alert("Guardado Exitosamente");
          setState({
            cod_empleado: "",
            nom_empleado: "",
            dui: "",
          });
        } else {
          alert("Error al guardar");
          setState({
            cod_empleado: "",
            nom_empleado: "",
            dui: "",
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
      <h1 className="text-center">Nuevo Empleado</h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>
                <label htmlFor="cod_empleado">Código Empleado:</label>
              </strong>
              <input
                type="text"
                name="cod_empleado"
                value={state.cod_empleado}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="nom_empleado">Nombre Empleado:</label>
              </strong>
              <input
                type="text"
                name="nom_empleado"
                value={state.nom_empleado}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="dui">DUI:</label>
              </strong>
              <input
                type="text"
                name="dui"
                value={state.dui}
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

export default EmployeeFormComponent;