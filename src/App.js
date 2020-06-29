import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About } from './pages/About';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
        <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
