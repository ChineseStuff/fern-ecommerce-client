import React, { useState, useEffect } from 'react';
import Login from '../../pages/login';
import { loginValidators } from '../commons/utils/Validators';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';

const UserLogin = ({ loginUser, UI, ...props }) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (UI.errors) {
      setErrors(prevErrors => ({
        ...prevErrors,
        general: UI.errors[Object.keys(UI.errors)[0]],
      }));
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
    e.preventDefault();
    if (!isValidLoginForm()) {
      return;
    }
    loginUser(userData, props.history);
  }

  function isValidLoginForm() {
    const _errors = loginValidators(userData);
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <Login
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      isLoading={UI.isLoading}
    />
  );
};

UserLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  UI: state.UI,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
