import React from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../server/GLOBAL'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      marginLeft: '9%'
    },
    data: {
      marginRight: '9%',
      display: 'flex',
      alignItems: 'center'
    },
    menu: {
        marginRight: 20
    }
}));

const Nav = (props) => {
    const styles = useStyles()
    return (
        <AppBar className={styles.root}>
            <Toolbar position='static' >
                <Typography className={`${styles.title} title-nav`}>
                    <Link to='/' className='link'>InstaGC</Link>
                </Typography>
                <div className={styles.data}>
                { !props.user && 
                    <Button color='inherit'>
                        <Link to='/login' className='link'>Login</Link>
                    </Button>
                }
                </div>
                { props.user && 
                <div className={`${styles.data} nav-user`}>
                    <Typography style={{marginRight: 5, marginLeft: 20}}>{props.user.name}</Typography>
                    <Avatar alt='user-default' src={`${URL}/img/${props.user.avatar}`} />
                </div>
                }
                
            </Toolbar>
        </AppBar>
    )
}
 
export default Nav
