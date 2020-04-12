import axios from 'axios'
import { URL } from '../server/GLOBAL'

export const sLogin = (data) => {
    return axios.post(`${URL}/auth/login`, data)
}

export const sRegister = (data) => {
    return axios.post(`${URL}/auth/register`, data)
}
