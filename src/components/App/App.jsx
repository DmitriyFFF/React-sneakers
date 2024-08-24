import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
import { Header } from '../Header/Header';
// import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';
import { cardsData } from '../../utils/constants';
import { Favorites } from '../../pages/Favorites/Favorites';


export const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // fetch('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
    // .then(res => res.json())
    // .then(data => setItems(data));
    // axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/items')
    //   .then(res => setItems(res.data));
    async function fetchData() {
      const cartRes = await axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/cart');
      const favRes = await axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites');

      setCartItems(cartRes.data);
      setFavorites(favRes.data);
      setItems(cardsData);
    }

    // axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/cart')
    // .then(res => setCartItems(res.data));

    // axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites')
    // .then(res => setFavorites(res.data));
    // setItems(items);
    fetchData();
  }, []);

  const handleAddCart = async (card) => {
    // axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/cart', card);
    // setCartItems((prev) => [...prev, card]);
    try {
      if (cartItems.find(item => Number(item.id) === Number(card.id))) {
        axios.delete(`https://66abc54ff009b9d5c73049f1.mockapi.io/cart/${card.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(card.id)));
      } else {
        const res = await axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/cart', card);
        setCartItems((prev) => [...prev, res.data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину!');
      console.log(error);
    }
  };

  const handleDeleteFromCart = (id) => {
    axios.delete(`https://66abc54ff009b9d5c73049f1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddFavorites = async(card) => {
    try {
      if (favorites.find(item => item.id === card.id)) {
        axios.delete(`https://66abc54ff009b9d5c73049f1.mockapi.io/favorites/${card.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== card.id));
      } else {
        const res = await axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites', card);
        setFavorites((prev) => [...prev, res.data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки!');
      console.log(error);
    }
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
            cartItems={cartItems}
            handleAddCart={handleAddCart}
            handleAddFavorites={handleAddFavorites}
          />
        }/>
        <Route path='/favorites' element={
          <Favorites
            items={favorites}
            onAddFavorite={handleAddFavorites} />}
        />
      </Routes>
    </div>
  );
}

export default App;

