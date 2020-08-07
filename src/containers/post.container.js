import axios from 'axios'
import { URL } from '../server/GLOBAL'

export const getPosts = (token) => {
    return axios.get(`${URL}/posts`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const savePost = (data, token) => {
    return axios.post(`${URL}/posts`, data, {headers: {'Authorization': `Bearer ${token}`}})
}

export const search = (query) => {
    if(query) return axios.get(`${URL}/search/${query}`)
    else return axios.get(`${URL}/search`)
}

export const setLike = (id, token) => {
    return axios.post(`${URL}/posts/like`, { post_id: id }, {headers: {'Authorization': `Bearer ${token}`}})
}

export const getCommentsPost = (id, token) => {
    return axios.get(`${URL}/posts/${id}`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const uploadImage = (token, data) => {
    return axios.post(
        `${URL}/posts/photo`, 
        data, 
        {headers: {'Content-type': 'multipart/form-data', 'Authorization': `Bearer ${token}`}}
    )
}
