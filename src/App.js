import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './stateProvider';




function App() {

  const [{ user }, dispatch] = useStateValue();

  //const [user, setUser] = useState(null) 

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
          <div className="app-body">
            <Router>
              <Sidebar />
              <Switch>

                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        )}

    </div>
  );
}

export default App;
