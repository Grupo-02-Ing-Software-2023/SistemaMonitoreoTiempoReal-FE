import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Link to={props.ruta}>
      <div class="card shadow">
        <h5 class="card-header">{props.titulo}</h5>
        <div className="card-body d-flex justify-content-center align-items-center">
          <img
            className="align-center"
            src={props.imagen}
            alt="Rooms Index"
            style={{ width: "250px" }}
          />
        </div>
      </div>
    </Link>
  );
};
export default MenuItem;
