import { cardsData } from '../../utils/constants';
import { Card } from '../Card/Card';
import styles from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={`${styles.content} d-flex flex-column p-40`}>
      <div className='d-flex justify-between align-center mb-30'>
        <h1 className={styles.title}>Все кроссовки</h1>
        <div className={`${styles.search} d-flex align-items`}>
          <img src="./img/search.svg" alt="Поиск" />
          <input className={styles.input} placeholder='Поиск...' type="text" />
        </div>
      </div>
      <ul className={`${styles.cards} d-flex`}>
        {cardsData.map((card) =>
          <Card data={card} key={card.imageUrl} />
        )}
      </ul>
    </div>
  )
}
