import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import VetButton from "../Buttons/ListInHealthButtons/VetButton"
import VacinationButton from "../Buttons/ListInHealthButtons/VacinationButton"
import MedicationsButton from "../Buttons/ListInHealthButtons/MedicationsButton"
import ConditionsButton from "../Buttons/ListInHealthButtons/ConditionsButton"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    display: "list-item",  
   // flexFlow: "row wrap",
    overflowY:"auto",
    _overflow:"auto",
    margin:"0 0 0 0",
    padding:"0 0 0 0",
    bottom:"-10px",
    position:"relative",
    maxHeight:"auto",
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ListInHealth() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      
      <List >
        <ListItem  >
          <VetButton />
        </ListItem>
        <ListItem >
          <MedicationsButton />
        </ListItem>
        <ListItem >
          <ConditionsButton />
        </ListItem>
        <ListItem >
          <VacinationButton />
        </ListItem>
        
      </List>
    </div>
  );
}