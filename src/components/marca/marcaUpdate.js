import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMarcaPorId, editarMarca } from '../../services/marcaService';
import Swal from 'sweetalert2';





export const marcaUpdate = () => {

  const {marcaId = ''} = useParams();
  console.log(marcaId);
  const [ marca, setMarca] = useState({});
  const [ valoresForm, setValoresForm] = useState([]);
  
  const {nombre = '', estado = '', fechaCreacion = ''} = valoresForm;

  const getMarca = async () => {
    try{
        const { data } = await getMarcaPorId(marcaId);
        console.log(data);
        setMarca(data);
    }catch(error){
        console.log(error);
    }
  }
  useEffect(()=> {
    getMarca();
  }, [ marcaId ]);

useEffect(() =>{
    if(marca){
       setValoresForm({
        nombre: marca.nombre,
        estado: marca.estado,
        fechaCreacion: marca.fechaCreacion
       });
    }
}, [ marca ]);


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm ({...valoresForm, [name]: value})
}

  const handleonSubmit = async (e) => {
    e.preventDefault();
    const marca = {
        nombre, estado, fechaCreacion
    }
    console.log(marca);
    try{
        Swal.fire({
            allowOutsideClick: false,
            text: 'Cargando...'
        });
        Swal.showLoading();
        const { data } = await editarMarca(marcaId ,marca);
        console.log(data);
        Swal.close();
    }catch(error){
        console.log(error);
        Swal.close();
    }
} 


return (
    <div className='container-fluid mt-3 mb-2'>
        <div className='card'>
            <div className='card-header'>
                <h5 className='card-title'>Detalle Marca</h5>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-8'>
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
                                    <button className='btn btn-primary'>Actualizar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
