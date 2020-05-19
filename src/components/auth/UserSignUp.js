import React, { useState } from 'react';
import Signup from '../../pages/signup';
import { signUpValidators } from '../commons/utils/Validators';
import axios from 'axios';

const UserSignUp = props => {
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
    if (!isValidSignupForm()) {
      setIsLoading(false);
      return;
    }
    //prettier-ignore
    axios.post('/signup', fields)
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
  }

  function isValidSignupForm() {
    const _errors = signUpValidators(fields);
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <Signup
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      isLoading={isLoading}
    />
  );
};

export default UserSignUp;
