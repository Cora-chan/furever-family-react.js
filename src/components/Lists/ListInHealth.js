import React from 'react';
import { makeStyles}  from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ContainedButtonLarge from "../Buttons/ContainedButtonLarge"
import {Link} from "react-router-dom"



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
          <ContainedButtonLarge caption="VET" />
        </ListItem>
        <ListItem >
        <ContainedButtonLarge caption="Vaccination" />
        </ListItem>
        <ListItem >
          <ContainedButtonLarge caption="Medications" component={Link}to="/manage/meds" />
        </ListItem>
        <ListItem >
          <ContainedButtonLarge caption="Conditions" />
        </ListItem>
      </List>
      
    </div>
  );
}