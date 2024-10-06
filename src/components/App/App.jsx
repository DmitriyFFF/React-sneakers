import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
import { Header } from '../Header/Header';
// import { Cards } from '../Cards/Cards';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './App.module.scss';
import { baseUrl, cardsData } from '../../utils/constants';
import { Favorites } from '../../pages/Favorites/Favorites';
import { AppContext } from '../../utils/context/context';


export const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);

  //     const cartRes = await axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/cart');
  //     const favRes = await axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites');

  //     setIsLoading(false);

  //     setCartItems(cartRes.data);
  //     setFavorites(favRes.data);
  //     setItems(cardsData);
  //   }

  //   // axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/cart')
  //   // .then(res => setCartItems(res.data));

  //   // axios.get('https://66abc54ff009b9d5c73049f1.mockapi.io/favorites')
  //   // .then(res => setFavorites(res.data));
  //   // setItems(items);
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartRes = await fetch(`${baseUrl}/cart`);
      const cartJson = await cartRes.json();
      const favRes = await fetch(`${baseUrl}/favorites`);
      const favJson = await favRes.json();
      const itemsRes = await fetch(`${baseUrl}/items`);
      const itemsJson = await itemsRes.json();

      setIsLoading(false);

      setCartItems(cartJson);
      setFavorites(favJson);
      setItems(itemsJson);
    }
    fetchData();
    // fetch('http://localhost:3000/items')
    //   .then(res => res.json())
    //   .then(data => setItems(data));

    // fetch('http://localhost:3000/cart')
    //   .then(res => res.json())
    //   .then(data => setCartItems(data));

    // fetch('http://localhost:3000/favorites')
    //   .then(res => res.json())
    //   .then(data => setFavorites(data));
    //   setIsLoading(false);
  }, []);

  const handleAddCart = (card) => {
    // axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/cart', card);
    // setCartItems((prev) => [...prev, card]);
    try {
      if (cartItems.find(item => Number(item.id) === Number(card.id))) {
        axios.delete(`${baseUrl}/cart/${card.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(card.id)));
      } else {
        axios.post(`${baseUrl}/cart`, card);
        setCartItems((prev) => [...prev, card]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину!');
      console.log(error);
    }
  };

  const handleDeleteFromCart = (id) => {
    axios.delete(`${baseUrl}/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const handleAddFavorites = async(card) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(card.id))) {
        axios.delete(`${baseUrl}/favorites/${card.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(card.id)));
      } else {
        const res = await axios.post(`${baseUrl}/favorites`, card);
        setFavorites((prev) => [...prev, res.data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки!');
      console.log(error);
    }
  };

  const hasAddedToCart = (id) => {
    return cartItems.some(cartItem => Number(cartItem.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, hasAddedToCart, handleAddFavorites, setIsOpened, setCartItems}}>
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
              onAddCart={handleAddCart}
              onAddFavorite={handleAddFavorites}
              isLoading={isLoading}
            />
          }/>
          <Route path='/favorites' element={
            <Favorites
              // items={favorites}
              // onAddFavorite={handleAddFavorites}
            />
          }/>
        </Routes>
      </div>
    </AppContext.Provider>

  );
}

export default App;

