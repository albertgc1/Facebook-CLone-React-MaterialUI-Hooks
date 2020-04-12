import React from 'react'

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

const Register = () => {
    const styles = useStyles()
    return (
        <Grid className={styles.root} container spacing={2}>
            <Grid item md={12} xs={12}>
                <Typography variant='h4'>Crea una cuenta</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField label='Nombre' fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='email' label='Correo' fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='password' label='Contraseña' fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='password' label='Confirmar contraseña' fullWidth />
            </Grid>
            <Grid className={styles.btnEnter} item md={12} xs={12} >
                <Button variant='contained' color='primary'>Registrarse</Button>
            </Grid>
        </Grid>
    )
}
 
export default Register
