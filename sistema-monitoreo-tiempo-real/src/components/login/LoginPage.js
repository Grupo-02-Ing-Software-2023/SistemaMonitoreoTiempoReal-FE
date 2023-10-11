
import React, { useState } from 'react';
import "./login.css";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }



export default function LoginPage({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    

    return (
        <div className="container">
            <form  onSubmit={handleSubmit} >
                <h3 >Inicio de Sesion</h3>

                <label >Usuario</label>
                <input type="text" placeholder="Ingrese su usuario"  onChange={e => setUserName(e.target.value)}/>

                <label >Contraseña</label>
                <input type="password" placeholder="Ingrese su contraseña" onChange={e => setPassword(e.target.value)} />

                <button type="submit">Inicio</button>
            </form>
        </div>
    );
};

LoginPage.propTypes = {
    setToken: PropTypes.func.isRequired
  }