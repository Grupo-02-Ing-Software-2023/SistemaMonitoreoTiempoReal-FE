import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDetails = ({ userId, token }) => {
    const [userData, setUserData] = useState(null);
    const apiUrl = `https://igf-backend-production.up.railway.app/api/capturas/usuario/${userId}`;

    useEffect(() => {
        if (userId && token) {
            axios
                .get(apiUrl, {
                    headers: {
                        "x-token": token,
                    },
                })
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching user details", error);
                });
        }
    }, [userId, token]);

    if (userData === null) {
        return <div>Sin datos</div>;
    }

    return (
        <section>
            <div>
                <h2>Capturas de Usuario</h2>
                <hr />
                <div>
                    {userData.map((user, index) => (
                        <div className="ps-5" key={index}>
                            {/* <p>URL Captura: {user.url_captura}</p> */}
                            <p>Nombre Captura: {user.nom_captura}</p>
                            <p>Fecha Captura: {user.fecha_captura}</p>
                            <img
                                src={user.url_captura}
                                alt="Captura"
                                style={{ height: "250px", width: "600px" }}
                            />
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserDetails;
