import React from 'react';
import { Link } from 'react-router-dom';

export const EstadoCard = (props) => {

    const { estadoEquipo } = props;
    return (
            <table className="table table-sm" key={estadoEquipo._id}>
            <tbody>
                <tr>
                <th scope="row">{estadoEquipo._id}</th>
                <td>{estadoEquipo.nombre}</td>
                <td>{estadoEquipo.estado}</td>
                <td>{estadoEquipo.fechaCreacion}</td>
                <td> 
                    <Link to={`estado-equipo/edit/${estadoEquipo._id}`}>Ver más...</Link>
                </td>
                </tr>
            </tbody>
            </table>
    )
}