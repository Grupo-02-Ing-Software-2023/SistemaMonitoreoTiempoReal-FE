import React, { useState } from "react";

const NewUserForm = () => {
  const [form, setForm] = useState({
    username: "",
    role: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", form);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center"> Nuevo Usuario </h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong><label htmlFor="username">Username:</label></strong>
              <input
                type="text"
                name="username"
                className="form-control"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="role">Rol:</label></strong>
              <select
                name="role"
                className="form-control"
                value={form.role}
                onChange={handleChange}
              >
                <option value="">Ninguno</option>
                <option value="supervisor">Supervisor</option>
                <option value="empleado">Empleado</option>
              </select>
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="password">Contraseña:</label></strong>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="email">Email:</label></strong>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
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
            <img
              className="align-center"
              src="/user-img.png"
              alt="Rooms Index"
              style={{ width: "750px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;
