import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

export const Card = ({
    id,
    name,
    imageUrl,
    price,
    onPlus,
    onFavorite,
    isLiked = false,
    isAdded = false,
    isLoading = false,
  }) => {
  const [isChecked, setIsChecked] = useState(isAdded);
  const [isFavorite, setIsFavorite] = useState(isLiked);

  // const { name, imageUrl, price } = data;

  const handleCheck = () => {
    onPlus({ id, name, imageUrl, price });
    setIsChecked(!isChecked);
  };

  const handleLike = () => {
    onFavorite({ id, name, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={styles.card}>
      {
        isLoading ?
          <ContentLoader
            speed={2}
            width={200}
            height={260}
            viewBox="0 0 200 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            // {...props}
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
            <rect x="0" y="165" rx="5" ry="5" width="80" height="24" />
            <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
            <rect x="114" y="160" rx="10" ry="10" width="32" height="32" />
            <rect x="0" y="125" rx="5" ry="5" width="93" height="15" />
          </ContentLoader>
        :
        <>
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
        </>
      }
    </li>
  );
}
