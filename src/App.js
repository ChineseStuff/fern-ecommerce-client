import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import themeFile from './theme';
import jwtDecode from 'jwt-decode';

//MUI stuff
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Components
import NavBar from './components/NavBar';
import AuthRoute from './components/commons/utils/auth/AuthRoute';

//Pages
import Home from './pages/home';
import UserLogin from './components/auth/UserLogin';
import UserSignUp from './components/auth/UserSignUp';

function App() {
  const theme = createMuiTheme(themeFile);

  let authenticated;
  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      // window.location.href = '/login';
      authenticated = false;
    } else {
      authenticated = true;
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' render={props => <Home {...props} />} />
              <AuthRoute
                exact
                path='/signup'
                component={UserSignUp}
                authenticated={authenticated}
              />
              <AuthRoute
                exact
                path='/login'
                component={UserLogin}
                authenticated={authenticated}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
