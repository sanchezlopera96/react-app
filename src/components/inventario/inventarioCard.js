import React from 'react';
import { Link } from 'react-router-dom';

export const InventarioCard = (props) => {

    const { inventario } = props;
    return (
        <div className="col" key={inventario._id}>
        <div className="card">
          <img src={inventario.foto} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Características</h5>
            <hr/>
            <p className="card-text">{`Serial: ${inventario.serial}`}</p>
            <p className="card-text">{`Modelo: ${inventario.modelo}`}</p>
            <p className="card-text">{`Nombre: ${inventario.marca.nombre}`}</p>
            <p className="card-text">{`Usuario: ${inventario.usuario.nombre}`}</p>
            <p className="card-text">{`Fecha Compra: ${inventario.fechaCompra}`}</p>
            <p className="card-text">{`Precio: ${inventario.precio}`}</p>
            <p className="card-text">{`Descripción: ${inventario.descripcion}`}</p>
            <p className='card-text'>
              <Link to={`inventario/edit/${inventario._id}`}>Ver más...</Link>
            </p>
            
          </div>
        </div>
      </div>
    )
}