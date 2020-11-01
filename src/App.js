import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';
import Home from './Views/Public/Home';
import Login from './Views/Public/Login';
import CartPage from './Views/Protected/CartPage';
import DetailCard from './Components/DetailCard';



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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={(props) => <Login {...props} />} />
            <PrivateRoute path="/cart" component={(props) => <CartPage {...props} />} />
            <PrivateRoute path="/d/:id/:price" component={(props) => <DetailCard {...props} />} />
          </UserContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
