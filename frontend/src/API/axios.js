import axios from 'axios';
const instanceAxios=axios.create({
    baseURL:'http://localhost:3000/api',
})
export default instanceAxios;