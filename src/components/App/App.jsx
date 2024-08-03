import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';


export const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    fetch('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
    .then(res => res.json())
    .then(data => setItems(data));
  }, []);

  const handleAddCart = (card) => {
    setCartItems(prev => [...prev, card])
    // if(!cartItems.includes(card)) {
    // }
  };
  return (
    <div className={`${styles.App} clear`}>
      {isOpened &&
        <Sidebar
          items={cartItems}
          onClose={() => setIsOpened(false)}
        />
      }
      <Header onOpenCart={() => setIsOpened(true)} />
      <Cards items={items} onAddCart={handleAddCart}/>
    </div>
  );
}

export default App;

