import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default ({ cartCount = 0 }) => (
  <Badge color='secondary' badgeContent={cartCount}>
    <ShoppingCartIcon />
  </Badge>
);
