import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    backgroundColor:"#3ACCE1",
    display:"block",
   
    marginTop: "100px", 
    marginLeft:"15px",
    float:"left",
    
    borderRadius:"10px"
  },
});

export default function AddButton() {
  const classes = useStyles();
  return (
    <Button 
    className={classes.root}
    variant="contained" 
    component={Link} to="/add/pets"
    
    style=
    {{
      width:"150px",
      height:"44px",
      color:"#ffffff",
      padding:"10px 0 0 0",
      textAlign:"center"
      
      }}>
      Add
    </Button>
  );
}