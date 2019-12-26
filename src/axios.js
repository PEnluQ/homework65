import axios from 'axios';

const axiosP = axios.create({
    baseURL: 'https://js-homework-penluq.firebaseio.com/'
});

export default axiosP;