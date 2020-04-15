import React from 'react'
import Posts from './posts'
import Profile from './user'
import Search from './search'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      margin: '40px auto'
    },
    posts: {
        width: 400,
        margin: '0 auto'
    },
    profile: {
        position: 'fixed',
        left: '10%',
        top: '84px'
    },
    search: {
        position: 'fixed',
        right: '10%',
        top: '84px'
    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.posts}>
                <Posts />
            </div>
            <div className={classes.profile}>
                <Profile />
            </div>
            <div className={classes.search}>
                <Search />
            </div>
        </div>
    )
}
 
export default Home
