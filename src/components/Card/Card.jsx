import styles from './Card.module.scss';

export const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src="./img/sneakers/sn1.jpg" alt="Кроссовки" />
      <h4 className={styles.cardName}>Мужские Кроссовки Nike Blazer Mid Suede</h4>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span className={`${styles.spanPrice} text-uppercase`}>Цена</span>
          <b>12 999 руб.</b>
        </div>
        <button className={styles.addButton}>
          <img className={styles.btnImage} src="./img/plus.svg" alt="Плюс" />
        </button>
      </div>
    </div>
  );
}
