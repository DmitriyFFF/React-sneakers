import { Card } from '../Card/Card';
import styles from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={`${styles.content} p-40`}>
      <h1 className={styles.title}>Все кроссовки</h1>
      <Card />
    </div>
  )
}
