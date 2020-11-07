import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
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
import NewHire from './components/NewHire';

const App = (props) => {
  // Controll access to routes
  const ControlledRoute = ({component: Component, allow,  ...rest}) => (
    <Route {...rest} render={ (props) => ( allow ? <Component {...props} /> : <Redirect to="/" /> )} />
  );

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
            <ControlledRoute exact path='/me' component={SelfBlock} allow={props.loggedIn} />
            <ControlledRoute exact path='/login' component={LoginForm} allow={!props.loggedIn} />
            <ControlledRoute exact path='/admin' component={AdminContainer} allow={(props.admin && props.loggedIn)} />
            <ControlledRoute exact path='/admin/:id' component={ModifyBlock} allow={(props.admin && props.loggedIn)} />
            <ControlledRoute exact path='/admin/terminate/:id' component={TerminateBlock} allow={(props.admin && props.loggedIn)} />
            <ControlledRoute exact path='/new_hire' component={NewHire} allow={(props.admin && props.loggedIn)} />
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
