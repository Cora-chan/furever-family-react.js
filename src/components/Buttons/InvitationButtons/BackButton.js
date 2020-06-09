import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import IconButton  from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        float:"left",
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function BackButton() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <IconButton
        component={ Link } to="/settings">
          <ArrowBackIcon 
          />
        </IconButton>
        
      </div>
    );
  }