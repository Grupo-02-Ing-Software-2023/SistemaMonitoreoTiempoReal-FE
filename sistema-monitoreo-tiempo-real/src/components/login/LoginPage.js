import React, { useState } from "react";
import "./login.css";
import PropTypes from "prop-types";



async function loginUser(credentials) {
  return fetch("https://igf-backend-production.up.railway.app/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(response =>response.json());
}

export default function LoginPage({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      "email": username,
      "password": password,
    });

    setToken(token);
  };

  return (
    <div>
      <style>
        {`
          body, html {
            background-color: #407BFF;
          }
        `}
      </style>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div className="card text-center bg-white" style={{ maxWidth: "30rem" }}>
            <div className="card-body">
              <h3 className="card-title mb-4">Inicio de Sesión</h3>

              <div className="form-group">
                <strong><label htmlFor="userName">Usuario</label></strong>
                <input
                  type="text"
                  className="form-control pt-2"
                  id="userName"
                  placeholder="Ingrese su usuario"
                  //value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <strong><label htmlFor="password">Contraseña</label></strong>
                <input
                  type="password"
                  className="form-control pt-2"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  //value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-4" onClick={handleSubmit}>
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
