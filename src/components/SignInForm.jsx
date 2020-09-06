import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ( {
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '400px',
    },
  },
} ));

const SignInForm = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });
  const classes = useStyles();
  const { username, password } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  return (
    <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
      <TextField
        name="username"
        value={username}
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="password"
        value={password}
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        onChange={handleChange}
      />
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

SignInForm.propTypes = {};

export default SignInForm;
