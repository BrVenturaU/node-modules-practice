const axios = require('axios').default;
// Define la URL base para las solicitudes HTTP.
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const get = async (total=10, reverse=false) => {
    try {
        const response = await axios.get('posts');
        const data = response.data;
        const slicePosts = reverse ? data.reverse().slice(0, total) : data.slice(0, total);
        return slicePosts;
    } catch (error) {
        console.log(error.message);
    }   
}

const getById = async (id) => {
    try {
        const response = await axios.get(`posts/${id}`);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error.message);
    }   
}

const post = async(data) => {
    try {
        const response = await axios.post('posts', data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

const put = async(id, data) => {
    try {
        const response = await axios.put(`posts/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}

const deletePost = async (id) => {
    try {
        const response = await axios.delete(`posts/${id}`);
        return 'Registro eliminado con exito.';
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = {
    get,
    getById,
    post,
    put,
    deletePost
}