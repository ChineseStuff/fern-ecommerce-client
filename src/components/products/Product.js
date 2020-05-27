import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';
//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IcoBtnWithTooltip from '../commons/IcoBtnWithTooltip';
import DeleteProduct from './DeleteProduct';

const Product = props => {
  const {
    classes,
    product: { name, imageUrl, description, createdAt, price, userHandle, sku },
    product,
    onAddToCart,
    authenticated,
    handle,
  } = props;

  dayjs.extend(relativeTime);

  return (
    <Card className={classes.card}>
      <CardMedia image={imageUrl} title={name} className={classes.image} />
      <CardContent className={classes.content}>
        <Typography variant='h5'>
          <MuiLink
            variant='h5'
            color='primary'
            component={Link}
            to={`/product-detail/${sku}`}
          >
            {name}
          </MuiLink>
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {dayjs(createdAt).fromNow()}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
        {authenticated && handle === userHandle && <DeleteProduct sku={sku} />}
      </CardContent>
      <div className={classes.price}>
        <CardContent>
          <strong>$ {parseFloat(price).toFixed(2)}</strong>
        </CardContent>
        {authenticated && (
          <IcoBtnWithTooltip
            tipText='Add to Cart'
            btnClass='button'
            onClick={e => onAddToCart(e, product)}
          >
            <AddShoppingCartIcon color='primary' />
          </IcoBtnWithTooltip>
        )}
      </div>
    </Card>
  );
};

export default withStyles(styles)(Product);
