import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from '../Header/Header';
import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';


export const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // fetch('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
    // .then(res => res.json())
    // .then(data => setItems(data));
    axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
      .then(res => setItems(res.data));

    axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/cart')
      .then(res => setCartItems(res.data));
  }, []);

  const handleAddCart = (card) => {
    axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/cart', card);
    setCartItems(prev => [...prev, card]);
  };

  const handleDeleteFromCart = (id) => {
    // axios.delete(`https://66abc54ff009b9d5c73049f1.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className={`${styles.App} clear`}>
      {isOpened &&
        <Sidebar
          items={cartItems}
          onClose={() => setIsOpened(false)}
          onRemove={(id) => handleDeleteFromCart(id)}
        />
      }
      <Header onOpenCart={() => setIsOpened(true)} />
      <Cards items={items} onAddCart={handleAddCart}/>
    </div>
  );
}

export default App;

