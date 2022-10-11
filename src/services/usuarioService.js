import { axiosInstance } from '../helpers/axios-config';

// GET http://localhost:3001/usuario
// POST http://localhost:3001/usuario
// PUT http://localhost:3001/usuario

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearUsuario = (data) => {
    return axiosInstance.post('usuario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editarUsuario = (usuarioId, data) => {
    return axiosInstance.put(`usuario/${usuarioId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getUsuarioPorId = (usuarioId) => {
    return axiosInstance.get(`usuario/${usuarioId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getUsuarios, crearUsuario, editarUsuario, getUsuarioPorId
}