import styles from './Card.module.scss';

export const Card = ({data}) => {
  const { name, imageUrl, price } = data;
  return (
    <li className={styles.card}>
      <div className={styles.favorite}>
        <img src="./img/heart_unliked.svg" alt="Unliked" />
      </div>
      <img className={styles.cardImage} src={imageUrl} alt="Кроссовки" />
      <h4 className={styles.cardName}>{name}</h4>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span className={`${styles.spanPrice} text-uppercase`}>Цена</span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.addButton}>
          <img className={styles.btnImage} src="./img/plus.svg" alt="Плюс" />
        </button>
      </div>
    </li>
  );
}
