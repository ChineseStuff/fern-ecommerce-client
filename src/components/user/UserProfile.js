import React from 'react';
import PropTypes from 'prop-types';

//Components
import Profile from './Profile';
import LoggedOutProfile from './LoggedOutProfile';

//Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';

const UserProfile = ({
  user,
  logoutUser,
  user: { authenticated, loading },
}) => {
  const handleLogout = () => {
    logoutUser();
  };

  let profileMarkup = !loading ? (
    authenticated ? (
      <Profile user={user} handleLogout={handleLogout} />
    ) : (
      <LoggedOutProfile />
    )
  ) : (
    <p>Loading....</p>
  );
  return profileMarkup;
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
