import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HeaderAndLogo from './components/HeaderAndLogo';
import HomePage from './components/HomePage';
import TopAlert from './components/TopAlert';
import NavBar from './components/NavBar';
import Footer from './components/Footers';
import NoMatch from './components/NoMatch';
import LoginForm from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Container className="App" fluid>
        <header>
          <TopAlert variant={'danger'} message={'test Message!'}/>
          <HeaderAndLogo/>
          <NavBar admin={false} loggedIn={false}/>
        </header>
        <main>
          <hr className='my-4'/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginForm} />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
