import React, { useState } from "react";

const RoomForm = ({ roomName, setRoomName, employeeList, setEmployeeList }) => {
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRoomName(selectedEmployee);
    setEmployeeList(
      employeeList.filter((employee) => employee !== selectedEmployee)
    );
    setSelectedEmployee("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center"> Nueva Sala </h1>
      <div className="d-flex align-items-center">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <strong><label htmlFor="roomName">Nombre de Sala:</label></strong>
              <input
                type="text"
                className="form-control"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div className="form-group pt-2">
              <strong><label htmlFor="screenshotPerSession">
                Empleados
              </label></strong>
              <select
                className="form-control"
              >
                <option value="">---</option>
                <option value="1">Kevin Villalta</option>
                <option value="2">Kevin Lemus</option>
                <option value="3">Marlón Coreas</option>
              </select>
            </div>

            {/* <div className="form-group">
        <label htmlFor="selectedEmployee">Employee:</label>
        <select
          className="form-control"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">None</option>
          {employeeList.map((employee) => (
            <option key={employee} value={employee}>
              {employee}
            </option>
          ))}
        </select>
      </div> */}
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
              src="/room-img.png"
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
