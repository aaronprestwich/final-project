import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import MonsterContainer from "./Components/Monsters/MonsterContainer";
import SpellContainer from "./Components/Spells/SpellContainer";



export default function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/monsters">Monsters</Link>
          </li>
          <li>
            <Link to="/spells">Spells</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/monsters'>
            <h2>Monsters</h2>
            <Monsters/>
          </Route>
          <Route path='/spells'>
            <h2>Spells</h2>
            <SpellContainer/>
          </Route>
          <Route path='/'>
            <h2>Home</h2>
            
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

function Monsters(){
  return <div><MonsterContainer/></div>
}


