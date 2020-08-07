import React, { useState } from 'react'

import { makeStyles, Grid, TextField, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '90%',
        margin: '0 auto',
        textAlign: 'center',
    },
    btnEnter: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px 0'
    }
}))

const Register = ({ register }) => {
    const styles = useStyles()
    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirm, setPasswordConfirm ] = useState('')
    const [ helpText, setHelpText ] = useState('')

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(password.length === 0) setHelpText('')
        if(password.length < 7) setHelpText('débil')
        if(password.length >= 7 && password.length < 10) setHelpText('segura')
        if(password.length >= 10) setHelpText('muy segura')
    }

    const registerUser = () => {
        let user = { name, last_name: lastName, email, password }
        register(user)
    }

    return (
        <Grid className={styles.root} container spacing={2}>
            <Grid item md={12} xs={12}>
                <Typography variant='h4'>Crea una cuenta</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField label='Nombre' onChange={e => setName(e.target.value)} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField label='Apellidos' onChange={e => setLastName(e.target.value)} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='email' label='Correo' onChange={e => setEmail(e.target.value)} fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField 
                    type='password' 
                    label='Contraseña' 
                    onChange={handlePassword} 
                    helperText={helpText} 
                    color={ helpText==='débil' ? 'secondary': 'primary' }
                    fullWidth 
                />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField 
                    type='password' 
                    label='Confirmar contraseña' 
                    onChange={e => setPasswordConfirm(e.target.value)}
                    color={ passwordConfirm === password ? 'primary': 'secondary'}
                    fullWidth 
                />
            </Grid>
            <Grid className={styles.btnEnter} item md={12} xs={12} >
                <Button 
                    variant='contained' 
                    color='primary' 
                    onClick={registerUser} 
                    disabled={passwordConfirm === password ? false : true}>
                    Registrarse
                </Button>
            </Grid>
        </Grid>
    )
}
 
export default Register
