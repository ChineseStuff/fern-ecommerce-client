import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '../cart/ShoppingCart';

//Redux
import { connect } from 'react-redux';
//prettier-ignore
import { showCart, addToCart, decreseFromCart, removeFromCart} from '../../redux/actions/cartActions';

const ManageShoppingCart = ({
  user,
  cart,
  isCartOpen,
  showCart,
  addToCart,
  decreseFromCart,
  removeFromCart,
  ...props
}) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const closeCart = () => {
    showCart();
  };

  const addItemToCart = product => {
    addToCart(product);
  };
  const removeItemFromCart = (e, product) => {
    if (e.currentTarget.name === 'reduce') {
      if (product.qty > 1) {
        decreseFromCart(product.sku);
      } else {
        removeFromCart(product.sku);
      }
    } else {
      removeFromCart(product.sku);
    }
  };

  useEffect(() => {
    if (user.cart && user.cart.length > 0) {
      setCartItems(user.cart);
      let _totalPrice = 0;
      user.cart.map(item => (_totalPrice += item.price * item.qty));
      setTotalPrice(_totalPrice);
    } else {
      setCartItems([]);
      setTotalPrice(0);
    }
  }, [user.cart]);

  return (
    <ShoppingCart
      isCartOpen={user.isCartOpen}
      onClose={closeCart}
      listItems={cartItems}
      onAdd={addItemToCart}
      onRemove={removeItemFromCart}
      totalPrice={totalPrice}
    />
  );
};

ManageShoppingCart.propTypes = {
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.productsData.isLoading,
});

const mapDispatchToProps = {
  showCart,
  addToCart,
  decreseFromCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageShoppingCart);
