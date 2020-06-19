import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BreedSelect from "../Inputs/BreedSelect";
import DateOfBirthPicker from "../Inputs/DateOfBirthPicker";
import BasicTextField from "../Inputs/BasicTextField"




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
    display: "list-item",  
   // flexFlow: "row wrap",
    //overflowY:"auto",
    //_overflow:"auto",
    margin:"-10px 0 0 0",
    padding:"0 0 0 0",
    bottom:"0",
    position:"relative",
    maxHeight:"auto",
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function ListInAddPets() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      
      <List >
        <ListItem  >
          <BasicTextField label="Name"/>
        </ListItem>
        <ListItem >
          <DateOfBirthPicker/>
        </ListItem>
        <ListItem >
          <BreedSelect />
        </ListItem>
      </List>
    </div>
  );
}