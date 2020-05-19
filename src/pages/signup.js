import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles';
import AppIcon from '../images/shop.png';

//MUI stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

const Signup = props => {
  const { classes, onSave, onChange, errors, isLoading } = props;
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt='shop' className={classes.shopImage} />
        <Typography variant='h3' className={classes.pageTitle}>
          SignUp
        </Typography>
        <form noValidate onSubmit={onSave}>
          <TextField
            id='handle'
            name='handle'
            type='text'
            label='Nickname'
            className={classes.textField}
            onChange={onChange}
            error={errors.handle ? true : false}
            helperText={errors.handle}
            fullWidth
          />
          <TextField
            id='email'
            name='email'
            type='email'
            label='Email'
            className={classes.textField}
            onChange={onChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            id='password'
            name='password'
            type='password'
            label='Password'
            className={classes.textField}
            onChange={onChange}
            error={errors.password ? true : false}
            helperText={errors.password}
            fullWidth
          />
          <TextField
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            label='Confirm Password'
            className={classes.textField}
            onChange={onChange}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword}
            fullWidth
          />
          {errors.general && (
            <div className={classes.error}>{errors.general}</div>
          )}
          {errors.weakPassword && (
            <Alert severity='error'>
              <AlertTitle>Password must contains at least</AlertTitle>
              <ul>
                {errors.weakPassword.split('|').map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Alert>
          )}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={isLoading}
          >
            {
              //prettier-ignore
              isLoading ? (<CircularProgress size={25} className={classes.progress} color='primary'/>):'SignUp'
            }
          </Button>
          <br />
          <small>
            Do you already have an account? Login <Link to='/login'>Here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Signup);
