import axios from 'axios'
import { URL } from '../server/GLOBAL'

const token = sessionStorage.getItem('token')

export const getPosts = () => {
    return axios.get(`${URL}/posts`, {headers: {'Authorization': `Bearer ${token}`}})
}
