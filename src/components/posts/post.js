import React, { useState } from 'react'
import { URL } from '../../server/GLOBAL'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton } from '@material-ui/core'
import { red } from '@material-ui/core/colors';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 422,
      minWidth: 280,
      width: 400,
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
}));

const Post = (props) => {

  const classes = useStyles()
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
      setExpanded(!expanded)
  }

  const { post } = props

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
        <IconButton aria-label="add to favorites">
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
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography>{ post.comments } comentarios</Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil
          </Typography>

          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  )
}
 
export default Post
