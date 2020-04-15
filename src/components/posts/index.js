import React, { useEffect, useState, useContext } from 'react'
import Post from './post'
import CratePost from './create'
import FloatingButton from '../FloatingB/index'
import { getPosts } from '../../containers/post.container'
import { Context } from '../../server/Context'
import PostLoad from '../partials/postLoad'

const Posts = () => {

    const { token } = useContext(Context)
    const [ posts, setPosts ] = useState([])
    const [open, setOpen] = useState(false)
    const [ load, setLoad ] = useState(true)

    useEffect(() => {
        getPosts(token)
            .then(res => {
                setPosts(res.data.data)
                setLoad(false)
            })
            .catch(e => console.log(e))
    }, [])

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    if(load){
        return <><br/><br/><PostLoad /><PostLoad /><PostLoad /></>
    }

    return (
        <>
        <br/><br/>
        {
            posts.map(post => (
                <Post key={post.id} post={post} />
            ))
        }
        <FloatingButton handleClickOpen={handleClickOpen} />
        <CratePost handleClose={handleClose} open={open} />
        </>
    )
}
 
export default Posts
