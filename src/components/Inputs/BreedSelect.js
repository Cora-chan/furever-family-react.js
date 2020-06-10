import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BreedSelect() {
  const classes = useStyles();
  const [setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" 
        style=
        {{margin: "-8px 0px 50px 10px",
            width:"34ch",}}
            >Breed</InputLabel>
        <Select
          style=
          {{margin: "10px 0px 0px 10px",
              width:"31ch",}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          onChange={handleChange}
        >
          <MenuItem >Kelpie</MenuItem>
          <MenuItem >Corgi</MenuItem>
          <MenuItem >Husky</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}