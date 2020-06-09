import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"#3ACCE1",
    display:"block",
    margin:"0 auto",
    //padding:"0 0 0 10px",
    borderRadius:"10px"
  },
});

export default function ManagepetsButton() {
  const classes = useStyles();
  return (
    <Button
    className={classes.root}
    component={ Link } to="/invitation"
    variant="contained"  
    
    style=
    {{textAlign:"center",
      padding:"10px 0 0 0",
      width:"279px",
      height:"44px",
      color:"#ffffff",
      }}
      >
      Invite Friends/Family
    </Button>
  );
}