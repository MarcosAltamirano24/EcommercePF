import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};

export const createProduct = async (product) => {
    const response = await api.post('/products', product);
    return response.data;
};