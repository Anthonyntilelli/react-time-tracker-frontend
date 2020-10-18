import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import NoMatch from './components/NoMatch';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App
