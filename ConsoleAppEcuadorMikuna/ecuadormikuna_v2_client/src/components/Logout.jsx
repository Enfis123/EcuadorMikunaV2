import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logout = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            // Realizar la solicitud POST para cerrar sesi�n
            await axios.post('http://localhost:5150/api/account/logout');

            // Limpiar cualquier informaci�n de sesi�n del lado del cliente si es necesario
            // Por ejemplo, limpiar localStorage o sessionStorage
            localStorage.clear(); // Ejemplo de limpieza del localStorage

            // Mostrar un mensaje de �xito al usuario
            console.log('Logout exitoso');

            // Redireccionar al usuario a la p�gina de inicio de sesi�n o la p�gina principal
            history.push('/login');
        } catch (error) {
            console.error('Error al intentar cerrar sesi�n:', error);
            // Manejar el error adecuadamente, por ejemplo, mostrando un mensaje al usuario
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Cerrar Sesi�n</h2>
                            <p className="text-center">�Est�s seguro de que quieres cerrar sesi�n?</p>
                            <div className="text-center">
                                <button type="button" className="btn btn-danger mr-2" onClick={handleLogout}>
                                    Cerrar Sesi�n
                                </button>
                                <Link to="/" className="btn btn-secondary">
                                    Volver a la p�gina principal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;
