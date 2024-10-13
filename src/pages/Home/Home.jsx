import { useState } from 'react';

import { Card } from '../../components/Card/Card';

import styles from './Home.module.scss';

export const Home = ({
    items,
    onAddCart,
    onAddFavorite,
    isLoading,
  }) => {
  const [serchValue, setSearchValue] = useState('');

  const renderItems = () => {
    const filtredItems = items.filter(item => item.name.toLowerCase().includes(serchValue.toLowerCase()));

    return (
      isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
        <Card
          key={index}
          onPlus={(cartItem) => onAddCart(cartItem)}
          onFavorite={(cartItem) => onAddFavorite(cartItem)}
          isLoading={isLoading}
          {...item}
        />
      )
    )
  }

  const handleChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
  };

  return (
    <div className={`${styles.content} d-flex flex-column p-40`}>
      <div className='d-flex justify-between align-center mb-30'>
        <h1 className={styles.title}>{serchValue ? `Поиск по запросу: ${serchValue}` : 'Все кроссовки'}</h1>
        <div className={`${styles.search} d-flex align-items`}>
          <img src="img/search.svg" alt="Поиск" />
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
              src="img/removeBtn.svg"
              alt="Закрыть"
              onClick={handleClearInput}
            />}
        </div>
      </div>
      <ul className={`${styles.cards} d-flex justify-center`}>
        {renderItems()}
      </ul>
    </div>
  )
}
