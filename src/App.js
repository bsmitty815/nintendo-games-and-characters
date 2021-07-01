
import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import GameTitle from "./GameTitle"
import Form from "./Form"

// getting the dbjson serer to run terminal command - npm run server
// getting react to run command - npm start
// to save react router dome run commacnd - npm install --save react-router-dom

const DATA = "http://localhost:3004/amiibo"

function App() {
  const [nintendoGameCharacters, setNintendoGameCharacters] = useState([])

  useEffect(() => {

    fetch(DATA)
    .then(response => response.json())
    .then(data => setNintendoGameCharacters(data))

  }, []) 




 

  return (
    <div className="App">
      <h1>Nintendo Characters And Games</h1>
      <NavBar />
        <Switch>
          <Route path="/GameTitle">
            <GameTitle nintendoGameCharacters={nintendoGameCharacters} />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Characters">
            <Home nintendoGameCharacters={nintendoGameCharacters} />
          </Route>
          <Route exact path="/">
            <Home nintendoGameCharacters={nintendoGameCharacters} />
          </Route>
          <Route path="*">
              <h1>404 not found</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
