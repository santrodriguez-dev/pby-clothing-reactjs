import React from 'react';
import { Header, Footer, Home, Contact, News } from './components';
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
        <Route path="/contacto" component={Contact} />
        <Route path="/noticias" component={News} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
