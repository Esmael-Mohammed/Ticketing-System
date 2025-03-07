import axios from 'axios';
const instanceAxios=axios.create({
    baseURL:'http://localhost:5000/api',
})
export default instanceAxios;