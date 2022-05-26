import axios from 'axios';

const getTest = async () =>
  axios.get('https://jsonplaceholder.typicode.com/posts/1');

export { getTest };
