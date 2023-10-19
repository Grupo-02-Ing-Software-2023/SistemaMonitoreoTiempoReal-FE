import "../App.css";
import MenuItem from "../components/Dashboard/MenuItem";

const DashboardPage = () => {
  const menuItems = [
    { titulo: "Usuarios", imagen: "/users-index.png" },
    { titulo: "Empleados", imagen: "/employees-index.png" },
    { titulo: "Sesiones", imagen: "/sessions-index.png" },
    { titulo: "Salas", imagen: "/rooms-index.png" },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Página Principal</h1>
      <div>
        <div class="row mt-4">
          <div class="col-md-6">
            <MenuItem titulo="Usuarios" imagen="/users-index.png" ruta="/users" />
          </div>
          <div class="col-md-6">
            <MenuItem titulo="Empleados" imagen="/employees-index.png" ruta="/employees" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-6">
            <MenuItem titulo="Sesiones" imagen="/sessions-index.png" ruta="/sessions" />
          </div>
          <div class="col-md-6">
            <MenuItem titulo="Salas" imagen="/rooms-index.png" ruta="/rooms" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
