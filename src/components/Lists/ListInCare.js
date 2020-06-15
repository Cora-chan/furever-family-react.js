import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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



export default function ListInCare() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      
      <List >
        <ListItem  >
          <ContainedButtonLarge caption="Walks" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Games" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Treats" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Meals" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Grooming" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Photos" />
        </ListItem>
        
      </List>
    </div>
  );
}