import React, { useContext } from 'react';

import { AppContext } from '../../utils/context/context';

import styles from './SidebarInfo.module.scss';

export const SidebarInfo = ({ title, image, description }) => {
  const { setIsOpened } = useContext(AppContext);

  return (
    <div className='d-flex flex-column justify-center align-center flex'>
      <img className={`${styles.cartImage} mb-20`} src={image} alt="Пустая коробка" />
      <h3 className={styles.cartTitle}>{title}</h3>
      <p className={`${styles.cartText} opacity-5`}>{description}</p>
      <button
        className={`${styles.btnBack} d-flex justify-center align-center mt-40`}
        onClick={() => setIsOpened(false)}
          >Вернуться назад
        <img className={styles.arrowBack} src="/img/arrow.svg" alt="Стрелка"/>
      </button>
    </div>
  )
}
