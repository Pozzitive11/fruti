import axios from 'axios';
const baseUrl = '';

export const getNotes = (searchQuery) => {
  return axios.get(`https://fruti-d3a43-default-rtdb.firebaseio.com/${searchQuery}`).then((response) => response.data);
};

console.log(getNotes());