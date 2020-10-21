import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';
import './App.css';
import TopAlert from './components/TopAlert';
import NavBar from './components/NavBar';
import Footer from './components/Footers';

function App() {
  return (
    <Container className="App" fluid>
      <header>
        <TopAlert variant={'danger'} message={'test Message!'}/>
      </header>
      <main>
        <BrowserRouter>
          <Col>
            <NavBar admin={true} loggedIn={true}/>
          </Col>


        </BrowserRouter>
      </main>
      <Footer/>
    </Container>
  );
}

export default App;
