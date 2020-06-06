import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GamesButton from "../Buttons/ListInCareButtons/GamesButton"
import GroomingButton from "../Buttons/ListInCareButtons/GroomingButton"
import MealsButton from "../Buttons/ListInCareButtons/MealsButton"
import PhotosButton from "../Buttons/ListInCareButtons/PhotosButton"
import ThreatsButton from "../Buttons/ListInCareButtons/ThreatsButton"
import WalksButton from "../Buttons/ListInCareButtons/WalksButton"



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
          <WalksButton />
        </ListItem>
        <ListItem >
          <GamesButton/>
        </ListItem>
        <ListItem >
          <ThreatsButton />
        </ListItem>
        <ListItem >
          <MealsButton />
        </ListItem>
        <ListItem >
          <GroomingButton />
        </ListItem>
        <ListItem >
          <PhotosButton />
        </ListItem>
        
      </List>
    </div>
  );
}