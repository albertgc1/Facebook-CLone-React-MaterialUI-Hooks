import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    left: '80%'
  }
}));

const FloatingButton = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab className={classes.button} color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </div>
  )
}
 
export default FloatingButton;
