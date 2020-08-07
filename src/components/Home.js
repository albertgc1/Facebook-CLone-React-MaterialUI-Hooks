import React from 'react'
import Posts from './posts'
import Profile from './user'
import Search from './search'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    posts: {
        minWidth: 320,
        width: 405
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
        <div className='container'>
            <div className={`${classes.posts} card-posts`}>
                <Posts />
            </div>
            <div className={`${classes.profile} card-user`}>
                <Profile />
            </div>
            <div className={`${classes.search} card-search`}>
                <Search />
            </div>
        </div>
    )
}
 
export default Home
