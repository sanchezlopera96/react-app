import React, { useState, useEffect } from 'react';
import { getUsuarios } from '../../services/usuarioService';
import { getMarcas } from '../../services/marcaService';
import { getTipoEquipos } from '../../services/tipoEquipoService';
import { getEstadoEquipos } from '../../services/estadoEquipoService';
import {crearInventario} from '../../services/inventarioService';
import Swal from 'sweetalert2';

export const InventarioNew= ({handleOpenModal, listarInventarios}) => {
    
    const [ usuarios, setUsuarios] = useState([]);
    const [ marcas, setMarcas] = useState([]);
    const [ tipos, setTipoEquipos] = useState([]);
    const [ estados, setEstadosEquipos] = useState([]);
    const [ valoresForm, setValoresForm] = useState([]);
    const {serial = '', modelo = '', descripcion = '', color = '', foto = '', fechaCompra = '', precio= '', marca= '', tipo= '', estado= '', usuario = ''} = valoresForm;

    const listarUsuarios = async() => {
        try{
            const {data} = await getUsuarios();
            setUsuarios(data);
            console.log(data);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
       listarUsuarios();
    }, []);

    const listarMarcas = async() => {
        try{
            const {data} = await getMarcas();
            setMarcas(data);
            console.log(data);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        listarMarcas();
    }, []);

    const listarTipoEquipos = async() => {
        try{
            const {data} =  await getTipoEquipos();
            setTipoEquipos(data);
            console.log(data);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipoEquipos();
    }, []);

    const listarEstadoEquipo = async() => {
        try{
            const {data} = await getEstadoEquipos();
            setEstadosEquipos(data);
            console.log(data);
        } catch(error){
            console.log(error);
        }

    }

    useEffect(() => {
        listarEstadoEquipo();
    }, []);

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm ({...valoresForm, [name]: value})
    }
    const handleonSubmit = async (e) => {
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, color, foto, fechaCompra, precio, 
            marca: {
                _id: marca
            }, 
            tipoEquipo: {
                _id: tipo
            } , 
            estadoEquipo: {
                _id: estado
            }, 
            usuario: {
                _id: usuario
            }
        }
        console.log(inventario);
        try{
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearInventario(inventario);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarInventarios();
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
                              <h3>Nuevo inventario</h3>
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
                            <label className="form-label">Serial</label>
                            <input type="text" name='serial' value={serial} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Modelo</label>
                            <input type="text" name='modelo' value={modelo} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <input type="text" name='descripcion' value={descripcion} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Color</label>
                            <input type="text" name='color' value={color}  onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Foto</label>
                            <input type="link" name='foto' value={foto} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Fecha compra</label>
                            <input type="date" name='fechaCompra' value={fechaCompra}  onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="number" name='precio' value={precio} required onChange= { (e) => handleOnChange(e) } className="form-control"/>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Usuario</label>
                            <select className="form-select" name='usuario' value={usuario} required onChange= { (e) => handleOnChange(e) }>
                                <option value="">--Seleccione--</option>
                                {
                                    usuarios.map(({_id, nombre}) =>{
                                        return <option key={_id} value={_id}>{nombre}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Marca</label>
                            <select className="form-select" name='marca' value={marca} required onChange= { (e) => handleOnChange(e) }>
                                <option value="">--Seleccione--</option>
                                    {
                                        marcas.map(({_id, nombre}) =>{
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        })
                                    }
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Tipo</label>
                            <select className="form-select" name='tipo' value={tipo} required onChange= { (e) => handleOnChange(e) }>
                                <option value="">--Seleccione--</option>
                                        {
                                            tipos.map(({_id, nombre}) =>{
                                                return <option key={_id} value={_id}>{nombre}</option>
                                            })
                                        }
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="mb-3">
                            <label className="form-label">Estado Equipo</label>
                            <select className="form-select" name='estado' value={estado} required onChange= { (e) => handleOnChange(e) }>
                                <option value="">--Seleccione--</option>
                                            {
                                                estados.map(({_id, nombre}) =>{
                                                    return <option key={_id} value={_id}>{nombre}</option>
                                                })
                                            }
                            </select>
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