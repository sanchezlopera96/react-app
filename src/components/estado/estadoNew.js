import React, { useState, useEffect } from 'react';
import { getEstadoEquipos } from '../../services/estadoEquipoService';
import {crearEstadoEquipo} from '../../services/estadoEquipoService';
import Swal from 'sweetalert2';

export const EstadoNew= ({handleOpenModal, listarEstados}) => {
    
    const [ valoresForm, setValoresForm] = useState([]);
    const {nombre = '', estado = '', fechaCreacion = ''} = valoresForm;

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm ({...valoresForm, [name]: value})
    }
    const handleonSubmit = async (e) => {
        e.preventDefault();
        const estadoEquipo = {
            nombre, estado, fechaCreacion 
        }
        console.log(estadoEquipo);
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearEstadoEquipo(estadoEquipo);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarEstados();
        }catch(error){
            console.log(error);
            Swal.close();
        }
    } 

    return (
        <div className="sidebar">
            <div className='container-fluid'>
                <div className='row'> 
                     <div className='col'>
                         <div className='sidebar-header'>
                              <h3>Nuevo Estado</h3>
                              <i className='fa-solid fa-xmark' onClick={ handleOpenModal }></i>
                         </div>
                     </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <hr/>
                    </div>
                </div>
                <form onSubmit = { (e) => handleonSubmit(e) }>
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" name='nombre' value={nombre} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Estado</label>
                            <select className="form-select" name='estado' value={estado} required onChange= { (e) => handleOnChange(e) }>
                                <option value="">--Seleccione--</option>
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Fecha Creación</label>
                            <input type="date" name='fechaCreacion' value={fechaCreacion}  onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                     <div className='col'>
                        <button className='btn btn-primary'>Guardar</button>
                     </div>
                </div>
            </form>
            </div>
        </div>
    )
}