import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DataContextProvider from './Context/DataContextProvider';
import UserContextProvider from './Context/UserContextProvider';
import Home from './Views/Public/Home';
import Login from './Views/Public/Login';
import ComparePage from './Views/Protected/ComparePage';
import CartPage from './Views/Protected/CartPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.isAuthenticated === 'true'
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <UserContextProvider>
          <DataContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={(props) => <Login {...props} />} />
            <PrivateRoute path="/compare" component={(props) => <ComparePage {...props} />} />
            <PrivateRoute path="/cart" component={(props) => <CartPage {...props} />} />
          </DataContextProvider>
          </UserContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
