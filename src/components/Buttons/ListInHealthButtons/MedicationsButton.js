import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"#3ACCE1",
    margin:"auto",
    borderRadius:"10px"
  },
});

export default function MedicationsButton() {
  const classes = useStyles();
  return (
    <Button 
    className={classes.root}
    variant="contained" 
    
    style=
    {{
      width:"279px",
      height:"44px",
      color:"#ffffff" 
      }}>
      Medications
    </Button>
  );
}