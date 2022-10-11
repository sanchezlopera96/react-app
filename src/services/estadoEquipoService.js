import { axiosInstance } from '../helpers/axios-config';

// GET http://localhost:3001/estadoEquipo
// POST http://localhost:3001/estadoEquipo
// PUT http://localhost:3001/estadoEquipo

const getEstadoEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearEstadoEquipo = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editarEstadoEquipo = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getEstadoPorId = (estadoId) => {
    return axiosInstance.get(`estado-equipo/${estadoId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getEstadoEquipos, crearEstadoEquipo, editarEstadoEquipo, getEstadoPorId
}