import axios from 'axios';


const api = axios.create({baseUrl: 'http://172.17.0.1:5000/data_discovery' });

export default api;