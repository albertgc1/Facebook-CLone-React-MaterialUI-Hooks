import React from 'react'

import { makeStyles, Grid, TextField, Typography, Button } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import GTranslate from '@material-ui/icons/GTranslate'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '90%',
        margin: '70px auto',
        textAlign: 'center',
    },
    btnEnter: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '10px 0'
    },
    btnSocials: {
        margin: theme.spacing(1),
    }
}))

const Login = () => {
    const styles = useStyles()
    return (
        <Grid className={styles.root} container spacing={2}>
            <Grid item md={12} xs={12}>
                <Typography variant='h4'>Autentícate</Typography>
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='email' label='Correo' fullWidth />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField type='password' label='password' fullWidth />
            </Grid>
            <Grid className={styles.btnEnter} item md={12} xs={12} >
                <Button variant='contained' color='primary'>Entrar</Button>
            </Grid>
            <Grid item md={12} xs={12}>
                <Typography variant='h6'>Aún no tienes cuenta? crea uno aquí</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
                <Typography variant='h6'>O puedes:</Typography>
            </Grid>
            <Grid item md={12} xs={12}>
                <Button className={styles.btnSocials} variant='contained' color='primary'
                 startIcon={<Facebook />}>Iniciar sesión con Facebook</Button>
            </Grid>
            <Grid item md={12} xs={12}>
                <Button className={styles.btnSocials} variant='contained'
                 startIcon={<GTranslate />}>Iniciar sesión con Google +</Button>
            </Grid>
        </Grid>
    )
}
 
export default Login
