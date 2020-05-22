import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Material UI
import Grid from '@material-ui/core/Grid';
//Components
import Product from '../components/products/Product';
import UserProfile from '../components/user/UserProfile';

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
    products.map(product => (
      <Grid item sm={4} xs={12} key={product.sku}>
        <Product product={product} />
      </Grid>
    ))
  ) : (
    <p>Loading...</p>
  );
  return (
    <>
      <Grid container spacing={2}>
        {recentProductsMarkup}
        <Grid item sm={3} xs={12}>
          <UserProfile />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
