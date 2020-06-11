import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
}));

export default function ManageMedsGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Avatar variant="square" className={classes.img} alt="complex" src={require("../Grids/avatar_sample.png")} />   
                 </Grid>
                 <Grid item xs={7} container direction="column" spacing={2}>
                    <Grid item xs>  
                <Typography variant="body2" gutterBottom>
                  Autumn
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Kelpie
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="contained" borederRadius="30px" color="primary">Edit</Button>
            </Grid>
            </Grid>  
      </Paper>
      
    </div>
  );
}

