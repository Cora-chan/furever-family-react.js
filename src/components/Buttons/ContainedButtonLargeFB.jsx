import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 10,
    boxShadow: theme.boxShadow,
    color: 'white',
    height: 48,
    width:"279px",
    padding: '0 30px',
  },
}));

function DeepChild(props) {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root}>
        {props.caption}
      </button>
      
    
  );
}

export default function ThemeNesting() {
  return (
    <div>
      <ThemeProvider
        theme={{
          background: 'linear-gradient(#3ACCE1 100%, #3ACCE1 100%)',
          
        }}
      >
        <DeepChild caption="Email" />
        <br />
        <br />
        <ThemeProvider
          theme={(outerTheme) => ({
            ...outerTheme,
            background: 'linear-gradient(#353A50 100%, #353A50 100%)',
          
          })}
        >
          <DeepChild caption="Facebook" />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}