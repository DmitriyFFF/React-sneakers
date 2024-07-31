import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';


export const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  // const handleOpenCart = () => {
  //   setIsOpened(true);
  // }
  return (
    <div className={`${styles.App} clear`}>
      {isOpened && <Sidebar onClose={() => setIsOpened(false)} />}
      <Header onOpenCart={() => setIsOpened(true)} />
      <Cards />
    </div>
  );
}

export default App;

