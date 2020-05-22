import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppIcon from '../images/shop.png';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = ({ classes, onSave, onChange, errors, isLoading }) => {
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt='shop' className={classes.shopImage} />
        <Typography variant='h3' className={classes.pageTitle}>
          Login
        </Typography>
        <form noValidate onSubmit={onSave}>
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
          {errors.general && (
            <div className={classes.error}>{errors.general}</div>
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
              isLoading ? (<CircularProgress size={25} className={classes.progress} color='primary'/>):'Login'
            }
          </Button>
          <br />
          <small>
            Don't have account yet? SignUp <Link to='/signup'>Here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Login);
