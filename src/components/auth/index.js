import React from 'react'
import Register from './register'
import Login from './login'

const Auth = (props) => {

    return (
        <>
            { (props.match.path === '/register') &&
                <Register />
            }
            { (props.match.path === '/login') &&
                <Login />
            }
        </>
    )
}
 
export default Auth
