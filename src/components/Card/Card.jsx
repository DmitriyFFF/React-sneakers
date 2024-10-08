import React, { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../utils/context/context';
import styles from './Card.module.scss';

export const Card = ({
    id,
    name,
    imageUrl,
    price,
    onPlus,
    onFavorite,
    isLiked = false,
    // isAdded = false,
    isLoading = false,
  }) => {
  // const [isChecked, setIsChecked] = useState(isAdded);
  const [isFavorite, setIsFavorite] = useState(isLiked);
  const { hasAddedToCart } = useContext(AppContext);

  const handleCheck = () => {
    onPlus({ id, name, imageUrl, price });
    // setIsChecked(!isChecked);
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
            width={165}
            height={230}
            viewBox="0 0 165 230"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            // {...props}
          >
            <rect x="13" y="10" rx="10" ry="10" width="140" height="100" />
            <rect x="13" y="175" rx="5" ry="5" width="80" height="24" />
            <rect x="13" y="115" rx="5" ry="5" width="140" height="15" />
            <rect x="120" y="167" rx="10" ry="10" width="32" height="32" />
            <rect x="13" y="135" rx="5" ry="5" width="93" height="15" />
          </ContentLoader>
        :
        <>
          {onFavorite &&
            <div className={styles.favorite}>
              <img
                onClick={handleLike}
                src={isFavorite ? "./img/heart_liked.svg" : "./img/heart_unliked.svg"}
                alt="Лайк"
              />
            </div>
          }
          <img className={styles.cardImage} src={imageUrl} alt="Кроссовки" />
          <h4 className={styles.cardName}>{name}</h4>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span className={`${styles.spanPrice} text-uppercase`}>Цена</span>
              <b>{price} руб.</b>
            </div>
            {onPlus &&
              <img
                className={styles.btnImage}
                onClick={handleCheck}
                src={hasAddedToCart(id) ? "./img/check.svg" : "./img/plus.svg"}
                alt="Плюс"
              />
            }
          </div>
        </>
      }
    </li>
  );
}
