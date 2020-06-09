import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
     margin:"auto",
     padding:"0px",
     width: '300px',
     height:'300px',
     display:"felx",
     position: "fixed",
	   top: "30%",
     left: "50%",
     transform:"translate(-50%,-50%)"
    
    },
  },
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <Avatar alt="avatar_sample" src={require("../assets/avatar_sample.png")}/>
      
    </div>
  );
}