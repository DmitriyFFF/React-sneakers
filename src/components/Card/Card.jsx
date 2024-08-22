import React, { useState } from 'react';
import styles from './Card.module.scss';

export const Card = ({id, name, imageUrl, price, onPlus, onFavorite, isLiked = false}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isLiked);

  // const { name, imageUrl, price } = data;

  const handleCheck = () => {
    onPlus({ name, imageUrl, price });
    setIsChecked(!isChecked);
  };

  const handleLike = () => {
    onFavorite({ id, name, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={handleLike}
          src={isFavorite ? "./img/heart_liked.svg" : "./img/heart_unliked.svg"}
          alt="Лайк" />
      </div>
      <img className={styles.cardImage} src={imageUrl} alt="Кроссовки" />
      <h4 className={styles.cardName}>{name}</h4>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span className={`${styles.spanPrice} text-uppercase`}>Цена</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.btnImage}
          onClick={handleCheck}
          src={isChecked ? "./img/check.svg" : "./img/plus.svg"}
          alt="Плюс" />
        {/* <div className={`${styles.addButton} d-flex`}>
        </div> */}
      </div>
    </li>
  );
}
