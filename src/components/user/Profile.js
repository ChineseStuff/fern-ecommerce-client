import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MuiLink from '@material-ui/core/Link';
import IcoBtnWithTooltip from '../commons/IcoBtnWithTooltip';
//Icons
import LocationOnIco from '@material-ui/icons/LocationOn';
import CalendarIco from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Profile = ({
  classes,
  handleLogout,
  user: {
    credentials: { handle, createdAt, location },
  },
}) => {
  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className='image-wrapper'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/utn-fern-ecommerce.appspot.com/o/man.jpg?alt=media'
            className='profile-image'
            alt='user pic'
          />
        </div>
        <hr />
        <div className='profile-details'>
          <MuiLink
            variant='h5'
            color='primary'
            component={Link}
            to={`/users/${handle}`}
          >
            @{handle}
          </MuiLink>
          <hr />
          {location && (
            <>
              <LocationOnIco color='primary' />
              <span>{location}</span>
              <hr />
            </>
          )}
          <CalendarIco color='primary' />{' '}
          <span>Registrado el {dayjs(createdAt).format('MMM YYYY')}</span>
        </div>
        <IcoBtnWithTooltip
          tipText='Logout'
          onClick={handleLogout}
          btnClass='button'
        >
          <ExitToAppIcon color='primary' />
        </IcoBtnWithTooltip>
      </div>
    </Paper>
  );
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
