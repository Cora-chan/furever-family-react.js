import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InviteButton from "../Buttons/ListInSettingsButtons/InviteButton"
import ManagepetsButton from  "../Buttons/ListInSettingsButtons/ManagepetsButton"
import MeasurementButton from "../Buttons/ListInSettingsButtons/MeasurementButton"




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
          <InviteButton />
        </ListItem>
        <ListItem >
          <ManagepetsButton/>
        </ListItem>
        <ListItem >
          <MeasurementButton />
        </ListItem>
      </List>
    </div>
  );
}