import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
//Material UI
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const ProductDetail = props => {
  const { classes, addToCart, authenticated, products } = props;
  const sku = props.match.params.sku;
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find(item => item.sku === sku));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addItemToCart = (e, product) => {
    addToCart(product);
    e.stopPropagation();
  };

  dayjs.extend(relativeTime);
  return (
    <Card className={classes.detailCard}>
      <CardMedia
        image={product.imageUrl}
        title={product.name}
        className={classes.bigImage}
      />
      <CardContent className={classes.bigContent}>
        <Typography variant='h5' className={classes.contentTitle}>
          {product.name}
        </Typography>
        <Divider />
        <Typography
          variant='body2'
          color='textSecondary'
          className={classes.createdAt}
        >
          Created At <strong>{dayjs(product.createdAt).fromNow()}</strong>
        </Typography>
        <div className={classes.subContent}>
          <div className={classes.desc}>
            <Typography variant='body1'>{product.description}</Typography>
          </div>
          <div className={classes.price}>
            <CardContent>
              <strong>$ {parseFloat(product.price).toFixed(2)}</strong>
            </CardContent>
          </div>
        </div>
        {authenticated && (
          <Button
            variant='contained'
            color='primary'
            onClick={e => addItemToCart(e, product)}
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  products: state.productsData.products,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductDetail));
