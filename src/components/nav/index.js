import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
}));

const Nav = (props) => {
    const styles = useStyles()
    return (
        <AppBar className={styles.root}>
            <Toolbar position='static' >
                <Typography className={styles.title}>InstaGC</Typography>
                <Button color='inherit'>Login</Button>
                { props.user && 
                    <Avatar alt='user-default' src='https://www.french-weekendbreaks.co.uk/sites/uk.picardiev3/themes/picardiev3/img_v2/user-default.jpg' />
                }
            </Toolbar>
        </AppBar>
    )
}
 
export default Nav
