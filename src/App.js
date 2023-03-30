import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Landing, Home, Details, Form, ErrorComponent } from './views'

function App() {

  return (
    <React.Fragment>

      <Switch>

        {/* Route 1 - LANDING */}
        <Route exact path='/'>
          <Landing />
        </Route>

        {/* Route 2 - HOME */}
        <Route exact path='/pokerun'>
          <Home />
        </Route>

        {/* Route 3 - Form */}
        <Route exact path='/create-custom'>
          <Form />
        </Route>

        {/* Route 4 - Details */}
        <Route exact path='/details/:id'>
          <Details />
        </Route>

        {/* Route 5 - Error */}
        <Route path='/'>
          <ErrorComponent />
        </Route>


      </Switch>

    </React.Fragment >
  );
}

export default App;
