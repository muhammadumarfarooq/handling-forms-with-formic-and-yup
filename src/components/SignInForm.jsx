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
      validate={values => {
        const errors = {};
        if ( !values.username ) {
          errors.username = 'Username is required';
        } else if ( values.username.length > 10 ) {
          errors.username = 'Username must be less than 10 characters.';
        }
        
        if ( !values.password ) {
          errors.password = 'password is required';
        } else if ( values.password.length < 4 ) {
          errors.password = 'Password must be 4 or greater characters';
        } else if ( values.password.length > 12 ) {
          errors.password = 'Password must be less than 12 characters';
        }
        
        return errors;
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
           handleSubmit,
           isSubmitting,
           errors
         }) => {
          return (
            <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
              <TextField
                name="username"
                value={values.username}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={handleChange}
                helperText={errors.username}
                error={Boolean(errors.username)}
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
                error={false}
                helperText={errors.password}
                error={Boolean(errors.password)}
              />
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          );
        }}
    </Formik>
  );
};

SignInForm.propTypes = {};

export default SignInForm;
