import axios from 'axios';

const API_HOST = 'http://localhost:8888';

const getAllSources = () => {
    return axios.get(`${API_HOST}/source`)
};

const getSourceById = (sid) => {
    return axios.get(`${API_HOST}/source/${sid}`)
};

export default {
    getAllSources,
    getSourceById
}