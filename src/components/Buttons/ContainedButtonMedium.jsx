import React from 'react';
import { styled } from '@material-ui/core/styles';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'green'
      ? 'linear-gradient(#3ACCE1 100%, #3ACCE1 100%)'
      : 'linear-gradient(#E0E0E0 100%, #E0E0E0 100%)',
  border: 0,
  borderRadius: "10px",
  color: (props) =>
      props.color === 'green'
        ? "white"
        : 'linear-gradient(#707070 100%, #707070 100%)',
  float: (props) =>
      props.color === 'green'
          ? "left"
          : 'right',
  
          height: 48,
          width:"90px",
          padding: '0 30px',
          margin: 8,
          display:"block",
          marginTop:"40px",
          textAlign:"center",
          fontFamily:"Arial",
          lineHeight:"45px"
  
});

export default function ContainedButtonMedium(props) {
    const {to} = props;
    const CustomLink = props => <Link style={{textDecoration:'none'}} to={to} {...props} />;
  
  return (
    <Grid>
      <MyButton color="green" component={CustomLink}>{props.caption}</MyButton>
    </Grid>
  );
}

