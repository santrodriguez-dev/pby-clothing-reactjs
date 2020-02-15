import React from 'react';
import styles from './App.module.scss'
import { Header, Footer } from './components';

const App = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.main_container}>main_container</div>
      <Footer/>
    </div>
  );
}

export default App;
