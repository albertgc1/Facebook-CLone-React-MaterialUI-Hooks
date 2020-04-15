import React, { useState } from 'react'
import ListLoad from '../partials/listLoader';
import { URL } from '../../server/GLOBAL'

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Paper, IconButton, Chip,
      InputBase, Divider, Grid, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import CollectionsIcon from '@material-ui/icons/Collections';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '350px',
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 310,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  types: {
    margin: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const CardSearch = ({ results, setQuery }) => {
  const classes = useStyles();
  const [ people, setPeople ] = useState(true)
  const [ recipe, setRecipe ] = useState(false)
  const [ pub, setPubs ] = useState(false)

  const searchPeople = () => {
    setPeople(true); setRecipe(false); setPubs(false)
  }
  const searchRecipe = () => {
    setPeople(false); setRecipe(true); setPubs(false)
  }
  const searchPub = () => {
    setPeople(false); setRecipe(false); setPubs(true)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Paper component="form" className={classes.form}>
          <IconButton className={classes.iconButton} aria-label="menu">
            { people && <PeopleIcon /> }
            { recipe && <LocalDiningIcon /> }
            { pub && <CollectionsIcon /> }
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <InputBase
            className={classes.input}
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={e => setQuery(e.target.value)}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
          <div className={classes.types}>
            <div>
              <Chip onClick={searchPeople} className={classes.chip} label="Personas" color={people ? 'primary' : 'default'} />
              <Chip onClick={searchRecipe} className={classes.chip} label="Recetas" color={recipe ? 'primary' : 'default'} />
              <Chip onClick={searchPub} className={classes.chip} label="Publucaciones" color={pub ? 'primary' : 'default'} />
            </div>
          </div>
            <div className={classes.demo}>
              <List>
                <Typography>Sugerencias para tí</Typography>
                { results ?
                results.map(result => (
                  <ListItem key={result.id}>
                    <ListItemAvatar>
                      <Avatar alt={result.name} src={`${URL}/img/${result.avatar}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={result.name}
                      secondary="+5 siguen esta"
                      />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  ))
                  : <><ListLoad /><ListLoad /><ListLoad /></>
                }
              </List>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button size="small" pull>ver todo</Button>
      </CardActions>
    </Card>
  );
}
 
export default CardSearch