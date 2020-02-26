import React from 'react';
import { Header, Footer, Home } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contacto">
          About
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
