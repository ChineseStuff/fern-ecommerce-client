import React, { useState, useEffect } from 'react';
import Signup from '../../pages/signup';
import { signUpValidators } from '../commons/utils/Validators';
import PropTypes from 'prop-types';

//Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';

const UserSignUp = ({ signupUser, UI, ...props }) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  }

  function handleSave(e) {
    debugger;
    e.preventDefault();
    if (!isValidSignupForm()) {
      return;
    }
    signupUser(userData, props.history);
  }

  function isValidSignupForm() {
    const _errors = signUpValidators(userData);
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <Signup
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      isLoading={UI.isLoading}
    />
  );
};

UserSignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  UI: state.UI,
});

const mapDispatchToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
