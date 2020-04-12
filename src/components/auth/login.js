import React, { useState } from 'react'

import { makeStyles, Grid, TextField, Typography, Button } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import GTranslate from '@material-ui/icons/GTranslate'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '90%',
        margin: '0 auto',
        textAlign: 'center',
    },
    btnEnter: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '10px 0'
    },
    btnSocials: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: 'none'
    }
}))

const Login = (props) => {
    const styles = useStyles()

    const [ email, setEmail ] = useState('albert@gmail.com')
    const [ password, setPassword ] = useState('albert123')

    const login = () => {
        let data = { email, password }
        props.login(data)
    }

    return (
        <Grid className={styles.root} container spacing={2}>
            <Grid item md={12} xs={12}>
                <Typography variant='h4'>Autentícate</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='email' label='Correo' fullWidth 
                onChange={e => setEmail(e.target.value)} value={email} />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='password' label='password' fullWidth 
                onChange={e => setPassword(e.target.value)} value={password} />
            </Grid>
            <Grid className={styles.btnEnter} item md={12} xs={12} >
                <Button variant='contained' color='primary' onClick={login}>Entrar</Button>
            </Grid>
            <Grid item md={12} xs={12}>
                <Typography variant='h6'>Aún no tienes cuenta? crea uno 
                    <Link to='/register' className={styles.link}> aquí </Link>
                </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
                <Typography variant='h6'>O inicia sesión con:</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
                <Button className={styles.btnSocials} variant='contained' color='primary' fullWidth
                 startIcon={<Facebook />}>Facebook</Button>
            </Grid>
            <Grid item md={12} xs={12}>
                <Button className={styles.btnSocials} variant='contained' fullWidth
                 startIcon={<GTranslate />}>Google</Button>
            </Grid>
        </Grid>
    )
}
 
export default Login
