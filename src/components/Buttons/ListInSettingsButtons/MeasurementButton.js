import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"#3ACCE1",
    display:"block",
    margin:"0 auto",
    
    borderRadius:"10px"
  },
});

export default function MeasurementButton() {
  const classes = useStyles();
  return (
    <Button 
    className={classes.root}
    variant="contained" 
    
    style=
    {{textAlign:"center",
      padding:"0 0 0 0",
      width:"279px",
      height:"44px",
      color:"#ffffff",
      }}>
      Measurement units
    </Button>
  );
}