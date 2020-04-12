import React, { createContext, useState } from "react";

export const Context = createContext()

const Provider = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    const [ userAuth, setUserAuth ] = useState(user)

    const value = {
        userAuth: userAuth,
        setUser: (user, token) => {
            sessionStorage.setItem('user', JSON.stringify(user))
            sessionStorage.setItem('token', token)
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