import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
//import {TextInput, KeyboardAvoidingView } from 'react-native';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: "20px 0px -20px 10px",
      width: '35ch',
     // borderRadius: 15,
      
      
      
    },
  },
}));

export default function NameTextField() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">     
      <TextField id="outlined-basic" label="Name"   />
    </form>
  );
}