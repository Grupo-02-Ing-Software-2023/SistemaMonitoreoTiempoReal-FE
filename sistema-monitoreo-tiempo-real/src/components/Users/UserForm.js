import React, { useState } from "react";
import axios from "axios";

const NewUserForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    url_img: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://igf-backend-production.up.railway.app/api/usuarios", {
        nom_usuario: form.username,
        email: form.email,
        password: form.password,
        img_url: form.url_img,
      });

      // Limpia los campos después de un envío exitoso
      setForm({
        username: "",
        password: "",
        email: "",
        url_img: "",
      });

      // Muestra el mensaje de éxito
      alert("Guardado exitoso");

      console.log("Form Submitted: ", form);
      console.log("API Response: ", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Nuevo Usuario</h1>
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
            <div className="form-group pt-2">
              <strong><label htmlFor="url_img">Url de Imagen:</label></strong>
              <input
                type="text"
                name="url_img"
                className="form-control"
                value={form.url_img}
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