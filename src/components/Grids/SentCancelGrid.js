import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SendButton from "../Buttons/InvitationButtons/SendButton"
import CancelButton from "../Buttons/InvitationButtons/CancelButton"



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    //padding: theme.spacing(2),
    margin:"50px 0px 0 30px"
  },
 
}));

export default function SentCancelGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid >
        <SendButton />
        </Grid>
        <Grid>
        <CancelButton />
        </Grid>
        
      </Grid>
    </div>
  );
}