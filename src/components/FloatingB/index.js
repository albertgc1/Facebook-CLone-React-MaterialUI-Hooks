import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      position: 'fixed',
      top: '88%'
    },
  },
  button: {
    left: '58%',
    top: '86%'
  }
}));

const FloatingButton = ({ handleClickOpen }) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab onClick={handleClickOpen} className={classes.button} color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </div>
  )
}
 
export default FloatingButton;
