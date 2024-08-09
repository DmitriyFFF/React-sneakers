// import { cardsData } from '../../utils/constants';
import { useState } from 'react';
import { Card } from '../Card/Card';
import styles from './Cards.module.scss';

export const Cards = ({items, onAddCart, onAddFavorite}) => {
  const [serchValue, setSearchValue] = useState('');

  const handleChangeInput = (event) => {
    setSearchValue(event.target.value);
    // console.log(event.target.value)
  };

  const handleClearInput = () => {
    setSearchValue('');
  };
  // const handleAddCart = (card) => {
  //   console.log(card)
  // }
  return (
    <div className={`${styles.content} d-flex flex-column p-40`}>
      <div className='d-flex justify-between align-center mb-30'>
        <h1 className={styles.title}>{serchValue ? `Поиск по запросу: ${serchValue}` : 'Все кроссовки'}</h1>
        <div className={`${styles.search} d-flex align-items`}>
          <img src="./img/search.svg" alt="Поиск" />
          <input
            className={styles.input}
            onChange={handleChangeInput}
            value={serchValue}
            placeholder='Поиск...'
            type="text"
          />
          {serchValue &&
            <img
              className={`${styles.clearBtn} cu-p`}
              src="./img/removeBtn.svg"
              alt="Закрыть"
              onClick={handleClearInput}
            />}
        </div>
      </div>
      <ul className={`${styles.cards} d-flex justify-center`}>
        {items
          .filter(item => item.name.toLowerCase().includes(serchValue.toLowerCase()))
          .map((item, index) =>
          <Card
            key={index}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            onPlus={(card) => {onAddCart(card)}}
            onFavorite={(card) => {onAddFavorite(card)}}
          />
        )}
      </ul>
    </div>
  )
}
