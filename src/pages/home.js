import React from 'react';
//Material UI
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
//Components
import ProductList from '../components/products/ProductList';
import UserProfile from '../components/user/UserProfile';

const Home = props => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={9} xs={12}>
          <ProductList />
        </Grid>
        <Grid item sm={3} xs={12}>
          <UserProfile />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Home);
