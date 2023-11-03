import React, { useState, useEffect, setState } from "react";
import axios from "axios";

const CreateSessionForm = () => {
  const [sessionDate, setSessionDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [screenshotPerSession, setScreenshotPerSession] = useState("");
  const [frequency, setFrequency] = useState("");
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [token, setToken] = useState("");

  // Función para cargar las salas desde la API
  const fetchRooms = async () => {
    try {
      if (token) {
        const response = await axios.get('https://igf-backend-production.up.railway.app/api/salas/', {
          headers: {
            'x-token': token,
          },
        });

        if (Array.isArray(response.data.salas)) {
          setRooms(response.data.salas);
        } else {
          console.error("La respuesta de la API no es un array válido:", response.data);
        }
      }
    } catch (error) {
      console.error("Error al cargar las salas:", error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = JSON.parse(sessionStorage.getItem('token'));
      console.log('Token from sessionStorage:', storedToken);
      if (storedToken) {
        setToken(storedToken.token);
        await fetchRooms();
      }
    };

    fetchToken();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestData = {
      hora_inicio_sesion: `${sessionDate}T${startTime}:00.000Z`,
      hora_fin_sesion: `${sessionDate}T${endTime}:00.000Z`,
      fecha_sesion: `${sessionDate}T${startTime}:00.000Z`,
      sala: selectedRoom,
    };
  
    try {
      const response = await axios.post(
        'https://igf-backend-production.up.railway.app/api/sesiones/',
        JSON.stringify(requestData),
        {
          headers: {
            'Content-Type': 'application/json',
            'x-token': token,
          },
        }
      );
  
      if (response.status === 200) {
        alert('Guardado Exitosamente');
        setSessionDate('');
        setStartTime('');
        setEndTime('');
        setSelectedRoom('');
      } else {
        alert('Error al guardar');
      }
    } catch (error) {
      console.error('Error while creating session:', error);
      alert('Error al guardar');
    }
  };
  

  return (
    <div className="container mt-5">
      <h1 className="text-center">Nueva Sesión</h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong>
                <label htmlFor="hora_inicio_sesion">Inicio de Sesión:</label>
              </strong>
              <input
                type="time"
                className="form-control"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="hora_fin_sesion">Fin de Sesión:</label>
              </strong>
              <input
                type="time"
                className="form-control"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="fecha_sesion">Fecha Sesión:</label>
              </strong>
              <input
                type="date"
                className="form-control"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong>
                <label htmlFor="sala">Sala:</label>
              </strong>
              <select
                className="form-control"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
              >
                <option value="">Selecciona una sala</option>
                {rooms.map((room) => (
                  <option key={room._id} value={room._id}>
                    {room.nom_sala}
                  </option>
                ))}
              </select>
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
              src="/session-img.png"
              alt="Rooms Index"
              style={{ width: "750px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSessionForm;