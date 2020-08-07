import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:1337',
    baseURL: 'https://proffy-server-deploy.herokuapp.com/',
});

export default api;