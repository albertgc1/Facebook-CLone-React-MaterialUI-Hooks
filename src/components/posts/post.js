import React, { useState } from 'react'
import { URL } from '../../server/GLOBAL'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, List } from '@material-ui/core'
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Comment from './comments'
import ListLoad from '../partials/listLoader'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 422,
      minWidth: 280,
      
      marginBottom: 14
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
}));

const Post = ({ post, like, comments, getComments, loadComments }) => {

  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = (id) => {
      setExpanded(!expanded)
      getComments(id)  
  }

  return (
    <>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <>
            { post.userAvatar
              ? <Avatar src={`${URL}/img/${post.userAvatar}`} className={classes.avatar} />
              : <Avatar aria-label="recipe" className={classes.avatar}>{(post.user).substr(0,1)}</Avatar>
            }
          </>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ post.user }
        subheader={ post.created_at }
      />
      <CardMedia
        className={classes.media}
        image={ `${URL}/img/${post.photo}` }
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { post.post }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={like.bind(this, post.id)}>
          { post.like
            ? <FavoriteIcon />
            : <FavoriteBorderIcon />
          }
        </IconButton>
        <Typography>{ post.likes }</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick.bind(this, post.id)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography>{ post.comments } comentarios</Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div className={classes.demo}>
            <List>
              { loadComments && <><ListLoad /><ListLoad /><ListLoad /></> }
              { comments.map(comment => <Comment key={comment.id} comment={comment} />) }
            </List>
          </div>
        </Collapse>
      
    </Card>
    </>
  )
}
 
export default Post
