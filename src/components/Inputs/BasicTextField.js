import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: "auto",
      width: "95%",
      padding: "10px",
    },
  },
}));

export default function BasicTextfield(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      id={props.id} 
      label={props.label} 
      variant="outlined" 
      value={value}
      onChange={handleChange}
      />
    </form>
  );
}