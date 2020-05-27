import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//Components
import Product from './Product';
//Redux
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';

const ProductList = ({
  products,
  isLoading,
  getProducts,
  addToCart,
  authenticated,
  userHandle,
}) => {
  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const addItemToCart = (e, product) => {
    addToCart(product);
    e.stopPropagation();
  };

  let recentProductsMarkup = !isLoading ? (
    products.map(product => (
      <Product
        key={product.sku}
        product={product}
        onAddToCart={addItemToCart}
        authenticated={authenticated}
        handle={userHandle}
      />
    ))
  ) : (
    <p>Loading...</p>
  );
  return recentProductsMarkup;
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  userHandle: state.user.credentials.handle,
  products: state.productsData.products,
  isLoading: state.productsData.isLoading,
});

const mapDispatchToProps = {
  getProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
