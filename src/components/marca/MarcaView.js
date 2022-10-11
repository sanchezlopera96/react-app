import React, { useState, useEffect } from 'react';
import { getMarcas, crearMarca} from '../../services/marcaService';
import { MarcaCard } from './marcaCard';
import { MarcaNew } from './marcaNew';

export const MarcaView = () => {

  const [ marcas, setMarcas ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarMarcas = async () => {
    try {
      const { data } = await getMarcas();
      console.log(data);
      setMarcas(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarMarcas();
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
                marcas.map((marca) => {
                   return <MarcaCard key={marca._id} marca={ marca }/>
                })
             }
         </div>
         {
          openModal ? <MarcaNew handleOpenModal = { handleOpenModal } listarMarcas={ listarMarcas}/> : 
          (<button className='btn btn-primary fab' onClick={ handleOpenModal }>
           <i className='fa-solid fa-plus'></i>
          </button>)
         }
    </div>
  )
}
