import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    
    maxWidth: 500,
    padding:"20px 0px 0px 12px",
    textIndent:"5%"
    
    
  },
});



export default function InviteFamilyHeader() {
  const classes = useStyles();  

return(
  <div className={classes.root}>
    <Typography variant="h3" style={{
            color: "#454F63",
            fontSize:`15px`,
            fontFamily:"sans-serif"
             
        }} >
           Please accept this invitation to our pet family
      </Typography>
    </div>
  );
}
