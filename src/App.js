import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom"

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div >
  );
}

export default App;
