import { axiosInstance } from '../helpers/axios-config';

// GET http://localhost:3001/marca
// POST http://localhost:3001/marca
// PUT http://localhost:3001/marca

const getMarcas = () => {
    return axiosInstance.get('marca', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearMarca = (data) => {
    return axiosInstance.post('marca', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editarMarca = (marcaId, data) => {
    return axiosInstance.put(`marca/${marcaId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


const getMarcaPorId = (marcaId) => {
    return axiosInstance.get(`marca/${marcaId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getMarcas, crearMarca, editarMarca, getMarcaPorId
}