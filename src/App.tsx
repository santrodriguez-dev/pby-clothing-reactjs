import React from 'react';
import { Header, Footer, Contact } from './components';
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import styles from "./App.module.scss"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Home from './modules/home/Home';
import Products from './modules/products/Products';
import News from './modules/news/News';
import ShoppingCart from './modules/shopping-cart/ShoppingCart';
import PurchaseData from './modules/purchase-data/PpurchaseData';
import NewsDetail from './modules/news/news-detail/News-detail';
import ProductDetail from './modules/products/product-detail/Product-detail';
import Profile from './modules/profile/Profile';
import shoppingHistory from './modules/shopping-history/shopping-history';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
// Redux
import { Provider } from 'react-redux'
import store from './store/store'

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
        <ToastContainer />
        <Provider store={store}>
          <Switch>
            <>
              <Header />
              <div className={styles.main_container}>
                <Route exact path="/" component={Home} />
                <Route exact path="/:category/:productId" component={ProductDetail} />
                <Route exact path="/hombre" component={Products} />
                <Route exact path="/mujer" component={Products} />
                <Route exact path="/niño" component={Products} />
                <Route exact path="/colecciones" component={Products} />
                <Route exact path="/noticias" component={News} />
                <Route exact path="/perfil" component={Profile} />
                <Route exact path="/compras" component={shoppingHistory} />
                <Route exact path="/nosotros" component={NewsDetail} />
                <Route exact path="/contacto" component={Contact} />
                <Route exact path="/carrito-de-compras" component={ShoppingCart} />
                <Route exact path="/datos-pago" component={PurchaseData} />
                {/* <Route path="*" component={() => <div>Not Found</div>} /> */}
              </div>
            </>
          </Switch>
        </Provider>
        <Footer />
      </ThemeProvider>

    </HashRouter>
  )
}

export default App;
