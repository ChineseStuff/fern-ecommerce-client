import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Product from '../components/products/Product';

const Home = props => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get('/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  let recentProductsMarkup = products ? (
    products.map(product => <Product key={product.sku} product={product} />)
  ) : (
    <p>Loading...</p>
  );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentProductsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
