import React, { useEffect, useState, useContext } from 'react'
import Post from './post'
import { getPosts, uploadImage, savePost, setLike, getCommentsPost } from '../../containers/post.container'
import { Context } from '../../server/Context'
import PostLoad from '../partials/postLoad'
import FormCreate from './formCreate'

const Posts = () => {

    const { token } = useContext(Context)
    const [ posts, setPosts ] = useState([])
    const [ load, setLoad ] = useState(false)
    const [ photo, setPhoto ] = useState('')
    const [ description, setDes ] = useState('')
    const [ loadImage, setLoadImage ] = useState(false)
    const [ comments, setComments ] = useState([])
    const [ loadComments, setLoadComments ] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        getPosts(token)
            .then(res => {
                setPosts(res.data.data)
                setLoad(false)
            })
            .catch(e => console.log(e))
    }

    const storeImage = (img) => {
        setLoadImage(true)
        let data = new FormData()
        data.append('photo', img)
        uploadImage(token, data)
            .then(res => {
                setPhoto(res.data)
                setLoadImage(false)
            })
            .catch(e => console.log(e))
    }

    const storePost = () => {
        let post = { description, photo }
        savePost(post, token)
            .then(res => {
                fetchPosts()
                setPhoto('')
                setDes('')
            })
            .catch(e => console.log(e))
    }

    const like = postId => {
        setLike(postId, token).then(() => fetchPosts())
    }

    const getComments = postId => {
        setLoadComments(true)
        getCommentsPost(postId, token).then(res => {setComments(res.data.data); setLoadComments(false)})
    }

    if(load){
        return <><PostLoad /><PostLoad /><PostLoad /></>
    }

    return (
        <>
        <br/><br/>
        <FormCreate storeImage={storeImage} photo={photo} loadImage={loadImage} storePost={storePost} setDes={setDes} description={description} />
        {
            posts.map(post => (
                <Post key={post.id} post={post} like={like} comments={comments} getComments={getComments} loadComments={loadComments} />
            ))
        }
        </>
    )
}
 
export default Posts
