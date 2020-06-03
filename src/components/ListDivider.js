import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display:"felx",
    flexDirection: "column",
    position: `absolute`,
	bottom: `20%`,
    left: `0`,
    textAlign: "center",

    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem button >
        <ListItemText       
        primary={<Typography 
            style={{
            color: "#707070",
            fontSize:`27px`,
            textTransform:"capitalize" 
        }}>Autumn</Typography>} 
        style={{
            fontSize:"2px",
            textAlign:"center",
            color:"primary"         
           // justifyContent: "center"
        }} />
      </ListItem>
      
      <ListItem button>
        <ListItemText primary={<Typography 
            style={{
            color: "#707070",
            fontSize:`27px`,
            textTransform:"lowercase" 
        }}>3 years</Typography>}  style={{
            textAlign:"center",
           // justifyContent: "center"
        }} />
      </ListItem>
      <ListItem button>
        <ListItemText primary={<Typography 
            style={{
            color: "#707070",
            fontSize:`27px`,
            textTransform:"capitalize" 
        }}>Kelpie / Corgi</Typography>}  style={{
            textAlign:"center",
           // justifyContent: "center"
        }} />
      </ListItem>
     
    </List>
  );
}
