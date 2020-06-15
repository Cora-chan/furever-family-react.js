import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from "react-router-dom"
import ContainedButtonLarge from "../Buttons/ContainedButtonLarge"





const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    display: "list-item",  
   // flexFlow: "row wrap",
    overflowY:"auto",
    _overflow:"auto",
    margin:"0 0 0 0",
    padding:"0 0 0 0",
    bottom:"-70px",
    position:"relative",
    maxHeight:"auto",
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ListInSettings() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      
      <List >
        <ListItem  >
          <ContainedButtonLarge caption="Manage Pets" component={Link}to="/manage/pets" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Invite friends/family" component={Link}to="/create-an-invite"/>
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Measurement Units" />
        </ListItem>
      </List>
    </div>
  );
}