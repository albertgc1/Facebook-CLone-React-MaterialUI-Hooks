import React from 'react'
import Register from './register'
import Login from './login'

const Auth = (props) => {
    console.log(props.match.path)
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
