import React , { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTipoPorId, editarTipoEquipo } from '../../services/tipoEquipoService';
import Swal from 'sweetalert2';





export const TipoUpdate = () => {

  const {tipoId = ''} = useParams();
  console.log(tipoId);
  const [ tipoEquipo, setTipo] = useState({});
  const [ valoresForm, setValoresForm] = useState([]);
  
  const {nombre = '', estado = '', fechaCreacion = ''} = valoresForm;

  const getTipo = async () => {
    try{
        const { data } = await getTipoPorId(tipoId);
        console.log(data);
        setTipo(data);
    }catch(error){
        console.log(error);
    }
  }
  useEffect(()=> {
    getTipo();
  }, [ tipoId ]);

useEffect(() =>{
    if(tipoEquipo){
       setValoresForm({
        nombre: tipoEquipo.nombre,
        estado: tipoEquipo.estado,
        fechaCreacion: tipoEquipo.fechaCreacion
       });
    }
}, [ tipoEquipo ]);


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm ({...valoresForm, [name]: value})
}

  const handleonSubmit = async (e) => {
    e.preventDefault();
    const tipoEquipo = {
        nombre, estado, fechaCreacion
    }
    console.log(tipoEquipo);
    try{
        Swal.fire({
            allowOutsideClick: false,
            text: 'Cargando...'
        });
        Swal.showLoading();
        const { data } = await editarTipoEquipo(tipoId ,tipoEquipo);
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
                <h5 className='card-title'>Detalle Tipo</h5>
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
