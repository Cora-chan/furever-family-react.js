import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    backgroundColor:"error",
    display:"block",
    
    marginTop: "100px", 
    marginRight:"15px",
    float:"right",
    
    borderRadius:"10px"
  },
});

export default function CancelButton() {
  const classes = useStyles();
  return (
    <Button 
    className={classes.root}
    variant="contained" 
    component={ Link } to="/settings"
    style=
    {{
      width:"150px",
      height:"44px",
      color:"#707070",
      padding:"10px 0 0 0",
      textAlign:"center"
      
      }}>
      Cancel
    </Button>
  );
}