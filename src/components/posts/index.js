import React, { useEffect, useState } from 'react'
import Post from './post'
import CratePost from './create'
import FloatingButton from '../FloatingB/index'
import { getPosts } from '../../containers/post.container'

const Posts = () => {

    const [ posts, setPosts ] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        getPosts()
            .then(res => {
                setPosts(res.data.data)
            })
            .catch(e => console.log(e))
    }, [])

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

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
