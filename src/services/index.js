import axios from "axios"
export const apiBase = "https://jsonplaceholder.typicode.com";

const $api = axios.create({
    baseURL: apiBase,
})

export const getPosts = async () => {
    return await $api.get('/posts');
}

export const getUsers = async (id) => {
    return await $api.get('/users/' + id)
}

export const getPost = async (id) => {
    return await $api.get('/posts/' + id)
}