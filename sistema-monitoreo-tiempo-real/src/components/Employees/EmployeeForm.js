import React, { useState } from "react";

const EmployeeFormComponent = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    id: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("A form was submitted: ", state);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center"> Nuevo Empleado </h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>
                <label htmlFor="firstName">Nombre:</label>
              </strong>
              <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="lastName">Apellido:</label>
              </strong>
              <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="id">DUI:</label>
              </strong>
              <input
                type="text"
                name="id"
                value={state.id}
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
            {" "}
            {/* Añade text-center */}
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
