import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signinandsignup/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

class App extends Component {

  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log('user', user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div >
    );
  }
}

export default App;
