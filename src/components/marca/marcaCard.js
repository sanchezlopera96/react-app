import React from 'react';
import { Link } from 'react-router-dom';

export const MarcaCard = (props) => {

    const { marca } = props;
    return (
            <table className="table table-sm" key={marca._id}>
            <tbody>
                <tr>
                <th scope="row">{marca._id}</th>
                <td>{marca.nombre}</td>
                <td>{marca.estado}</td>
                <td>{marca.fechaCreacion}</td>
                <td> 
                    <Link to={`marca/edit/${marca._id}`}>Ver más...</Link>
                </td>
                </tr>
            </tbody>
            </table>
    )
}