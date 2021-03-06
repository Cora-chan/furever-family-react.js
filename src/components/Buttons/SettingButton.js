import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width:`77px`,
      height:`77px`,
     // margin: theme.spacing(1),
      float:"right",
      borderRadius: 15,
      
      
    },
  },
}));

export default function SettingButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
      component={ Link } to="/settings"
      variant="contained" 
      style={{
       // borderRadius: 35,
        backgroundColor: "#00bfff",
      //  padding: "18px 36px",
      //  fontSize: "18px"
    }}>
        <SettingsIcon style={{
       // borderRadius: 35,
        color:"white",
        width:`50px`,
        height:`50px`,
        right:0,
      //  padding: "18px 36px",
      //  fontSize: "18px"
    }} />
      </Button>
    </div>
  );
}