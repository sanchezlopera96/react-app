import React, { useState, useEffect } from 'react';
import { getTipoEquipos, crearTipoEquipo} from '../../services/tipoEquipoService';
import { TipoCard } from './tipoCard';
import { TipoNew } from './tipoNew';

export const TipoView = () => {

  const [ tipos, setTipos ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarTipos = async () => {
    try {
      const { data } = await getTipoEquipos();
      console.log(data);
      setTipos(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarTipos();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='container-fluid'>
       <table className="table">
            <thead>
                <tr>
                <th scope="col">ID             </th>
                <th scope="col">     Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha de Creación</th>
                <th scope="col">    Detalles</th>
                </tr>
            </thead>
            </table>
         <div className='mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4'>
             {
                tipos.map((tipoEquipo) => {
                   return <TipoCard key={tipoEquipo._id} tipoEquipo={ tipoEquipo }/>
                })
             }
         </div>
         {
          openModal ? <TipoNew handleOpenModal = { handleOpenModal } listarTipos={ listarTipos}/> : 
          (<button className='btn btn-primary fab' onClick={ handleOpenModal }>
           <i className='fa-solid fa-plus'></i>
          </button>)
         }
    </div>
  )
}
