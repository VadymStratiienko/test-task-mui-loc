import axios from 'axios';

export const newsInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
});

export const productInstance = axios.create({
  baseURL: 'https://dummyjson.com/products/category/',
  timeout: 1000,
});
