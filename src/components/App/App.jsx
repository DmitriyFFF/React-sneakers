import React from 'react';
import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';

import styles from './App.module.scss';


export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Cards />
    </div>
  );
}

export default App;

