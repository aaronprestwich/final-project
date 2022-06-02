import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Nav from'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

import { FaDiceD20 } from 'react-icons/fa'


import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import MonsterContainer from "./Components/Monsters/MonsterContainer";
import SpellContainer from "./Components/Spells/SpellContainer";
import Tray from "./Components/DiceRoller/Tray"



export default function App() {
  return (
    <Container fluid>
      
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand as= {Link}><FaDiceD20 size={50}/> 5e Search</Navbar.Brand>
              <Nav.Link as = {Link} to='/'>Home</Nav.Link>
              <Nav.Link as = {Link} to='/monsters'>Monsters</Nav.Link>
              <Nav.Link as = {Link} to='/spells'>Spells</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
            <Switch>
              <Route path='/monsters'>
                <h2>Monsters</h2>
                <Monsters/>
              </Route>
              <Route path='/spells'>
                <h2>Spells</h2>
                <SpellContainer/>
              </Route>
              <Route path='/' className = "tray">
                <h2>Home</h2>
                <Tray/>
              </Route>
            </Switch>
    </Container>
    
    
  );
}

function Monsters(){
  return <div><MonsterContainer/></div>
}


