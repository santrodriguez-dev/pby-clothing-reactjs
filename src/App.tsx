import React from 'react';
import { Header, Footer, Home, Contact } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from './modules/products/Products';
import News from './modules/news/News';

const App = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/productos" component={Products} />
        <Route path="/noticias" component={News} />
        <Route path="/contacto" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
