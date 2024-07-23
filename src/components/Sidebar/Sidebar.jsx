import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={`${styles.content} d-flex flex-column`}>
          <h3>Корзина</h3>
          <ul>
            <li className='d-flex justify-between'>
              <p className='opacity-5'>Итого:</p>
              <p>21 498 руб.</p>
            </li>
            <li className='d-flex justify-between'>
              <p className='opacity-5'>Налог 5%:</p>
              <p>1074 руб.</p>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>

    </div>
  );
}
