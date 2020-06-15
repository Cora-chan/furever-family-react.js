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
  
  export default function BackButton(props) {
    const classes = useStyles();
    const {  to } = props;
    const CustomLink = props => <Link to={to} {...props} />;
    
    return (
      <div className={classes.root}>
        <IconButton
        component={CustomLink}>
          <ArrowBackIcon 
          />
        </IconButton>
        
      </div>
    );
  }