import React from 'react';
import { Link } from 'react-router-dom';

export const UsuarioCard = (props) => {

    const { usuario } = props;
    return (
            <table className="table table-sm" key={usuario._id}>
            <tbody>
                <tr>
                <th scope="row">{usuario._id}</th>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.estado}</td>
                <td>{usuario.fechaCreacion}</td>
                <td> 
                    <Link to={`usuario/edit/${usuario._id}`}>Ver más...</Link>
                </td>
                </tr>
            </tbody>
            </table>
    )
}