import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src="/img/logo.png" alt="логотип" />
        <div className={styles.headerInfo}>
          <h3 className={styles.title}>REACT SNEAKERS</h3>
          <p className={styles.text}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li>
          <img className={styles.icon} src='/img/cart.svg' alt='корзина' />
          <span>1205 руб.</span>
        </li>
        <li>
          <img className={styles.icon} src='/img/user.svg' alt='профиль пользователя' />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
