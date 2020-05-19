import React from 'react';
import { NavLink } from 'react-router-dom';

//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const NavBar = props => {
  const activeStyle = { color: 'orange' };
  return (
    <AppBar>
      <Toolbar className='nav-container'>
        <Button
          color='inherit'
          component={NavLink}
          to='/'
          exact
          activeStyle={activeStyle}
        >
          Home
        </Button>
        <Button
          color='inherit'
          component={NavLink}
          to='/login'
          activeStyle={activeStyle}
        >
          Login
        </Button>
        <Button
          color='inherit'
          component={NavLink}
          to='/signup'
          activeStyle={activeStyle}
        >
          SignUp
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
