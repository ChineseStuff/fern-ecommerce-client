import React from 'react';
import PropTypes from 'prop-types';

//MaterialUI
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from '../cart/CartItem';

const ShoppingCart = ({
  classes,
  isCartOpen,
  listItems,
  onClose,
  onAdd,
  onRemove,
  totalPrice,
}) => {
  return (
    <>
      <Drawer
        anchor='right'
        open={isCartOpen}
        ModalProps={{ onBackdropClick: onClose }}
      >
        <Toolbar className={classes.cartToolbar}>
          <div className={classes.closeCart}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </Toolbar>
        {listItems.map(item => (
          <CartItem
            key={item.sku}
            product={item}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
        <Divider />
        <Card className={classes.card}>
          <CardContent className={classes.contentPrice}>
            <div>
              <strong>Total</strong>
            </div>
            <div>
              <strong>$ {parseFloat(totalPrice).toFixed(2)}</strong>
            </div>
          </CardContent>
        </Card>
      </Drawer>
    </>
  );
};

ShoppingCart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  listItems: PropTypes.array.isRequired,
};

export default withStyles(styles)(ShoppingCart);
