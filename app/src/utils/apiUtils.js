import axios from 'axios';

const API_HOST = 'http://localhost:8888';

const getAllSources = () => {
    return axios.get(`${API_HOST}/source`)
};

const getSourceById = (sid) => {
    return axios.get(`${API_HOST}/source/${sid}`)
};

const getMessagesBySourceId = (sid) => {
    return axios.get(`${API_HOST}/source/${sid}/message`)
}

export default {
    getAllSources,
    getSourceById,
    getMessagesBySourceId
}