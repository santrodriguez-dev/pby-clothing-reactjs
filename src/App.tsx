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
import styles from "./App.module.scss"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000',
      dark: '#505050',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
  },
});

const App = () => {

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <div className={styles.main_container}>
          <Switch>
            <Route path="/productos" component={Products} />
            <Route path="/noticias" component={News} />
            <Route path="/contacto" component={Contact} />
            <Route path="/carrito-de-compras" component={ShoppingCart} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>

    </HashRouter>
  )
}

export default App;
