import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-e5a75.firebaseio.com/'
});

export default instance;