import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import MuiButton from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";

function LogOutButton(props) {
  const Button = styled(MuiButton)(spacing);

  const dispatch = useDispatch();

  return (
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      variant="contained"
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
