import React from 'react';
import styles from './Header.module.scss';

export const Header = ({onOpenCart}) => {
  return (
    <header className={`${styles.header} d-flex justify-between align-center p-40`}>
      <div className={`${styles.headerLeft} d-flex`}>
        <img className={styles.logo} src="/img/logo.png" alt="логотип" />
        <div className={styles.headerInfo}>
          <h3 className={`${styles.title} text-uppercase`}>React sneakers</h3>
          <p className={`${styles.text} opacity-5`}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li className='d-flex align-center mr-30 cu-p' onClick={onOpenCart}>
          <img className={`${styles.icon} mr-10`} src='/img/cart.svg' alt='Корзина' />
          <span className={styles.price}>1205 руб.</span>
        </li>
        <li className='d-flex align-center'>
          <img className={`${styles.icon} mr-10`} src='/img/user.svg' alt='Профиль пользователя' />
          <span className={`${styles.profile} opacity-6`}>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
