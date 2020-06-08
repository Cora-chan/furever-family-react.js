import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"error",
    display:"block",
    
    marginTop: "35px", 
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
    
    style=
    {{
      width:"150px",
      height:"44px",
      color:"#707070",
      
      }}>
      Cancel
    </Button>
  );
}