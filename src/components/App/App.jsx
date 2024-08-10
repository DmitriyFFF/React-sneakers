import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Header } from '../Header/Header';
// import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';
import { cardsData } from '../../utils/constants';
import { Favorites } from '../../pages/Favorites';


export const App = () => {
  const [items, setItems] = useState(cardsData);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // fetch('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
    // .then(res => res.json())
    // .then(data => setItems(data));
    // axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
    //   .then(res => setItems(res.data));
    setItems(items);

    axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/cart')
      .then(res => setCartItems(res.data));

    axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites')
      .then(res => setFavorites(res.data));
  }, []);

  const handleAddCart = (card) => {
    axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/cart', card);
    setCartItems(prev => [...prev, card]);
  };

  const handleDeleteFromCart = (id) => {
    axios.delete(`https://66abc54ff009b9d5c73049f1.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddFavorites = (card) => {
    axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites', card);
    setFavorites(prev => [...prev, card]);
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
      <Routes>
        <Route path='/' element={
          <Home
            items={items}
            onAddCart={handleAddCart}
            onAddFavorite={handleAddFavorites}
          />
        }/>
        <Route path='/favorites' element={
          <Favorites items={favorites} onAddFavorite={handleAddFavorites} />}
        />
      </Routes>
    </div>
  );
}

export default App;

