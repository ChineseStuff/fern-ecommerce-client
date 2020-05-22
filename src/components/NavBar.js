import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Components
import IcoBtnWithTooltip from './commons/IcoBtnWithTooltip';
//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = ({ authenticated, ...props }) => {
  const activeStyle = { color: 'orange' };
  const history = useHistory();
  return (
    <AppBar>
      <Toolbar className='nav-container'>
        {authenticated ? (
          <>
            <IcoBtnWithTooltip tipText='Add a product'>
              <PlaylistAddIcon />
            </IcoBtnWithTooltip>
            {/*prettier-ignore*/ }
            <IcoBtnWithTooltip tipText='Go to Home' onClick={() =>(history.push('/'))}>
              <HomeIcon/>
            </IcoBtnWithTooltip>
            <IcoBtnWithTooltip tipText='Go to Cart'>
              <ShoppingCartIcon />
            </IcoBtnWithTooltip>
          </>
        ) : (
          <>
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(NavBar);
