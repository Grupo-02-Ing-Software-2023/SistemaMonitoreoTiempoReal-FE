import React, { useState } from "react";

const CreateSessionForm = () => {
  const [sessionDate, setSessionDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [screenshotPerSession, setScreenshotPerSession] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("A form was submitted: ", {
      sessionDate,
      startTime,
      endTime,
      screenshotPerSession,
      frequency,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center"> Nueva Sesión </h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong><label htmlFor="sessionDate">Fecha de Sesión:</label></strong>
              <input
                type="date"
                className="form-control"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="startTime">Hora de Inicio:</label></strong>
              <input
                type="time"
                className="form-control"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="endTime">Hora de Finalización:</label></strong>
              <input
                type="time"
                className="form-control"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="screenshotPerSession">
                Capturas por Sesión:
              </label></strong>
              <select
                className="form-control"
                value={screenshotPerSession}
                onChange={(e) => setScreenshotPerSession(e.target.value)}
              >
                <option value="">Ninguna</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="frequency">Frecuencia:</label></strong>
              <input
                type="number"
                className="form-control"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
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
