import React from 'react';
import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';


export const App = () => {
  return (
    <div className={`${styles.App} clear`}>
      <Sidebar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;

