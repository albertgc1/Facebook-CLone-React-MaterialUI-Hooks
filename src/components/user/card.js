import React from 'react'
import { URL } from '../../server/GLOBAL'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginLeft: 109,
    border: '3px solid #009688'
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

const CardProfile = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar alt={user.name} src={`${URL}/img/${user.avatar}`} className={classes.large} />
        <Typography variant="h6" component="h2" style={{textAlign: 'center'}}>
          { user.name } { user.last_name }
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          { user.email }
        </Typography>
        <br />
        <Divider />
        <List className={classes.list}>
          <ListItem>
            <ListItemText primary="Seguidos" />       
            <ListItemSecondaryAction>
              <ListItemText primary="800" style={{color: '#1c9bf6'}}/>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Seguidores" /> 
            <ListItemSecondaryAction>
              <ListItemText primary="1200" style={{color: '#1c9bf6'}}/>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Publicaciones" />            
            <ListItemSecondaryAction>
              <ListItemText primary="50" style={{color: '#1c9bf6'}}/>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
 
export default CardProfile