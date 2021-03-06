import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: "auto",  
      padding: "10px",
    },
    textField: {
      padding: "10px",
      width: "95%",
    },
  }),
);

export default function DateOfBirthPicker() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Date of Birth"
        type="date"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}