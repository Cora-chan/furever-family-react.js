import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor:"#3ACCE1",
    margin:"auto",
    borderRadius:"10px",
    textAlign:"center",
    padding:"0 0 0 0",
    width:"279px",
    height:"44px",
    color:"#ffffff",
  },
});
export default function ContainedButtonLarge (props) {
  const classes = useStyles();
  const {  to } = props;
  const CustomLink = props => <Link to={to} {...props} />;
  return (
    <Button 
    className={classes.root}
    variant="contained" 
    component={CustomLink}
    >
      {props.caption}
    </Button>
  );
}

