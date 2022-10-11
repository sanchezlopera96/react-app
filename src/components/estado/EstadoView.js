import React, { useState, useEffect } from 'react';
import { getEstadoEquipos, crearEstadoEquipo} from '../../services/estadoEquipoService';
import { EstadoCard } from './estadoCard';
import { EstadoNew } from './estadoNew';

export const EstadoView = () => {

  const [ estados, setEstados ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarEstados = async () => {
    try {
      const { data } = await getEstadoEquipos();
      console.log(data);
      setEstados(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarEstados();
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
                estados.map((estadoEquipo) => {
                   return <EstadoCard key={estadoEquipo._id} estadoEquipo={ estadoEquipo }/>
                })
             }
         </div>
         {
          openModal ? <EstadoNew handleOpenModal = { handleOpenModal } listarEstados={ listarEstados}/> : 
          (<button className='btn btn-primary fab' onClick={ handleOpenModal }>
           <i className='fa-solid fa-plus'></i>
          </button>)
         }
    </div>
  )
}