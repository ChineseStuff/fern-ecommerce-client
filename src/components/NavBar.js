import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { showCart } from '../redux/actions/cartActions';
//Components
import IcoBtnWithTooltip from './commons/IcoBtnWithTooltip';
import CreateProductDialog from './products/CreateProductDialog';
//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import CartBudgeIcon from './commons/CartBudgeIcon';

const NavBar = ({ authenticated, showCart, cart, ...props }) => {
  const activeStyle = { color: 'orange' };
  const history = useHistory();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      let quantity = 0;
      cart.map(item => (quantity += item.qty));
      setCartCount(quantity);
    } else {
      setCartCount(0);
    }
  }, [cart]);
  return (
    <AppBar>
      <Toolbar className='nav-container'>
        {authenticated ? (
          <>
            <CreateProductDialog />
            {/*prettier-ignore*/ }
            <IcoBtnWithTooltip tipText='Go to Home' onClick={() =>(history.push('/'))}>
              <HomeIcon/>
            </IcoBtnWithTooltip>
            <IcoBtnWithTooltip tipText='Go to Cart' onClick={() => showCart()}>
              <CartBudgeIcon cartCount={cartCount} />
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
  cart: state.user.cart,
});

const mapDispatchToProps = {
  showCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
