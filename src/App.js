import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopAlert from './components/TopAlert'
import NavBar from './components/NavBar';
import { Col } from 'react-bootstrap';



function App() {
  return (
    <Container className="App" fluid>
      <header>
        <TopAlert variant={'danger'} message={'test Message!'}/>
      </header>
      <main>
        <BrowserRouter>
        <Col><NavBar admin={true} loggedIn={true}/></Col>


        </BrowserRouter>
      </main>
      <footer>
      </footer>
    </Container>
  );
}

export default App;
