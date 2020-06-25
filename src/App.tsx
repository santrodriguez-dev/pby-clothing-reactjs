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
import PurchaseData from './modules/purchase-data/PpurchaseData';
import NewsDetail from './modules/news/news-detail/News-detail';

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
  overrides: {
    MuiInputBase: {
      colorSecondary: {
        color: '#fff',
      }
    },
    MuiFormLabel: {
      colorSecondary: {
        color: '#a29c9c',
      }
    },
    MuiTextField: {
      root: {
        color: '#fff',
      }
    }
  }
});

const App = () => {

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <>
            <Header />
            <div className={styles.main_container}>
              <Route exact path="/" component={Home} />
              <Route exact path="/productos/hombre" component={Products} />
              <Route exact path="/productos/mujer" component={Products} />
              <Route exact path="/productos/nino" component={Products} />
              <Route exact path="/productos/colecciones" component={Products} />
              <Route exact path="/noticias" component={News} />
              <Route exact path="/nosotros" component={NewsDetail} />
              <Route exact path="/contacto" component={Contact} />
              <Route exact path="/carrito-de-compras" component={ShoppingCart} />
              <Route exact path="/datos-pago" component={PurchaseData} />
              {/* <Route path="*" component={() => <div>Not Found</div>} /> */}
            </div>
          </>
        </Switch>
        <Footer />
      </ThemeProvider>

    </HashRouter>
  )
}

export default App;
