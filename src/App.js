import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderAndLogo from './components/HeaderAndLogo';
import HomePage from './components/HomePage';
import AlertContainer from './container/AlertContainer'
import NavBar from './components/NavBar';
import Footer from './components/Footers';
import NoMatch from './components/NoMatch';
import LoginForm from './components/Login';
import SelfBlock from './components/SelfBlock';
import AdminContainer from './container/AdminContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Container className="App" fluid>
        <header>
          <AlertContainer/>
          <HeaderAndLogo/>
          <NavBar/>
        </header>
        <main>
          <hr className='my-4'/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/me' component={SelfBlock} />
            <Route exact path='/admin' component={AdminContainer} />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
