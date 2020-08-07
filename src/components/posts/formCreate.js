import React, { useState } from 'react'
import { URL } from '../../server/GLOBAL'

import { makeStyles } from '@material-ui/core/styles'
import { Card, TextField, CardActions, Button, Typography, CircularProgress  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 422,
      minWidth: 200,
      
      marginBottom: 14,
    },
    form: {
        width: '98%',
        margin: '0 auto',
        marginBottom: 5
    },
    cardImage: {
        width: '98%',
        height: 200,
        margin: '0 auto',
        border: '1px solid #00000047',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    progress: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const FormCreate = ({storeImage, photo, loadImage, storePost, description, setDes}) => {
    const classes = useStyles()
    const [ active, setActive ] = useState(false)

    const sendPost = () => {
        storePost()
        setActive(false)
    }

    return (
        <Card className={classes.root}>
            <form className={classes.form} noValidate autoComplete="off">
                <div style={{width: '100%'}}>
                    <TextField
                    id="standard-multiline-flexible"
                    label="Comparte algo aquí..."
                    multiline
                    fullWidth
                    onClick={() => setActive(true)}
                    onChange={(e) => setDes(e.target.value)}
                    value={description}
                    />
                </div>
            </form>
            { active &&
            <> 
                { loadImage 
                 ?
                  <div className={classes.progress}>
                    <CircularProgress />
                  </div>
                  :
                    <div className={classes.cardImage}>
                        { photo
                          ? <img src={`${URL}/img/${photo}`} className={classes.image}/>
                          : <>
                            <Typography>Sube una imagen</Typography>
                            <input type='file' onChange={(e) => storeImage(e.target.files[0])} />
                            </>
                        }
                    </div>
                }
                <CardActions style={{justifyContent: 'space-between'}}>
                    <Button size="small" color="primary" onClick={() => setActive(false)}>
                        Cancelar
                    </Button>
                    <Button size="small" color="primary" onClick={sendPost}>
                        Publicar
                    </Button>
                </CardActions> 
            </>
            }
        </Card>
    );
}
 
export default FormCreate
