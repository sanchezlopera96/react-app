import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../services/usuarioService';
import {crearUsuario} from '../../services/usuarioService';
import Swal from 'sweetalert2';

export const UsuarioNew= ({handleOpenModal, listarUsuarios}) => {
    
    const [ valoresForm, setValoresForm] = useState([]);
    const {nombre = '', email = '', estado = '', fechaCreacion = ''} = valoresForm;

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm ({...valoresForm, [name]: value})
    }
    const handleonSubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            nombre, email, estado, fechaCreacion 
        }
        console.log(usuario);
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearUsuario(usuario);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarUsuarios();
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
                              <h3>Nuevo Usuario</h3>
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
                            <label className="form-label">Email</label>
                            <input type="email" name='email' value={email} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
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