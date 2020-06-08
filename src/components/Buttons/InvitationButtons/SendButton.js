import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"#3ACCE1",
    display:"block",
   
    marginTop: "35px", 
    marginLeft:"15px",
    float:"left",
    
    borderRadius:"10px"
  },
});

export default function SendButton() {
  const classes = useStyles();
  return (
    <Button 
    className={classes.root}
    variant="contained" 
    
    style=
    {{
      width:"150px",
      height:"44px",
      color:"#ffffff",
      
      }}>
      Send 
    </Button>
  );
}