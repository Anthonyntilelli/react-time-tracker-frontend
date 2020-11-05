import React from 'react';
import { connect } from 'react-redux';
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
import ModifyBlock from './components/ModifyBlock';
import TerminateBlock from './components/TerminateBlock'

const App = (props) => {
  const adminRoutes = (props) => {
    if (props.loggedIn && props.admin){
      return (
        <>
          <Route exact path='/admin' component={AdminContainer} />
          <Route exact path='/admin/:id' component={ModifyBlock} />
          <Route exact path='/admin/terminate/:id' component={TerminateBlock} />
        </>
      )
    } else {
      return null
    }
  }

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
            { !props.loggedIn && <Route exact path='/login' component={LoginForm} /> }
            { props.loggedIn && <Route exact path='/me' component={SelfBlock} /> }
            { adminRoutes(props) }
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  admin: state.user.admin
});

export default connect(mapStateToProps, null)(App);
