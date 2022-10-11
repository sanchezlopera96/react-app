import React, { useState, useEffect } from 'react';
import { getUsuarios, crearUsuario} from '../../services/usuarioService';
import { UsuarioCard } from './usuarioCard';
import { UsuarioNew } from './usuarioNew';

export const UsuarioView = () => {

  const [ usuarios, setUsuarios ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();
      console.log(data);
      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios();
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
                <th scope="col">Email</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha de Creación</th>
                <th scope="col">    Detalles</th>
                </tr>
            </thead>
            </table>
         <div className='mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4'>
             {
                usuarios.map((usuario) => {
                   return <UsuarioCard key={usuario._id} usuario={ usuario }/>
                })
             }
         </div>
         {
          openModal ? <UsuarioNew handleOpenModal = { handleOpenModal } listarUsuarios={ listarUsuarios}/> : 
          (<button className='btn btn-primary fab' onClick={ handleOpenModal }>
           <i className='fa-solid fa-plus'></i>
          </button>)
         }
    </div>
  )
}
