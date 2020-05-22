import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const LoggedOutProfile = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <Typography variant='body2' align='center'>
        No profile found, please login or signup
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/login'
        >
          Login
        </Button>
        <Button
          variant='contained'
          color='secondary'
          component={Link}
          to='/signup'
        >
          Signup
        </Button>
      </div>
    </Paper>
  );
};

LoggedOutProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedOutProfile);
