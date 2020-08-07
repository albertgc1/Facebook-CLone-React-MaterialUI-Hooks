import React from 'react'
import { URL } from '../../server/GLOBAL'

import {IconButton, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

const Comment = ({ comment }) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={comment.user} src={`${URL}/img/${comment.userAvatar}`} />
            </ListItemAvatar>
            <ListItemText
                primary={`${comment.user} - ${comment.created_at}`}
                secondary={comment.comment}
                />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
 
export default Comment
