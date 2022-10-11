import React from 'react';
import { Link } from 'react-router-dom';

export const TipoCard = (props) => {

    const { tipoEquipo } = props;
    return (
            <table className="table table-sm" key={tipoEquipo._id}>
            <tbody>
                <tr>
                <th scope="row">{tipoEquipo._id}</th>
                <td>{tipoEquipo.nombre}</td>
                <td>{tipoEquipo.estado}</td>
                <td>{tipoEquipo.fechaCreacion}</td>
                <td> 
                    <Link to={`tipo-equipo/edit/${tipoEquipo._id}`}>Ver más...</Link>
                </td>
                </tr>
            </tbody>
            </table>
    )
}