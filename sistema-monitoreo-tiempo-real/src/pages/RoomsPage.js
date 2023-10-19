import RoomsTable from "../components/Rooms/RoomsTable";

const RoomsPage = () => {
    return(
        <div className="container">
            <h1 className="text-center">Listado de Salas</h1>
            <div>
                <button type="button" className="btn btn-primary btn-lg shadow"> Nueva Sala </button>
                <RoomsTable />
            </div>
        </div>
    );
};

export default RoomsPage;