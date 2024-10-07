import React from 'react';
import { Link } from 'react-router-dom';
import { useCartPrice } from '../../utils/hooks/useCartPrice';
import styles from './Header.module.scss';

export const Header = ({ onOpenCart }) => {
  const { totalPrice } = useCartPrice();
  return (
    <header className={`${styles.header} d-flex justify-between align-center p-40`}>
      <Link to='/' className={`${styles.headerLeft} d-flex`}>
        <img className={styles.logo} src="/img/logo.png" alt="логотип" />
        <div className={styles.headerInfo}>
          <h3 className={`${styles.title} text-uppercase`}>React sneakers</h3>
          <p className={`${styles.text} opacity-5`}>Магазин лучших кроссовок</p>
        </div>
      </Link>
      <ul className='d-flex'>
        <li onClick={onOpenCart}>
          <Link to='/' className='d-flex align-center mr-30'>
            <img className={`${styles.icon} mr-10`} src='/img/cart.svg' alt='Корзина' />
            <span className={styles.price}>{totalPrice} руб.</span>
          </Link>
        </li>
        <li>
          <Link to='/favorites' className='d-flex align-center mr-30'>
            <img className={`${styles.icon} mr-10`} src='/img/favorite.svg' alt='Закладки' />
            <span className={`${styles.profile} opacity-6`}>Закладки</span>
          </Link>
        </li>
        <li>
          <Link to='/profile' className='d-flex align-center'>
            <img className={`${styles.icon} mr-10`} src='/img/user.svg' alt='Профиль пользователя' />
            <span className={`${styles.profile} opacity-6`}>Профиль</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
