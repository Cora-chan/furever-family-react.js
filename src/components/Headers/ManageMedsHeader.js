import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    
    maxWidth: 500,
    padding:"70px 0px 20px 0px",
    textIndent:"5%"
    
    
  },
});



export default function ManageMedsHeader() {
  const classes = useStyles();  

return(
  <div className={classes.root}>
    <Typography variant="h3" style={{
            color: "#454F63",
            fontSize:`40px`,
            fontFamily:"sans-serif"
             
        }} >
           Manage Meds
      </Typography>
    </div>
  );
}