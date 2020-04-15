import axios from 'axios'
import { URL } from '../server/GLOBAL'

export const getPosts = (token) => {
    return axios.get(`${URL}/posts`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const search = (query) => {
    if(query) return axios.get(`${URL}/search/${query}`)
    else return axios.get(`${URL}/search`)
}
