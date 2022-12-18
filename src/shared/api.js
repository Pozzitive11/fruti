import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fruti-d3a43-default-rtdb.firebaseio.com/',
});



export default instance;
