import React, { createContext, useState } from "react";

export const Context = createContext()

const Provider = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const tokenI = sessionStorage.getItem('token')

    const [ userAuth, setUserAuth ] = useState(user)
    const [ token, setToken ] = useState(tokenI)

    const value = {
        userAuth: userAuth,
        token: token,
        setUser: (user, token) => {
            sessionStorage.setItem('user', JSON.stringify(user))
            sessionStorage.setItem('token', token)
            setToken(token)
            setUserAuth(user)
        },
        removeUser: () => {
            sessionStorage.clear()
            setUserAuth('')
        }
    }

    return (
        <Context.Provider value={ value }>
            { children }
        </Context.Provider>
    )

}

export default {
    Provider,
    Consumer: Context.Consumer
}