import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://back-web-iud.herokuapp.com/'
});

export {
    axiosInstance
}