import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';

//Redux stuff
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
//prettier-ignore
import {logoutUser,setAuthenticated,getUserData} from './redux/actions/userActions'
import axios from 'axios';

//Components
import NavBar from './components/NavBar';
import AuthRoute from './components/commons/utils/auth/AuthRoute';

//Pages
import Home from './pages/home';
import UserLogin from './components/auth/UserLogin';
import UserSignUp from './components/auth/UserSignUp';
import ManageShoppingCart from './components/cart/ManageShoppingCart';
import ProductDetail from './components/products/ProductDetail';

function App() {
  const store = configureStore();

  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
      window.location.href = '/login';
    } else {
      store.dispatch(setAuthenticated());
      axios.defaults.headers.common['Authorization'] = token;
      store.dispatch(getUserData());
    }
  }
  return (
    <Provider store={store}>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />} />
          <AuthRoute exact path='/signup' component={UserSignUp} />
          <AuthRoute exact path='/login' component={UserLogin} />
          <Route
            exact
            path='/product-detail/:sku'
            render={props => <ProductDetail {...props} />}
          />
        </Switch>
      </div>
      <ManageShoppingCart />
    </Provider>
  );
}

export default App;
