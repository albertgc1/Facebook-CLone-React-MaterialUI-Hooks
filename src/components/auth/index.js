import React, { useContext, useState } from 'react'
import Register from './register'
import Login from './login'
import { sLogin, sRegister } from '../../containers/auth.container'
import { Context } from '../../server/Context'
import LinearProgress from '@material-ui/core/LinearProgress'

const Auth = (props) => {

    const { setUser } = useContext(Context)
    const [ loading, setLoading ] = useState(false)

    const login = (data) => {
        setLoading(true)
        sLogin(data)
            .then(res => {
                setLoading(false)
                setUser(res.data.user, res.data.token)
                props.history.push('/')
            })
            .catch(e => console.log(e))
    }

    const register = (data) => {
        setLoading(true)
        sRegister(data)
            .then(res => {
                setLoading(false)
                setUser(res.data.user, res.data.token)
                props.history.push('/')
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <div style={{ marginTop: '67px' }}></div>
            { loading && <LinearProgress color="secondary" /> }
            { (props.match.path === '/register') &&
                <Register register={ register } />
            }
            { (props.match.path === '/login') &&
                <Login login={ login } />
            }
        </>
    )
}
 
export default Auth
