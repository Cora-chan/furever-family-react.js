import React from 'react';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    
    maxWidth: 500,
    padding:"100px 0px 0px 0px",
    textIndent:"8%"
    
    
  },
});



export default function SimpleHeader(props) {
  const classes = useStyles();  

return(
  <div className={classes.root}>
    <Typography variant="h3" style={{
            color: "#454F63",
            fontSize:`40px`,
            fontFamily:"sans-serif"
             
        }} >
           {props.caption}
      </Typography>
    </div>
  );
}