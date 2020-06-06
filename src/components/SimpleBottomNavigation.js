import React from 'react';

import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home'
import EventNoteIcon from '@material-ui/icons/EventNote';
import InfoIcon from '@material-ui/icons/Info';
import {Button } from '@material-ui/core';
//import red from '@material-ui/core/colors/red';


//const primary = red[50];

const useStyles = makeStyles({
  root: {
    height:`125px`,
    width:`100%`,
    bottom:0,
    left:0,
    position:`fixed`,    
    backgroundColor:"#3497FD",
    textTransform:"none"
    //htmlColor:"#ffffff",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //const preventDefault = (event) => event.preventDefault();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      
    >

      
    <BottomNavigationAction 
    component={ Link } to="/"
      
      label={<Button 
        
        style={{
          color: "#ffffff",
          textTransform:"capitalize"    
        }}>
          Home
       </Button>}
      
      icon={<HomeIcon 
        style={{
          color: "#ffffff",
          width:`24px`,
          height:`24px`,
    }} ></HomeIcon>}  />

      <BottomNavigationAction 
      component={ Link } to="/care"
      label={<Button 
         style={{
         color: "#ffffff",
         textTransform:"capitalize" 
     }}>
       Care
       
     </Button>} 
      icon={<EventNoteIcon style={{
        color: "#ffffff",
        width:`24px`,
        height:`24px`,
    }} ></EventNoteIcon>} />


      <BottomNavigationAction 

      
      component={ Link } to="/health"
      label={<Button 
       
         style={{
         color: "#ffffff",
         textTransform:"capitalize" 
     }}>
       
       Health
       
         </Button>} 
     
      icon={<InfoIcon 
        
        style={{
       // borderRadius: 35,
          color: "#ffffff",
          width:`24px`,
          height:`24px`,
      //  padding: "18px 36px",
      //  fontSize: "18px"
    }} 
    
    ></InfoIcon>} />
    </BottomNavigation>
    
  );
}
