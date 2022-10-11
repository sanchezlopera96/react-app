import { axiosInstance } from '../helpers/axios-config';

// GET http://localhost:3001/tipoEquipo
// POST http://localhost:3001/tipoEquipo
// PUT http://localhost:3001/tipoEquipo

const getTipoEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearTipoEquipo = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editarTipoEquipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getTipoPorId = (tipoId) => {
    return axiosInstance.get(`tipo-equipo/${tipoId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


export {
    getTipoEquipos, crearTipoEquipo, editarTipoEquipo, getTipoPorId
}