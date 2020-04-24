import React from 'react';
import { Header, Footer, Contact } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Products from './modules/products/Products';
import News from './modules/news/News';
import Home from './modules/home/Home';
import ShoppingCart from './modules/shopping-cart/ShoppingCart';

const App = () => {

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/productos" component={Products} />
        <Route path="/noticias" component={News} />
        <Route path="/contacto" component={Contact} />
        <Route path="/carrito-de-compras" component={ShoppingCart} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </HashRouter>
  )
}

export default App;
