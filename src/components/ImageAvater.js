import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
     margin:"auto",
     padding:"0px",
     width: '153px',
     height:'153px',
    //borderRadius:"50%",
    //maxWidth: 360,
     display:"felx",
    //flexDirection: "column",
     position: "fixed",
	  // marginLeft: `20px`,
	  // marginTop: `100px`,
	   top: "30%",
     left: "50%",
     transform:"translate(-50%,-50%)"
    
    },
  },
}));

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      
    </div>
  );
}