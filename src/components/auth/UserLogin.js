import React, { useState } from 'react';
import Login from '../../pages/login';
import { loginValidators } from '../commons/utils/Validators';
import axios from 'axios';

const UserLogin = ({ handleLoggin, ...props }) => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFields(prevFields => ({
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
    setIsLoading(true);
    if (!isValidLoginForm()) {
      setIsLoading(false);
      return;
    }
    //prettier-ignore
    axios.post('/login', fields)
      .then(res => {
        localStorage.setItem('FBIdToken',`Bearer ${res.data.token}`);
        setIsLoading(false);
        props.history.push('/');
      })
      .catch(err => {
        console.log(err.response.data);
        setErrors(err.response.data);
        setIsLoading(false);
      });

    // let fields = {};
    // fields.email = '';
    // fields.password = '';
    // setFields(fields);
  }

  function isValidLoginForm() {
    const _errors = loginValidators(fields);
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <Login
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      isLoading={isLoading}
    />
  );
};

export default UserLogin;
