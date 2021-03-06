import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaDiceD20 } from 'react-icons/fa';
import { Switch, Route, Link } from 'react-router-dom';
import MonsterContainer from "./Components/Monsters/MonsterContainer";
import SpellContainer from "./Components/Spells/SpellContainer";
import Tray from "./Components/DiceRoller/Tray"

export default function App() {
  return (
    <Container fluid>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand as={Link} to='/'><FaDiceD20 size={50} color="#D35100" /> 5e Search</Navbar.Brand>
            <Nav.Link as={Link} to='/'>Dice Roller</Nav.Link>
            <Nav.Link as={Link} to='/monsters'>Monster Search</Nav.Link>
            <Nav.Link as={Link} to='/spells'>Spells Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path='/monsters'>
          <Monsters />
        </Route>
        <Route path='/spells'>
          <SpellContainer />
        </Route>
        <Route path='/' className="tray">
          <Tray />
        </Route>
      </Switch>
    </Container>


  );
}
function Monsters() {
  return <div><MonsterContainer /></div>
}


