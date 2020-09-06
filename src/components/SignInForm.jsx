import React, { useState } from 'react';
import { Formik } from 'formik';

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
  const classes = useStyles();
  
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {
        ({
           values,
           handleBlur,
           handleChange,
           handleSubmit
         }) => (
          <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
            <TextField
              name="username"
              value={values.username}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              name="password"
              value={values.password}
              onBlur={handleBlur}
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
        )}
    </Formik>
  );
};

SignInForm.propTypes = {};

export default SignInForm;
